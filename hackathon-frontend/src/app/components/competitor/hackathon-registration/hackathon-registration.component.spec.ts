import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonRegistrationComponent } from './hackathon-registration.component';

describe('HackathonRegistrationComponent', () => {
  let component: HackathonRegistrationComponent;
  let fixture: ComponentFixture<HackathonRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HackathonRegistrationComponent]
    });
    fixture = TestBed.createComponent(HackathonRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
