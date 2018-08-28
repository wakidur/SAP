import { Component } from '@angular/core';

@Component({
    selector: 'app-version-parent',
    template: `
        <h2>Source code version</h2>
        <button ()="newMinor()">New minor version </button>
        <button (click)="newMajor()">New major version</button>
        <app-version-child [major]="major"  [minor]="minor"></app-version-child>
    `,
    styleUrls: ['./name.component.scss']
})
export class VersionParentComponent {
    major = 1;
    minor = 23;

    newMinor() {
        this.minor++;
    }

    newMajor() {
        this.major++;
        this.minor = 0;
    }
}
