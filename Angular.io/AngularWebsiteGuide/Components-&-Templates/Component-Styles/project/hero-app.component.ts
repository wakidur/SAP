import { Component, HostBinding } from '@angular/core';
import { Hero } from "./hero";

@Component({
    selector: 'app-root',
    template: `
        <h1> Tour of Heroes</h2>
        <app-hero-main [hero]="hero"></app-hero-main>
    `,
    style: ['h1 {font-weigth: normal;}']
})
export class HeroAppComponent  {
    hero = new Hero('Human Torch', ['Mister Fantastic', 'Invisible Woman', 'Thing']);

    @HostBinding('class') get themeClass() {
        return 'theme-light';
    }
}
