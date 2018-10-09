'use strict';

define([], function () {
    var gs = angular.module(ERP_MODULES.GS.name);
    var url = {
        gsLocalUrl: ERP_MODULES_URL.gsLocalUrl
    };
    currentDevModuleURL = url.gsLocalUrl;
    gs.constant("gsConstants", {
        'url': url,
    });

});