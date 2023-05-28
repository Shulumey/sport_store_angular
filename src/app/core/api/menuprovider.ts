import {Observable} from "rxjs";
import {Menuitem} from "./menuitem";

export interface MenuProvider {
  menuSource$: Observable<Menuitem>
}
