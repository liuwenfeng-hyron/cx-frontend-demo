import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ClipboardModule} from '@angular/cdk/clipboard';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {SubmodelsViewerComponent} from './components/submodels-viewer/submodels-viewer.component';
import {SubmodelDetail} from './components/submodel-detail/submodel-detail.component';
import {SubmodelEditorDialog} from './components/submodel-editor-dialog/submodel-editor-dialog.component';
import {SubmodelElementViewerComponent} from './components/submodelElement-viewer/submodelElement-viewer.component';
import {ShellsViewerComponent} from './components/shells-viewer/shells-viewer.component';
import {ShellThumbnailViewerComponent} from './components/shell-thumbnail-viewer/shell-thumbnail-viewer.component';
import {ShellDetail} from './components/shell-detail/shell-detail.component';
import {ShellEditorDialog} from './components/shell-editor-dialog/shell-editor-dialog.component';
import {AasxPackagesViewerComponent} from './components/aasx-packages-viewer/aasx-packages-viewer.component';
import {AasxPackageUploadDialog} from './components/aasx-package-upload-dialog/aasx-package-upload-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatProgressBarModule,
    MatListModule,
    RouterModule,
    MatProgressSpinnerModule,
    ClipboardModule,
    NgxJsonViewerModule
  ],
  declarations: [
    SubmodelsViewerComponent,
    SubmodelDetail,
    SubmodelEditorDialog,
    SubmodelElementViewerComponent,
    ShellsViewerComponent,
    ShellThumbnailViewerComponent,
    ShellDetail,
    ShellEditorDialog,
    AasxPackagesViewerComponent,
    AasxPackageUploadDialog
  ],
  exports: [
    SubmodelsViewerComponent,
    SubmodelDetail,
    SubmodelEditorDialog,
    SubmodelElementViewerComponent,
    ShellsViewerComponent,
    ShellThumbnailViewerComponent,
    ShellDetail,
    ShellEditorDialog,
    AasxPackagesViewerComponent,
    AasxPackageUploadDialog
  ]
})
export class AasxServerModule {
}
