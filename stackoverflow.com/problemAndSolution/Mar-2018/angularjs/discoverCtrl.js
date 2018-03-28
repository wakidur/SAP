(function(){
    'use strict';

    angular
        .module('module')
        .controller('discoverCtrl', construnctor)

        construnctor.$inject = ['$scop', '$q'];

    function construnctor($scope, $q) {
        /* jshint validthis:true */
        var vm = this;
		
		vm.submitButt = submitButt ;
		
		function submitButt(hostname, username,password  ){
			if( !hostname || !username || !password){} else {
				$scope.flag = true;
				gethostsbyip.gethostsbyip(hostname, username, password).then(function(res){
					$scope.test = false;
				}).catch(function(e){
					$scope.test = false;
				})
			}
		}
    }
})();