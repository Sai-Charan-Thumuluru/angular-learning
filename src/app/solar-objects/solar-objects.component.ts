import { Component, Input } from '@angular/core';
import { SolarObject } from '../solar-object';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solar-objects',
  imports: [CommonModule],
  templateUrl: './solar-objects.component.html',
  styleUrl: './solar-objects.component.css'
})
export class SolarObjectsComponent {
  @Input() solarObject!: SolarObject;

  constructor(private router: Router) { }

  goToDetails() {
    this.router.navigate(['/details', this.solarObject.id]);
  }

  ngOnInit() {
    console.log(this.solarObject);
  }
}
