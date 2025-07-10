import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { SubmodelDescriptor } from '../../models/submodel-descriptor';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import {SubmodelDescriptorTemplate} from '../../models/submodel-descrip-template';

@Component({
  selector: 'dtr-submodel-descriptor-editor-dialog',
  templateUrl: './submodel-descriptor-editor-dialog.component.html',
  styleUrls: ['./submodel-descriptor-editor-dialog.component.scss']
})
export class SubmodelDescriptorEditorDialog implements OnInit {

  submodelDescriptor: string = JSON.stringify(JSON.parse(SubmodelDescriptorTemplate["pcf5"]), null, 4);

  id: string = '';

  constructor(private dialogRef: MatDialogRef<SubmodelDescriptorEditorDialog>, @Inject(MAT_DIALOG_DATA) id:string) {   
    this.id = id;
  }

  ngOnInit(): void {
  }

  onSave() {
    const submodelDescriptor: SubmodelDescriptor = JSON.parse(this.submodelDescriptor);
    this.dialogRef.close({ submodelDescriptor });
  }
}
