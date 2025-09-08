import { Component, ViewChild, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Observable, of } from 'rxjs';
import {first} from 'rxjs/operators';
import {ShellService} from "../../services/shell.service";
import {Shell, ModelReference} from '../../models/shell';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SubmodelEditorDialog} from "../submodel-editor-dialog/submodel-editor-dialog.component";
import {Submodel} from '../../models/submodel';
import {SubmodelService} from "../../services/submodel.service";
import {NotificationService} from "../../../edc-demo/services/notification.service";
import {AssetKind} from '../../models/asset-kind';
import {DerivedFromType} from '../../models/derived-from-type';
import {ShellThumbnailViewerComponent} from "../shell-thumbnail-viewer/shell-thumbnail-viewer.component";

@Component({
  selector: 'aasx-server-shell-editor-dialog',
  templateUrl: './shell-editor-dialog.component.html',
  styleUrls: ['./shell-editor-dialog.component.scss']
})
export class ShellEditorDialog implements OnInit {
  @ViewChild(ShellThumbnailViewerComponent) shellThumbnailViewerComponent!: ShellThumbnailViewerComponent;
  shell$: Observable<Shell> = of();
  id: string = '';
  isUpdateMode = false;
  jsonFields: { [key: string]: string } = {};
  // jsonFieldKeys = ['displayName', 'description', 'extensions', 'embeddedDataSpecifications', 'derivedFrom.keys', 'administration.embeddedDataSpecifications'];
  jsonFieldKeys = ['displayName', 'description', 'extensions', 'embeddedDataSpecifications', 'derivedFrom.keys'];
  shell: Shell = {
    id: "xxx",
    idShort : "",
    displayName: JSON.parse("[]"),
    description: JSON.parse("[]"),
    //administration: {version: "",  revision: "",  creator: {type:"ExternalReference", keys:[]},  templateId: "",  embeddedDataSpecifications: JSON.parse("[]")},
    administration: {version: "",  revision: ""},
    assetInformation: {assetKind: "Instance",  globalAssetId: "",  assetType: "", specificAssetIds: JSON.parse("[]"),  defaultThumbnail: {path: "", contentType: ""}},
    extensions: JSON.parse("[]"),
    category: "",
    embeddedDataSpecifications: JSON.parse("[]"),
    derivedFrom: {type:"", keys: JSON.parse("[]")},
    submodels: JSON.parse("[]"),
    modelType: "AssetAdministrationShell",
  };
  newReferSubmodelId: string ='';
  selectedFile: File | null = null;
  uploadStatus: string = '';

  constructor(private apiService: ShellService,
    private submodelService: SubmodelService,
    private notificationService: NotificationService,
    private readonly dialog: MatDialog,
    private dialogRef: MatDialogRef<ShellEditorDialog>,
    @Inject(MAT_DIALOG_DATA) id:string,
    @Inject('ASSET_KIND') public assetKinds: AssetKind[],
    @Inject('DERIVED_FROM_TYPES') public derivedFromTypes: DerivedFromType[]) {
    this.id = id;
    if(id) {
      this.isUpdateMode = true;
      this.shell$ = this.apiService.getShellById(id);
    }
  }

  private showError(error: any, errorMessage: string) {
    this.notificationService.showError(errorMessage);
    console.error(error);
  }

  ngOnInit(): void {
    if(this.id) {
      this.shell$.subscribe(desc => {
        this.shell.idShort = desc.idShort ?? this.shell.idShort;
        this.shell.id = desc.id ?? this.shell.id;
        this.shell.displayName = desc.displayName ?? this.shell.displayName;
        this.shell.description = desc.description ?? this.shell.description;
        if(desc.administration) {
          this.shell.administration.version = desc.administration.version ?? this.shell.administration.version;
          this.shell.administration.revision = desc.administration.revision ?? this.shell.administration.revision;
          this.shell.administration.creator = desc.administration.creator ?? this.shell.administration.creator;
          this.shell.administration.templateId = desc.administration.templateId ?? this.shell.administration.templateId;
          this.shell.administration.embeddedDataSpecifications = desc.administration.embeddedDataSpecifications ?? this.shell.administration.embeddedDataSpecifications;
        }
        if(desc.assetInformation) {
          this.shell.assetInformation.assetKind = desc.assetInformation.assetKind ?? this.shell.assetInformation.assetKind;
          this.shell.assetInformation.globalAssetId = desc.assetInformation.globalAssetId ?? this.shell.assetInformation.globalAssetId;
          this.shell.assetInformation.assetType = desc.assetInformation.assetType ?? this.shell.assetInformation.assetType;
          this.shell.assetInformation.specificAssetIds = desc.assetInformation.specificAssetIds ?? this.shell.assetInformation.specificAssetIds;
          if(desc.assetInformation.defaultThumbnail) {
            this.shell.assetInformation.defaultThumbnail.path = desc.assetInformation.defaultThumbnail.path ?? this.shell.assetInformation.defaultThumbnail.path;
            this.shell.assetInformation.defaultThumbnail.contentType = desc.assetInformation.defaultThumbnail.contentType ?? this.shell.assetInformation.defaultThumbnail.contentType;
          }
        }
        this.shell.extensions = desc.extensions ?? this.shell.extensions;
        this.shell.category = desc.category ?? this.shell.category;
        this.shell.embeddedDataSpecifications = desc.embeddedDataSpecifications ?? this.shell.embeddedDataSpecifications;
        if(desc.derivedFrom) {
          this.shell.derivedFrom.type = desc.derivedFrom.type ?? this.shell.derivedFrom.type;
          this.shell.derivedFrom.keys = desc.derivedFrom.keys ?? this.shell.derivedFrom.keys;
        }
        this.shell.submodels = desc.submodels ?? this.shell.submodels;
        this.shell.modelType = desc.modelType ?? this.shell.modelType;

        this.onInitJsonField();
      });
    } else {
      this.onInitJsonField();
    }
  }

  onInitJsonField() {
    this.jsonFieldKeys.forEach(key => {
        if(key.includes(".")) {
        const keys = key.split('.');
        if(keys.length == 2) {
          this.jsonFields[key] = JSON.stringify((this.shell as any)[keys[0]][keys[1]], null, 2);
        }
      } else {
        this.jsonFields[key] = JSON.stringify((this.shell as any)[key], null, 2);
      }        
    });
  }

  onShowSubmodelEditorDialog(id: string) {
    const submodelDialogRef = this.dialog.open(SubmodelEditorDialog, {data: id});
        submodelDialogRef.afterClosed().pipe(first()).subscribe((result: { newSubmodel?: Submodel }) => {
            const newSubmodel = result?.newSubmodel;
            if (newSubmodel) {
              this.submodelService.updateSubmodel(id, newSubmodel).subscribe({
                error: err => this.showError(err, "This Submodel cannot be updated"),
                complete: () => this.notificationService.showInfo("Successfully updated"),
              })
            }
        })
  }

  onSave() {
    const newShell: Shell = this.shell;
    this.dialogRef.close({ newShell});
  }

  onCancel() {
    let changeThumbnail: boolean = false;
    if(this.uploadStatus.includes("Successful")) {
      changeThumbnail = true;
    }
    this.dialogRef.close({ changeThumbnail});
  }  

  onReferenceToExistingSubmodel() {

  }

  onCreateNewSubmodel() {

  }

  onAddNewReferSubmodel() {
    if(this.newReferSubmodelId) {
      this.shell.submodels.push({
            "type": "ModelReference",
            "keys": [
                {
                    "type": "Submodel",
                    "value": this.newReferSubmodelId
                }
            ]
        });
      this.newReferSubmodelId = '';
    }
  }

  onRemoveReferSubmodel(valueToDelete: string) {
    if (!this.shell.submodels) return;
    this.shell.submodels = this.shell.submodels.filter(
            (item : ModelReference) => item.keys[0].value !== valueToDelete
        );
  }

  onJsonFieldChange(fieldPath: string, newValue: string) {
    try {
      const parsedObj = JSON.parse(newValue);
      if(fieldPath.includes(".")) {
        const keys = fieldPath.split('.');
        if(keys.length == 2) {
          (this.shell as any)[keys[0]][keys[1]] = parsedObj;
        }
      } else {        
        (this.shell as any)[fieldPath] = parsedObj;
      }      
    } catch (e) {
      console.error(`Invalid JSON format for field "${fieldPath}":`, e);
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] || null;
    this.uploadStatus = '';
  }

  uploadFile() {
    if (!this.selectedFile) {
      this.uploadStatus = 'Please select a picture';
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    this.apiService.uploadThumbnail(this.shell.id, formData)
      .subscribe({
        next: (response) => {
          console.log('Upload successful', response);
          this.uploadStatus = 'Picture Upload Successful';
          this.shellThumbnailViewerComponent.refreshData();
          if(this.selectedFile?.name) {
            this.shell.assetInformation.defaultThumbnail.path = "/" + this.selectedFile.name;
          }
        },
        error: (err) => {
          console.error('Upload Failed', err);
          this.uploadStatus = 'Picture Upload Failed';
        }
      });
  }
}