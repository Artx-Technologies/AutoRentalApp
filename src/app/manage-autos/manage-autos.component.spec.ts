import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAutosComponent } from './manage-autos.component';

describe('ManageAutosComponent', () => {
  let component: ManageAutosComponent;
  let fixture: ComponentFixture<ManageAutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
