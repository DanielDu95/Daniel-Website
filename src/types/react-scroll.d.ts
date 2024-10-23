declare module "react-scroll" {
  import * as React from "react";

  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    hashSpy?: boolean;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onSetActive?: () => void;
    onSetInactive?: () => void;
    ignoreCancelEvents?: boolean;
    spyThrottle?: number;
    className?: string;
    activeClass?: string;
    containerId?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    role?: string;
    tabIndex?: number;
    children: React.ReactNode;
  }

  export class Link extends React.Component<LinkProps> {}

  export interface ElementProps {
    name?: string;
    id?: string;
    className?: string;
    children: React.ReactNode;
  }

  export class Element extends React.Component<ElementProps> {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function scroller(): any;
}
