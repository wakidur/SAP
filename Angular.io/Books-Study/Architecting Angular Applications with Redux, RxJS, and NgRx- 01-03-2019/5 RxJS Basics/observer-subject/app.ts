import { Subject } from "./subject";
import { Observer } from "./observer";

const subject = new Subject();
const observer  = <Observer> {
    update: () => console.log("First Observer Update"),
};

const observer2 = <Observer> {
    update: () => console.log("Second Observe update")
}

subject.attach(observer);
subject.attach(observer2);
subject.notify();