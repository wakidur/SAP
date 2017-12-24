let ipAddressName = window.location.hostname;
let ipAddressHost = window.location.host;
let apiServicePath = webApi.adminLocalUrl;
let isAdminUser = false;
let isSessionTimeout = false;
let flag = 0;

let logindata = [];

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

//User login 
function userLogin() {
    try {
        if (isAdminUser) {
            runApp(logindata);
        } else {
            if(validateForm()) {
                // show loadin icon
                // get user user, password from login textbox
                let userName = document.getElementById('userName').value;
                let password = document.getElementById('password').value;
                

                // if user change UserID arter sessionout
                if(isSessionTimeout){
                    let currentUser = userInfo.userName.toLowerCase();
                    let newUser = userName.toLowerCase();
                    if (currentUser != newUser ) {
                        isSessionTimeout = false;
                        // New user login after Auto Logout
                        ClerTranCache();
                    }
                }
                $.ajax({
                    url: apiServicePath + 'login/getLoginUser',
                    type: "POST",
                    data: JSON.stringify({userName: userName, password: password}),
                    dataType: "json",
                    async: true,  
                    contentType: 'application/json; charset=utf-8',
                    success: function(data) {
                        processRequest(data);
                    },
                    error: function (message) {
                        document.getElementById('errormsg').innerHTML = "An Error Occured";
                        hideLoadingBar();
                        
                    }
                });
                showLoadingBar();
            }
            
        }
    } catch (e) {
        throw e;
    }
}

// form validation
function validateForm() {
    // Attach tool tip
    $('#userName').tooltip();
    $('#password').tooltip();

    $('#userName').tooltip('hide');
    $('#password').tooltip('hide');

    flag = 0;

    if (document.getElementById('userName').value == "") {
        document.getElementById('errormsg').innerHTML = "";
        $('#userName').tooltip('show');
        document.getElementById('userName').style.borderBottomColor = "red";
        document.getElementById('userName').focus();
        flag = 1;
        
    } else if( document.getElementById('userName').value != "" && document.getElementById('password').value == "") {
        document.getElementById('password').focus();
    } 
    if(document.getElementById('password').value == ''){
        document.getElementById("errormsg").innerHTML = "";
        $('#password').tooltip('show');
        document.getElementById('password').style.borderBottomColor = "Red";
        flag = 1;
    }

    if (flag == 1) {
        return false;
    } else {
        return true;
    }
}

// Login Call back 

function processRequest(resultObject) {
    try {
        hideLoadingBar();
        let responsetext = resultObject;
        if(isSessionTimeout) {
            if (responsetext.user.length > 0 ) {
                if((_checkValidLogin(responsetext)))
                runApp(logindata);
            }
        } else {

        }
        logindata = [];
        logindata = responsetext;
        if (responsetext.user.length > 0 ) {
            let timer = setInterval(() => {
                if (domReadyComplate) {
                    document.getElementById("btnLogIn").disable = false;
                    if (!(_checkValidLogin(responsetext))) {
                        clearInterval(timer);
                        return;
                        
                    }
                    runApp(responsetext);
                    clearInterval(timer);
                    
                }

            },0);
            
        } else {
            document.getElementById("errormsg").innerHTML = "Account not found.";
        }
    } catch (error) {
        document.getElementById("errormsg").innerHTML = e.message;
        
    }
}

// for development verison 

function _checkValidLogin(logingdata) {
    try {
        let isValid = false;
        if (logindata.user[0].isValidUser === true) {
            document.getElementById('errormsg').innerHTML = "username and password you have enter is invalid.";
            document.getElementById('errormsg').style.color = "Red";
            return isValid;
        }

        // for invalid passwor 
        if(logindata.user[0].invalidPSW === true){
            document.getElementById('errormsg').innerHTML = "Invalid Password";
            document.getElementById('password').focus();
            return isValid;
        }

        // alreadd login for another ip 

        if (logindata.user[0].isLogged === true) {
            document.getElementById('errormsg').innerHTML = "This user is alredy logged in form another workstation";
            return isValid;
        }

        if(logindata.user[0].isLock === true){
            document.getElementById('errormsg').innerHTML = "User accournt has been locked. p";
            return isValid;
        }
        else {
            isValid = true;
        }

        return isValid;

    } catch (error) {
        throw error;
    }
}
