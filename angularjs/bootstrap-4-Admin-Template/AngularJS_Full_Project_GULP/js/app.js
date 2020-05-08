// Default colors
var brandPrimary = '#20a8d8';
var brandSuccess = '#4dbd74';
var brandInfo = '#63c2de';
var brandWarning = '#f8cb00';
var brandDanger = '#f86c6b';

var grayDark = '#2a2c36';
var gray = '#55595c';
var grayLight = '#818a91';
var grayLighter = '#d1d4d7';
var grayLightest = '#f8f9fa';


/**
 * Main Module
 */
(function () {
  'use strict';
  angular.module('app', [
    'ui.router',
    'oc.lazyLoad',
    'pascalprecht.translate',
    'ncy-angular-breadcrumb',
    'angular-loading-bar'
  ]);
})();

/**
 * App config
 */

(function () {
  'use strict';
  angular
    .module('app')
    .config(configConfig);

  configConfig.$inject = ['cfpLoadingBarProvider'];

  function configConfig(cfpLoadingBarProvider) {
    
    //Turn the loading bar on or off:
     //cfpLoadingBarProvider.includeBar = false;
    //Customize the template:
    //cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading...</div>';
    // Turn the spinner on or off:
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 1;

    //Position the template:
    //cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
    //cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Custom Loading Message...</div>';

  }
}());

/**
 * App run
 */
(function () {
  'use strict';
  angular
    .module('app')
    .run(runRun);

  runRun.$inject = ['$rootScope', '$state', '$stateParams'];

  function runRun($rootScope, $state, $stateParams) {
    $rootScope.$on('$stateChangeSuccess', function () {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
    $rootScope.$state = $state;
    return $rootScope.$stateParams = $stateParams;
  }
}());


// Old
/**
// angular
// .module('app', [
//   'ui.router',
//   'oc.lazyLoad',
//   'ncy-angular-breadcrumb',
//   'angular-loading-bar'
// ])
// .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
//   cfpLoadingBarProvider.includeSpinner = false;
//   cfpLoadingBarProvider.latencyThreshold = 1;
// }])
// .run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
//   $rootScope.$on('$stateChangeSuccess',function(){
//     document.body.scrollTop = document.documentElement.scrollTop = 0;
//   });
//   $rootScope.$state = $state;
//   return $rootScope.$stateParams = $stateParams;
// }]);
 */


//  main 
// Default colors
/*
var brandPrimary =  '#20a8d8';
var brandSuccess =  '#4dbd74';
var brandInfo =     '#63c2de';
var brandWarning =  '#f8cb00';
var brandDanger =   '#f86c6b';

var grayDark =      '#2a2c36';
var gray =          '#55595c';
var grayLight =     '#818a91';
var grayLighter =   '#d1d4d7';
var grayLightest =  '#f8f9fa';

angular
    .module('app', [
        'ui.router',
        'oc.lazyLoad',
        'pascalprecht.translate',
        'ncy-angular-breadcrumb',
        'angular-loading-bar',
        'ngSanitize',
        'ngAnimate'
    ])
    .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
        cfpLoadingBarProvider.latencyThreshold = 1;
    }])
    .run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
        $rootScope.$on('$stateChangeSuccess',function(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
        $rootScope.$state = $state;
        return $rootScope.$stateParams = $stateParams;
    }]);
    */