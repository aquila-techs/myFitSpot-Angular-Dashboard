import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectVerificationComponent } from './redirect-verification.component';

describe('RedirectVerificationComponent', () => {
  let component: RedirectVerificationComponent;
  let fixture: ComponentFixture<RedirectVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
