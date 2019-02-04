import { trigger } from '@angular/animations';
import { Component, OnInit, HostBinding } from '@angular/core';

import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  bounceInUpOnEnterAnimation,
  rubberBandOnEnterAnimation,
  lightSpeedInOnEnterAnimation,
  fadeInRightOnEnterAnimation,
  rotateInOnEnterAnimation
} from 'angular-animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ duration: 500 }),
    fadeOutOnLeaveAnimation({ duration: 200 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter1' }),
    bounceInUpOnEnterAnimation({ anchor: 'enter2', delay: 100 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter3', delay: 200 }),
    rubberBandOnEnterAnimation({ delay: 3000 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter4', delay: 1000 }),
    fadeInOnEnterAnimation({ anchor: 'enter5', delay: 3000 }),
    rotateInOnEnterAnimation({ anchor: 'enter6', duration: 500, delay: 4000 })
  ]
})
export class HomeComponent implements OnInit {
  @HostBinding('@fadeInOnEnter') public animateOnEnter = true;
  @HostBinding('@fadeOutOnLeave') public animateOnLeave = true;

  constructor() {}

  ngOnInit() {}
}
