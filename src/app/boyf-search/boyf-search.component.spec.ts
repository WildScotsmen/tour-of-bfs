import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoyfSearchComponent } from './boyf-search.component';

describe('BoyfSearchComponent', () => {
  let component: BoyfSearchComponent;
  let fixture: ComponentFixture<BoyfSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoyfSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoyfSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
