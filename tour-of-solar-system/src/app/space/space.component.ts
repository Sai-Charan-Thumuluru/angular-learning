import { Component, inject } from '@angular/core';
import { SolarService } from '../solar.service';
import { SolarObject } from '../solar-object';
import { SolarObjectsComponent } from '../solar-objects/solar-objects.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-space',
  imports: [SolarObjectsComponent, CommonModule],
  templateUrl: './space.component.html',
  styleUrl: './space.component.css'
})
export class SpaceComponent {
  title = 'Solar System from Space';
  solarObjectList: SolarObject[] = [];
  solarService = inject(SolarService);

  constructor() {
    this.solarObjectList = this.solarService.getAllSolarObjects();
  }

  ngOnInit() {
    console.log(this.solarObjectList);
  }
}
