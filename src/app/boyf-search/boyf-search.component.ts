import { Component, OnInit } from '@angular/core';
import { BoyfService } from '../boyf.service';
import { Observable, Subject } from 'rxjs';
import { Boyf } from '../boyf';
import { distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-boyf-search',
  templateUrl: './boyf-search.component.html',
  styleUrls: ['./boyf-search.component.css']
})
export class BoyfSearchComponent implements OnInit {
  boyfs$: Observable<Boyf[]>;
  private searchTerms = new Subject<string>();

  constructor(private boyfService: BoyfService) { }

  ngOnInit() {
    this.boyfs$ = this.searchTerms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term: string) => this.boyfService.searchBoyfs(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
