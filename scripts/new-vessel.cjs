#!/usr/bin/env node
/**
 * Create a source-traceable vessel profile draft without inventing equipment facts.
 * node scripts/new-vessel.cjs "GEMI ADI"
 */
'use strict';
const fs=require('node:fs');
const path=require('node:path');
const base=path.resolve(__dirname,'..');
const dir=path.join(base,'data','vessels');
const displayName=process.argv.slice(2).join(' ').trim();
if(!displayName || displayName.length>120){
  console.error('Kullanim / Usage: node scripts/new-vessel.cjs "GEMI ADI"');
  process.exit(2);
}
const normalized=displayName.toLocaleLowerCase('tr-TR')
  .replace(/ı/g,'i').replace(/ğ/g,'g').replace(/ü/g,'u')
  .replace(/ş/g,'s').replace(/ö/g,'o').replace(/ç/g,'c')
  .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
  .replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
if(!normalized || normalized.length>80) throw new Error('Gemi adi dosya kimligine donusturulemedi.');
const file=path.join(dir,normalized+'.json');
if(fs.existsSync(file)) throw new Error('Profil zaten var: '+file);
const template=JSON.parse(fs.readFileSync(path.join(dir,'_template.json'),'utf8'));
const catalogPath=path.join(dir,'catalog.json');
const catalog=JSON.parse(fs.readFileSync(catalogPath,'utf8'));
if(catalog.vessels.some(x=>x.id===normalized)) throw new Error('Katalogda ayni kimlik mevcut.');
template.id=normalized;
template.display_name=displayName;
template.runtime_note='Yeni ve henüz doğrulanmamış gemi profili. v1.4.1 HTML arayüzüne otomatik eklenmez; kaynak kontrolü ve entegrasyon gerekir.';
const entry={
  id:normalized,
  display_name:displayName,
  path:'data/vessels/'+normalized+'.json',
  in_app:false,
  verification_status:'not_verified'
};
fs.writeFileSync(file,JSON.stringify(template,null,2)+'\n',{flag:'wx'});
try{
  catalog.vessels.push(entry);
  catalog.vessels.sort((a,b)=>a.id.localeCompare(b.id,'tr'));
  fs.writeFileSync(catalogPath,JSON.stringify(catalog,null,2)+'\n');
}catch(error){
  fs.unlinkSync(file);
  throw error;
}
console.log('Taslak profil: '+path.relative(base,file));
console.log('Katalog guncellendi. Envanter bilinmiyor; tum ekipman degerleri null.');
console.log('Bu islem mevcut index.html uygulamasinin gemi listesini DEGIS-TIR-MEZ.');
