import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advertising-creation';
  message = ''

  constructor(private router: Router) { 
    router.events.subscribe(event => { 
      if (event instanceof NavigationStart) { 
        this.navigate(event)
      }
    })
  }

  navigate(event: any) { 
    this.message = event.url
  }
}
