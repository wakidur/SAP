import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-countdown-timer',
    template: '<p> {{message}} </p>',
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
    private intervalId: number = 0;
    private message: string;
    private seconds: number = 11;

    clearTimer() {
        clearInterval( this.intervalId );
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.start();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.clearTimer();
    }

    start() {
        this.countDown();
    }
    stop() {
        this.clearTimer();
        this.message = `Holding at T-${this.seconds} seconds`;
    }

    private countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if (this.seconds === 0) {
                this.message = "Blast Off!";
                
            } else {
                if (this.seconds < 0) {
                    this.seconds = 10;
                } // reset
                this.message = `T-${this.seconds} seconds and counting`;
            }
        }, 1000);
        
    }
}
