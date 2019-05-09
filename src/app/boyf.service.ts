import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Boyf } from './boyf';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' }
  )
};

@Injectable({
  providedIn: 'root'
})
export class BoyfService {

  private boyfsUrl = 'api/boyfs';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getBoyfs(): Observable<Boyf[]> {
    this.log('fetched boyfriends');
    return this.http.get<Boyf[]>(this.boyfsUrl).pipe(
      tap(_ => this.log('fetched boyfriends')),
      catchError(this.handleError<Boyf[]>('getBoyfs', []))
    );
  }

  getBoyf(id: number): Observable<Boyf> {
    const url = `${this.boyfsUrl}/${id}`;
    return this.http.get<Boyf>(url).pipe(
      tap(_ => this.log(`fetched boyfriend with ID #${id}`)),
      catchError(this.handleError<Boyf>(`getBoyf id=${id}`))
    );
  }

  addBoyf(boyf: Boyf): Observable<Boyf> {
    return this.http.post<Boyf>(this.boyfsUrl, boyf, httpOptions).pipe(
      tap((newBoyf: Boyf) => this.log(`added boyfriend with #ID ${newBoyf.id}`)),
      catchError(this.handleError<Boyf>('addBoyf'))
    );
  }

  updateBoyf(boyf: Boyf): Observable<any> {
    return this.http.put(this.boyfsUrl, boyf, httpOptions).pipe(
      tap(_ => this.log(`updated boyfriend with ID #${boyf.id}`)),
      catchError(this.handleError<any>('updateBoyf'))
    );
  }

  deleteBoyf(boyf: Boyf | number): Observable<Boyf> {
    const id = typeof boyf === 'number' ? boyf: boyf.id;
    const url = `${this.boyfsUrl}/${id}`;

    return this.http.delete<Boyf>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted boyfriend with ID #${id}`)),
      catchError(this.handleError<Boyf>('deleteBoyf'))
    );
  }

  private handleError<T>(operation =
    'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add(`BoyfService: ${message}.`);
  }

}