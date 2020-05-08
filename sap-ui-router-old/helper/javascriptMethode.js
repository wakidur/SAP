//set user information
function setLoginInfo(user) {
    userInfo.userName = user.userName;
    userInfo.password = user.password ? user.password : "";
}

//clear User Information
function clearUserInformation() {
    userInfo.userName = null;
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