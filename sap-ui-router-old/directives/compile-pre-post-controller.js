(function () {
    'use strict';

    angular
        .module ('appModule')
        .directive ('compilePrePostController', constructor);

    /*constructor.$inject = ['$window'];

    function constructor($window) {
        // Usage:
        //     <div compile-pre-post-controller></div>
        // Creates:
        //
        var directiveObj = {
            link : link,
            compile : compile,
            controller : controller,
            restrict : 'EA'
        };
        return directiveObj;

        function compile(tElement, tAttributes) {
            console.log(tAttributes.text + " - In compile.. ");
            return {
                pre: function(scope, iElement, iAttributes, controller){
                    console.log(iAttributes.text + " - In Pre");
                },
                post: function(scope, iElement, iAttributes, controller){
                    console.log(iAttributes.text + " - In Post");
                }
            };
        }
        function link(scope, element, attrs, controller) {
           
        }
        function controller($scope, $element, $attrs) {
            console.log($attrs.text + " - In Controller ");
        }
    }

*/
constructor.$inject = ['$window', '$interpolate'];
function constructor($window , $interpolate) {
    // Usage:
    //     <div compile-pre-post-controller></div>
    // Creates:
    //
    var directiveObj = {
        compile : compile,
        controller : controller,
        link : link,
        restrict : 'EA'
    };
    return directiveObj;

    function compile(tElement, tAttributes) {
        tElement.css({
            "background-color": "yellow",
            "font-weight": "bolder",
            "border" : "1px solid #09c"
          });
        console.log(tAttributes.text + " - In compile.. ");
        return {
            pre: function(scope, iElement, iAttributes, controller){
                console.log(iAttributes.text + " - In Pre");
            },
            post: function(scope, iElement, iAttributes, controller){
                console.log(iAttributes.text + " - In Post");
                if(iAttributes.text === "3"){
                    iElement.css({
                        "background-color": "green",
                        "font-weight": "normal",
                        "border" : "1px solid rad"
                      });
                }
                iElement.on("click", scope.btnClick);
            }
        };
    }
    function link(scope, iElement, iAttributes, controller) {
        console.log(iAttributes.text + " - In Post");
        if(iAttributes.text === "3"){
            iElement.css({
                "background-color": "green",
                "font-weight": "normal",
                "border" : "1px solid rad"
              });
        }
        iElement.on("click", scope.btnClick);
       
    }
    function controller($scope, $element, $attrs) {
        console.log($attrs.text + " - In Controller ");
        
        var v = $interpolate($attrs.text)($scope);
        console.log(v + " - In Controller instance value ");
        $scope.btnClick = function(){
            alert(v);
        }

    }
}

})();