import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
  animateChild
} from '@angular/animations';

export function listStagger(options?: { anchor?: string; delay?: number }) {
  return trigger((options && options.anchor) || 'listStagger', [
    transition(':enter', [
      query(':enter', stagger(`${(options && options.delay) || '50'}ms`, animateChild()), {
        optional: true
      })
    ]),
    transition(':leave', [
      query(':leave', stagger(`-${(options && options.delay) || '50'}ms`, animateChild()), {
        optional: true
      })
    ])
  ]);
}
