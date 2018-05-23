import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./name.component.scss'],
    providers: [heroService]
})
export class HeroListComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    constructor(private service: HeroService) { }

    ngOnInit() { 
        this.heroes = this.service.getHeroes();
    }
    selectHero(hero: Hero) {
        this.selectedHero = hero;
    }
}
