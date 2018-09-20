class Tracker() {
    logger: Logger;
    constructor() {
        this.logger = new Logger()
    }
}

class TrackerExternalize {
    logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }
}

let trackerWithDBLog = new Tracker(new DBLogger());
let trackerWithMemoryLog = new Tracker(new MemoryLooger());

