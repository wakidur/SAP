// https://stackoverflow.com/questions/49529400/angularjs-promises-controller-service-doesnt-work

//https://stackoverflow.com/questions/49538970/angularjs-ng-change-only-firing-once-when-the-page-loads
(function(){
    'use strict';

    angular
        .module('module')
        .service('gethostsbyip', constructor)

        constructor.$inject = ['$http', '$q'];

    function constructor($http, $q) {
        this.gethostsbyip  = gethostsbyip ;

        function gethostsbyip (hostname, username, password) {
            var deffered = $q.defer();
            $http.post( REST_API_IP + 'discover?ip=' + hostname  + '&username=' + username  + '&password' + password).then(function (resp) { 
                deffered.resolve(resp);
                location.href="#createvirtualization";
                toastr.success('Your hosts, templates, networks have been updated!', 'Data was loaded!');
             }).catch(function(e){
				deffered.reject(e);
                toastr.error('Some data in your form is incorrect. Please, try again!', 'Error!');
            });
            return deffered.promise;

         }
        
    }
})();