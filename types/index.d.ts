import * as React from 'react';

export type IntrinsicElementsKeys = keyof JSX.IntrinsicElements;

export type ElementType =
  | IntrinsicElementsKeys
  | React.JSXElementConstructor<any>;

export type PropsWithAs<
  Inner extends string | React.ComponentType<any>,
  P,
> = Omit<
  React.ComponentProps<Inner extends ElementType ? Inner : never>,
  keyof P | 'as'
> &
  P & { as?: Inner };

export type Align =
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline'
  | 'first-baseline'
  | 'last-baseline';

export type Content =
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

export interface BlockProps {
  grow?: boolean;
  inline?: boolean;
  flex?: boolean | number | string;
  /** default to 'stretch' */
  alignSelf?: Align;
}

export interface FlexProps {
  grow?: boolean;
  inline?: boolean;
  flex?: boolean | number | string;
  /** default to 'stretch' */
  alignSelf?: Align;
  /** default to 'row' */
  direction?: 'row' | 'column';
  reverse?: boolean;
  pad?: boolean | number;
  wrap?: boolean;
  /** default to 'stretch' */
  align?: Align;
  alignContent?: Content;
  /** default to 'flex-start' */
  justify?: Content;
}

declare interface Flex {
  <As extends string | React.ComponentType<any> = 'div'>(
    props: PropsWithAs<As, FlexProps>,
  ): React.ReactElement;
}
declare interface Block {
  <As extends string | React.ComponentType<any> = 'div'>(
    props: PropsWithAs<As, BlockProps>,
  ): React.ReactElement;
}

export type LayoutProps = FlexProps;
interface Layout {
  <As extends string | React.ComponentType<any> = 'div'>(
    props: PropsWithAs<As, FlexProps>,
  ): React.ReactElement;
  Flex: Flex;
  Block: Block;
  Spacer: React.ComponentType;
}

declare const Layout: Layout;

export default Layout;
