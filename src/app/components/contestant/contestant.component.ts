import { Component, OnInit, Input } from '@angular/core';
import { Contestant } from "../../models/Contestant";

@Component({
  selector: 'app-contestant',
  templateUrl: './contestant.component.html',
  styleUrls: ['./contestant.component.css']
})
export class ContestantComponent implements OnInit {

  @Input()
  private contestant: Contestant;

  constructor() {
  }

  ngOnInit() {
  }

}
