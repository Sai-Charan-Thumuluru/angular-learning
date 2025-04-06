import { Routes } from '@angular/router';
import { SolarObjectsComponent } from './solar-objects/solar-objects.component';
import { SolarObjectDetailsComponent } from './solar-object-details/solar-object-details.component';
import { SpaceComponent } from './space/space.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Solar System'
  },
  {
    path: 'space',
    component: SpaceComponent,
    title: 'Solar System from Space'
  },
  {
    path: 'details/:id',
    component: SolarObjectDetailsComponent,
    title: 'Solar Object Details'
  }
];
