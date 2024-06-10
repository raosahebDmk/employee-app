import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee1 } from './modules/employee1';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private sharedDataSubject = new BehaviorSubject<any>(null);
  sharedData$ = this.sharedDataSubject.asObservable();

  constructor() { }

  updateData(data: Employee1) {
    this.sharedDataSubject.next(data);
  }

}
