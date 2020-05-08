const Rx = require("rxjs/Rx");

class Producer {
    constructor() {
        this.counterMax = 5;
        this.current = 0;
    }

    hasValues() {
        return this.current < this.counterMax;
    }

    next() {
        return this.current++;
    }
}

let streamData = Rx.Observable.create(observer => {
    let producer = new Producer();

    while (producer.hasValues()) {
        observer.next(producer.next());
    }
});

streamData.subscribe(data => console.log("Data ", data));
// Data 0, Data 2, Data 2, Data 4;


// Observable error and completion;
let streamDataError = Rx.Observable.create(observer => {
    observer.error('we have an error');
})


