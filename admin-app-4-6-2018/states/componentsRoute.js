(function () {
  'use strict';

  angular
    .module('adminApp')
    .config(configConfig);

  configConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider'];

  function configConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {
    $stateProvider.state('adminApps.components', {
      url: "/components",
      abstract: true,
      template: '<ui-view></ui-view>',
      ncyBreadcrumb: {
        label: 'Components'
      }
    });
    $stateProvider.state('adminApps.components.buttons', {
      url: '/buttons',
      // loaded into ui-view of parent's template
      templateUrl: 'views/components/buttons.html',
      controller: 'bottonsCtrl',
      controllerAs: 'vm',
      ncyBreadcrumb: {
        label: 'Buttons'
      },
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
          // you can lazy load controllers
          return $ocLazyLoad.load({
            files: ['controllers/components/bottonsCtrl.js']
          });
        }]
      }
    });
    /*
      $stateProvider.state('adminApps.components.social-buttons', {
        url: '/social-buttons',
        // loaded into ui-view of parent's template
        templateUrl: 'views/components/social-buttons.html',
        ncyBreadcrumb: {
          label: 'Social Buttons'
        }
      });
      $stateProvider.state('adminApps.components.cards', {
        url: '/cards',
        // loaded into ui-view of parent's template
        templateUrl: 'views/components/cards.html',
        ncyBreadcrumb: {
          label: 'Cards'
        }
      });
      $stateProvider.state('adminApps.components.forms', {
        url: '/forms',
        // loaded into ui-view of parent's template
        templateUrl: 'views/components/forms.html',
        ncyBreadcrumb: {
          label: 'Forms'
        }
      });
      $stateProvider.state('adminApps.components.switches', {
        url: '/switches',
        // loaded into ui-view of parent's template
        templateUrl: 'views/components/switches.html',
        ncyBreadcrumb: {
          label: 'Switches'
        }
      });
      $stateProvider.state('adminApps.components.tables', {
        url: '/tables',
        // loaded into ui-view of parent's template
        templateUrl: 'views/components/tables.html',
        ncyBreadcrumb: {
          label: 'Tables'
        }
      })*/
  }
}());