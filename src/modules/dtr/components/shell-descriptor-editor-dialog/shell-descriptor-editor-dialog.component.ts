import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ShellDescriptor } from '../../models/shell-descriptor';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Observable, of } from 'rxjs';
import { ShellDescriptorService } from "../../services/shell-descriptor.service";
import { ShellDescriptorTemplate } from '../../models/shell-descrip-template';
import { ShellDescriptorTemplatePuris } from '../../models/shell-descrip-template-puris';
import { ShellDescriptorTemplateDPP } from '../../models/shell-descrip-template-dpp';
import { UsecaseKind } from '../../models/usecase-kind';

@Component({
  selector: 'dtr-shell-descriptor-editor-dialog',
  templateUrl: './shell-descriptor-editor-dialog.component.html',
  styleUrls: ['./shell-descriptor-editor-dialog.component.scss']
})
export class ShellDescriptorEditorDialog implements OnInit {
  usecaseKind: string = '';
  shellDesc$: Observable<JSON> = of();
  shellDescriptor: string = '';
  errorMsg: string = '';

  id: string = '';
  isEditMode = false;

  constructor(private apiService: ShellDescriptorService, private dialogRef: MatDialogRef<ShellDescriptorEditorDialog>
    , @Inject(MAT_DIALOG_DATA) data: { id: string; edcBpn: string }, @Inject('USE_CASE') public usecases: UsecaseKind[]) {   
    this.id = data.id;
    if(this.id) {
      this.isEditMode = true;
      this.shellDesc$ = this.apiService.getShellDescriptorById(data.id, data.edcBpn);
    }
  }

  ngOnInit(): void {
    if(this.id) {
      this.shellDesc$.subscribe(desc => {
        this.shellDescriptor = JSON.stringify(desc, null, 4);
      });
    } else {
      this.shellDescriptor = JSON.stringify(JSON.parse(ShellDescriptorTemplate["withSubmodel"]), null, 4);
    }
  }

  onSave() {
    this.errorMsg = "";
    try {
      const shellDescriptor: ShellDescriptor = JSON.parse(this.shellDescriptor);
      this.dialogRef.close({ shellDescriptor });
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.error('JSON error:', error.message);
        this.errorMsg = error.message;
      } else {
        console.error('error:', error);
      }
    }    
  }

  onChangeUsecase() {
      var value = '';
      if (this.usecaseKind in ShellDescriptorTemplate) {
        value = ShellDescriptorTemplate[this.usecaseKind as keyof typeof ShellDescriptorTemplate];
      } else if (this.usecaseKind in ShellDescriptorTemplatePuris) {
        value = ShellDescriptorTemplatePuris[this.usecaseKind as keyof typeof ShellDescriptorTemplatePuris];
      } else if (this.usecaseKind in ShellDescriptorTemplateDPP) {
        value = ShellDescriptorTemplateDPP[this.usecaseKind as keyof typeof ShellDescriptorTemplateDPP];
      } else {
        value = ShellDescriptorTemplate["withSubmodel"];
      }

      try {
        this.shellDescriptor = JSON.stringify(JSON.parse(value), null, 4);
      } catch (err) {
        console.error('Failed to parse Template value as JSON:', err);
      }
    }
}
