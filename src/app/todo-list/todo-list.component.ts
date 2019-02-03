import { Component, OnInit, HostBinding } from '@angular/core';

import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  fadeInRightOnEnterAnimation,
  fadeOutRightOnLeaveAnimation,
  slideOutRightOnLeaveAnimation
} from 'angular-animations';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ duration: 500, animateChildren: 'after' }),
    fadeOutOnLeaveAnimation({ duration: 200, animateChildren: 'before' }),
    fadeInRightOnEnterAnimation(),
    fadeOutRightOnLeaveAnimation(),
    slideOutRightOnLeaveAnimation()
  ]
})
export class TodoListComponent implements OnInit {
  @HostBinding('@fadeInOnEnter') fadeIn = true;
  @HostBinding('@fadeOutOnLeave') fadeOut = true;

  todos = [
    'buy milk 0',
    'buy milk 1',
    'buy milk 2',
    'buy milk 3',
    'buy milk 4',
    'buy milk 5',
    'buy milk 6',
    'buy milk 7',
    'buy milk 8',
    'buy milk 9',
    'buy milk 10',
    'buy milk 11',
    'buy milk 12'
  ];

  constructor() {}

  ngOnInit() {}

  remove(index: number) {
    this.todos.splice(index, 1);
  }
}
