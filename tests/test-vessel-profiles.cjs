/** Validate the public, non-personal vessel profile catalog. Node.js 20+. */
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const base=path.resolve(__dirname,'..');
const folder=path.join(base,'data','vessels');
const read=(p)=>JSON.parse(fs.readFileSync(p,'utf8'));
const catalog=read(path.join(folder,'catalog.json'));
assert.equal(catalog.schema_version,'1.0');
assert(Array.isArray(catalog.vessels) && catalog.vessels.length>=1);
const ids=new Set(),paths=new Set();
const eqKeys=['emergency_steering','rescue_or_service_boat','lifeboat'];
for(const record of catalog.vessels){
  assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(record.id), 'Invalid id: '+record.id);
  assert(!ids.has(record.id), 'Duplicate vessel: '+record.id);
  ids.add(record.id);
  const relative='data/vessels/'+record.id+'.json';
  assert.equal(record.path,relative,'Catalog path mismatch');
  assert(!paths.has(relative),'Duplicate file reference'); paths.add(relative);
  assert(typeof record.in_app==='boolean');
  const full=path.resolve(base,relative);
  assert(full.startsWith(folder+path.sep),'Path escapes vessel folder');
  assert(fs.existsSync(full),'Profile missing: '+relative);
  const p=read(full);
  assert.equal(p.schema_version,'1.0');
  assert.equal(p.id,record.id);
  assert.equal(p.display_name,record.display_name);
  assert.equal(p.verification_status,record.verification_status);
  assert(p.display_name && typeof p.display_name==='string');
  assert(p.public_attributes && typeof p.public_attributes==='object');
  assert(p.drill_relevant_equipment && typeof p.drill_relevant_equipment==='object');
  assert(Array.isArray(p.sources));
  assert.equal(p.plan_policy_version,'1.2');
  for(const key of eqKeys){
    const obj=p.drill_relevant_equipment[key];
    assert(obj && typeof obj==='object','Missing equipment: '+key);
    assert(obj.available===null || typeof obj.available==='boolean','Invalid availability: '+key);
    assert(typeof obj.verification==='string' && obj.verification.length>0);
    if(obj.available!==null){
      assert(Array.isArray(obj.source_refs) && obj.source_refs.length>0,
        'Known availability requires source_refs: '+record.id+'/'+key);
      for(const id of obj.source_refs){
        assert(p.sources.some(s=>s.id===id),'Source reference missing: '+id);
      }
    }
  }
}
for(const name of fs.readdirSync(folder)){
  if(!name.endsWith('.json') || name==='catalog.json'||name.startsWith('_'))continue;
  assert(paths.has('data/vessels/'+name),'Uncatalogued profile: '+name);
}
const nene=read(path.join(folder,'nene-hatun.json'));
assert.equal(nene.drill_relevant_equipment.emergency_steering.available,null);
assert.equal(nene.drill_relevant_equipment.rescue_or_service_boat.available,null);
assert.equal(nene.drill_relevant_equipment.lifeboat.available,null);
console.log('PASS: '+catalog.vessels.length+' vessel profile(s), catalog, traceability and unknown equipment.');
