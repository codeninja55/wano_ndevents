import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class DisplayCompService {
  // Observable boolean sources
  private _emitChangeSource = new Subject<boolean>();
  private _emitBookingsTabChangeSource = new Subject<boolean>();
  private _emitEventsTabChangeSource = new Subject<boolean>();
  public matFabDisplay = true;

  // Observable streams
  changeEmitted$ = this._emitChangeSource.asObservable();
  bookingsTabChangeEmitted$ = this._emitBookingsTabChangeSource.asObservable();
  eventsTabChangeEmitted$ = this._emitEventsTabChangeSource.asObservable();

  // Emit a change if this service is used
  emitChange(change: boolean) {
    this._emitChangeSource.next(change);
  }

  toggleBookingsTab(change: boolean) {
    this._emitBookingsTabChangeSource.next(change);
  }

  toggleEventsTab(change: boolean) {
    this._emitEventsTabChangeSource.next(change);
  }

  toggleMatFabDisplay(show: boolean): void {
    this.matFabDisplay = show;
  }
}
