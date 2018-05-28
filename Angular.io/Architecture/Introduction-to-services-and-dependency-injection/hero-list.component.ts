import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
    selector: 'app-name',
    templateUrl: './name.component.html',
    styleUrls: ['./name.component.scss'],
    providers: [HeroService]
})
export class NameComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
