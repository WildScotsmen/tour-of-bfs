import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoyfsComponent } from './boyfs.component';

describe('BoyfsComponent', () => {
  let component: BoyfsComponent;
  let fixture: ComponentFixture<BoyfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoyfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoyfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
