import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroine } from '../heroine';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
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

  }

}
