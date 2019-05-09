import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Boyf } from './boyf';
import { BOYFS } from './mock-boyfs';

@Injectable({
  providedIn: 'root'
})
export class BoyfService {

  constructor() { }

  getBoyfs(): Observable<Boyf[]> {
      return of(BOYFS);
  }

}
