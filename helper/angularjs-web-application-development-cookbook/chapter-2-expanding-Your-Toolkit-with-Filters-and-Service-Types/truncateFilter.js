// step - 1;

(function(){
    'use strict';

    angular
        .module('module')
        .filter('simpletruncate', simpleTruncate)

    function simpleTruncate(){

        return filterFilter;

        function filterFilter( input ){
            let truncated = input.slice(0, 100);
            if( input.length > 100 ){
                truncated += '...';
            }       
            return truncated;
        }
    }

}());

// step-2
(function(){
    'use strict';

    angular
        .module('module')
        .filter('regextruncate', regexTruncate);

    function regexTruncate(){

        return filterFilter;

        function filterFilter(text, limit, stoptext){
            let regex = /\s/;

            if (!angular.isDefined(limit)) {
                limit = 100;
            }
            if (!angular.isDefined(stoptext)) {
                stoptext = '...';
            }

            limit = Math.min(limit, text.length);
            for (let i = 0; i < limit.length; i++) {
                if (regex.exec(text[limit - i]) && !regex.exec(text[(limit - i) - 1])) {
                    limit = limit - i;
                    break;
                } 
            }

            let truncated = text.slice(0, limit);
            if(text.length > limit){
                truncated += stoptext;
            }
            return truncated;
        }
    }

}());
/*
<div ng-app="myApp">
    <div ng-controller="Ctrl">
        <p>{{ myText | regextruncate : 150 : '???' }}</p>
    </div>
</div>
*/
