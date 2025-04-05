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
  solarObjectList: SolarObject[] = [
    {
      "id": 0,
      "image": "./assets/sun.jpg",
      "name": "Sun",
      "color": "White from space",
      "age": "4.6 billion years",
      "size": "1.4 million km in diameter"
    },
    {
      "id": 1,
      "image": "./assets/mercury.jpg",
      "name": "Mercury",
      "color": "Gray, rocky surface",
      "age": "4.6 billion years",
      "size": "4,880 km in diameter"
    },
    {
      "id": 2,
      "image": "./assets/venus.jpg",
      "name": "Venus",
      "color": "Yellowish, thick clouds",
      "age": "4.6 billion years",
      "size": "12,104 km in diameter"
    },
    {
      "id": 3,
      "image": "./assets/earth.jpg",
      "name": "Earth",
      "color": "Blue and white (oceans and clouds)",
      "age": "4.5 billion years",
      "size": "12,742 km in diameter"
    },
    {
      "id": 4,
      "image": "./assets/mars.jpg",
      "name": "Mars",
      "color": "Red, rusty surface",
      "age": "4.6 billion years",
      "size": "6,779 km in diameter"
    },
    {
      "id": 5,
      "image": "./assets/jupiter.jpg",
      "name": "Jupiter",
      "color": "Band of white, red, and brown clouds",
      "age": "4.6 billion years",
      "size": "139,820 km in diameter"
    },
    {
      "id": 6,
      "image": "./assets/saturn.jpg",
      "name": "Saturn",
      "color": "Pale yellow with gold rings",
      "age": "4.6 billion years",
      "size": "116,460 km in diameter"
    },
    {
      "id": 7,
      "image": "./assets/uranus.jpg",
      "name": "Uranus",
      "color": "Pale blue (methane atmosphere)",
      "age": "4.6 billion years",
      "size": "50,724 km in diameter"
    },
    {
      "id": 8,
      "image": "./assets/neptune.jpg",
      "name": "Neptune",
      "color": "Deep blue (methane atmosphere)",
      "age": "4.6 billion years",
      "size": "49,244 km in diameter"
    },
    {
      "id": 9,
      "image": "./assets/pluto.jpg",
      "name": "Pluto",
      "color": "Light brown with white spots",
      "age": "4.6 billion years",
      "size": "2,377 km in diameter"
    }
  ];

  ngOnInit() {
    console.log(this.solarObjectList);
  }
}
