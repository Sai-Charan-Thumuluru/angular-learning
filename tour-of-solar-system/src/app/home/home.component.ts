import { Component } from '@angular/core';
import { LaunchComponent } from '../launch/launch.component';

@Component({
  selector: 'app-home',
  imports: [LaunchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Solar System';
}
