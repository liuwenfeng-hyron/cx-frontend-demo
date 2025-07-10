import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Observable, of } from 'rxjs';
import { ShellDescriptorService } from "../../services/shell-descriptor.service";

@Component({
  selector: 'edc-demo-shell-descriptor-detail',
  templateUrl: './shell-descriptor-detail.component.html',
  styleUrls: ['./shell-descriptor-detail.component.scss']
})
export class ShellDescriptorDetail implements OnInit {
  shellDesc$: Observable<JSON> = of();

  constructor(private apiService: ShellDescriptorService, @Inject(MAT_DIALOG_DATA) id:string) {
    this.shellDesc$ = this.apiService.getShellDescriptorById(id);
  }

  ngOnInit(): void {

  }
}