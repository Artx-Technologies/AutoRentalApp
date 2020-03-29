import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesseeDashboardComponent } from './lessee-dashboard.component';

describe('LesseeDashboardComponent', () => {
  let component: LesseeDashboardComponent;
  let fixture: ComponentFixture<LesseeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesseeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesseeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
