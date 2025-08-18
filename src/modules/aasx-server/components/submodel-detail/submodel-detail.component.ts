import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Observable, of } from 'rxjs';
import {SubmodelService} from "../../services/submodel.service";
import {PayloadService} from "../../services/payload.service";
import {Submodel} from '../../models/submodel';

@Component({
  selector: 'aasx-server-submodel-detail',
  templateUrl: './submodel-detail.component.html',
  styleUrls: ['./submodel-detail.component.scss']
})
export class SubmodelDetail implements OnInit {
  submodel$: Observable<Submodel> = of();

  constructor(private apiService: SubmodelService, private payloadService: PayloadService, @Inject(MAT_DIALOG_DATA) id:string) {
    this.submodel$ = this.apiService.getSubmodelById(id);
  }

  ngOnInit(): void {

  }

  // getPayload(apiResponse:any): { [key: string]: any }[]  {
  //   return this.payloadService.extractPayload(apiResponse);
  // }
}