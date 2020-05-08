let streamData = Rx.Observable.create(observer => {
    observer.next(1);
    observer.complete();
});

streamData.subscribe(
    data => console.log("data", data),
    error => console.error("Error", error),
    () => console.log("Complete")
);