import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiComponent } from './visi.component';

describe('VisiComponent', () => {
  let component: VisiComponent;
  let fixture: ComponentFixture<VisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
