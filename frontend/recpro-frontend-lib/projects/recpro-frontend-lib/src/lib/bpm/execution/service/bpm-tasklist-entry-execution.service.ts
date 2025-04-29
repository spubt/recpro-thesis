import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {RecproTasklistEntry} from '../model';

@Injectable({
  providedIn: 'root'
})
export class BpmTasklistEntryExecutionService {

  current: BehaviorSubject<RecproTasklistEntry> = new BehaviorSubject<RecproTasklistEntry>(new RecproTasklistEntry());

  constructor() { }

  getCurrentTasklistEntry(): Observable<RecproTasklistEntry> {
    return this.current;
  }

  setCurrentTasklistEntry(task: RecproTasklistEntry): void {
    this.current.next(task);
  }
}
