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
  audioUrl: string = './assets/all-planets-sound.mp3';
  solarObjectAudio: HTMLAudioElement;

  constructor() {
    const solarObjectId = Number(this.activatedRoute.snapshot.params['id']);
    this.solarObject = this.solarService.getSolarObjectById(solarObjectId);
    this.solarObjectAudio = new Audio(`${this.audioUrl}#t=${this.solarObject?.audioDuration}`);
  }

  playOrPauseObjectsAudio() {
    if (this.solarObjectAudio.paused) {
      this.solarObjectAudio.loop = true;
      this.solarObjectAudio.play();
      console.log(this.solarObjectAudio.currentTime);
    }
    else {
      this.solarObjectAudio.pause();
      console.log(this.solarObjectAudio.currentTime);
    }
  }

  ngOnInit() {
    if (this.solarObject) {
      this.playOrPauseObjectsAudio();
    }
  }

  ngOnDestroy() {
    this.solarObjectAudio.pause();
    this.solarObjectAudio.currentTime = 0;
  }
}
