import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slaider4Component } from './slaider4.component';

describe('Slaider4Component', () => {
  let component: Slaider4Component;
  let fixture: ComponentFixture<Slaider4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slaider4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slaider4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
