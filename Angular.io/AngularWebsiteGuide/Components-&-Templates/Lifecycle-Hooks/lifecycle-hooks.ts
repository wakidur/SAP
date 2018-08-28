import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-name',
    templateUrl: './name.component.html',
    styleUrls: ['./name.component.scss']
})
export class PeekABoo implements OnInit {
    constructor(private logger: LoggerService) { }
     
    //implement OnInit's 'ngOnInit' method
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.logIt(`OnInit`);
    }
    logIt(msg: string) {
        this.logger.log(`#${nextId++} ${msg}`);
    }

}
