import { Injectable } from '@angular/core';

@Injectable()
export class MatFabService {

  constructor() { }

  toggleMatFab(val: boolean): boolean {
    return val;
  }

}
