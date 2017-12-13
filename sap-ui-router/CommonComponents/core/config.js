
//we have developed every module solution and published every webapi separately.
//for development two server
var ERP_MODULES_URL = {
    //Admin Module
    adminLocalUrl: 'http://127.0.0.1:2001/api/',
    adminRemoteUrl: 'http://192.168.11.2:2000/adminservice/api/',
    adminFileRemoteUrl: 'http://192.168.11.6:2000/folders_and_files/',

    //General Setup Module 2004 for client
    gsLocalUrl: 'http://127.0.0.1:2005/api/',
    gsRemoteUrl: 'http://192.168.11.2:2000/gsservice/api/',

    //Order Management Module 2009 for client
    omLocalUrl: 'http://127.0.0.1:2008/api/',
    omRemoteUrl: 'http://192.168.11.2:2000/omsservice/api/',

    //Material Gate Pass Module 2010 for client
    mgpLocalUrl: 'http://127.0.0.1:2011/api/',
    mgpReportFileUrl: 'http://127.0.0.1:2011/Report/PDF/',

    //Human Resource Management Module 2016 for client
    hrmLocalUrl: 'http://127.0.0.1:2015/api/',
    hrmRemoteUrl: 'http://192.168.11.2:2000/hrmservice/api/',
    hrmReportFileUrl: 'http://127.0.0.1:2015/Report/PDF/',

    //Commertial Management Module 2019 for client
    comLocalUrl: 'http://127.0.0.1:2018/api/',
    comRemoteUrl: 'http://127.0.0.1:2018/api/',
    comReportFileUrl: 'http://127.0.0.1:2018/Report/PDF/',

    //Production Management Module 2021 for client
    pmLocalUrl: 'http://127.0.0.1:2020/api/',
    pmReportFileUrl: 'http://127.0.0.1:2020/Report/PDF/',

    //Fixed Asset Module 2023 for client
    faLocalUrl: 'http://127.0.0.1:2022/api/',
    faRemoteUrl: 'http://192.168.11.2:2000/faservice/api/',

    //Pakaging and Delivery Asset Module 2025 for client
    pdLocalUrl: 'http://127.0.0.1:2024/api/',
    pdReportFileUrl: 'http://127.0.0.1:2024/Report/PDF/',

    signalrurl: 'http://192.168.11.6:5030'
};
var keyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    esc: 27,
    space: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    del: 46,
    F2: 113
};

//here is the common publisable service url, like Controllers/Common in GS webapi project
var url = {
    gsRemoteUrl: ERP_MODULES_URL.gsRemoteUrl, //SETUP SVC for Development
    adminRemoteUrl: ERP_MODULES_URL.adminRemoteUrl, //ADMIN SVC for Development
    adminFileRemoteUrl: ERP_MODULES_URL.adminFileRemoteUrl,
    gmRemoteUrl: ERP_MODULES_URL.gmRemoteUrl,
    smpRemoteUrl: ERP_MODULES_URL.smpRemoteUrl,
    faRemoteUrl: ERP_MODULES_URL.faRemoteUrl, //SETUP SVC for Development
};

var messageCode = {
    saveCode: "501",
    editCode: "502",
    deleteCode: "503",
    confirmDelete: "602",
    confirmDirtyDelete: "610",
    duplicateCheck: "810",
    emptyList: "815",
    confirmNodeChange: "615"
};


//For menu permission
var permitActions = {

    Add: 1,
    Edit: 2,
    Delete: 3,
    Preview: 4,
    Print: 5,
    Cancel: 6,
    StandBy: 7,
    Approve: 8
};

//var btnGrps = {
//    addNew: '1',
//    save: '2',
//    reset: '3',
//    cancel: '4',
//    refresh: '5',
//    print: '6',
//    printPreview: '7',
//    SaveReset: '2,3',
//    SaveResetRefresh: '2,3,5',
//    SaveResetCncl: '2,3,4',
//    SaveResetCnclRefreh: '2,3,4,5',
//    SaveResetPrntPrev: '2,3,6,7',
//    AddSaveResetPrntPrev: '1,2,3,6,7',
//    RefPrntPrev: '5,6,7',
//};
//var moduleName = {
//    Setup: 'Setup'
//};

//var moduleCode = {
//    Admin: 1,
//    GS: 2,
//    GM: 3,
//    LM: 4,
//    YM: 5,
//    KM: 6,
//    DYE: 7,
//    DC: 8,
//    UFS: 9

//};
var format = {
    shortYearDateFormat: "dd/MM/yy",
    dateFormat: "dd/MM/yyyy",
    dateTimeFormat: "dd/MM/yy" + " hh:mm:ss a",
    monthDayFormat: "MM, dd",
    monthYearFormat: "MM, yyyy",
    timeFormat: "hh:mm a"
};

//var date = {
//    serverDate: new Date(),
//    clientDate: new Date()
//};

var modalTypes = {
    gridModal: 1,
    entryModal: 2
};

var separator = {
    '/': 1,
    ',': 2,
    '-': 3
};

var dataType = {
    Int: 1,
    Text: 2,
    Date: 3
};
var fieldSource = {
    'Master Data': 1,
    'BIC': 2,
    'Master Data/BIC': 3
};

var codeGenValueSource = {
    'Object value': 1,
    'Custom value': 2
}

var codeGenSystemValueSource = {
    'Text': 1,
    'Year': 2,
    'Month': 3,
    'Day': 4,
    'Timespan': 5,
    'Current User': 6,
    'Current Company': 7
}

var codeGenVarient= {
    'Item': '101'
}

var priority = {
    'Urgent': '1',
}

var productionStatus = {

    Start: 1,
    Finish: 2,
    OutOfOrder: 3,
    Logout: 4
  
};


app.constant("appConstants", {
    'url': url,
    'messageCode': messageCode,
    'keyCodes': keyCodes,
    //'moduleName': moduleName,
    'formate': format,
    'modalTypes': modalTypes,
    'dataType': dataType,
    'permitActions': permitActions,
    'productionStatus': productionStatus,
    'separator': separator,
    'fieldSource': fieldSource,
    'codeGenValueSource': codeGenValueSource,
    'codeGenSystemValueSource': codeGenSystemValueSource,
    'codeGenVarient': codeGenVarient,
    //'btnGrps': btnGrps,
    //'moduleCode': moduleCode
    'priority': priority
});
