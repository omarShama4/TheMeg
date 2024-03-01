import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorSignupComponent } from './competitor-signup.component';

describe('CompetitorSignupComponent', () => {
  let component: CompetitorSignupComponent;
  let fixture: ComponentFixture<CompetitorSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitorSignupComponent]
    });
    fixture = TestBed.createComponent(CompetitorSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
