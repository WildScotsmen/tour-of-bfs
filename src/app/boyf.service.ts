import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Boyf } from './boyf';
import { BOYFS } from './mock-boyfs';

@Injectable({
  providedIn: 'root'
})
export class BoyfService {

  constructor(private messageService: MessageService) { }

  getBoyfs(): Observable<Boyf[]> {
    this.messageService.add('BoyfService: fetched boyfriends.');
    return of(BOYFS);
  }

  getBoyf(id: number): Observable<Boyf> {
    this.messageService.add(`BoyfService: fetched boyfriend with ID #${id}.`);
    return of(BOYFS.find(boyf => boyf.id === id));
  }

}
