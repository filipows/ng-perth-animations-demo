import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularImgComponent } from './angular-img/angular-img.component';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';

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
    path: 'dynamic-params',
    component: AngularImgComponent
  },
  {
    path: 'experiments',
    component: AngularImgComponent
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
