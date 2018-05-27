import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './name.component.html',
    styleUrls: ['./name.component.scss'],
    template: `
        <h1>{{title}}</h1>
        <h2>My favorite hero is : {{myHero}} </h2>
    `,
    template: `
        <h1>{{title}}</h1>
        <h2>My favorite hero is: {{myHero}}</h2>
        <p>Heroes:</p>
        <ul>
            <li *ngFor="let hero of heroes">
                {{ hero }}
            </li>
        </ul> 
    `
})
export class AppComponent implements OnInit {
    private title: string;
    private myHero: string;
    
    constructor(title: string, myHero: string) {
        this.title = title || 'Tour of Heroes';
        this.myHero = myHero || 'Windstorm';
     }

    ngOnInit(): void { }
}

// step - 2
export class AppCtorComponent {
    title: string;
    myHero: string;

    constructor() {
        this.title = 'Tour of Heroes';
        this.myHero = 'Windstorm';
    }
}

// Step - 3
export class AppComponentt {
    title = 'Tour of Heroes';
    heroes = ['Windstorm', 'Bombasto', 'Mangeta', 'Tornado'];
    myHero = this.heroes[0]
}
