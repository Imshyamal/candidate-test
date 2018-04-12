import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RugDashboardComponent } from './rug-dashboard.component';

describe('RugDashboardComponent', () => {
  let component: RugDashboardComponent;
  let fixture: ComponentFixture<RugDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RugDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RugDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
