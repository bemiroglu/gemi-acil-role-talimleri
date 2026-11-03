/** Generic offline training/record UI regression. No external packages. */
'use strict';
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const js=html.match(/<script>([\s\S]*?)<\/script>/);
assert(js,'Inline script missing');
const elements=new Map();
const element=id=>{
 if(!elements.has(id)) elements.set(id,{
  textContent:'',innerHTML:'',value:'',checked:false,options:[{textContent:''},{textContent:''}],
  classList:{toggle(){},add(){},remove(){}},setAttribute(){},addEventListener(){}
 });
 return elements.get(id);
};
const doc={documentElement:{lang:'tr'},title:'',getElementById:element,addEventListener(){}};
const window={};
vm.runInNewContext(js[1],{window,document:doc,Date,Intl,TextDecoder,Uint8Array,atob,console},{filename:'index.html',timeout:20000});
const t=window.KEGM_DRILL_TEST;
assert(t&&t.checklist&&t.training);
assert.equal(t.checklist({key:'FIRE'}).length,8);
assert.equal(t.checklist({key:'ABANDON'}).length,12);
assert.equal(t.checklist({key:'RESCUE_BOAT'}).length,8);
assert.equal(t.checklist({key:'MOB'}).length,7);
assert(t.training({key:'FIRE'}).steps.length>=8);
assert.equal(t.training({key:'RESCUE_BOAT'}).risks.length,4);
assert.equal(t.training({key:'MOB'}).risks.length,5);
assert(!html.includes('MUSTAFA UMUT ÖZERBAY')&&!html.includes('ÇAĞLAR ASLAN'),'Historic crew names exposed');
for (const id of ['drillBackdrop','drillTrainingTab','drillRecordTab','drillTraining','drillRecord'])
  assert(html.includes('id="'+id+'"'),'Missing workspace element: '+id);
assert(html.includes('D_EXPANDED') && html.includes('D_TOPICS') && html.includes('dStageDetail'));
assert(html.includes('Dalma giysisi: özellikler, giyilme sırası'));
assert(html.includes('Şişirilebilir can salı: yapı ve parçalar'));
assert(html.includes('MSC.1/Circ.1578/Rev.1'));

assert(html.includes('IAMSAR Manual')&&html.includes('sourceSAR'));
assert(html.includes('dCopySample'));
assert(!html.includes('function drillDraftText()')&&!html.includes('function drillReady()'));
assert(!html.includes('function drillSaveJson()')&&!html.includes('function drillLoadJson(file)'));
assert(!html.includes('id="dConfirmed"')&&!html.includes('data-field=')&&!html.includes('data-check='));
assert(!html.includes('data-risk-status='));
assert(t.sample({key:'ABANDON'}).includes('alarmı verildi'));
assert(t.documents({key:'SAR'}).some(x=>x.includes('IAMSAR')));

const fireExpectations = [
  [1, 'boyalık', 'solvent'],
  [2, 'kabin', 'koridor'],
  [3, 'sıcak yüzeye', 'CO₂'],
  [4, 'fritözün', 'yağ']
];
for (const [scenario, intro, topic] of fireExpectations) {
  const e={key:'FIRE',scenario};
  const training=t.training(e);
  const variant=t.variant(e);
  assert.equal(training.steps.length,8,'Fire steps: '+scenario);
  assert(training.steps[0][1].toLocaleLowerCase('tr-TR').includes(intro),'Fire introduction: '+scenario);
  assert(variant&&variant.topics.length>=4&&variant.notes.length===8,'Distinct scenario guidance: '+scenario);
  assert(JSON.stringify(variant).toLocaleLowerCase('tr-TR').includes(topic.toLocaleLowerCase('tr-TR')),'Technical topic: '+scenario);
  for(const step of training.steps) {
    assert(!/(?:değerlendirildi|gösterildi|yapıldı|anlatıldı|geçirildi|incelendi)\./.test(step[1]),'Training guide has past tense: '+scenario);
  }
}
assert.notEqual(t.training({key:'FIRE',scenario:3}).aim,t.training({key:'FIRE',scenario:4}).aim);
for (const key of ['FIRE','ABANDON','RESCUE_BOAT','MOB','SAR','STEERING','CONFINED','POLLUTION','LIFEBOAT','GROUNDING','FLOOD','EMERGENCY_DEPARTURE']) {
  const d=t.training({key});
  assert(d.steps.length>=4,'Missing learning steps for '+key);
  for (const step of d.steps)assert(!/(?:değerlendirildi|gösterildi|yapıldı|anlatıldı|geçirildi|incelendi)\./.test(step[1]),'Past tense in first guide: '+key);
}
assert(t.variant({key:'POLLUTION',scenario:1}).focus !== t.variant({key:'POLLUTION',scenario:2}).focus);
assert(t.variant({key:'CONFINED',scenario:1}).focus !== t.variant({key:'CONFINED',scenario:3}).focus);
assert(html.includes('function dScope(e)')&&html.includes('D_SOURCE_SCOPES'));
assert(html.includes('D_FIRE_REPORT_DETAIL'));

console.log('PASS: 12 present-tense training families, four fire scenarios, special-location variants and read-only reporting');
