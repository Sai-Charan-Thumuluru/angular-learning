import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarObjectDetailsComponent } from './solar-object-details.component';

describe('SolarObjectDetailsComponent', () => {
  let component: SolarObjectDetailsComponent;
  let fixture: ComponentFixture<SolarObjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarObjectDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarObjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
