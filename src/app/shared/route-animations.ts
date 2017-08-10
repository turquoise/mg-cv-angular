import { animate, style, transition, trigger, animation, useAnimation } from '@angular/animations';

const fadeAnimation = animation([
  style({
    opacity: 0
  }),
  animate('2000ms')
], {params: {startOpacity: 0, duration: '100ms'}});

export const routeFadeStateTrigger = (params) => trigger('routeFadeState', [
  transition(':enter', [
    useAnimation(fadeAnimation, {params: params})
  ]),
  transition(':leave', animate(300, style({
    opacity: 0
  })))
]);

export const routeSlideStateTrigger = trigger('routeSlideState', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)',
      opacity: 0
    }),
    animate(300)
  ]),
  transition(':leave', animate(300, style({
    transform: 'translateY(100%)',
    opacity: 0
  })))
]);
