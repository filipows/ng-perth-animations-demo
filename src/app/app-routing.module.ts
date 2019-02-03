import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularImgComponent } from './angular-img/angular-img.component';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FirstAnimationComponent } from './first-animation/first-animation.component';
import { EnterLeaveComponent } from './enter-leave/enter-leave.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todo',
    component: TodoListComponent
  },
  {
    path: 'first-animation',
    component: FirstAnimationComponent
  },
  {
    path: 'enter-leave',
    component: EnterLeaveComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: false
});
