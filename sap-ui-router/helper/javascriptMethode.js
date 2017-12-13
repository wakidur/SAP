//set user information
function setLoginInfo(user) {
    userInfo.locationID = user.locationID;
    userInfo.userPKID = user.userPKID;
    userInfo.userName = user.userName;
    userInfo.companyID = user.companyID;
    userInfo.company = user.company;
    userInfo.empPKID = user.empPKID;
    userInfo.employeeID = user.employeeID;
    userInfo.password = user.password ? user.password : "";
}

//clear User Information
function clearUserInformation() {
    userInfo.locationID = null;
    userInfo.userPKID = null;
    userInfo.userName = null;
    userInfo.companyID = null;
    userInfo.company = null;
    userInfo.empPKID = null;
    userInfo.employeeID = null;
    userInfo.password = null;
}

function queryData(defaultData) {
    defaultData = defaultData || {};

    this.userID = defaultData.userID || null;
    this.pageDataCount = defaultData.pageDataCount || 10;
    this.queryEvent = defaultData.queryEvent || 0;
    this.pageNo = defaultData.pageNo == 0 ? 0 : defaultData.pageNo ? defaultData.pageNo : 1;
    this.spParams = defaultData.spParams || [];
    this.ddlProperties = defaultData.ddlProperties || [];
    this.searchParams = defaultData.searchParams || [];
    this.isRefresh = defaultData.isRefresh || false;
}