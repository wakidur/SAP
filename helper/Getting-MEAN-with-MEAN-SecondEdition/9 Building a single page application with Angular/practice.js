function homeCtrl($scope, loc8rData, geolocation) {
    let vm = this;
    vm.showError = function (error) {
        $scope.$apply(function(){
            vm.message = error.message;
        });
    };

}