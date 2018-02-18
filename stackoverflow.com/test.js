// <reference path="vendor/angular.js" />
// Minification is breaking my AngularJs code
// https://stackoverflow.com/questions/20266376/minification-is-breaking-my-angularjs-code

angular.module('account-module', [])
    .controller('ForgottenPasswordController', function ($scope, $http) {

        $scope.email = {
            value: '',
            isValid: false,
            containerStyle: "unvalidated",
            validate: function () {
                var valid = isEmailAdressValid($scope.email.value);
                $scope.email.isValid = valid;
                $scope.email.containerStyle = valid ? "valid" : "invalid";
                return valid;
            },
            removeErrorMessage: function() {
                $scope.email.containerStyle = "unvalidated";
            }
        };

        $scope.display = {
            formClass: '',
            congratulationsClass: 'hide'
        };

        $scope.submit = function (event) {
            event.preventDefault();

            var emailValid = $scope.email.validate();
            if (emailValid) {
                $http({
                    method: 'POST',
                    url: '/account/forgot-password',
                    params: { email: $scope.email.value },
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).success(function(data) {
                    $scope.success(data);
                }).error(function() { $scope.error(); });
            }
        };

        $scope.success = function (data) {
            switch (data.Outcome) {
                case 1:
                    $scope.display.formClass = "hide";
                    $scope.display.congratulationsClass = "";
                    break;
                case 2:
                    $scope.email.containerStyle = "invalid";
                    break; 
            }
        };

        $scope.error = function () {
            alert('Sorry, an error occurred.');
        };

        function isEmailAdressValid(emailAddress) {
            return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(emailAddress);
        }
    });


    // <reference path="vendor/angular.js" />


    // ngularjs minify best practice

    
    // https://stackoverflow.com/questions/18782324/angularjs-minify-best-practice
    var MyController = ['$scope', '$http', function($scope, $http) {
        $http.get('https://api.github.com/repos/angular/angular.js/commits')
          .success(function(commits) {
            $scope.commits = commits
          })
      }]