import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DisplayCompService {
  // Observable boolean sources
  private _emitChangeSource = new Subject<boolean>();
  private _emitEventsTabChangeSource = new Subject<boolean>();


  // Observable streams
  changeEmitted$ = this._emitChangeSource.asObservable();
  eventsTabChangeEmitted$ = this._emitEventsTabChangeSource.asObservable();

  // Emit a change if this service is used
  emitChange(change: boolean) {
    this._emitChangeSource.next(change);
  }

  toggleEventsTab(change: boolean) {
    this._emitEventsTabChangeSource.next(change);
  }
}
