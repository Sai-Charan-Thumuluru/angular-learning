import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarObjectsComponent } from './solar-objects.component';

describe('SolarObjectsComponent', () => {
  let component: SolarObjectsComponent;
  let fixture: ComponentFixture<SolarObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarObjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
