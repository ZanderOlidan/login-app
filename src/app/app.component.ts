import { Component } from '@angular/core';
import { LogInComponent } from './log-in/log-in.component';

@Component({
  selector: 'app-root',
  // template: `
  //   <h1> {{ title }} </h1>
  //   <h2> {{ hero.name }} details! </h2>
  //   <div>
  //     <label>Name: </label>
  //     <input [(ngModel)]="hero.name" placeholder="name">
  //   </div>
  //  `
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  // user = {
  //   name: "Zander",
  //   age: 15,
  //   gender: "Male"
  // }
  
}

export class Hero {
  id: number;
  name: string;
}