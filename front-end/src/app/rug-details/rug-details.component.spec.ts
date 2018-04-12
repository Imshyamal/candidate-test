import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RugDetailsComponent } from './rug-details.component';

describe('RugDetailsComponent', () => {
  let component: RugDetailsComponent;
  let fixture: ComponentFixture<RugDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RugDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RugDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
