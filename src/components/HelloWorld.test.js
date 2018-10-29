// Snapshot test
import React from 'react';
import renderer from 'react-test-renderer';
import HelloWorld from '@/components/HelloWorld';

test("HelloWorld", () => {
  const result = renderer.create(<HelloWorld />).toJSON();
  expect(result).toMatchInlineSnapshot(`
<div>
  Hello World!
</div>
`);
});
