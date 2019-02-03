import { Component, OnInit } from '@angular/core';

import { trigger, transition, style, animate } from '@angular/animations';

const fadeInTrigger = trigger('fadeIn', [
  transition(':enter', [style({ opacity: 0 }), animate('1s 0ms ease-in', style({ opacity: 1 }))])
]);

@Component({
  selector: 'app-enter-leave',
  templateUrl: './enter-leave.component.html',
  styleUrls: ['./enter-leave.component.scss'],
  animations: [
    fadeInTrigger,
    trigger('fadeOut', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1s 0ms ease-in', style({ opacity: 0, transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class EnterLeaveComponent {
  state = false;

  toggle() {
    this.state = !this.state;
  }
}
