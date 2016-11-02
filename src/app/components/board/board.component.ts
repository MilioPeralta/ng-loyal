import {
    Component,
    OnInit
} from "@angular/core";
import {Contestant} from "../../models/Contestant";
import {ContestantService} from "../../services/contestant.service";
import {Observable} from "rxjs";


@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css'],
    providers: [ContestantService]
})
export class BoardComponent implements OnInit {

    private contestantsTmp: Contestant[];
    private contestants: Contestant[] = [];
    private winners: Contestant[] = [];
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
        let offset = roundNumber === 3 || roundNumber === 5 ? 1 : 0;

        let randomWinnerIndex = Math.floor(Math.random() * 2) + offset;
        this.winners.push(currentContestants[randomWinnerIndex]);

        let loserIndex = (randomWinnerIndex + 1 + offset) % 2 + offset;

        console.log(
            "round " + roundNumber + " playing : " + currentContestants[0 + offset].id + " " + currentContestants[0 + offset].name +
            " vs " +
            currentContestants[1 + offset].id + " " + currentContestants[1 + offset].name
        );
        console.log("winner : ", currentContestants[randomWinnerIndex].id)
        console.log("loser : ", currentContestants[loserIndex].id)

        this.contestantsPerRound[roundNumber + 1] = [...currentContestants.slice(0, loserIndex), ...currentContestants.slice(loserIndex + 1)];
    }

    run() {
        console.log("run start...");

        var obs = Observable
            .interval(500)
            .take(this.contestantsTmp.length)
            .do(index => this.contestants.push(this.contestantsTmp[index]))
            .finally(() => obs2.subscribe());

        var obs2 = Observable
            .interval(this.roundTime)
            .take(this.roundNumber)
            .do(roundNumber => this.round(roundNumber))
            .finally(() => console.log("run end..."));

        obs.subscribe();

    }

    ngOnInit() {
        this.contestantsTmp = this.contestantsPerRound[0] = this.contestantService.getContestants();

        // Let's go !
        this.run();
    }

}
