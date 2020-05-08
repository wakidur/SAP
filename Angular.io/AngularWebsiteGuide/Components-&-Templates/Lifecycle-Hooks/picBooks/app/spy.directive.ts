import { Directive, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from "./logger.servies";

let nextId = 1;

// Spy on any element to which it is applied. 
// You can apply the spy to any native or component element and it'll be initialized and destroyed at the same time as that element. Here it is attached to the repeated hero <div>
// Usage: <div mySpy> ... </div>

@Directive({
    selector: '[mySpy]',
})
export class SpyDirective implements OnInit, OnDestroy { 

    constructor( private logger: LoggerService ) {}

    ngOnInit() {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        this.logIt(`OnInit`);
    }

    ngOnDestroy() {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.logIt('onDestroy');
    }

    private logIt(msg: string) {
        this.logger.log(`Spy #${nextId} ${msg}`);
    }
}