import { Component } from '@angular/core';

import {
  trigger,
  transition,
  animateChild,
  query,
  animation,
  style,
  animate,
  AnimationMetadata,
  useAnimation,
  group
} from '@angular/animations';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('* => *', [
        query(':leave', animateChild(), { optional: true }),
        query(':enter', animateChild(), { optional: true })
      ])
    ])
  ]
})
export class AppComponent {
  title = 'ng-perth-angular-animations';

  constructor(private router: Router) {}

  // prepRouteState(outlet: RouterOutlet) {
  //   return outlet.activatedRouteData.animation || this.router.url.replace(/\//g, '-');
  // }
}
