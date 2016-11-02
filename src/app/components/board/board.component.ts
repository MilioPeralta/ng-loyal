import { Component, OnInit } from '@angular/core';
import { Contestant } from "../../models/Contestant";
import { ContestantService } from "../../services/contestant.service";


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [ContestantService]
})
export class BoardComponent implements OnInit {

  private contestants: Contestant[];

  // The constructor itself does nothing.
  // The parameter simultaneously defines a private contestantService property
  // and identifies it as a ContestantService injection site.
  constructor(private contestantService: ContestantService) {
  }


  ngOnInit() {
    this.contestants = this.contestantService.getContestants();


  }

}
