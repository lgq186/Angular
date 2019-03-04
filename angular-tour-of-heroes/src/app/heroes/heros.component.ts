import { Component, OnInit } from '@angular/core';
import {HeroService} from "../hero.service";
import {Hero} from "../hero";

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes : Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    // this.heroes = this.heroService.getHeroes();
  }

  add(name: string):void {
    name = name.trim();
    if (!name){ return;}
    this.heroService.addHero({name} as Hero)
      .subscribe(hero =>{
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero):void{
    this.heroes = this.heroes.filter(h=> h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
