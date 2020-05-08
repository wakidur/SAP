let zone = new NgZone({
    enableLongStackTrace: false
});
let doWork = function () {
    console.log("Working");
}
zone.onMicrotaskEmpty.subscribe((data: any) => {
    console.log("Done!");
});
zone.run(()=> {
    doWork();
    setTimeout(() => {
        console.log("Hard");
        doWork();
    }, 200);
    doWork();
});

Working  // sync call 
Working  // sync call 
Done!   // main execution complete  
Hard     // timeout callback 
Working  // async call 
Done!   // async execution complete

