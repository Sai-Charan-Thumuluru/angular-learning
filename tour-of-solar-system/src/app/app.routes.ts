import { Routes } from '@angular/router';
import { SolarObjectsComponent } from './solar-objects/solar-objects.component';
import { SolarObjectDetailsComponent } from './solar-object-details/solar-object-details.component';
import { SpaceComponent } from './space/space.component';

export const routes: Routes = [
  {
    path: '',
    component: SpaceComponent,
    title: 'Solar System from Space'
  },
  {
    path: 'objects',
    component: SolarObjectsComponent,
    title: 'Solar Objects'
  },
  {
    path: 'details',
    component: SolarObjectDetailsComponent,
    title: 'Solar Object Details'
  }
];
