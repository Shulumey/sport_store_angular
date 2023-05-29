import {Component, OnInit} from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import {SettingsComponent} from "../settings/settings.component";
import {LayoutService} from "../../services/layout.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './app-topbar.component.html',
  styleUrls: ['./app-topbar.component.scss'],
  providers: [DialogService]
})
export class AppTopbarComponent implements OnInit {

  ref: DynamicDialogRef | null;

  constructor(public layoutService: LayoutService, public dialogService: DialogService) {
    this.ref = null
  }

  ngOnInit(): void {
  }

  showSettings(){
    this.ref = this.dialogService.open(SettingsComponent, {
      closable: true,
      modal: true,
      header: "Настройки",

    })
  }

}
