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

type FooBarProps = {
  hi: string;
};

Foo.Bar = (props: FooBarProps) => {
  return <div>the snozzberries taste like snozzberries</div>;
};
