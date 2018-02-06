function  buildOptionPromise() {
    var defer = $q.defer();
    // Build options 

    $.all([
        $q.when($scope.dtOptions),
        $q.when($scope.dtColumns),
        $q.when($scope.dtColumnsDefs)
    ]).then(function (result) {
        var dtOptions = result[0],
            dtColumns = rusult[1],
            dtColumnsDefs = result[2];

        
    })
}