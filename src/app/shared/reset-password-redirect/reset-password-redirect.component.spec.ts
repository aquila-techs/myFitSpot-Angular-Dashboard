import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordRedirectComponent } from './reset-password-redirect.component';

describe('ResetPasswordRedirectComponent', () => {
  let component: ResetPasswordRedirectComponent;
  let fixture: ComponentFixture<ResetPasswordRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
