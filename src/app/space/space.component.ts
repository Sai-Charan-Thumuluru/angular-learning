import { Component, inject } from '@angular/core';
import { SolarService } from '../solar.service';
import { SolarObject } from '../solar-object';
import { SolarObjectsComponent } from '../solar-objects/solar-objects.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-space',
  imports: [SolarObjectsComponent, CommonModule, FormsModule, ButtonModule, InputTextModule],
  templateUrl: './space.component.html',
  styleUrl: './space.component.css'
})
export class SpaceComponent {
  title = 'Solar System from Space';
  solarObjectList: SolarObject[] = [];
  solarService = inject(SolarService);
  text: string = "";

  constructor() {
    this.solarObjectList = this.solarService.getAllSolarObjects();
  }

  filterSolarObjects() {
    this.solarObjectList = this.solarService.getAllSolarObjects(this.text);
  }

  ngOnInit() {
    console.log(this.solarObjectList);
  }
}
