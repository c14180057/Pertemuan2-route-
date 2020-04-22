import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
    constructor (private router : Router) {}
  Login(){
    this.router.navigate(['/home2']);
  }
  Login2()
  {
      this.router.navigate(['/home', 3]);
  }
}
