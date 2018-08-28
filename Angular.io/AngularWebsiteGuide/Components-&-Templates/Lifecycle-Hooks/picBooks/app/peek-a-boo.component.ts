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
    constructor(private logger: LoggerService) { }

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
        let changesMsgs: string[] = [];
        for (const propName in changes) {
            if (propName === "name") {
                let name = changes['name'].currentValue;
                changesMsgs.push(`name ${this.verb} to "${name}"`);

            } else {
                changesMsgs.push(propName + ' ' + this.verb);
            }
        }
        this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
        this.verb = 'changed'; // next time it will be a change

    }

    // Beware! called frequently!
    // Called in every change detection cycle anywhere on the page

    ngDoCheck() {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        this.logIt(`DoCheck`);

    }

    ngAfterContentInit() {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        this.logIt(`AfterContentInit`);
    }

    // Beware! called frequently!
    // Called in every change detection cycle anywhere on the page

    ngAfterContentChecked() {
        //Called after every check of the component's or directive's content.
        //Add 'implements AfterContentChecked' to the class.
        this.logIt(`AfterContentChecked`);
    }

    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.logIt(`AfterViewChecked`);
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.logIt(`OnDestroy`)
    }

   
}
