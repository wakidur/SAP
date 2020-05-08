// controller.js
angular
    .module('adminApp')
    .controller('languageCtrl', languageCtrl);

languageCtrl.$inject = ['$translate', '$scope'];

function languageCtrl($translate, $scope) {

    var languages = [{
            lang: 'Polish',
            langKey: 'pl',
            flag: 'Poland.png'
        },
        {
            lang: 'English',
            langKey: 'en',
            flag: 'United-Kingdom.png'
        },
        {
            lang: 'Español',
            langKey: 'es',
            flag: 'Spain.png'
        }
    ]

    function checkLanguage(languages, langKey) {
        languages.map(function(language) {
            if (language.langKey == langKey) {
                $scope.flag = language.flag;
                $scope.lang = language.lang;

                console.log(language);
                return language;
            } else {
                return null;
            }
        });
        console.log(languages);
    }


    $scope.languages = languages;
    // initialize the language chage menu
    checkLanguage(languages, $translate.use())
    $scope.changeLanguage = function(langKey) {
        $translate.use(langKey);
        checkLanguage(languages, langKey)
    };
}