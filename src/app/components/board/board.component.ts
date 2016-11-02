import { Component, OnInit } from "@angular/core";
import { Contestant } from "../../models/Contestant";
import { ContestantService } from "../../services/contestant.service";
import { Observable } from "rxjs";


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [ContestantService]
})
export class BoardComponent implements OnInit {

  private contestants: Contestant[];
  private contestantsPerRound: { [key: number]: Contestant[] } = {};
  private roundTime: number = 2000;
  private roundNumber: number = 7;

  // The constructor itself does nothing.
  // The parameter simultaneously defines a private contestantService property
  // and identifies it as a ContestantService injection site.
  constructor(private contestantService: ContestantService) {
  }

  round(roundNumber: number): void {
    let currentContestants: Contestant[] = this.contestantsPerRound[roundNumber];

    console.log("round " + roundNumber + " playing : " + currentContestants[0].name + " vs " + currentContestants[1].name);
    this.contestantsPerRound[roundNumber + 1] = currentContestants.slice(1, currentContestants.length);
  }

  run() {
    console.log("run start...");

    var obs = Observable
      .interval(this.roundTime)
      .take(this.roundNumber)
      .do(roundNumber => this.round(roundNumber))
      .finally(() => console.log("run end..."));

    obs.subscribe();

  }

  ngOnInit() {
    this.contestants = this.contestantsPerRound[0] = this.contestantService.getContestants();

    // Let's go !
    this.run();
  }

}
