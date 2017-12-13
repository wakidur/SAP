//app is being used for application module. all business module will be loaded into app dynamically.
var ERP_MODULES = {
    APP: { name: 'app', code: 0 },
    ADMIN: { name: 'ADMIN', code: 1 },
    HRM: { name: 'HR', code: 2 },
    GS: { name: 'GS', code: 3 },
    OM: { name: 'OM', code: 4 },
    COM: { name: 'COM', code: 5 },
    PM: { name: 'PM', code: 6 },
    FA: { name: 'FA', code: 7 },
    PD: { name: 'PD', code: 8 },
    MGP: { name: 'MGP', code: 9 },
};
//when someone click menu, then clicked menu information is stored into pageInfo
//for using whole application.
var pageInfo = {
    id: '',
    locationID: '',
    applicationID: '',
    parentID: '',
    moduleName: '',
    pageTitle: '',
    serialNo: '',
    pageType: '',
    imageName: '',
    uRL: '',
    action: ''
};
//before login succesfully, user information is stored into userInfo
var userInfo = {
    locationID: 0,
    userPKID: 0,
    empPKID: 0,
    employeeID: '',
    userName: "",
    companyID: 0,
    company: "",
    password: ""
};
//after login succesfully, user information is stored into userInfo
var userInfo  = {
company:"Next IT Limited",
companyID:100000001,
empPKID:100000001,
employeeID:"1002",
locationID:1,
userName:"Admin",
userPKID:100000001
}