import { Component, OnInit } from '@angular/core';
import {DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public ref: DynamicDialogRef) {

  }

  ngOnInit(): void {
  }

  onSave(){

  }

  onClose(){
    this.ref.close();
  }

}
