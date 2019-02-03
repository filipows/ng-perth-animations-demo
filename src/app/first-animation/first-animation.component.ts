import { Component, OnInit, HostBinding } from '@angular/core';

import { trigger, transition, state, style, animate } from '@angular/animations';
import { fadeInOnEnterAnimation } from 'angular-animations';
@Component({
  selector: 'app-first-animation',
  templateUrl: './first-animation.component.html',
  styleUrls: ['./first-animation.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ duration: 500 }),

    trigger('colorChange', [
      state('1', style({ background: 'cornflowerblue' })),
      state('2', style({ background: 'indianred' })),
      // state('2', style({ background: 'indianred', transform: 'scale(1.5)' })),
      transition('1 <=> 2', animate(500))
    ])
  ]
})
export class FirstAnimationComponent {
  @HostBinding('@fadeInOnEnter') public animateOnEnter = true;

  state = '1';

  animate() {
    this.state = this.state === '1' ? '2' : '1';
  }
}
