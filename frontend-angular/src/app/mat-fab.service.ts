import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class MatFabService {

  // Observable boolean sources
  private _emitChangeSource = new Subject<boolean>();

  // Observable streams
  changeEmitted$ = this._emitChangeSource.asObservable();

  // Emit a change if this service is used
  emitChange(change: boolean) {
    this._emitChangeSource.next(change);
  }

  constructor() { }


}
