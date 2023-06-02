export interface Menuitem {
  title: string;
  routerLink?: string
  icon?: string;
  isVisible?: boolean;
  isDisabled? : boolean;
  children?: Menuitem[];
}
