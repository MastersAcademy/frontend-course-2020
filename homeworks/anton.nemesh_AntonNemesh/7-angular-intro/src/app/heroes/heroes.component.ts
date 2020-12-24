import { Component, OnInit } from '@angular/core';
import { HEROES } from  '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  public heroes = HEROES;
  public selectedHero: string;

  constructor() { }

  onSelected(hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
  }

}
