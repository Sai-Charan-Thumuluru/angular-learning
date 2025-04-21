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
      "audioByteStartTime": 9,
      "audioByteEndTime": 36
    },
    {
      "id": 1,
      "image": "./assets/mercury.jpg",
      "name": "Mercury",
      "color": "Gray, rocky surface",
      "age": "4.6 billion years",
      "size": "4,880 km in diameter",
      "audioByteStartTime": 39,
      "audioByteEndTime": 63
    },
    {
      "id": 2,
      "image": "./assets/venus.jpg",
      "name": "Venus",
      "color": "Yellowish, thick clouds",
      "age": "4.6 billion years",
      "size": "12,104 km in diameter",
      "audioByteStartTime": 72,
      "audioByteEndTime": 99
    },
    {
      "id": 3,
      "image": "./assets/earth.jpg",
      "name": "Earth",
      "color": "Blue and white (oceans and clouds)",
      "age": "4.5 billion years",
      "size": "12,742 km in diameter",
      "audioByteStartTime": 99,
      "audioByteEndTime": 126
    },
    {
      "id": 4,
      "image": "./assets/mars.jpg",
      "name": "Mars",
      "color": "Red, rusty surface",
      "age": "4.6 billion years",
      "size": "6,779 km in diameter",
      "audioByteStartTime": 126,
      "audioByteEndTime": 160
    },
    {
      "id": 5,
      "image": "./assets/jupiter.jpg",
      "name": "Jupiter",
      "color": "Band of white, red, and brown clouds",
      "age": "4.6 billion years",
      "size": "139,820 km in diameter",
      "audioByteStartTime": 160,
      "audioByteEndTime": 189
    },
    {
      "id": 6,
      "image": "./assets/saturn.jpg",
      "name": "Saturn",
      "color": "Pale yellow with gold rings",
      "age": "4.6 billion years",
      "size": "116,460 km in diameter",
      "audioByteStartTime": 189,
      "audioByteEndTime": 219
    },
    {
      "id": 7,
      "image": "./assets/uranus.jpg",
      "name": "Uranus",
      "color": "Pale blue (methane atmosphere)",
      "age": "4.6 billion years",
      "size": "50,724 km in diameter",
      "audioByteStartTime": 219,
      "audioByteEndTime": 248
    },
    {
      "id": 8,
      "image": "./assets/neptune.jpg",
      "name": "Neptune",
      "color": "Deep blue (methane atmosphere)",
      "age": "4.6 billion years",
      "size": "49,244 km in diameter",
      "audioByteStartTime": 250,
      "audioByteEndTime": 279
    },
    {
      "id": 9,
      "image": "./assets/pluto.jpg",
      "name": "Pluto",
      "color": "Light brown with white spots",
      "age": "4.6 billion years",
      "size": "2,377 km in diameter",
      "audioByteStartTime": 279,
      "audioByteEndTime": 300
    }
  ];

  constructor() { }

  getAllSolarObjects(filterText?: string): SolarObject[] {
    if (filterText) {
      const filteredSolarObjectList = this.solarObjectList.filter((solarObject) => {
        let solarObjectDetails = String(Object.values(solarObject)).toLowerCase();
        return solarObjectDetails.includes(filterText.toLowerCase());
      });
      return filteredSolarObjectList;
    }
    return this.solarObjectList;
  }

  getSolarObjectById(id: Number): SolarObject | undefined {
    return this.solarObjectList.find(solarObject => solarObject.id === id);
  }
}
