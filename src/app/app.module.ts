import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatRippleModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AngularImgComponent } from './angular-img/angular-img.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FirstAnimationComponent } from './first-animation/first-animation.component';
import { EnterLeaveComponent } from './enter-leave/enter-leave.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularImgComponent,
    HomeComponent,
    TodoListComponent,
    FirstAnimationComponent,
    EnterLeaveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
