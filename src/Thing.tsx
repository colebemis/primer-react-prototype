import React from 'react';

type FooProps = {
  /** baz description */
  baz: string;
};

/**
 * Foo description
 */
export function Foo(props: FooProps) {
  return <div>the snozzberries taste like snozzberries</div>;
}

Foo.Bar = () => {
  return <div>the snozzberries taste like snozzberries</div>;
};
