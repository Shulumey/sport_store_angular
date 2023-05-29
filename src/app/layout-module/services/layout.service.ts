import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {MenuMode} from "../constants/menumode";
import {Themes} from "../constants/themes";

export interface VisualViewConfig {
  scale: number;
  theme: string;
  menuMode: string;
}

interface LayoutState {
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  settingsViewVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  config: VisualViewConfig = {
    menuMode: MenuMode.static,
    theme: Themes.sagaOrange,
    scale: 14,
  };

  state: LayoutState = {
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    settingsViewVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false
  };

  private configUpdate = new Subject<VisualViewConfig>();

  private overlayOpen = new Subject<any>();

  constructor() {
  }

  onMenuToggle() {
    if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;

      if (this.state.overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }

    if (this.isDesktop()) {
      this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
    } else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;

      if (this.state.staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }

  isOverlay() {
    return this.config.menuMode === 'overlay';
  }

  isDesktop() {
    return window.innerWidth > 991;
  }

  isMobile() {
    return !this.isDesktop();
  }


  showSettingsView(isVisible:boolean = true){
    this.state.settingsViewVisible = isVisible;
  }
}
