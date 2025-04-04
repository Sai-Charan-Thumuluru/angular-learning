import { Component, Input } from '@angular/core';
import { SolarObject } from '../solar-object';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solar-objects',
  imports: [CommonModule],
  templateUrl: './solar-objects.component.html',
  styleUrl: './solar-objects.component.css'
})
export class SolarObjectsComponent {
  @Input() solarObject!: SolarObject;

  ngOnInit() {
    console.log(this.solarObject);
  }
}
