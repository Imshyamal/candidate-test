import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RugComponent } from './rug.component';

describe('RugComponent', () => {
  let component: RugComponent;
  let fixture: ComponentFixture<RugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
