import { trigger, state, transition, style, animate, keyframes, animation, useAnimation } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('2s ease-out')
  ]),
  transition(':leave', [
    animate(2000, style({
      opacity: 0
    }))
  ])
])
