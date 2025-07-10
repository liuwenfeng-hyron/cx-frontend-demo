import {Component, Input, OnInit} from '@angular/core';
import {ShellService} from "../../services/shell.service";

@Component({
  selector: 'shell-thumbnail-viewer',
  templateUrl: './shell-thumbnail-viewer.component.html',
  styleUrls: ['./shell-thumbnail-viewer.component.scss']
})
export class ShellThumbnailViewerComponent implements OnInit {
  image_url: string ="";
  @Input() id: string = "";
  @Input() imageWidth: number = 60;
  @Input() imageHeight: number = 60;

  constructor(private apiService: ShellService) {
  }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    this.apiService.getThumbnail(this.id).subscribe((blob: Blob) => {
      this.image_url = URL.createObjectURL(blob);
    });
  }
}
