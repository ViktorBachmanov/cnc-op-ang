import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ViewServiceXY, ViewServiceXZ } from '../view.service';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css'],
})
export class DrawingComponent implements OnInit {
  width = 75;
  contentXY: any;
  contentXZ: any;

  constructor(
    private sanitizer: DomSanitizer,
    private viewServiceXY: ViewServiceXY,
    private viewServiceXZ: ViewServiceXZ
  ) {
    this.contentXY = this.sanitizer.bypassSecurityTrustHtml(
      this.viewServiceXY.getContent()
    );
    this.contentXZ = this.sanitizer.bypassSecurityTrustHtml(
      this.viewServiceXZ.getContent()
    );
  }

  ngOnInit(): void {}
}
