import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAutoComponent } from './add-new-auto.component';

describe('AddNewAutoComponent', () => {
  let component: AddNewAutoComponent;
  let fixture: ComponentFixture<AddNewAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
