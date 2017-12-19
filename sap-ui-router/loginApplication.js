let ipAddressName = window.location.hostname;
let ipAddressHost = window.location.host;
let apiServicePath = webApi.adminLocalUrl;

/*
let hello = function () {
    console.log("hello world");
}()
hello world
*/
let getComputedStyleForLoadingIndicatorExpression = function() {
    let func = null;
    if( document.defaultView && document.defaultView.getComputedStyle ){
        func = document.defaultView.getComputedStyle;
    } else if (typeof( document.body.currentStyle) !== "undefine" ) {
        func = function ( element, anything ) {
            return element['currentStyle'];
        }
    }
    return function (element, style ){
        return func( element, null)[style];
    }
}();

/*
(function myFunc() {
    console.log("Declarative function ");
  })()
 Declarative function 
*/
function getComputedStyleForLoadingIndicatorDeclaration (params) {
    let func = null;
    if( document.defaultView && document.defaultView.getComputedStyle ){
        func = document.defaultView.getComputedStyle;
    } else if (typeof( document.body.currentStyle) !== "undefine" ) {
        func = function ( element, anything ) {
            return element['currentStyle'];
        }
    }
    return function (element, style ){
        return func( element, null)[style];
    }
};



// get login page 
function loadApplicationLoginPage(params) {
    showLoadingBar();
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
        if (this.readyState  === this.DONE ) {
            document.getElementById('login').innerHTML = xmlHttp.responseText;
            initClock()
        }
    };
    xmlHttp.open('GET', 'views/layout/login.html');
    xmlHttp.send();
}

function showLoadingBar(id) {
    let w = 0, h = 0;
    if ( !(document.documentElement.clientWidth  == 0 ) ) {
        w = document.documentElement.clientWidth;
        h = document.documentElement.clientWidth
        
    } else {
        w = document.body.clientWidth;
        h = document.body.clientHeight;
    } 
    let container = document.getElementById('overlay-container');
    let containerWidth = parseInt(getComputedStyleForLoadingIndicatorExpression( container, 'width').replace('px', ''));
    let containerHeight = parseInt(getComputedStyleForLoadingIndicatorExpression( container, 'height').replace('px', ''));

    container.style.top = h / 2 - containerHeight / 2 + 'px';
    container.style.left = w / 2 - containerWidth / 2 + 'px';

    let overlayContainerId = !id ? 'overlay-container' : id;
    let overlayContainer = document.getElementById(overlayContainerId);
    overlayContainer.style.display = 'block';
    
}

function hideLoadingBar(id) {
    let overlayContainerId = !id ? "overlay-container" : id;
    let overlayContainer = document.getElementById(overlayContainerId);
    overlayContainer.style.display = 'none';
}







