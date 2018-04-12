import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RugAddComponent } from './rug-add.component';

describe('RugAddComponent', () => {
  let component: RugAddComponent;
  let fixture: ComponentFixture<RugAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RugAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RugAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
