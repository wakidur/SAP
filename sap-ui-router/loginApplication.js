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
function validateForm(params) {
    
}
//use for form validation
function validateForm() {

    //attach tool tip
    //$('#userName').tooltip('destroy');
    //$('#password').tooltip('destroy');

    $('#userName').tooltip();
    $('#password').tooltip();

    $('#userName').tooltip('hide');
    $('#password').tooltip('hide');

    flag = 0;
    if (document.getElementById("userName").value == "") {
        document.getElementById("errormsg").innerHTML = "";
        //document.getElementById("user").innerHTML = " Username is required";
        //document.getElementById("user").style.color = "Red";

        $('#userName').tooltip('show');
        document.getElementById("userName").style.borderBottomColor = "Red";

        document.getElementById("userName").focus();
        flag = 1;
    } else if (document.getElementById("userName").value != "" && document.getElementById("password").value == "") {
        document.getElementById("password").focus();
    }

    if (document.getElementById("password").value == "") {
        document.getElementById("errormsg").innerHTML = "";
        //document.getElementById("pws").innerHTML = "Password is required.";
        //document.getElementById("pws").style.color = "Red";

        $('#password').tooltip('show');
        document.getElementById("password").style.borderBottomColor = "Red";

        flag = 1;
    }
    if (flag == 1)
        return false;
    else
        return true;
}
//create new xmlhttpRequest
function xmlHttpRequest() {
    try {
        var httpRequest = null;
        // Opera 8.0+, Firefox, Chrome, Safari
        httpRequest = new XMLHttpRequest();

    } catch (e) {
        // Internet Explorer Browsers
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                return false;
            }
        }
    }
    return httpRequest;
}
//loginCall back
function processRequest(obj) {
    try {

        hideOverlayOnLogin();
        var responsetext = obj;
        if (isSessionTimeout) {
            if (responsetext.user.length > 0) {
                if ((_checkValidLogin(responsetext))) {
                    runApp(logindata);
                }
            }
        } else {

        }
        logindata = [];
        logindata = responsetext;
        if (responsetext.user.length > 0) {
            var timer = setInterval(function () {
                if (domReadyCompleted) {
                    document.getElementById("btnLogIn").disabled = false;
                    if (!(_checkValidLogin(responsetext))) { clearInterval(timer); return; }
                    runApp(responsetext);
                    clearInterval(timer);
                }
            }, 0);
        } else {
            document.getElementById("errormsg").innerHTML = "Account not found.";
        }

    } catch (e) {
        document.getElementById("errormsg").innerHTML = e.message;
    }
};

//for development version
function _checkValidLogin(logindata) {
    try {
        var isValid = false;
        //for invalid user
        if (logindata.user[0].isValidUser === true) {
            //document.getElementById("userName").innerHTML = "";
            //document.getElementById("password").innerHTML = "";
            //document.getElementById("userName").focus();
            document.getElementById("errormsg").innerHTML = "Username or Password you have entered is invalid.";
            document.getElementById("errormsg").style.color = "Red";
            return isValid;
        }

        //for invalid password
        if (logindata.user[0].invalidPSW === true) {
            document.getElementById("errormsg").innerHTML = "Invalid Password";
            document.getElementById("password").focus();
            return isValid;
        }

        //alreaded logged from another ip
        if (logindata.user[0].isLogged === true) {
            document.getElementById("errormsg").innerHTML = "This user is already logged in from another workstation.";
            return isValid;
        }

        //locked from administrator
        if (logindata.user[0].isLock === true) {
            document.getElementById("errormsg").innerHTML = "User account has been locked. Please contact system administrator.";
            return isValid;
        }

        else {
            isValid = true;
        }
        return isValid;

    } catch (e) {
        throw e;
    }

}

//set user information
function _setUserInformation(logindata) {
    //this information for valid user
    var data = {
        locationID: logindata[0].locationID,
        userPKID: logindata[0].userPKID,
        userName: logindata[0].userName,
        companyID: logindata[0].companyID,
        company: logindata[0].companyName,
        empPKID: logindata[0].empPKID,
        employeeID: logindata[0].employeeID,
        password: logindata[0].password
    };
    //set login information to javascript variables
    setLoginInfo(data);
}
//getUserwise menu
function getUserwiseMenu() {
    if (angular !== undefined) {
        angular.element(document).injector().invoke(function ($rootScope, $http) {
            //make authentication object
            var authentication = {
                userID: userInfo.userName,
                password: 'Admin',
            };
            //encode authentication object
            var objJson = angular.toJson(authentication);
            var encodedData = window.btoa(objJson);
            $http.defaults.headers.common.Authorization = 'Basic ' + encodedData;
            $rootScope.userInfo = userInfo;
            $rootScope.$broadcast("reloadMenu", isSessionTimeout);
        });
    }
}

function getLocationWiseBusinessRules() {
    //if (angular !== undefined) {
    //    angular.element(document).injector().invoke(function (businessRulesSvc) {
    //        businessRulesSvc.getYarnTypeRules();
    //    });
    //}
}

//load Shell page
//For LogIn: loadShellPage(true)
//For LogOut: loadShellPage(false)
function loadShellPage(isLogout) {
    if (angular !== undefined) {
        return angular.element(document).injector().invoke(function (shellPageSvc, $state, $q) {
            var deferred = $q.defer();
            if (!isLogout)
                $state.params = { isWindowOpen: true, isWindowClosing: false, allWindowClose: false };

            shellPageSvc.showShellPage(isLogout).then(function (result) {
                if (result) {
                    deferred.resolve(result);
                }
            });

            return deferred.promise;
        });
    }
}

//Clear Error Msg
function errorMsg() {
    if (document.getElementById("password").value != "") {
        document.getElementById("pws").innerHTML = "";
    }
    if (document.getElementById("userName").value != "") {
        document.getElementById("user").innerHTML = "";
    }

    if (document.getElementById("company").value !== "") {
        document.getElementById("companyName").innerHTML = "";
    }

    if (document.getElementById("companyShortName").value !== "") {
        document.getElementById("cmpShorName").innerHTML = "";
    }
}

//propulate companyName dropdrown 
function propulateCompanyName(list) {
    try {
        //remove previous data
        var companylist = document.querySelectorAll('#companyDropdrown li');
        for (var j = 0; l = companylist[j]; j++) {
            l.parentNode.removeChild(l);
        }
        //prepare company dropdrown
        var companyNameList = document.getElementById("companyDropdrown");



        var templi = document.createElement('li');
        templi.setAttribute("class", "list-group-item no-padding");
        templi.setAttribute("tabindex", "-1");
        var anchora = document.createElement('a');
        anchora.setAttribute("data-toggle", "modal");
        anchora.setAttribute("data-backdrop", "static");
        anchora.setAttribute("class", "btn btn-xs");
        anchora.setAttribute("data-target", "#myModal");
        anchora.innerHTML = 'Create New Company';
        templi.appendChild(anchora);
        companyNameList.appendChild(templi);
        for (var i = 0; i < list.length; i++) {
            // Create the list item:
            var item = document.createElement('li');
            item.setAttribute("class", "list-group-item no-padding");
            item.setAttribute("tabindex", "-1");
            var anchora = document.createElement('a');
            anchora.setAttribute("class", "btn btn-xs");
            anchora.setAttribute("onclick", 'javascript:selectedCompany(event)');
            anchora.setAttribute("companyID", list[i].companyID);
            //   anchora.setAttribute("href", "=#");         
            anchora.appendChild(document.createTextNode(list[i].companyName));

            item.appendChild(anchora);
            // Add it to the list:
            companyNameList.appendChild(item);
        }
        document.getElementById("errormsg").innerHTML = "";

        //select init value 
        if (!isSessionTimeout) {
            var selcectCompany = document.getElementById("selectedCompanyName");
            selcectCompany.innerHTML = 'Select Company<span class="caret"></span>';
        }


        document.getElementById("companyDropdrownList").style.display = "block";
        document.getElementById("selectedCompanyName").focus();

        isAdminUser = true;
    } catch (e) {
        throw e;
    }
}

function selectedCompany(e) {

    document.getElementById("company").value = "";
    document.getElementById("companyShortName").value = "";
    document.getElementById("company").focus();
    var comapnyName = e.target.innerHTML;
    var companyNamed = document.getElementById("selectedCompanyName");
    companyNamed.innerHTML = comapnyName;
    tempCompany = {};
    tempCompany.companyNameID = e.target.attributes["companyID"].value;
    tempCompany.comapnyName = comapnyName;
    document.getElementById("errormsg").innerHTML = "";
}

//launch Application
function runApp(logindata) {
    if (document.getElementById("companyDropdrownList").style.display == "block") {
        var e = document.getElementById("selectedCompanyName");
        var defaultText = "Select Company";
        var comapnName = defaultText.toString().toLowerCase().trim();
        var selectedText = e.textContent.toString().toLowerCase().trim();

        if (selectedText === comapnName) {
            // if (document.getElementById("selectedCompanyName").style.display == "block" && e.options[e.selectedIndex].text === "") {
            document.getElementById("errormsg").innerHTML = "Company Name is required.";
            document.getElementById("errormsg").style.color = "Red";
            return;
        } else {
            document.getElementById("errormsg").innerHTML = " ";
        }
        isAdminUser = false;

        //     if (e.options[e.selectedIndex].value !== null) {

        //  var companyNameID = JSON.parse(e.options[e.selectedIndex].value);

        logindata.user[0].companyName = tempCompany.comapnyName;
        logindata.user[0].companyID = parseInt(tempCompany.companyNameID);

        //set company locationID
        for (var i = 0, len = logindata.companyList.length; i < len; i++) {

            if (logindata.user[0].companyID === logindata.companyList[i].companyID) {
                logindata.user[0].locationID = logindata.companyList[i].locationID;
                break;
            }
        }
    }
    //}

    _setUserInformation(logindata.user);
    //loadMenu
    getUserwiseMenu();
    //Business Rules which are differenciated by LocationID
    getLocationWiseBusinessRules();

    document.getElementById("login").style.display = "none";
    if (isSessionTimeout) {
        var model = document.getElementsByClassName("modal fade ng-scope in");
        if (model.length > 0) {
            for (var j = 0; j < model.length; j++) {
                document.getElementsByClassName("modal fade ng-scope in")[j].style.display = "block";
            }

        }

        var calStyle = document.getElementsByClassName("ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-datepicker-multi ui-datepicker-multi-2");
        if (calStyle.length > 0) {
            for (var i = 0; i < calStyle.length ; i++) {
                document.getElementsByClassName("ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-datepicker-multi ui-datepicker-multi-2")[i].style.display = "none";
            }
        }

    }
    document.getElementById("appMenu").classList.remove("hide");
    if (!isSessionTimeout) {
        loadShellPage(false).then(function ($state) {

            pageInfo = {
                projectFileName: 'ADMIN',
            };
            openLinkWindow({ stateFileName: 'dashboardState', pageTitle: 'DashBoard' });

            //require(['ADMIN/States/dashboardState'], function (pageState) {
            //    if (!$state.get('dashboardState.detail'))
            //        pageState.stateCtor('dashboardState'); //Create Login state if not found

            //    $state.transitionTo('dashboardState.detail', {}, { notify: true }).then(function () {
            //        console.log('dashboard state created');
            //    });
            //});
        });
    }
}

//close the current window
function cancel() {
    try {
        //logout after isSessionTimeout
        if (isSessionTimeout) {
            logout();
        }
        var win = window.open('', '_parent');
        win.close();
    } catch (e) {
        throw e;
    }
}

//get CompanyName for Admin User
function getCompanyName(longinData) {
    //try {
    //    setTimeout(function () {
    //        var companyUrl = servicePath + "login/GetCompanyName";
    //        var httpRequest = new xmlHttpRequest();
    //        httpRequest.open("GET", companyUrl, false);
    //        httpRequest.setRequestHeader("Accept", "json");
    //        httpRequest.onreadystatechange = function () {
    //            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
    //                companyList = JSON.parse(httpRequest.responseText);
    //                //if more then one company
    //                if (companyList.length > 1) {

    //                    propulateCompanyName(companyList);
    //                    document.getElementById("companyName").style.display = "block";
    //                    document.getElementById("lblCompanyName").style.display = "block";
    //                    document.getElementById("dpdcompanyName").style.display = "block";
    //                    document.getElementById("dpdcompanyName").focus();
    //                    isAdminUser = true;
    //                    runApp();
    //                    //}
    //                } else {
    //                    if (companyList.length > 0) { //for one company
    //                        //saveLoginInfo(longinData);
    //                        //loginCallBack(longinData);

    //                        var data = {
    //                            locationID: companyList[0].locationID,
    //                            userPKID: longinData[0].userPKID,
    //                            userName: longinData[0].userName,
    //                            CompanyNameID: companyList[0].companyNameID,
    //                            companyID: 100000001,//companyList[0].companyID,
    //                            company: companyList[0].companyName
    //                        };

    //                        var t = [];
    //                        t.push(data);
    //                        _setUserInformation(t);
    //                        runApp();

    //                        //saveloginInfoInSession(data);
    //                    }
    //                }

    //            }
    //        }
    //        httpRequest.send();
    //    }, 0);


    //} catch (e) {
    //    throw e;
    //}
}

function showOverlayOnLogin(id) {

    var w = 0;
    var h = 0;

    if (!(document.documentElement.clientWidth == 0)) {
        w = document.documentElement.clientWidth;
        h = document.documentElement.clientHeight;
    }
    else {
        w = document.body.clientWidth;
        h = document.body.clientHeight;
    }

    var content = document.getElementById('overlay-content');
    var contentWidth = parseInt(getComputedStyleForBusyIndicator(content, 'width').replace('px', ''));
    var contentHeight = parseInt(getComputedStyleForBusyIndicator(content, 'height').replace('px', ''));

    content.style.top = h / 2 - contentHeight / 2 + 'px';
    content.style.left = w / 2 - contentWidth / 2 + 'px';

    var overlayContainerId = !id ? 'overlay-container' : id;
    var overlayContainer = document.getElementById(overlayContainerId);
    overlayContainer.style.display = 'block';

}

function hideOverlayOnLogin(id) {
    var overlayContainerId = !id ? 'overlay-container' : id;
    var overlayContainer = document.getElementById(overlayContainerId);
    overlayContainer.style.display = 'none';
}

var getComputedStyleForBusyIndicator = function () {
    var func = null;
    if (document.defaultView && document.defaultView.getComputedStyle) {
        func = document.defaultView.getComputedStyle;
    } else if (typeof (document.body.currentStyle) !== "undefined") {
        func = function (element, anything) {
            return element["currentStyle"];
        };
    }

    return function (element, style) {
        return func(element, null)[style];
    };
}();


function saveComapny() {
    try {
        if (document.getElementById("company").value == "") {
            document.getElementById("companyName").innerHTML = "company name is required";
            document.getElementById("companyName").style.color = "Red";
            document.getElementById("company").focus();
            return;

        }

        if (document.getElementById("companyShortName").value === "") {
            document.getElementById("cmpShorName").innerHTML = "company short name is required";
            document.getElementById("cmpShorName").style.color = "Red";
            document.getElementById("companyShortName").focus();

        }
        else {
            var companyName = document.getElementById("company").value;
            var companyShortName = document.getElementById("companyShortName").value;

            var tempCompany = { companyName: companyName, companyShortName: companyShortName };
            //  var company = JSON.stringify(tempCompany);
            var url = "http://127.0.0.1:999/api/Company/SaveCompany";
            //var url = "http://192.168.9.6:125/api/Company/SaveCompany"; //For Publish

            //get new xmlhttprequest;
            httpRequest = xmlHttpRequest();
            httpRequest.open("POST", url); //here true means asynchronous
            httpRequest.setRequestHeader('Content-Type', 'application/json');
            httpRequest.setRequestHeader("Accept", "json"); //text/javascript
            //  httpRequest.setRequestHeader('Content-Length', posrData.length);
            httpRequest.onreadystatechange = companyCallBack;
            httpRequest.send(JSON.stringify(tempCompany));

            document.getElementById("myModal").style.display = "none";;
        }

    } catch (e) {
        throw e;
    }

}


function companyCallBack() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        // hideOverlayOnLogin();
        var responsetext = JSON.parse(httpRequest.responseText);
        var newCompamy = {};

        newCompamy.companyID = responsetext.id;
        newCompamy.companyName = responsetext.companyName;;
        newCompamy.locationID = responsetext.locationID;
        logindata.companyList.push(newCompamy);
        var companyNameList = document.getElementById("companyDropdrown");

        // Create the list item:
        var item = document.createElement('li');
        item.setAttribute("tabindex", "-1");
        item.setAttribute("class", "list-group-item no-padding");
        var anchora = document.createElement('a');

        anchora.setAttribute("companyID", responsetext.id);
        anchora.setAttribute("class", "btn btn-xs");
        anchora.setAttribute("onclick", 'javascript:selectedCompany(event)');
        anchora.appendChild(document.createTextNode(responsetext.companyName));
        item.appendChild(anchora);
        companyNameList.appendChild(item);
    }
}

function clearTranCache() {
    if (angular !== undefined) {
        angular.element(document).injector().invoke(function (dataCacheSvc) {
            dataCacheSvc.removeTranCache();
        });
    }
}








