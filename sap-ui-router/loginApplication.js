let ipAddressName = window.location.hostname;
let ipAddressHost = window.location.host;
let apiServicePath = webApi.adminLocalUrl;
let isAdminUser = false;

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

function checkForApplicationUpdat(params) {
    if ( window.applicationCache != undefined && window.applicationCache != null) {
        window.applicationCache.addEventListener('updateready', updateApplication);
    } else {
        loadLoginPage();
        
    }
}

function updateApplication(params) {
    if ( window.applicationCache.status != 4) {
        return;
    }
    window.applicationCache.removeEventListener('updateready', updateApplication);
    window.applicationCache.swapCache();
    window.location.reload();
    
}

//login
function login() {
    try {
        if (isAdminUser) {
            runApp(logindata);
        } else {
            if (validateForm()) {
                //show loading icon
                //get user name, password from login textbox
                var userName = document.getElementById("userName").value;
                var pws = document.getElementById("password").value;
                var userPKID = userInfo.userPKID;

                //if user change userID after Sessionout 
                if (isSessionTimeout) {
                    var currentUser = userInfo.userName.toLowerCase();
                    var newUser = userName.toLowerCase();
                    if (currentUser !== newUser) {
                        isSessionTimeout = false;
                        //New User Login after Auto Logout
                        clearTranCache();
                    }
                }

                //var url = servicePath + "login/GetLoginUser/?userName=" + userName + "&password=" + pws + "&previousID=" + userPKID;

                ////get new xmlhttprequest;
                //httpRequest = xmlHttpRequest();
                //httpRequest.open("POST", url, true); //here true means asynchronous
                //httpRequest.setRequestHeader("Accept", "json"); //text/javascript
                //httpRequest.onreadystatechange = processRequest; //callback
                //httpRequest.send();

                //httpRequest = new XMLHttpRequest();
                //httpRequest.open('POST', servicePath + 'login/GetLoginUser', true);
                //httpRequest.setRequestHeader('Content-Type', 'application/json');
                //httpRequest.onreadystatechange = processRequest; //callback
                //httpRequest.send(JSON.stringify({ userName: userName, password: pws, previousID: userPKID }));
                //httpRequest.responseType = "json";
                //showOverlayOnLogin();

                //$.post(servicePath + 'login/GetLoginUser', { jsonData: { userName: userName, password: pws, previousID: userPKID } },
                //    function (response) {
                //        if (response.status == true) {
                //        }
                //    }, "json");

                //    $.ajax({
                //        type: "POST",
                //        url: servicePath + 'login/GetLoginUser',
                //        data:  JSON.stringify({ userName: userName, password: pws, previousID: userPKID }),
                //        success: processRequest,
                //        dataType: "json",
                //        async: true,
                //        contentType: 'application/json; charset=utf-8',
                //    });
                $.ajax({
                    url: servicePath + 'login/GetLoginUser',
                    type: "POST",
                    data: JSON.stringify({ userName: userName, password: pws, previousID: userPKID }),
                    dataType: "json",
                    async: true,
                    contentType: 'application/json; charset=utf-8',
                    success: function (data) {
                        processRequest(data);
                        if (window.java)
                            window.java.AppLogIn(userName, pws);
                    },
                    error: function (msg) {
                        document.getElementById("errormsg").innerHTML = "An Error Occured";
                        hideOverlayOnLogin();

                    }
                });
                showOverlayOnLogin();
            }
        }
    }
    catch (e) {
        throw e;
    }
}







