import {Component, OnInit} from '@angular/core';
import {PartnerGroupService} from "../../../mgmt-api-client";
import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Component({
  selector: 'edc-demo-partner-groups-list',
  templateUrl: './partner-groups-list.component.html',
  styleUrls: ['./partner-groups-list.component.scss']
})
export class PartnerGroupsListComponent implements OnInit {

  groups$: Observable<string[]> = of([]);
  error: string | null = null;

  constructor(private partnerGroupService: PartnerGroupService) {
  }

  ngOnInit(): void {
    this.groups$ = this.partnerGroupService.getAllGroups().pipe(
      map(response => response['https://w3id.org/tractusx/v0.0.1/ns/groups'] || []),
      catchError(err => {
        console.error('Failed to fetch groups', err);
        this.error = "Failed to load partner groups.";
        return of([]);
      })
    );
  }
}
