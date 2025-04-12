import { Injectable } from '@angular/core';
import { SolarObject } from './solar-object';

@Injectable({
  providedIn: 'root'
})
export class SolarService {
  protected solarObjectList: SolarObject[] = [
    {
      "id": 0,
      "image": "./assets/sun.jpg",
      "name": "Sun",
      "color": "White from space",
      "age": "4.6 billion years",
      "size": "1.4 million km in diameter",
      "audioDuration": "9,12"
    },
    {
      "id": 1,
      "image": "./assets/mercury.jpg",
      "name": "Mercury",
      "color": "Gray, rocky surface",
      "age": "4.6 billion years",
      "size": "4,880 km in diameter",
      "audioDuration": "39,63"
    },
    {
      "id": 2,
      "image": "./assets/venus.jpg",
      "name": "Venus",
      "color": "Yellowish, thick clouds",
      "age": "4.6 billion years",
      "size": "12,104 km in diameter",
      "audioDuration": "72,99"
    },
    {
      "id": 3,
      "image": "./assets/earth.jpg",
      "name": "Earth",
      "color": "Blue and white (oceans and clouds)",
      "age": "4.5 billion years",
      "size": "12,742 km in diameter",
      "audioDuration": "99,126"
    },
    {
      "id": 4,
      "image": "./assets/mars.jpg",
      "name": "Mars",
      "color": "Red, rusty surface",
      "age": "4.6 billion years",
      "size": "6,779 km in diameter",
      "audioDuration": "126,160"
    },
    {
      "id": 5,
      "image": "./assets/jupiter.jpg",
      "name": "Jupiter",
      "color": "Band of white, red, and brown clouds",
      "age": "4.6 billion years",
      "size": "139,820 km in diameter",
      "audioDuration": "160,189"
    },
    {
      "id": 6,
      "image": "./assets/saturn.jpg",
      "name": "Saturn",
      "color": "Pale yellow with gold rings",
      "age": "4.6 billion years",
      "size": "116,460 km in diameter",
      "audioDuration": "189,219"
    },
    {
      "id": 7,
      "image": "./assets/uranus.jpg",
      "name": "Uranus",
      "color": "Pale blue (methane atmosphere)",
      "age": "4.6 billion years",
      "size": "50,724 km in diameter",
      "audioDuration": "219,248"
    },
    {
      "id": 8,
      "image": "./assets/neptune.jpg",
      "name": "Neptune",
      "color": "Deep blue (methane atmosphere)",
      "age": "4.6 billion years",
      "size": "49,244 km in diameter",
      "audioDuration": "250,279"
    },
    {
      "id": 9,
      "image": "./assets/pluto.jpg",
      "name": "Pluto",
      "color": "Light brown with white spots",
      "age": "4.6 billion years",
      "size": "2,377 km in diameter",
      "audioDuration": "279,300"
    }
  ];

  constructor() { }

  getAllSolarObjects(): SolarObject[] {
    return this.solarObjectList;
  }

  getSolarObjectById(id: Number): SolarObject | undefined {
    return this.solarObjectList.find(solarObject => solarObject.id === id);
  }
}
