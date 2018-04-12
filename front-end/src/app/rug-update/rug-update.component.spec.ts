import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RugUpdateComponent } from './rug-update.component';

describe('RugUpdateComponent', () => {
  let component: RugUpdateComponent;
  let fixture: ComponentFixture<RugUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RugUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RugUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
