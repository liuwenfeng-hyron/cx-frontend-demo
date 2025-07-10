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
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {ShellDescriptorsViewerComponent} from './components/shell-descriptors-viewer/shell-descriptors-viewer.component';
import {ShellDescriptorDetail} from './components/shell-descriptor-detail/shell-descriptor-detail.component';
import {ShellDescriptorEditorDialog} from "./components/shell-descriptor-editor-dialog/shell-descriptor-editor-dialog.component";
import {SubmodelDescriptorEditorDialog} from "./components/submodel-descriptor-editor-dialog/submodel-descriptor-editor-dialog.component";


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
    NgxJsonViewerModule
  ],
  declarations: [
    ShellDescriptorsViewerComponent,
    ShellDescriptorDetail,
    ShellDescriptorEditorDialog,
    SubmodelDescriptorEditorDialog
  ],
  exports: [
    ShellDescriptorsViewerComponent,
    ShellDescriptorDetail,
    ShellDescriptorEditorDialog,
    SubmodelDescriptorEditorDialog
  ]
})
export class DtrModule {
}
