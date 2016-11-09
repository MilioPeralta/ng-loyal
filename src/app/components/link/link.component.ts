import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-link]',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input()
  private pointStartLeftX: number;
  @Input()
  private pointStartLeftY: number;
  @Input()
  private pointStartRightX: number;
  @Input()
  private pointStartRightY: number;
  @Input()
  private pointEndX: number;
  @Input()
  private pointEndY: number;
  private d: String;

  constructor() {
  }

  ngOnInit() {
    console.log('this.pointStartLeftX', this.pointStartLeftX)
    console.log('this.pointStartLeftY', this.pointStartLeftY)
    console.log('this.pointStartRightX', this.pointStartRightX)
    console.log('this.pointStartRightY', this.pointStartRightY)
    console.log('this.pointEndX', this.pointEndX)
    console.log('this.pointEndY', this.pointEndY)

    this.d = "M " + this.pointStartLeftX + " " + this.pointStartLeftY + " V " + this.pointEndY + " H " + this.pointStartRightX + " V " + this.pointStartRightY + "";
  }

}
