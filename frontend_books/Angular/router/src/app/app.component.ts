import {Router} from '.4.4.6@@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router:Router){
    
  }
  toProductDetails(){
    this.router.navigate(['/product',2])
  }
}
