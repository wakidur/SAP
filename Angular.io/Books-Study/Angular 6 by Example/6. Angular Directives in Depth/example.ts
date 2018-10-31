@HostBinding('readOnly') get busy() {
    return this.isbusy
};

@HostBinding('attr.disabled') get canEdit() : string {
    return !this.isAdmin ? "disabled" : null;
};

@HostBinding('class.valid') get valid {
    return this.control.valid;
}

@HostBinding("style.borderWidth") get focus(): string {
    return this.focus ? "3px" : "1px";
}


@import { Directive } from '@angular/core';

@Directive({ selector: '[button, div, span, input]' })
export class ClickTrackerDirective {
    constructor() { }
    @HostListerner('click', ['$event.target']) onclick(element: any) {
        console.log('button', element, 'was clicked');
    }
}
