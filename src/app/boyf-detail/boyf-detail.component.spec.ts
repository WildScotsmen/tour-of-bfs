import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoyfDetailComponent } from './boyf-detail.component';

describe('BoyfDetailComponent', () => {
  let component: BoyfDetailComponent;
  let fixture: ComponentFixture<BoyfDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoyfDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoyfDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
