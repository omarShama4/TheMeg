import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorLoginComponent } from './competitor-login.component';

describe('CompetitorLoginComponent', () => {
  let component: CompetitorLoginComponent;
  let fixture: ComponentFixture<CompetitorLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitorLoginComponent]
    });
    fixture = TestBed.createComponent(CompetitorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
