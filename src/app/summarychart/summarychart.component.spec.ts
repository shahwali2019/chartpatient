import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarychartComponent } from './summarychart.component';

describe('SummarychartComponent', () => {
  let component: SummarychartComponent;
  let fixture: ComponentFixture<SummarychartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarychartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
