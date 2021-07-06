// TypeScript Version: 4.0

import Layout from '@4c/layout';
import * as React from 'react';

<Layout />;
<Layout direction="column" reverse />;

<Layout align="start" grow />;
<Layout display="block" grow />;
<Layout display="block" align="start" />; // $ExpectError

<Layout.Flex align="start" grow />;

<Layout.Block grow />;
<Layout.Block align="start" />; // $ExpectError

<Layout.Spacer />;
<Layout.Spacer grow />; // $ExpectError

interface FooProps {
  foo: boolean;
}

function Foo({ foo: _ }: FooProps) {
  return null;
}

<Layout foo />; // $ExpectError
<Layout.Flex foo />; // $ExpectError
<Layout.Block foo />; // $ExpectError

<Layout as={Foo} />; // $ExpectError       `foo` is required
<Layout.Flex as={Foo} />; // $ExpectError  `foo` is required
<Layout.Block as={Foo} />; // $ExpectError `foo` is required

<Layout as={Foo} foo />;
<Layout.Flex as={Foo} foo />;
<Layout.Block as={Foo} foo />;

<Layout.Spacer as={Foo} foo />; // $ExpectError there is no `as`
