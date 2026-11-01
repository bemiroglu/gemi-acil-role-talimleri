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
for (const id of ['drillBackdrop','drillTrainingTab','drillRecordTab','drillTraining','drillRecord','drillPrint'])
  assert(html.includes('id="'+id+'"'),'Missing workspace element: '+id);
assert(html.includes('ÖRNEK SENARYODUR')&&html.includes('YALNIZCA ÖRNEK'));
assert(html.includes('function drillDraftText()')&&html.includes('function drillReady()'));
assert(html.includes('function drillSaveJson()')&&html.includes('function drillLoadJson(file)'));
console.log('PASS: training tabs, 8/12 checklists, hazards, record controls and privacy checks');
