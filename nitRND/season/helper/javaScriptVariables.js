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
    INV: { name: 'INV', code: 10 },
    ORG: { name: 'ORG', code: 11 },
    ITM: { name: 'ITM', code: 12 },
    RPT: { name: 'RPT', code: 13 },
    MKT: { name: 'MKT', code: 14 },
    CR: { name: 'CR', code: 15 },
};

//version number set
var gsVersionNumber = "";//1.0.0

//after login succesfully, user information is stored into userInfo
var userInfo = {
    locationID: 0,
    userPKID: 0,
    empPKID: 0,
    employeeID: '',
    userName: "",
    companyID: 0,
    company: "",
    password: "",
    empOrgID: null,
    userTypeID: 0
};

//this object variable used to contain validation related property data 
var validationMsg = {

};

////we have developed every module solution and published every webapi separately.
////for development two server
var ERP_MODULES_URL = {
    //Admin Module
    adminLocalUrl: 'http://' + localIP + ':2001/api/',
    adminRemoteUrl: 'http://' + serverIP + ':2000/adminservice/api/',
    adminFileRemoteUrl: 'http://192.168.11.6:2000/folders_and_files/',

    //General Setup Module 2004 for client
    gsLocalUrl: 'http://' + localIP + ':2005/api/',
    gsRemoteUrl: 'http://' + serverIP + ':2000/gsservice/api/',

    //Order Management Module 2009 for client
    omLocalUrl: 'http://' + localIP + ':2008/api/',
    omRemoteUrl: 'http://' + serverIP + ':2000/omsservice/api/',
    omReportFileUrl: 'http://' + localIP + ':2008/Report/PDF/',

    //Material Gate Pass Module 2010 for client
    mgpLocalUrl: 'http://' + localIP + ':2011/api/',
    mgpReportFileUrl: 'http://' + localIP + ':2011/Report/PDF/',

    //Human Resource Management Module 2016 for client
    hrmLocalUrl: 'http://' + localIP + ':2015/api/',
    hrmRemoteUrl: 'http://' + serverIP + ':2000/hrmservice/api/',
    hrmReportFileUrl: 'http://' + localIP + ':2015/Report/PDF/',

    //Commertial Management Module 2019 for client
    comLocalUrl: 'http://' + localIP + ':2018/api/',
    comRemoteUrl: 'http://' + localIP + ':2018/api/',
    comReportFileUrl: 'http://' + localIP + ':2018/Report/PDF/',

    //Production Management Module 2021 for client
    pmLocalUrl: 'http://' + localIP + ':2020/api/',
    pmReportFileUrl: 'http://' + localIP + ':2020/Report/PDF/',

    //Fixed Asset Module 2023 for client
    faLocalUrl: 'http://' + localIP + ':2022/api/',
    faRemoteUrl: 'http://' + serverIP + ':2000/faservice/api/',

    //Pakaging and Delivery Asset Module 2025 for client
    pdLocalUrl: 'http://' + localIP + ':2024/api/',
    pdReportFileUrl: 'http://' + localIP + ':2024/Report/PDF/',

    // Inventory Manageemnt 2027
    invLocalUrl: 'http://' + localIP + ':2026/api/',
    invRemoteUrl: 'http://' + serverIP + ':2000/invservice/api/',
    invReportFileUrl: 'http://' + localIP + ':2026/Report/PDF/',
    // ORG Manageemnt 2029
    orgLocalUrl: 'http://' + localIP + ':2028/api/',
    orgRemoteUrl: 'http://' + serverIP + ':2000/orgservice/api/',

    // itm Manageemnt 2031
    itmLocalUrl: 'http://' + localIP + ':2030/api/',
    itmRemoteUrl: 'http://' + serverIP + ':2000/itmservice/api/',

    // report management 2033
    rptLocalUrl: 'http://' + localIP + ':2032/api/',
    rptRemoteUrl: 'http://' + serverIP + ':2000/rptservice/api/',

    // MKT Manageemnt 2035
    mktLocalUrl: 'http://' + localIP + ':2034/api/',
    mktRemoteUrl: 'http://' + serverIP + ':2000/mktservice/api/',
    mktReportFileUrl: 'http://' + localIP + ':2034/Report/PDF/',


    // CR Manageemnt 2037
    crLocalUrl: 'http://' + localIP + ':2036/api/',
    crRemoteUrl: 'http://' + serverIP + ':2000/crservice/api/',
    crReportFileUrl: 'http://' + localIP + ':2036/Report/PDF/',
    signalrurl: 'http://192.168.11.6:5030'
};
