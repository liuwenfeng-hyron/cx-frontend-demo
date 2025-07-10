import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-dashboard',
  template: `<h1>dashboard</h1>`,
})
export class DashboardComponent implements OnInit {

  constructor() {
  }


  ngOnInit(): void {
    console.info("dashboardComponent init")
    
  }
}
