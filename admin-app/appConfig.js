(function(){
    'use strict';

    angular
        .module('adminApp')
        .config(configConfig)

    configConfig.$inject = [];

    function configConfig() {

    }

}());

(function(){
    'use strict';

    angular
        .module('adminApp')
        .run(runRun);

    runRun.$inject = ['$rootScope', '$state', '$stateParams'];

    function runRun($rootScope, $state, $stateParams){
        $rootScope.$on('$stateChangeSuccess', function () {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
          });
          $rootScope.$state = $state;
          return $rootScope.$stateParams = $stateParams;
    }

}());