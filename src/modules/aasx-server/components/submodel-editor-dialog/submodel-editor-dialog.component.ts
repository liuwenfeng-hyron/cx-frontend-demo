import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { Submodel } from '../../models/submodel';
import { SubmodelKind } from '../../models/submodel-kind';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Observable, of } from 'rxjs';
import { SubmodelService } from "../../services/submodel.service";
import { SubmodelTemplate } from '../../models/submodel-template';

@Component({
  selector: 'aasx-server-submodel-editor-dialog',
  templateUrl: './submodel-editor-dialog.component.html',
  styleUrls: ['./submodel-editor-dialog.component.scss']
})
export class SubmodelEditorDialog implements OnInit {
  submodel$: Observable<Submodel> = of();
  submodel: Submodel = JSON.parse(SubmodelTemplate["submodel_pcf"]);

  id: string = '';
  isEditMode = false;
  jsonFields: { [key: string]: string } = {};
  jsonFieldKeys = ['semanticId'];

  constructor(private apiService: SubmodelService, private dialogRef: MatDialogRef<SubmodelEditorDialog>,
     @Inject(MAT_DIALOG_DATA) id:string, @Inject('SUBMODEL_KIND') public submodelKinds: SubmodelKind[]) {   
    this.id = id;
    if(this.id) {
      this.isEditMode = true;
      this.submodel$ = this.apiService.getSubmodelById(id);
    }
  }

  ngOnInit(): void {
    if(this.id) {
      this.submodel$.subscribe(desc => {
        this.submodel = desc;
        this.onInitJsonField();
      });
    } else {
      this.onInitJsonField();
    }
  }

  onInitJsonField() {
    this.jsonFieldKeys.forEach(key => {
        this.jsonFields[key] = JSON.stringify((this.submodel as any)[key], null, 2);
    });
  }

  onSave() {
    const newSubmodel: Submodel = this.submodel;
    this.dialogRef.close({ newSubmodel });
  }

  onJsonFieldChange(fieldName: string, newValue: string) {
    try {
      const parsedObj = JSON.parse(newValue);
      (this.submodel as any)[fieldName] = parsedObj;
    } catch (e) {
      console.error(`Invalid JSON format for field "${fieldName}":`, e);
    }
  }
}
