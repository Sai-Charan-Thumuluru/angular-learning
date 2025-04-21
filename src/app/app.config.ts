import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: definePreset(Aura, {
          semantic: {
            primary: {
              50: '{cyan.50}',
              100: '{cyan.100}',
              200: '{cyan.200}',
              300: '{cyan.300}',
              400: '{cyan.400}',
              500: '{cyan.500}',
              600: '{cyan.600}',
              700: '{cyan.700}',
              800: '{cyan.800}',
              900: '{cyan.900}',
              950: '{cyan.950}'
            }
          }
        })
      }
    })]
};
