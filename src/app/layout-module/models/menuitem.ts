export interface Menuitem {
  title: string;
  icon?: string;
  isVisible?: boolean;
  isDisabled? : boolean;
  children?: Menuitem[];
}
