import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { Submodel } from '../../models/submodel';
import { SubmodelKind } from '../../models/submodel-kind';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Observable, of } from 'rxjs';
import { SubmodelService } from "../../services/submodel.service";
import { SubmodelTemplate } from '../../models/submodel-template';

export type SubmodelKey = keyof typeof SubmodelTemplate; 

@Component({
  selector: 'aasx-server-submodel-editor-dialog',
  templateUrl: './submodel-editor-dialog.component.html',
  styleUrls: ['./submodel-editor-dialog.component.scss']
})
export class SubmodelEditorDialog implements OnInit {
  submodelOptions: { label: string; value: SubmodelKey }[] = [
    { label: 'submodel_ItemStock', value: 'submodel_ItemStock' },
    { label: 'submodel_pcf', value: 'submodel_pcf' },
  ];

  /*submodelOptions: { label: string; value: SubmodelKey }[] = [
    { label: 'submodel_ItemStock', value: 'submodel_ItemStock' },
    { label: 'submodel_Delivery', value: 'submodel_Delivery' },
    { label: 'submodel_DaysOfSupply', value: 'submodel_DaysOfSupply' },
    { label: 'submodel_PlannedProductionOutput', value: 'submodel_PlannedProductionOutput' },
    { label: 'submodel_PartType', value: 'submodel_PartType' },
    { label: 'submodel_pcf', value: 'submodel_pcf' },
  ];*/

  submodel$: Observable<Submodel> = of();
  submodel: Submodel = JSON.parse(SubmodelTemplate["submodel_blank"]);
  selectedKey: SubmodelKey | undefined = undefined;

  id: string = '';
  isEditMode = false;
  submodelTypeId: string = '';
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

  onChangeSubmodelType() {
    if (!this.selectedKey) {
      console.warn('No submodel selected yet');
      return;
    }
    const value = SubmodelTemplate[this.selectedKey];
    // console.log(value);
    try {
      this.submodel = JSON.parse(value);
      this.onInitJsonField();
    } catch (err) {
      console.error('Failed to parse SubmodelTemplate value as JSON:', err);
    }
  }
}
