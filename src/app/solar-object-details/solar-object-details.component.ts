import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolarService } from '../solar.service';
import { SolarObject } from '../solar-object';

@Component({
  selector: 'app-solar-object-details',
  imports: [],
  templateUrl: './solar-object-details.component.html',
  styleUrl: './solar-object-details.component.css'
})
export class SolarObjectDetailsComponent {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  solarService = inject(SolarService);
  solarObject: SolarObject | undefined;

  constructor() {
    const solarObjectId = Number(this.activatedRoute.snapshot.params['id']);
    this.solarObject = this.solarService.getSolarObjectById(solarObjectId);
  }
}
