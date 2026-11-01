/** Dependency-free canonical calendar regression tests. Requires Node.js 20+. */
'use strict';
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const found = html.match(/<script>([\s\S]*?)<\/script>/);
assert(found, 'Standalone application script missing.');
const registry = new Map();
function element(id) {
  if (!registry.has(id)) registry.set(id, {
    textContent: '', innerHTML: '', value: '', checked: false, options:[{textContent:''},{textContent:''}],
    classList: { toggle() {}, add() {}, remove() {} },
    setAttribute() {}, addEventListener() {}
  });
  return registry.get(id);
}
const document = {
  documentElement: { lang: 'tr' }, title: '',
  getElementById: element, addEventListener() {}
};
const window = {};
vm.runInNewContext(found[1], {
  window, document, Date, Intl, TextDecoder, Uint8Array,
  atob, console
}, { filename: 'index.html', timeout: 20000 });
const test = window.KEGM_TEST;
assert(test && test.plan && test.fifth && test.tests);
assert.equal(document.documentElement.lang, 'tr');
assert.equal(element('creditMark').textContent, 'Bilal Emiroğlu - TA1BU');
assert(!html.includes('id="auditKicker"'));
assert(!html.includes('id="auditButton"'));
assert.equal(test.state.gear.steering, true);
assert.equal(test.state.gear.rescue, true);
assert.equal(test.state.gear.lifeboat, false);
let years = 0;
for (let year = 1900; year <= 2100; year++) {
  const p = test.plan(year, {steering:true,rescue:true,lifeboat:false});
  assert(p.gaps.fire <= 14, 'Fire drill gap: '+year);
  assert(p.gaps.ship <= 14, 'Abandon ship gap: '+year);
  assert.equal(p.counts.fire, p.counts.ship, 'Core drill count: '+year);
  assert(Math.max(...p.fifth.counts) - Math.min(...p.fifth.counts) <= 1, 'Scenario balance: '+year);
  for (let m = 1; m <= 12; m++) {
    const s = p.months[m].sundays;
    assert(p.events[s[0]].some(e => e.key === 'FIRE' && e.scenario === (m%2 ? 1 : 3)));
    assert(p.events[s[1]].some(e => e.key === 'ABANDON'));
    assert(p.events[s[2]].some(e => e.key === 'FIRE' && e.scenario === (m%2 ? 2 : 4)));
    assert(p.events[s[3]].some(e => e.key === 'ABANDON'));
    if (s[4]) {
      assert(p.events[s[4]].some(e => e.key === 'FIRE'));
      assert(p.events[s[4]].some(e => e.key === 'ABANDON'));
    }
  }
  years++;
}
const p26 = test.plan(2026, {steering:true,rescue:true,lifeboat:false});
assert.equal(p26.counts.fire, 28);
assert.equal(p26.counts.ship, 28);
assert.deepEqual(Array.from(p26.fifth.months), [3,5,8,11]);
assert.deepEqual(Array.from(p26.fifth.codes), [4,1,3,2]);
const none = test.plan(2026, {steering:false,rescue:false,lifeboat:false});
assert(!none.all.some(e => ['STEERING','LIFEBOAT','RESCUE_BOAT'].includes(e.key)));
const both = test.plan(2026, {steering:true,rescue:true,lifeboat:true});
assert(both.all.some(e => e.key === 'LIFEBOAT'));
assert(both.all.some(e => e.key === 'RESCUE_BOAT'));
assert.equal(test.sundayOfWeek('2026-12-31'), '2027-01-03');
assert.equal(test.state.vessel, 'nene-hatun');
assert.equal(test.activeGear().lifeboat, true);
assert.equal(test.isConditional({key:'LIFEBOAT'}), true);
assert.equal(test.isConditional({key:'FIRE'}), false);
assert.equal(test.anniversary('2028-02-29'), '2029-03-01');
const r12 = test.rolling('2026-11-01', false);
assert.equal(r12.end, '2027-10-31');
assert(r12.items.every(e => e.date >= '2026-11-01' && e.date < '2027-11-01' && e.kind !== 'check'));
assert(test.rolling('2026-11-01', true).items.length > r12.items.length);
assert(html.includes('id="printReport"'));

assert.equal(test.tests().filter(t => !t.skip && !t.pass).length, 0);
assert.equal(years, 201);
console.log('PASS: '+years+' years; scenario balance, drill frequency, equipment, year boundary and HTML checks.');
