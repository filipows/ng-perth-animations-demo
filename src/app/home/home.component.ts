import { trigger } from '@angular/animations';
import { Component, OnInit, HostBinding } from '@angular/core';

import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  bounceInUpOnEnterAnimation,
  rubberBandOnEnterAnimation
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
    rubberBandOnEnterAnimation({ delay: 1000 })
  ]
})
export class HomeComponent implements OnInit {
  @HostBinding('@fadeInOnEnter') public animateOnEnter = true;
  @HostBinding('@fadeOutOnLeave') public animateOnLeave = true;

  constructor() {}

  ngOnInit() {}
}
