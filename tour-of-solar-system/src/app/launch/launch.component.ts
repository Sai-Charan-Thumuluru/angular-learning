import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launch',
  imports: [ButtonModule],
  templateUrl: './launch.component.html',
  styleUrl: './launch.component.css'
})
export class LaunchComponent {

  constructor(private router: Router) {
  }
  goToSpace() {
    console.log("go to /space");
    this.router.navigate(['/space']);
  }
}
