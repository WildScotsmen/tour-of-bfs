import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Boyf } from './boyf';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const boyfs = [
      { id: 0, name: "Wolf O'Donnell", anniversary: new Date(2015, 7, 6) },
      { id: 1, name: "Fox McCloud", anniversary: new Date(2013, 6, 2) },
      { id: 2, name: "Garrus Vakarian", anniversary: new Date(2016, 12, 21) },
      { id: 3, name: "Avery Pepper", anniversary: new Date(2014, 11, 11) },
      { id: 4, name: "Torahiko Ooshima", anniversary: new Date(2014, 8, 2) }
    ];

    return { boyfs };
  }

  genId(boyfs: Boyf[]): number {
    return boyfs.length > 0 ? Math.max(...boyfs.map(boyf => boyf.id)) + 1 : 0;
  }

}