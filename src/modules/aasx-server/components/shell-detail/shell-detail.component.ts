import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Observable, of } from 'rxjs';
import {ShellService} from "../../services/shell.service";
import {Shell} from '../../models/shell';
import {MatDialog} from '@angular/material/dialog';
import {SubmodelDetail} from "../submodel-detail/submodel-detail.component";

@Component({
  selector: 'aasx-server-shell-detail',
  templateUrl: './shell-detail.component.html',
  styleUrls: ['./shell-detail.component.scss']
})
export class ShellDetail implements OnInit {
  shell$: Observable<Shell> = of();

  constructor(private apiService: ShellService, private readonly dialog: MatDialog, @Inject(MAT_DIALOG_DATA) id:string) {
    this.shell$ = this.apiService.getShellById(id);
  }

  ngOnInit(): void {

  }

  onShowSubmodelDetail(id: string) {
    this.dialog.open(SubmodelDetail, {data: id});
  }
}