import { Component, OnInit, HostBinding } from '@angular/core';

import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  fadeInRightOnEnterAnimation,
  fadeOutRightOnLeaveAnimation
} from 'angular-animations';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ duration: 500, animateChildren: 'after' }),
    fadeOutOnLeaveAnimation({ duration: 200, animateChildren: 'before' }),
    fadeInRightOnEnterAnimation(),
    fadeOutRightOnLeaveAnimation()
  ]
})
export class TodoListComponent implements OnInit {
  @HostBinding('@fadeInOnEnter') fadeIn = true;
  @HostBinding('@fadeOutOnLeave') fadeOut = true;

  todos = [
    'buy milk',
    'buy milk',
    'buy milk',
    'buy milk',
    'buy milk',
    'buy milk',
    'buy milk',
    'buy milk',
    'buy milk',
    'buy milk',
    'buy milk',
    'buy milk',
    'buy milk'
  ];

  constructor() {}

  ngOnInit() {}
}
