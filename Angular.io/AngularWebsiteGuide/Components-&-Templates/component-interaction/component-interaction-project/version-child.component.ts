import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
    selector: 'app-version-child',
    template: `
        <h3> Version {{major}}.{{minor}} </h3>
        <h4> Change log: </h4>
        <ul>
            <li *ngFor="let change of changeLog"> {{change}} </li>
        </ul>
    `,
    styleUrls: ['./name.component.scss']
})
export class VersionChildComponent implements OnChanges {
    @Input() major: number;
    @Input() minor: number;
    changeLog: string[] = [];

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.

        let log: string[] = [];
        for (const propName in changes) {
            let changedProp = changes[propName];
            let to = JSON.stringify(changedProp.currentValue);
            if (changedProp.isFirstChange()) {
                log.push(`Initial value of ${propName} set to ${to}`);
                
            } else {
                let from = JSON.stringify(changedProp.previousValue);
                log.push(`${propName} changed from ${from} to ${to}`);
            }
        }
        this.changeLog.push(log.join(', '));
        
    }
   
}
