import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestPasswordComponent } from './rest-password.component';

describe('RestPasswordComponent', () => {
  let component: RestPasswordComponent;
  let fixture: ComponentFixture<RestPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
