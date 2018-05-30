import {
    AfterContentChecked, 
    AfterContentInit, 
    AfterViewChecked,
    AfterViewInit,
    DoCheck, 
    OnChanges, 
    OnDestroy, 
    OnInit, 
    SimpleChanges
} from "@angular/core";
import { Component, Input } from "@angular/core";
import { LoggerService } from "./logger.service";

let nextId = 1;

export class PeekABoo implements OnInit {
    constructor(private logger: LoggerService) {}

    // implement OnInit's `ngOnInit` method 
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.logIt(`OnInit`);
        
    }
    logIt(msg: string) {
        this.logger.log(`#${nextId++} ${msg}`);
    }
}

@Component({
    selector: 'peek-a-boo',
    template: '<p>Now you see my hero, {{name}}</p>',
    styles: ['p {background: LightYellow; padding: 8px}']
})

export class PeekABooComponent extends PeekABoo implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() name: string;

    private verb = "initialized";

    constructor(logger: LoggerService) {
        super(logger);

        let is = this.name ? 'is' : 'is not';
        this.logIt(`name ${is} known at construction`);
    }
    // only called for/if there is an @input variable set by parent.

    ngOnChanges(changes: SimpleChanges) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        
    }

    ngOnInit(): void { }
}
