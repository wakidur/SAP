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

    omRemoteUrl: ERP_MODULES_URL.omRemoteUrl,   
    crRemoteUrl: ERP_MODULES_URL.crRemoteUrl,   
    orgRemoteUrl: ERP_MODULES_URL.orgRemoteUrl, 
    comRemoteUrl: ERP_MODULES_URL.comRemoteUrl, 
    itmRemoteUrl: ERP_MODULES_URL.itmRemoteUrl, 
    mktRemoteUrl: ERP_MODULES_URL.mktRemoteUrl, 
    invRemoteUrl: ERP_MODULES_URL.invRemoteUrl,
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
    Text: { id: 1, name: "Text" },
    Int: { id: 2, name: "Integer" },
    Number: { id: 3, name: "Numeric" },
    Date: { id: 4, name: "Date" },
    Time: { id: 5, name: "Time" },
    DataTime: { id: 6, name: "Date & Time" }
};

var fieldSource = {
    'Master Data': 1,
    'BIC': 2,
    'Master Data/BIC': 3
};

var codeGenValueSource = {
    'Object value': 1,
    'Custom value': 2
};

var codeGenSystemValueSource = {
    'Text': 1,
    'Year': 2,
    'Month': 3,
    'Day': 4,
    'Timespan': 5,
    'Current User': 6,
    'Current Company': 7
};

var installmentTypes = {
    equalTo: { id: 1, name: "Equal To", value: 100, devidedBy: 1 },
    half: { id: 2, name: "Half", value: 50, devidedBy: 2 },
    oneThrid: { id: 3, name: "One Third", value: 33.33, devidedBy: 3 },
    oneFourth: { id: 4, name: "One Fourth", value: 25, devidedBy: 4 },
    oneFifth: { id: 5, name: "One Fifth", value: 20, devidedBy: 5 }
};

var codeGenVarient = {
    'Item': '101'
};

var priority = {
    'Urgent': '1',
};

var productionStatus = {
    Start: 1,
    Finish: 2,
    OutOfOrder: 3,
    Logout: 4,
    Stop: 5
};
//used in order when non-stock order then 1 when stock order then 2 when sub cotactor order then 3
var orderCtgCode =
   {
       NonStockOrderCode: 1,
       StockOrderCode: 2,
       SubContactOrderCode: 3,
   };
var orderPrefix =
  {
      StockOrderPrefix: 'STK',
      SubContactOrderPrefix: 'SC',
  };

var logicalOperatorList = [{ id: 1, optionName: " AND ", value: ' && ' },
        { id: 2, optionName: " OR ", value: ' || ' }];

var conditionList = [
    { id: 1, optionName: "Euqal (==)", value: ' == '  },
    { id: 2, optionName: "Greater Than (>)", value: ' > ' },
    { id: 3, optionName: "Smaller Than (<)", value: ' < ' },
    { id: 4, optionName: "Greater Than Or Equal (>=)", value: ' >= ' },
    { id: 5, optionName: "Smaller Than Or Equal (<=)", value: ' <= ' },
    { id: 6, optionName: "Not Equal (!=)", value: ' != ' }
];
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
    'priority': priority,
    'installmentTypes': installmentTypes,
    'orderCtgCode': orderCtgCode,
    'orderPrefix': orderPrefix,
    'logicalOperatorList': logicalOperatorList,
    'conditionList': conditionList
});

app.value("appValues", {
    'currentModuleName': "",
    //'date': date,
    'pageInfo': ""
});