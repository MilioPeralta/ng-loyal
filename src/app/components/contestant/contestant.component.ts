import {
  Component,
  OnInit,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { Contestant } from "../../models/Contestant";

@Component({
  selector: 'app-contestant',
  templateUrl: './contestant.component.html',
  styleUrls: ['./contestant.component.css'],
  animations: [
    trigger('fadeIn', [
      state('true', style({ opacity: 1, transform: 'scale(1.0)' })),
      state('false', style({ opacity: 0, transform: 'scale(0.0)' })),
      transition('1 => 0', animate('300ms')),
      transition('0 => 1', animate('900ms'))
    ]),
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class ContestantComponent implements OnInit {
  @Input()
  private contestant: Contestant;
  private state: Boolean = false;

  constructor() {
  }

  toggleState() {
    this.state = !this.state;
  }

  ngOnInit() {
    setTimeout(() => this.toggleState())
  }

}
