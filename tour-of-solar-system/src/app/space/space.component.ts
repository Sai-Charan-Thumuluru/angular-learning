import { Component } from '@angular/core';

@Component({
  selector: 'app-space',
  imports: [],
  template: `
  <div class="header-flexbox">
    <h1>Welcome to our {{ title }}</h1>
    <!-- <img src="../assets/logo.svg" alt="A picture of Solar System"> -->
    <object data="../assets/logo.svg" type="image/svg+xml"></object>
  </div>
  `,
  styleUrl: './space.component.css'
})
export class SpaceComponent {
  title = 'Solar System';
}
