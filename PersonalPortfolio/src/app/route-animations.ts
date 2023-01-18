import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
} from '@angular/animations';
export const fader =
  trigger('routeAnimations', [
    transition('* <=> *',[
      // Set a default  style for enter and leave
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'translateX(100%)',
        }),
      ]),
      // Animate the new page in
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),

    ]),
]);
