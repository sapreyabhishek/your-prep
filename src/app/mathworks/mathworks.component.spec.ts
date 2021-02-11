import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathworksComponent } from './mathworks.component';

describe('MathworksComponent', () => {
  let component: MathworksComponent;
  let fixture: ComponentFixture<MathworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
