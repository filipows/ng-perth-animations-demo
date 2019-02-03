import { Component, OnInit, HostBinding } from '@angular/core';

import { listStagger } from '../list-stagger.trigger';

import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  fadeInRightOnEnterAnimation,
  fadeOutRightOnLeaveAnimation,
  slideOutRightOnLeaveAnimation,
  fadeInUpOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ duration: 500, animateChildren: 'after' }),
    fadeOutOnLeaveAnimation({ duration: 200, animateChildren: 'before' }),
    fadeInRightOnEnterAnimation({ translate: '50%' }),
    fadeOutRightOnLeaveAnimation(),
    slideOutRightOnLeaveAnimation({ duration: 1000 }),
    fadeInUpOnEnterAnimation({ translate: '15px', delay: 1000 }),
    listStagger({ anchor: 'listStaggerOnEnterOnLeave', delay: 100 })
  ]
})
export class TodoListComponent implements OnInit {
  @HostBinding('@fadeInOnEnter') fadeIn = true;
  @HostBinding('@fadeOutOnLeave') fadeOut = true;

  todo = '';
  todos = [
    'presentation for ng perth',
    'buy milk',
    'feed the dog',
    'learn angular animations',
    'experiment with dynamic params'
  ];

  constructor() {}

  ngOnInit() {}

  addTodo() {
    if (this.todo) {
      this.todos.unshift(this.todo);
      this.todo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
