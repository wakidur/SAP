(function(){
    'use strict';

    angular
        .module('adminApp')
        .factory('appsFieldServiceSvc', constructor);

        constructor.$inject = ['$rootScope', '$http'];

    function constructor($rootScope , $http) {
        var service = {
            getPagesFieldName: getPagesFieldName
        };

        return service;

        function getPagesFieldName() {
            $rootScope.fieldName = {
                companyName: "Featured",
                firstName: "First Name",
                lastName: "Last Name",
                fullName: "Full Name",
                loginTitle: "Sign in to continue. ",
                registerTitle: "signup to get instant access. ",
                lockTitle: "Please login to unlock your screen. ",
                recoverTitle: "Password Reset ",
                maintenanceTitle: "site is under maintenance",
                email: "Enter email",
                password: "Password",
                retypePassword: "Retype Password",
                rememberMe: "Remember Me",
                iAgree: "I agree with the",
                forgotPassword: "Forgot your password",
                login: "Login",
                signup: "Signup",
                unlock: "Unlock",
                reset: "Reset",
                createAccount: "Create account",
                needSignup: "Need to Signup",
                haveAccount: "Have an account",
                registerNow: "Register Now",

                // Lock page 
                

                // 404 
                trySearch: "Try with a search",
                fourOFourTitle: "404",
                fourOFourSubTitle : "We couldn't find this page.",
                fourOFourMessage: "The page you are looking for does not exists.",
                
                // 500 
                fiveOFiveTitle: "500",
                fiveOFiveSubTitle : "Oh! Something went wrong. ",
                fiveOFiveMessage: "Don't worry, we're now checking this.",
                fiveOFiveparagrap: "In the meantime, please try one of those links below or come back in a moment",


                // recover 
                recoverMessage: "Fill with your mail to receive instructions on how to reset your password.",

                // maintenance
                maintenanceMessage: "We'll back online shortly!",

                // extra words
                terms : "terms"
                
            };
            return $rootScope.fieldName;
         }
    }
})();