import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
<<<<<<< HEAD
=======
import { Heroine } from '../heroine';
>>>>>>> 52ddb924f72c3393082a1a9102959217ad7f3b28

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
<<<<<<< HEAD
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
=======
    name: 'Akash',
    age: 20
  };
  heroine: Heroine = {
    id: 2,
    name: 'Meenu',
    age: 20
  };
  constructor() { }

  ngOnInit() {

>>>>>>> 52ddb924f72c3393082a1a9102959217ad7f3b28
  }

}
