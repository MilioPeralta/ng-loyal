import { Injectable } from '@angular/core';
import { Contestant } from "../models/Contestant";

const
  CONTESTANTS: Contestant[] = [
    { id: 1, name: 'Mr. Nice' },
    { id: 2, name: 'Narco' },
    { id: 3, name: 'Bombasto' },
    { id: 4, name: 'Celeritas' },
    { id: 5, name: 'Magneta' },
    { id: 6, name: 'RubberMan' },
    { id: 7, name: 'Dynama' },
    { id: 8, name: 'Dr IQ' },
    { id: 9, name: 'Magma' },
    { id: 0, name: 'Tornado' }
  ];

@Injectable()
export class ContestantService {

  // Retrieve all contestants
  getContestants(): Contestant[] {
    return CONTESTANTS;
  }

  constructor() {
  }

}
