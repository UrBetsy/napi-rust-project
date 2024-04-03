import test from 'ava'

import { sum, contactStr, getOptions } from '../index.js'

test('sum from native', (t) => {
  t.is(sum(1, 2), 3)
})

test('contact_str from native', (t) => {
    t.is(contactStr('a', 'b'), 'ab');
})

test("getOptions from native", (t) => {
    const options = {
      id: 1,
      name: "napi-rs",
    };
    console.log('11', getOptions(options));
    console.log('22', options);
});

