// footerGeneric
(function () {
    'use strict';

    angular
        .module('loc8rApp')
        .directive('footerGeneric', footerGeneric);

    footerGeneric.$inject = ['$window'];

    function footerGeneric($window) {
        // Usage:
        //     <footer-generic></footer-generic>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: '/common/directives/footerGeneric/footerGeneric.template.html'
        };
        return directive;

        function link(scope, element, attrs) {}
    }

})();

// navigation
(function () {
    'use strict';

    angular
        .module('loc8rApp')
        .directive('navigation', navigation);

    directive.$inject = ['$window'];

    function directive($window) {
        // Usage:
        //     <navigation></navigation>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: '/common/directives/navigation/navigation.template.html'
        };
        return directive;

        function link(scope, element, attrs) {}
    }

})();

// pageHeader.directive
(function () {
    'use strict';

    angular
        .module('loc8rApp')
        .directive('pageHeader', pageHeader);

    pageHeader.$inject = ['$window'];

    function pageHeader($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            scope: { // Define isolate scope, passing throught content object
                content: '=content'
            },
            templateUrl: '/common/directives/pageHeader/pageHeader.template.html'
        };
        return directive;

        function link(scope, element, attrs) {}
    }

})();


// addHtmlLineBreaks

(function () {
    'use strict';

    angular
        .module('loc8rApp')
        .filter('addHtmlLineBreaks', addHtmlLineBreaks)

    function addHtmlLineBreaks() {

        return filterFilter;

        function filterFilter(text) {
            let outputText = text.replace(/\n/g, '<br>');
            return outputText;
        }
    }

}());


(function () {
    'use strict';

    angular
        .module('module')
        .controller('locationDetailCtrl', locationDetailCtrl)

    locationDetailCtrl.$inject = ['$location', '$routeParams'];

    function locationDetailCtrl($location, $routeParams) {
        /* jshint validthis:true */
        var vm = this;
        vm.locationid = $routeParams.locationid;
        activate();

        function activate() {}
    }
})();


// Add a method to the data service to call the API

function loc8rData($http) {
    let locationByCoords = function (lat, lng) {
        return $http.get(`/api/locations?lng=${lng}&${lat}=${lat}&${maxDistance}=20`)
    }
    let locationById = function (locationid) {
        return $http.get(`/api/locations/${locationid}`);
    }
    return {
        locationByCoords: locationByCoords,
        locationById: locationById
    };

}