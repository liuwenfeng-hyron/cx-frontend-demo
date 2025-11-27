import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'submodel-element-table',
  templateUrl: './submodelElement-viewer.component.html',
  styleUrls: ['./submodelElement-viewer.component.scss']
})
export class SubmodelElementViewerComponent implements OnInit {
  columns: string[] = ['idShort', 'value'];
  @Input() dataSource: any;
  @Input() isReadOnly: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }
  
  onNumberInputChange(newValue: string, item: any) {   
    if (newValue) {
      item.value = newValue.toString();
    } else {
      item.value = "";
    }
  }

  onInputBlur(item: any) {
    if (!item.value) {
      return;
    }
    const val = item.value.trim();
    if (!val.includes('.') && /^\d+$/.test(val)) {
      item.value = val + '.0';
    }
  }
}
