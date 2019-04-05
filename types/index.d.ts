import * as React from 'react';

export type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

export type PropsOf<
  Tag extends React.ReactType
> = Tag extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Tag]
  : Tag extends React.SFC<infer Props>
  ? Props & React.Attributes
  : Tag extends React.ComponentClass<infer Props2>
  ? (Tag extends new (...args: any[]) => infer Instance
      ? Props2 & React.ClassAttributes<Instance>
      : never)
  : never;

export type ReplaceProps<Inner extends React.ReactType, P> = Omit<
  PropsOf<Inner>,
  P
> &
  P;

export interface BsPrefixProps<As extends React.ReactType> {
  as?: As;
  bsPrefix?: string;
}

export class BsPrefixComponent<
  As extends React.ReactType,
  P = {}
> extends React.Component<ReplaceProps<As, BsPrefixProps<As> & P>> {}

type Direction = 'row' | 'column';

type Align =
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline'
  | 'first-baseline'
  | 'last-baseline';

type Content =
  | 'left'
  | 'right'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'first-baseline'
  | 'last-baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface LayoutProps {
  /** default to 'row' */
  direction?: Direction;
  pad?: boolean | number;
  wrap?: boolean;
  grow?: boolean;
  inline?: boolean;
  flex?: boolean | number;
  /** default to 'stretch' */
  align?: Align;
  alignSelf?: Align;
  alignContent?: Content;
  /** default to 'flex-start' */
  justify?: Content;
}

declare class Layout<
  As extends React.ReactType = 'div'
> extends BsPrefixComponent<As, LayoutProps> {}

export default Layout;
