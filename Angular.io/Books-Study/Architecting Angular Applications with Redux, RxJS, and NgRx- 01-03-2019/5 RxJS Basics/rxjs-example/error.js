let streamData = Rx.Observable.create(observer => {
    observer.error("we have an error");
});

streamData.subsscribe(
    data => console.log("Data ", data),
    error => console.error("Error", error)
);

