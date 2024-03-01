import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHackathonsComponent } from './view-hackathons.component';

describe('ViewHackathonsComponent', () => {
  let component: ViewHackathonsComponent;
  let fixture: ComponentFixture<ViewHackathonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewHackathonsComponent]
    });
    fixture = TestBed.createComponent(ViewHackathonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
