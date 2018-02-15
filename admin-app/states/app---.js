! function() {
 "use strict";
 angular.module("angle", ["app.core", "app.routes", "app.sidebar", "app.navsearch", "app.preloader", "app.loadingbar", "app.translate", "app.settings", "app.dashboard", "app.icons", "app.flatdoc", "app.notify", "app.bootstrapui", "app.elements", "app.panels", "app.charts", "app.forms", "app.locale", "app.maps", "app.pages", "app.tables", "app.extras", "app.mailbox", "app.utils"])
}(),
function() {
 "use strict";
 angular.module("app.bootstrapui", [])
}(),
function() {
 "use strict";
 angular.module("app.charts", [])
}(),
function() {
 "use strict";
 angular.module("app.colors", [])
}(),
function() {
 "use strict";
 angular.module("app.core", ["ngRoute", "ngAnimate", "ngStorage", "ngCookies", "pascalprecht.translate", "ui.bootstrap", "ui.router", "oc.lazyLoad", "cfp.loadingBar", "ngSanitize", "ngResource", "tmh.dynamicLocale", "ui.utils"])
}(),
function() {
 "use strict";
 angular.module("app.dashboard", [])
}(),
function() {
 "use strict";
 angular.module("app.elements", [])
}(),
function() {
 "use strict";
 angular.module("app.extras", [])
}(),
function() {
 "use strict";
 angular.module("app.flatdoc", [])
}(),
function() {
 "use strict";
 angular.module("app.forms", [])
}(),
function() {
 "use strict";
 angular.module("app.icons", [])
}(),
function() {
 "use strict";
 angular.module("app.lazyload", [])
}(),
function() {
 "use strict";
 angular.module("app.loadingbar", [])
}(),
function() {
 "use strict";
 angular.module("app.locale", [])
}(),
function() {
 "use strict";
 angular.module("app.mailbox", [])
}(),
function() {
 "use strict";
 angular.module("app.navsearch", [])
}(),
function() {
 "use strict";
 angular.module("app.notify", [])
}(),
function() {
 "use strict";
 angular.module("app.maps", [])
}(),
function() {
 "use strict";
 angular.module("app.pages", [])
}(),
function() {
 "use strict";
 angular.module("app.panels", [])
}(),
function() {
 "use strict";
 angular.module("app.preloader", [])
}(),
function() {
 "use strict";
 angular.module("app.routes", ["app.lazyload"])
}(),
function() {
 "use strict";
 angular.module("app.settings", [])
}(),
function() {
 "use strict";
 angular.module("app.sidebar", [])
}(),
function() {
 "use strict";
 angular.module("app.tables", [])
}(),
function() {
 "use strict";
 angular.module("app.translate", [])
}(),
function() {
 "use strict";
 angular.module("app.utils", ["app.colors"])
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   e.alerts = [{
    type: "danger",
    msg: "Oh snap! Change a few things up and try submitting again."
   }, {
    type: "warning",
    msg: "Well done! You successfully read this important alert message."
   }], e.addAlert = function() {
    e.alerts.push({
     msg: "Another alert!"
    })
   }, e.closeAlert = function(a) {
    e.alerts.splice(a, 1)
   }
  }()
 }
 angular.module("app.bootstrapui").controller("AlertDemoCtrl", e)
}(),
function() {
 "use strict";

 function e(e) {
  e.options({
   appendToBody: !0
  })
 }
 angular.module("app.bootstrapui").config(e), e.$inject = ["$uibTooltipProvider"]
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   e.singleModel = 1, e.radioModel = "Middle", e.checkModel = {
    left: !1,
    middle: !0,
    right: !1
   }
  }()
 }
 angular.module("app.bootstrapui").controller("ButtonsCtrl", e)
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   e.myInterval = 5e3, e.slides = [], e.addSlide = function(a) {
    a = a || 8, e.slides.push({
     id: a,
     image: "app/img/bg" + a + ".jpg",
     text: ["More", "Extra", "Lots of", "Surplus"][e.slides.length % 2] + " " + ["Cats", "Kittys", "Felines", "Cutes"][e.slides.length % 2]
    })
   }, e.addSlide(4), e.addSlide(7), e.addSlide(8)
  }()
 }
 angular.module("app.bootstrapui").controller("CarouselDemoCtrl", e)
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   e.today = function() {
    e.dt = new Date
   }, e.today(), e.clear = function() {
    e.dt = null
   }, e.disabled = function(e, a) {
    return "day" === a && (0 === e.getDay() || 6 === e.getDay())
   }, e.toggleMin = function() {
    e.minDate = e.minDate ? null : new Date
   }, e.toggleMin(), e.open = function(a) {
    a.preventDefault(), a.stopPropagation(), e.opened = !0
   }, e.dateOptions = {
    formatYear: "yy",
    startingDay: 1
   }, e.initDate = new Date("2019-10-20"), e.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate"], e.format = e.formats[0]
  }()
 }
 angular.module("app.bootstrapui").controller("DatepickerDemoCtrl", e)
}(),
function() {
 "use strict";

 function e(e) {
  var a = this;
  ! function() {
   function t(e, a) {
    e.ok = function() {
     a.close("closed")
    }, e.cancel = function() {
     a.dismiss("cancel")
    }
   }
   a.open = function(a) {
    var o = e.open({
      templateUrl: "/myModalContent.html",
      controller: t,
      size: a
     }),
     n = $("#modal-state");
    o.result.then(function() {
     n.text("Modal dismissed with OK status")
    }, function() {
     n.text("Modal dismissed with Cancel status")
    })
   }, t.$inject = ["$scope", "$uibModalInstance"]
  }()
 }
 angular.module("app.bootstrapui").controller("ModalController", e), e.$inject = ["$uibModal"]
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   e.totalItems = 64, e.currentPage = 4, e.setPage = function(a) {
    e.currentPage = a
   }, e.pageChanged = function() {
    console.log("Page changed to: " + e.currentPage)
   }, e.maxSize = 5, e.bigTotalItems = 175, e.bigCurrentPage = 1
  }()
 }
 angular.module("app.bootstrapui").controller("PaginationDemoCtrl", e)
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   e.dynamicPopover = "Hello, World!", e.dynamicPopoverTitle = "Title"
  }()
 }
 angular.module("app.bootstrapui").controller("PopoverDemoCtrl", e)
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   e.max = 200, e.random = function() {
    var a, t = Math.floor(100 * Math.random() + 1);
    a = t < 25 ? "success" : t < 50 ? "info" : t < 75 ? "warning" : "danger", e.showWarning = "danger" === a || "warning" === a, e.dynamic = t, e.type = a
   }, e.random(), e.randomStacked = function() {
    e.stacked = [];
    for (var a = ["success", "info", "warning", "danger"], t = 0, o = Math.floor(4 * Math.random() + 1); t < o; t++) {
     var n = Math.floor(4 * Math.random());
     e.stacked.push({
      value: Math.floor(30 * Math.random() + 1),
      type: a[n]
     })
    }
   }, e.randomStacked()
  }()
 }
 angular.module("app.bootstrapui").controller("ProgressDemoCtrl", e)
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   e.rate = 7, e.max = 10, e.isReadonly = !1, e.hoveringOver = function(a) {
    e.overStar = a, e.percent = a / e.max * 100
   }, e.ratingStates = [{
    stateOn: "fa fa-check",
    stateOff: "fa fa-check-circle"
   }, {
    stateOn: "fa fa-star",
    stateOff: "fa fa-star-o"
   }, {
    stateOn: "fa fa-heart",
    stateOff: "fa fa-ban"
   }, {
    stateOn: "fa fa-heart"
   }, {
    stateOff: "fa fa-power-off"
   }]
  }()
 }
 angular.module("app.bootstrapui").controller("RatingDemoCtrl", e)
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   e.mytime = new Date, e.hstep = 1, e.mstep = 15, e.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
   }, e.ismeridian = !0, e.toggleMode = function() {
    e.ismeridian = !e.ismeridian
   }, e.update = function() {
    var a = new Date;
    a.setHours(14), a.setMinutes(0), e.mytime = a
   }, e.changed = function() {
    console.log("Time changed to: " + e.mytime)
   }, e.clear = function() {
    e.mytime = null
   }
  }()
 }
 angular.module("app.bootstrapui").controller("TimepickerDemoCtrl", e)
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   function a(e) {
    for (var a = e.offsetTop; e.offsetParent;) e = e.offsetParent, a += e.offsetTop;
    return a - 40 - window.pageYOffset
   }

   function t(e) {
    for (var a = e.offsetLeft, t = e.offsetWidth; e.offsetParent;) e = e.offsetParent, a += e.offsetLeft;
    return a - t - window.pageXOffset
   }
   e.dynamicTooltip = "Hello, World!", e.dynamicTooltipText = "dynamic", e.htmlTooltip = "I've been made <b>bold</b>!", e.autoplace = function(e, o) {
    var n = "top";
    return a(o) < 0 && (n = "bottom"), t(o) < 0 && (n = "right"), n
   }
  }()
 }
 angular.module("app.bootstrapui").controller("TooltipDemoCtrl", e)
}(),
function() {
 "use strict";

 function e(e) {
  var a = this;
  ! function() {
   a.selected = void 0, a.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], a.getLocation = function(a) {
    return e.get("//maps.googleapis.com/maps/api/geocode/json", {
     params: {
      address: a,
      sensor: !1
     }
    }).then(function(e) {
     var a = [];
     return angular.forEach(e.data.results, function(e) {
      a.push(e.formatted_address)
     }), a
    })
   }, a.statesWithFlags = [{
    name: "Alabama",
    flag: "5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png"
   }, {
    name: "Alaska",
    flag: "e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png"
   }, {
    name: "Arizona",
    flag: "9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png"
   }, {
    name: "Arkansas",
    flag: "9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png"
   }, {
    name: "California",
    flag: "0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png"
   }, {
    name: "Colorado",
    flag: "4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png"
   }, {
    name: "Connecticut",
    flag: "9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png"
   }, {
    name: "Delaware",
    flag: "c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png"
   }, {
    name: "Florida",
    flag: "f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png"
   }, {
    name: "Georgia",
    flag: "5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png"
   }, {
    name: "Hawaii",
    flag: "e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png"
   }, {
    name: "Idaho",
    flag: "a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png"
   }, {
    name: "Illinois",
    flag: "0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png"
   }, {
    name: "Indiana",
    flag: "a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png"
   }, {
    name: "Iowa",
    flag: "a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png"
   }, {
    name: "Kansas",
    flag: "d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png"
   }, {
    name: "Kentucky",
    flag: "8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png"
   }, {
    name: "Louisiana",
    flag: "e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png"
   }, {
    name: "Maine",
    flag: "3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png"
   }, {
    name: "Maryland",
    flag: "a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png"
   }, {
    name: "Massachusetts",
    flag: "f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png"
   }, {
    name: "Michigan",
    flag: "b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png"
   }, {
    name: "Minnesota",
    flag: "b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png"
   }, {
    name: "Mississippi",
    flag: "4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png"
   }, {
    name: "Missouri",
    flag: "5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png"
   }, {
    name: "Montana",
    flag: "c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png"
   }, {
    name: "Nebraska",
    flag: "4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png"
   }, {
    name: "Nevada",
    flag: "f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png"
   }, {
    name: "New Hampshire",
    flag: "2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png"
   }, {
    name: "New Jersey",
    flag: "9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png"
   }, {
    name: "New Mexico",
    flag: "c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png"
   }, {
    name: "New York",
    flag: "1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png"
   }, {
    name: "North Carolina",
    flag: "b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png"
   }, {
    name: "North Dakota",
    flag: "e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png"
   }, {
    name: "Ohio",
    flag: "4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png"
   }, {
    name: "Oklahoma",
    flag: "6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png"
   }, {
    name: "Oregon",
    flag: "b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png"
   }, {
    name: "Pennsylvania",
    flag: "f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png"
   }, {
    name: "Rhode Island",
    flag: "f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png"
   }, {
    name: "South Carolina",
    flag: "6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png"
   }, {
    name: "South Dakota",
    flag: "1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png"
   }, {
    name: "Tennessee",
    flag: "9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png"
   }, {
    name: "Texas",
    flag: "f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png"
   }, {
    name: "Utah",
    flag: "f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png"
   }, {
    name: "Vermont",
    flag: "4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png"
   }, {
    name: "Virginia",
    flag: "4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png"
   }, {
    name: "Washington",
    flag: "5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png"
   }, {
    name: "West Virginia",
    flag: "2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png"
   }, {
    name: "Wisconsin",
    flag: "2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png"
   }, {
    name: "Wyoming",
    flag: "b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png"
   }]
  }()
 }
 angular.module("app.bootstrapui").controller("TypeaheadCtrl", e), e.$inject = ["$http"]
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   e.lineData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    series: [
     [12, 9, 7, 8, 5],
     [2, 1, 3.5, 7, 3],
     [1, 3, 4, 5, 6]
    ]
   }, e.lineOptions = {
    fullWidth: !0,
    height: 220,
    chartPadding: {
     right: 40
    }
   }, e.barBipolarOptions = {
    high: 10,
    low: -10,
    height: 220,
    axisX: {
     labelInterpolationFnc: function(e, a) {
      return a % 2 == 0 ? e : null
     }
    }
   }, e.barBipolarData = {
    labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
    series: [
     [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
    ]
   }, e.barHorizontalData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    series: [
     [5, 4, 3, 7, 5, 10, 3],
     [3, 2, 9, 5, 4, 6, 4]
    ]
   }, e.barHorizontalOptions = {
    seriesBarDistance: 10,
    reverseData: !0,
    horizontalBars: !0,
    height: 220,
    axisY: {
     offset: 70
    }
   };
   var a = 0;
   e.smilData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    series: [
     [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
     [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
     [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
     [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
    ]
   }, e.smilOptions = {
    low: 0,
    height: 260
   }, e.smilEvents = {
    created: function() {
     a = 0
    },
    draw: function(e) {
     a++, "line" === e.type ? e.element.animate({
      opacity: {
       begin: 80 * a + 1e3,
       dur: 500,
       from: 0,
       to: 1
      }
     }) : "label" === e.type && "x" === e.axis ? e.element.animate({
      y: {
       begin: 80 * a,
       dur: 500,
       from: e.y + 100,
       to: e.y,
       easing: "easeOutQuart"
      }
     }) : "label" === e.type && "y" === e.axis ? e.element.animate({
      x: {
       begin: 80 * a,
       dur: 500,
       from: e.x - 100,
       to: e.x,
       easing: "easeOutQuart"
      }
     }) : "point" === e.type && e.element.animate({
      x1: {
       begin: 80 * a,
       dur: 500,
       from: e.x - 10,
       to: e.x,
       easing: "easeOutQuart"
      },
      x2: {
       begin: 80 * a,
       dur: 500,
       from: e.x - 10,
       to: e.x,
       easing: "easeOutQuart"
      },
      opacity: {
       begin: 80 * a,
       dur: 500,
       from: 0,
       to: 1,
       easing: "easeOutQuart"
      }
     })
    }
   }, e.pathData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    series: [
     [1, 5, 2, 5, 4, 3],
     [2, 3, 4, 8, 1, 2],
     [5, 4, 3, 2, 1, .5]
    ]
   }, e.pathOptions = {
    low: 0,
    showArea: !0,
    showPoint: !1,
    fullWidth: !0,
    height: 260
   }, e.pathEvents = {
    draw: function(e) {
     "line" !== e.type && "area" !== e.type || e.element.animate({
      d: {
       begin: 2e3 * e.index,
       dur: 2e3,
       from: e.path.clone().scale(1, 0).translate(0, e.chartRect.height()).stringify(),
       to: e.path.clone().stringify(),
       easing: Chartist.Svg.Easing.easeOutQuint
      }
     })
    }
   }
  }()
 }
 angular.module("app.charts").controller("ChartistController", e)
}(),
function() {
 "use strict";

 function e(e) {
  var a = this;
  ! function() {
   a.lineLabels = ["January", "February", "March", "April", "May", "June", "July"], a.lineSeries = ["Series A", "Series B"], a.lineData = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
   ], a.lineOnClick = function(e, a) {
    console.log(e, a)
   }, a.lineDatasetOverride = [{
    yAxisID: "y-axis-1"
   }, {
    yAxisID: "y-axis-2"
   }], a.lineOptions = {
    scales: {
     yAxes: [{
      id: "y-axis-1",
      type: "linear",
      display: !0,
      position: "left"
     }, {
      id: "y-axis-2",
      type: "linear",
      display: !0,
      position: "right"
     }]
    }
   }, a.lineColors = [e.byName("info"), e.byName("purple")], a.barLabels = ["2006", "2007", "2008", "2009", "2010", "2011", "2012"], a.barSeries = ["Series A", "Series B"], a.barData = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
   ], a.barColors = [{
    backgroundColor: e.byName("primary"),
    borderColor: e.byName("primary")
   }, {
    backgroundColor: e.byName("info"),
    borderColor: e.byName("info")
   }], a.polarLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales"], a.polarData = [300, 500, 100, 40], a.polarColors = [e.byName("pink"), e.byName("purple"), e.byName("pink"), e.byName("purple")], a.radarLabels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"], a.radarData = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
   ], a.radarColors = [e.byName("purple"), e.byName("info")], a.pieLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"], a.pieData = [300, 500, 100], a.pieColors = [e.byName("info"), e.byName("purple"), e.byName("yellow")], a.douLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"], a.douData = [300, 500, 100], a.douColors = [e.byName("info"), e.byName("purple"), e.byName("yellow")]
  }()
 }
 angular.module("app.charts").controller("ChartJSController", e), e.$inject = ["Colors"]
}(),
function() {
 "use strict";

 function e(e) {
  function a(a) {
   return e(a, {}, t).get()
  }
  this.load = a;
  var t = {
   get: {
    method: "GET",
    isArray: !0
   }
  }
 }
 angular.module("app.charts").service("ChartData", e), e.$inject = ["$resource"]
}(),
function() {
 "use strict";

 function e(e, a, t) {
  var o = this;
  ! function() {
   function n() {
    for (i.length > 0 && (i = i.slice(1)); i.length < l;) {
     var e = i.length > 0 ? i[i.length - 1] : 50,
      a = e + 10 * Math.random() - 5;
     a < 0 ? a = 0 : a > 100 && (a = 100), i.push(a)
    }
    for (var t = [], o = 0; o < i.length; ++o) t.push([o, i[o]]);
    return [t]
   }

   function r() {
    o.realTimeData = n(), t(r, 30)
   }
   o.barData = a.load("server/chart/bar.json"), o.barOptions = {
    series: {
     bars: {
      align: "center",
      lineWidth: 0,
      show: !0,
      barWidth: .6,
      fill: .9
     }
    },
    grid: {
     borderColor: "#eee",
     borderWidth: 1,
     hoverable: !0,
     backgroundColor: "#fcfcfc"
    },
    tooltip: !0,
    tooltipOpts: {
     content: function(e, a, t) {
      return a + " : " + t
     }
    },
    xaxis: {
     tickColor: "#fcfcfc",
     mode: "categories"
    },
    yaxis: {
     position: e.app.layout.isRTL ? "right" : "left",
     tickColor: "#eee"
    },
    shadowSize: 0
   }, o.barStackeData = a.load("server/chart/barstacked.json"), o.barStackedOptions = {
    series: {
     stack: !0,
     bars: {
      align: "center",
      lineWidth: 0,
      show: !0,
      barWidth: .6,
      fill: .9
     }
    },
    grid: {
     borderColor: "#eee",
     borderWidth: 1,
     hoverable: !0,
     backgroundColor: "#fcfcfc"
    },
    tooltip: !0,
    tooltipOpts: {
     content: function(e, a, t) {
      return a + " : " + t
     }
    },
    xaxis: {
     tickColor: "#fcfcfc",
     mode: "categories"
    },
    yaxis: {
     min: 0,
     max: 200,
     position: e.app.layout.isRTL ? "right" : "left",
     tickColor: "#eee"
    },
    shadowSize: 0
   }, o.splineData = a.load("server/chart/spline.json"), o.splineOptions = {
    series: {
     lines: {
      show: !1
     },
     points: {
      show: !0,
      radius: 4
     },
     splines: {
      show: !0,
      tension: .4,
      lineWidth: 1,
      fill: .5
     }
    },
    grid: {
     borderColor: "#eee",
     borderWidth: 1,
     hoverable: !0,
     backgroundColor: "#fcfcfc"
    },
    tooltip: !0,
    tooltipOpts: {
     content: function(e, a, t) {
      return a + " : " + t
     }
    },
    xaxis: {
     tickColor: "#fcfcfc",
     mode: "categories"
    },
    yaxis: {
     min: 0,
     max: 150,
     tickColor: "#eee",
     position: e.app.layout.isRTL ? "right" : "left",
     tickFormatter: function(e) {
      return e
     }
    },
    shadowSize: 0
   }, o.areaData = a.load("server/chart/area.json"), o.areaOptions = {
    series: {
     lines: {
      show: !0,
      fill: .8
     },
     points: {
      show: !0,
      radius: 4
     }
    },
    grid: {
     borderColor: "#eee",
     borderWidth: 1,
     hoverable: !0,
     backgroundColor: "#fcfcfc"
    },
    tooltip: !0,
    tooltipOpts: {
     content: function(e, a, t) {
      return a + " : " + t
     }
    },
    xaxis: {
     tickColor: "#fcfcfc",
     mode: "categories"
    },
    yaxis: {
     min: 0,
     tickColor: "#eee",
     position: e.app.layout.isRTL ? "right" : "left",
     tickFormatter: function(e) {
      return e + " visitors"
     }
    },
    shadowSize: 0
   }, o.lineData = a.load("server/chart/line.json"), o.lineOptions = {
    series: {
     lines: {
      show: !0,
      fill: .01
     },
     points: {
      show: !0,
      radius: 4
     }
    },
    grid: {
     borderColor: "#eee",
     borderWidth: 1,
     hoverable: !0,
     backgroundColor: "#fcfcfc"
    },
    tooltip: !0,
    tooltipOpts: {
     content: function(e, a, t) {
      return a + " : " + t
     }
    },
    xaxis: {
     tickColor: "#eee",
     mode: "categories"
    },
    yaxis: {
     position: e.app.layout.isRTL ? "right" : "left",
     tickColor: "#eee"
    },
    shadowSize: 0
   }, o.pieData = [{
    label: "jQuery",
    color: "#4acab4",
    data: 30
   }, {
    label: "CSS",
    color: "#ffea88",
    data: 40
   }, {
    label: "LESS",
    color: "#ff8153",
    data: 90
   }, {
    label: "SASS",
    color: "#878bb6",
    data: 75
   }, {
    label: "Jade",
    color: "#b2d767",
    data: 120
   }], o.pieOptions = {
    series: {
     pie: {
      show: !0,
      innerRadius: 0,
      label: {
       show: !0,
       radius: .8,
       formatter: function(e, a) {
        return '<div class="flot-pie-label">' + Math.round(a.percent) + "%</div>"
       },
       background: {
        opacity: .8,
        color: "#222"
       }
      }
     }
    }
   }, o.donutData = [{
    color: "#39C558",
    data: 60,
    label: "Coffee"
   }, {
    color: "#00b4ff",
    data: 90,
    label: "CSS"
   }, {
    color: "#FFBE41",
    data: 50,
    label: "LESS"
   }, {
    color: "#ff3e43",
    data: 80,
    label: "Jade"
   }, {
    color: "#937fc7",
    data: 116,
    label: "AngularJS"
   }], o.donutOptions = {
    series: {
     pie: {
      show: !0,
      innerRadius: .5
     }
    }
   }, o.realTimeOptions = {
    series: {
     lines: {
      show: !0,
      fill: !0,
      fillColor: {
       colors: ["#a0e0f3", "#23b7e5"]
      }
     },
     shadowSize: 0
    },
    grid: {
     show: !1,
     borderWidth: 0,
     minBorderMargin: 20,
     labelMargin: 10
    },
    xaxis: {
     tickFormatter: function() {
      return ""
     }
    },
    yaxis: {
     min: 0,
     max: 110
    },
    legend: {
     show: !0
    },
    colors: ["#23b7e5"]
   };
   var i = [],
    l = 300;
   r(), e.$on("panel-refresh", function(a, o) {
    console.log("Simulating chart refresh during 3s on #" + o), t(function() {
     e.$broadcast("removeSpinner", o), console.log("Refreshed #" + o)
    }, 3e3)
   }), e.$on("panel-remove", function(e, a, t) {
    console.log("Panel #" + a + " removing"), t.resolve()
   }), e.$on("panel-removed", function(e, a) {
    console.log("Panel #" + a + " removed")
   })
  }()
 }
 angular.module("app.charts").controller("FlotChartController", e), e.$inject = ["$scope", "ChartData", "$timeout"]
}(),
function() {
 "use strict";

 function e(e, a) {
  function t(t, o, n) {
   function r() {
    var e;
    if (t.dataset && t.options) return e = $.plot(d, t.dataset, t.options), t.$emit("plotReady", e), t.callback && t.callback(e, t), e
   }

   function i(e) {
    return u ? (u.setData(e), u.setupGrid(), u.draw()) : (u = r(), l(t.series), u)
   }

   function l(e) {
    if (u && e) {
     var a = u.getData();
     for (var t in e) angular.forEach(e[t], function(e) {
      return function(t, o) {
       a[o] && a[o][e] && (a[o][e].show = t)
      }
     }(t));
     u.setData(a), u.draw()
    }
   }

   function s(o) {
    o && e.get(o).then(function(e) {
     a(function() {
      t.dataset = e.data
     })
    }, function() {
     $.error("Flot chart: Bad request.")
    })
   }
   var c, u, d, p;
   u = null, p = n.width || "100%", c = n.height || 220, d = $(o.children()[0]), d.css({
    width: p,
    height: c
   });
   var m = t.$watchCollection("dataset", i, !0),
    g = t.$watch("series", l, !0),
    f = t.$watch("src", s);
   t.$on("$destroy", function() {
    m(), g(), f(), u.destroy()
   })
  }
  return {
   restrict: "EA",
   template: "<div></div>",
   scope: {
    dataset: "=?",
    options: "=",
    series: "=",
    callback: "=",
    src: "="
   },
   link: t
  }
 }
 angular.module("app.charts").directive("flot", e), e.$inject = ["$http", "$timeout"]
}(),
function() {
 "use strict";

 function e(e, a) {
  var t = this;
  ! function() {
   t.chartdata = [{
    y: "2006",
    a: 100,
    b: 90
   }, {
    y: "2007",
    a: 75,
    b: 65
   }, {
    y: "2008",
    a: 50,
    b: 40
   }, {
    y: "2009",
    a: 75,
    b: 65
   }, {
    y: "2010",
    a: 50,
    b: 40
   }, {
    y: "2011",
    a: 75,
    b: 65
   }, {
    y: "2012",
    a: 100,
    b: 90
   }], t.donutdata = [{
    label: "Download Sales",
    value: 12
   }, {
    label: "In-Store Sales",
    value: 30
   }, {
    label: "Mail-Order Sales",
    value: 20
   }], t.donutOptions = {
    Colors: [a.byName("danger"), a.byName("yellow"), a.byName("warning")],
    resize: !0
   }, t.barOptions = {
    xkey: "y",
    ykeys: ["a", "b"],
    labels: ["Series A", "Series B"],
    xLabelMargin: 2,
    barColors: [a.byName("info"), a.byName("danger")],
    resize: !0
   }, t.lineOptions = {
    xkey: "y",
    ykeys: ["a", "b"],
    labels: ["Serie A", "Serie B"],
    lineColors: ["#31C0BE", "#7a92a3"],
    resize: !0
   }, t.areaOptions = {
    xkey: "y",
    ykeys: ["a", "b"],
    labels: ["Serie A", "Serie B"],
    lineColors: [a.byName("purple"), a.byName("info")],
    resize: !0
   }
  }()
 }
 angular.module("app.charts").controller("ChartMorrisController", e), e.$inject = ["$timeout", "Colors"]
}(),
function() {
 "use strict";

 function e(e) {
  return function() {
   return {
    restrict: "EA",
    scope: {
     morrisData: "=",
     morrisOptions: "="
    },
    link: function(a, t) {
     a.$watch("morrisData", function(e) {
      e && (a.morrisInstance.setData(e), a.morrisInstance.redraw())
     }, !0), a.morrisOptions.element = t, a.morrisData && (a.morrisOptions.data = a.morrisData), a.morrisInstance = new Morris[e](a.morrisOptions)
    }
   }
  }
 }
 angular.module("app.charts").directive("morrisBar", e("Bar")).directive("morrisDonut", e("Donut")).directive("morrisLine", e("Line")).directive("morrisArea", e("Area"))
}(),
function() {
 "use strict";

 function e(e) {
  var a = this;
  ! function() {
   function t() {
    return Math.floor(100 * Math.random() + 1)
   }
   a.knobLoaderData1 = 80, a.knobLoaderOptions1 = {
    width: "50%",
    displayInput: !0,
    fgColor: e.byName("info")
   }, a.knobLoaderData2 = 45, a.knobLoaderOptions2 = {
    width: "50%",
    displayInput: !0,
    fgColor: e.byName("purple"),
    readOnly: !0
   }, a.knobLoaderData3 = 30, a.knobLoaderOptions3 = {
    width: "50%",
    displayInput: !0,
    fgColor: e.byName("pink"),
    displayPrevious: !0,
    thickness: .1,
    lineCap: "round"
   }, a.knobLoaderData4 = 20, a.knobLoaderOptions4 = {
    width: "50%",
    displayInput: !0,
    fgColor: e.byName("info"),
    bgColor: e.byName("gray"),
    angleOffset: -125,
    angleArc: 250
   }, a.piePercent1 = 85, a.piePercent2 = 45, a.piePercent3 = 25, a.piePercent4 = 60, a.pieOptions1 = {
    animate: {
     duration: 800,
     enabled: !0
    },
    barColor: e.byName("success"),
    trackColor: !1,
    scaleColor: !1,
    lineWidth: 10,
    lineCap: "circle"
   }, a.pieOptions2 = {
    animate: {
     duration: 800,
     enabled: !0
    },
    barColor: e.byName("warning"),
    trackColor: !1,
    scaleColor: !1,
    lineWidth: 4,
    lineCap: "circle"
   }, a.pieOptions3 = {
    animate: {
     duration: 800,
     enabled: !0
    },
    barColor: e.byName("danger"),
    trackColor: !1,
    scaleColor: e.byName("gray"),
    lineWidth: 15,
    lineCap: "circle"
   }, a.pieOptions4 = {
    animate: {
     duration: 800,
     enabled: !0
    },
    barColor: e.byName("danger"),
    trackColor: e.byName("yellow"),
    scaleColor: e.byName("gray-dark"),
    lineWidth: 15,
    lineCap: "circle"
   }, a.randomize = function(e) {
    "easy" === e && (a.piePercent1 = t(), a.piePercent2 = t(), a.piePercent3 = t(), a.piePercent4 = t()), "knob" === e && (a.knobLoaderData1 = t(), a.knobLoaderData2 = t(), a.knobLoaderData3 = t(), a.knobLoaderData4 = t())
   }
  }()
 }
 angular.module("app.charts").controller("PieChartsController", e), e.$inject = ["Colors"]
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   e.renderers = [{
    id: "area",
    name: "Area"
   }, {
    id: "line",
    name: "Line"
   }, {
    id: "bar",
    name: "Bar"
   }, {
    id: "scatterplot",
    name: "Scatterplot"
   }], e.palettes = ["spectrum14", "spectrum2000", "spectrum2001", "colorwheel", "cool", "classic9", "munin"], e.rendererChanged = function(a) {
    e["options" + a] = {
     renderer: e["renderer" + a].id
    }
   }, e.paletteChanged = function(a) {
    e["features" + a] = {
     palette: e["palette" + a]
    }
   }, e.changeSeriesData = function(a) {
    for (var t = [], o = 0; o < 3; o++) {
     for (var n = {
       name: "Series " + (o + 1),
       data: []
      }, r = 0; r < 10; r++) n.data.push({
      x: r,
      y: 20 * Math.random()
     });
     t.push(n), e["series" + a][o] = n
    }
   }, e.series0 = [], e.options0 = {
    renderer: "area"
   }, e.renderer0 = e.renderers[0], e.palette0 = e.palettes[0], e.rendererChanged(0), e.paletteChanged(0), e.changeSeriesData(0);
   for (var a = [
     [],
     [],
     []
    ], t = new Rickshaw.Fixtures.RandomData(150), o = 0; o < 150; o++) t.addData(a);
   e.series2 = [{
    color: "#c05020",
    data: a[0],
    name: "New York"
   }, {
    color: "#30c020",
    data: a[1],
    name: "London"
   }, {
    color: "#6060c0",
    data: a[2],
    name: "Tokyo"
   }], e.options2 = {
    renderer: "area"
   }
  }()
 }
 angular.module("app.charts").controller("ChartRickshawController", e)
}(),
function() {
 "use strict";

 function e() {
  return {
   restrict: "EA",
   scope: {
    sparkline: "="
   },
   controller: a
  }
 }

 function a(e, a, t, o) {
  function n() {
   var t = e.sparkline,
    n = a.data();
   t ? n && (t = angular.extend({}, t, n)) : t = n, t.type = t.type || "bar", t.disableHiddenCheck = !0, a.sparkline("html", t), t.resize && $(o).on(i, function() {
    a.sparkline("html", t)
   })
  }
  var r = function() {
    n()
   },
   i = "resize.sparkline" + e.$id;
  t(r), e.$on("$destroy", function() {
   $(o).off(i)
  })
 }
 angular.module("app.charts").directive("sparkline", e), a.$inject = ["$scope", "$element", "$timeout", "$window"]
}(),
function() {
 "use strict";
 angular.module("app.colors").constant("APP_COLORS", {
  primary: "#5d9cec",
  success: "#27c24c",
  info: "#23b7e5",
  warning: "#ff902b",
  danger: "#f05050",
  inverse: "#131e26",
  green: "#37bc9b",
  pink: "#f532e5",
  purple: "#7266ba",
  dark: "#3a3f51",
  yellow: "#fad732",
  "gray-darker": "#232735",
  "gray-dark": "#3a3f51",
  gray: "#dde6e9",
  "gray-light": "#e4eaec",
  "gray-lighter": "#edf1f2"
 })
}(),
function() {
 "use strict";

 function e(e) {
  function a(a) {
   return e[a] || "#fff"
  }
  this.byName = a
 }
 angular.module("app.colors").service("Colors", e), e.$inject = ["APP_COLORS"]
}(),
function() {
 "use strict";

 function e(e, a, t, o, n) {
  var r = angular.module("app.core");
  r.controller = e.register, r.directive = a.directive, r.filter = t.register, r.factory = o.factory, r.service = o.service, r.constant = o.constant, r.value = o.value, n.classNameFilter(/^((?!(ng-no-animation)).)*$/)
 }
 angular.module("app.core").config(e), e.$inject = ["$controllerProvider", "$compileProvider", "$filterProvider", "$provide", "$animateProvider"]
}(),
function() {
 "use strict";
 angular.module("app.core").constant("APP_MEDIAQUERY", {
  desktopLG: 1200,
  desktop: 992,
  tablet: 768,
  mobile: 480
 })
}(),
function() {
 "use strict";

 function e(e, a, t, o, n, r) {
  var i = e.$on("ocLazyLoad.fileLoaded", function(e, a) {
   a.indexOf("ag-grid.js") > -1 && (agGrid.initialiseAgGridWithAngular1(angular), i())
  });
  e.$state = a, e.$stateParams = t, e.$storage = o.localStorage, e.colorByName = r.byName, e.cancel = function(e) {
   e.stopPropagation()
  }, e.$on("$stateNotFound", function(e, a) {
   console.log(a.to), console.log(a.toParams), console.log(a.options)
  }), e.$on("$stateChangeError", function(e, a, t, o, n, r) {
   console.log(r)
  }), e.$on("$stateChangeSuccess", function() {
   o.scrollTo(0, 0), e.currTitle = a.current.title
  }), e.currTitle = a.current.title, e.pageTitle = function() {
   var a = e.app.name + " - " + (e.currTitle || e.app.description);
   return document.title = a, a
  }
 }
 angular.module("app.core").run(e), e.$inject = ["$rootScope", "$state", "$stateParams", "$window", "$templateCache", "Colors"]
}(),
function() {
 "use strict";

 function e(e, a, t, o) {
  var n = this;
  ! function() {
   n.easyPiePercent = 70, n.pieOptions = {
    animate: {
     duration: 800,
     enabled: !0
    },
    barColor: o.byName("info"),
    trackColor: "rgba(200,200,200,0.4)",
    scaleColor: !1,
    lineWidth: 10,
    lineCap: "round",
    size: 145
   }, n.splineData = a.load("server/chart/spline.json"), n.splineOptions = {
    series: {
     lines: {
      show: !1
     },
     points: {
      show: !0,
      radius: 4
     },
     splines: {
      show: !0,
      tension: .4,
      lineWidth: 1,
      fill: .5
     }
    },
    grid: {
     borderColor: "#eee",
     borderWidth: 1,
     hoverable: !0,
     backgroundColor: "#fcfcfc"
    },
    tooltip: !0,
    tooltipOpts: {
     content: function(e, a, t) {
      return a + " : " + t
     }
    },
    xaxis: {
     tickColor: "#fcfcfc",
     mode: "categories"
    },
    yaxis: {
     min: 0,
     max: 150,
     tickColor: "#eee",
     position: e.app.layout.isRTL ? "right" : "left",
     tickFormatter: function(e) {
      return e
     }
    },
    shadowSize: 0
   }, e.$on("panel-refresh", function(a, o) {
    console.log("Simulating chart refresh during 3s on #" + o), t(function() {
     e.$broadcast("removeSpinner", o), console.log("Refreshed #" + o)
    }, 3e3)
   }), e.$on("panel-remove", function(e, a, t) {
    console.log("Panel #" + a + " removing"), t.resolve()
   }), e.$on("panel-removed", function(e, a) {
    console.log("Panel #" + a + " removed")
   })
  }()
 }
 angular.module("app.dashboard").controller("DashboardController", e), e.$inject = ["$scope", "ChartData", "$timeout", "Colors"]
}(),
function() {
 "use strict";

 function e(e, a, t, o) {
  var n = this;
  ! function() {
   t.includes("app-h") ? (e.app.layout.horizontal = !0, a.$on("$destroy", function() {
    e.app.layout.horizontal = !1
   })) : e.app.layout.isCollapsedText || (e.app.layout.isCollapsed = !0), n.barStackedOptions = {
    series: {
     stack: !0,
     bars: {
      align: "center",
      lineWidth: 0,
      show: !0,
      barWidth: .6,
      fill: .9
     }
    },
    grid: {
     borderColor: "#eee",
     borderWidth: 1,
     hoverable: !0,
     backgroundColor: "#fcfcfc"
    },
    tooltip: !0,
    tooltipOpts: {
     content: function(e, a, t) {
      return a + " : " + t
     }
    },
    xaxis: {
     tickColor: "#fcfcfc",
     mode: "categories"
    },
    yaxis: {
     min: 0,
     max: 200,
     position: e.app.layout.isRTL ? "right" : "left",
     tickColor: "#eee"
    },
    shadowSize: 0
   }, n.splineOptions = {
    series: {
     lines: {
      show: !1
     },
     points: {
      show: !0,
      radius: 4
     },
     splines: {
      show: !0,
      tension: .4,
      lineWidth: 1,
      fill: .5
     }
    },
    grid: {
     borderColor: "#eee",
     borderWidth: 1,
     hoverable: !0,
     backgroundColor: "#fcfcfc"
    },
    tooltip: !0,
    tooltipOpts: {
     content: function(e, a, t) {
      return a + " : " + t
     }
    },
    xaxis: {
     tickColor: "#fcfcfc",
     mode: "categories"
    },
    yaxis: {
     min: 0,
     max: 150,
     tickColor: "#eee",
     position: e.app.layout.isRTL ? "right" : "left",
     tickFormatter: function(e) {
      return e
     }
    },
    shadowSize: 0
   }, n.easyPiePercent1 = 60, n.easyPiePercent2 = 30, n.easyPiePercent3 = 50, n.easyPiePercent4 = 75, n.pieOptions1 = {
    animate: {
     duration: 800,
     enabled: !0
    },
    barColor: o.byName("info"),
    trackColor: "#edf2f6",
    scaleColor: !1,
    lineWidth: 2,
    lineCap: "round",
    size: 130
   }, n.pieOptions2 = {
    animate: {
     duration: 800,
     enabled: !0
    },
    barColor: o.byName("pink"),
    trackColor: "#edf2f6",
    scaleColor: !1,
    lineWidth: 2,
    lineCap: "round",
    size: 130
   }, n.pieOptions3 = {
    animate: {
     duration: 800,
     enabled: !0
    },
    barColor: o.byName("purple"),
    trackColor: "#edf2f6",
    scaleColor: !1,
    lineWidth: 2,
    lineCap: "round",
    size: 130
   }, n.pieOptions4 = {
    animate: {
     duration: 800,
     enabled: !0
    },
    barColor: o.byName("warning"),
    trackColor: "#edf2f6",
    scaleColor: !1,
    lineWidth: 2,
    lineCap: "round",
    size: 130
   }
  }()
 }
 angular.module("app.dashboard").controller("DashboardV2Controller", e), e.$inject = ["$rootScope", "$scope", "$state", "Colors"]
}(),
function() {
 "use strict";

 function e(e, a) {
  var t = this;
  ! function() {
   t.splineOptions = {
    series: {
     lines: {
      show: !1
     },
     points: {
      show: !0,
      radius: 4
     },
     splines: {
      show: !0,
      tension: .4,
      lineWidth: 1,
      fill: .5
     }
    },
    grid: {
     borderColor: "#eee",
     borderWidth: 1,
     hoverable: !0,
     backgroundColor: "#fcfcfc"
    },
    tooltip: !0,
    tooltipOpts: {
     content: function(e, a, t) {
      return a + " : " + t
     }
    },
    xaxis: {
     tickColor: "#fcfcfc",
     mode: "categories"
    },
    yaxis: {
     min: 0,
     max: 150,
     tickColor: "#eee",
     position: e.app.layout.isRTL ? "right" : "left",
     tickFormatter: function(e) {
      return e
     }
    },
    shadowSize: 0
   }, t.seriesData = {
    CA: 11100,
    DE: 2510,
    FR: 3710,
    AU: 5710,
    GB: 8310,
    RU: 9310,
    BR: 6610,
    IN: 7810,
    CN: 4310,
    US: 839,
    SA: 410
   }, t.markersData = [{
    latLng: [41.9, 12.45],
    name: "Vatican City"
   }, {
    latLng: [43.73, 7.41],
    name: "Monaco"
   }, {
    latLng: [-.52, 166.93],
    name: "Nauru"
   }, {
    latLng: [-8.51, 179.21],
    name: "Tuvalu"
   }, {
    latLng: [7.11, 171.06],
    name: "Marshall Islands"
   }, {
    latLng: [17.3, -62.73],
    name: "Saint Kitts and Nevis"
   }, {
    latLng: [3.2, 73.22],
    name: "Maldives"
   }, {
    latLng: [35.88, 14.5],
    name: "Malta"
   }, {
    latLng: [41, -71.06],
    name: "New England"
   }, {
    latLng: [12.05, -61.75],
    name: "Grenada"
   }, {
    latLng: [13.16, -59.55],
    name: "Barbados"
   }, {
    latLng: [17.11, -61.85],
    name: "Antigua and Barbuda"
   }, {
    latLng: [-4.61, 55.45],
    name: "Seychelles"
   }, {
    latLng: [7.35, 134.46],
    name: "Palau"
   }, {
    latLng: [42.5, 1.51],
    name: "Andorra"
   }], t.easyPiePercent = 70, t.pieOptions = {
    animate: {
     duration: 800,
     enabled: !0
    },
    barColor: a.byName("info"),
    trackColor: "rgba(200,200,200,0.4)",
    scaleColor: !1,
    lineWidth: 10,
    lineCap: "round",
    size: 145
   }
  }()
 }
 angular.module("app.dashboard").controller("DashboardV3Controller", e), e.$inject = ["$rootScope", "Colors"]
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   function a(a, t) {
    var o = a.length;
    return {
     id: o + 1,
     label: "slide #" + (o + 1),
     img: "http://lorempixel.com/1200/500/" + t + "/" + (o + 1) % 10,
     color: e.colors[10 * o % e.colors.length],
     odd: o % 2 == 0
    }
   }

   function t(e, t) {
    e.push(a(e, t))
   }

   function o(e, a, o) {
    for (var n = 0; n < o; n++) t(e, a)
   }
   e.colors = ["#fc0003", "#f70008", "#f2000d", "#ed0012", "#e80017", "#e3001c", "#de0021", "#d90026", "#d4002b", "#cf0030", "#c90036", "#c4003b", "#bf0040", "#ba0045", "#b5004a", "#b0004f", "#ab0054", "#a60059", "#a1005e", "#9c0063", "#960069", "#91006e", "#8c0073", "#870078", "#82007d", "#7d0082", "#780087", "#73008c", "#6e0091", "#690096", "#63009c", "#5e00a1", "#5900a6", "#5400ab", "#4f00b0", "#4a00b5", "#4500ba", "#4000bf", "#3b00c4", "#3600c9", "#3000cf", "#2b00d4", "#2600d9", "#2100de", "#1c00e3", "#1700e8", "#1200ed", "#0d00f2", "#0800f7", "#0300fc"], e.carouselIndex = 3, e.carouselIndex2 = 0, e.carouselIndex2 = 1, e.carouselIndex3 = 5, e.carouselIndex4 = 5, e.slides = [], o(e.slides, "sports", 50), e.slides2 = [], o(e.slides2, "sports", 10), e.slides3 = [], o(e.slides3, "people", 50), e.slides4 = [], o(e.slides4, "city", 50), e.slides6 = [], e.carouselIndex6 = 0, o(e.slides6, "sports", 10), e.addSlide = function(t) {
    "head" === t ? e.slides6.unshift(a(e.slides6, "people")) : e.slides6.push(a(e.slides6, "people"))
   }
  }()
 }
 angular.module("app.elements").controller("AngularCarouselController", e)
}(),
function() {
 "use strict";

 function e(e, a, t) {
  ! function() {
   e.tpl = t, a.open({
    template: t.path,
    className: "ngdialog-theme-default"
   })
  }()
 }

 function a(e, a, t) {
  ! function() {
   a.jsonData = '{"foo": "bar"}', a.theme = "ngdialog-theme-default", e.directivePreCloseCallback = function(e) {
    return !!confirm("Close it? MainCtrl.Directive. (Value = " + e + ")")
   }, e.preCloseCallbackOnScope = function(e) {
    return !!confirm("Close it? MainCtrl.OnScope (Value = " + e + ")")
   }, e.open = function() {
    t.open({
     template: "firstDialogId",
     controller: "InsideCtrl",
     data: {
      foo: "some data"
     }
    })
   }, e.openDefault = function() {
    t.open({
     template: "firstDialogId",
     controller: "InsideCtrl",
     className: "ngdialog-theme-default"
    })
   }, e.openDefaultWithPreCloseCallbackInlined = function() {
    t.open({
     template: "firstDialogId",
     controller: "InsideCtrl",
     className: "ngdialog-theme-default",
     preCloseCallback: function(e) {
      return !!confirm("Close it?  (Value = " + e + ")")
     }
    })
   }, e.openConfirm = function() {
    t.openConfirm({
     template: "modalDialogId",
     className: "ngdialog-theme-default"
    }).then(function(e) {
     console.log("Modal promise resolved. Value: ", e)
    }, function(e) {
     console.log("Modal promise rejected. Reason: ", e)
    })
   }, e.openConfirmWithPreCloseCallbackOnScope = function() {
    t.openConfirm({
     template: "modalDialogId",
     className: "ngdialog-theme-default",
     preCloseCallback: "preCloseCallbackOnScope",
     scope: e
    }).then(function(e) {
     console.log("Modal promise resolved. Value: ", e)
    }, function(e) {
     console.log("Modal promise rejected. Reason: ", e)
    })
   }, e.openConfirmWithPreCloseCallbackInlinedWithNestedConfirm = function() {
    t.openConfirm({
     template: "dialogWithNestedConfirmDialogId",
     className: "ngdialog-theme-default",
     preCloseCallback: function() {
      return t.openConfirm({
       template: '<p>Are you sure you want to close the parent dialog?</p><div><button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No<button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes</button></div>',
       plain: !0,
       className: "ngdialog-theme-default"
      })
     },
     scope: e
    }).then(function(e) {
     console.log("resolved:" + e)
    }, function(e) {
     console.log("rejected:" + e)
    })
   }, e.openInlineController = function() {
    a.theme = "ngdialog-theme-default", t.open({
     template: "withInlineController",
     controller: ["$scope", "$timeout", function(e, a) {
      function t() {
       e.exampleExternalData = "Counter " + n++, o = a(t, 450)
      }
      var o, n = 0;
      t(), e.$on("$destroy", function() {
       a.cancel(o)
      })
     }],
     className: "ngdialog-theme-default"
    })
   }, e.openTemplate = function() {
    e.value = !0, t.open({
     template: e.tpl.path,
     className: "ngdialog-theme-default",
     scope: e
    })
   }, e.openTemplateNoCache = function() {
    e.value = !0, t.open({
     template: e.tpl.path,
     className: "ngdialog-theme-default",
     scope: e,
     cache: !1
    })
   }, e.openTimed = function() {
    var e = t.open({
     template: "<p>Just passing through!</p>",
     plain: !0,
     closeByDocument: !1,
     closeByEscape: !1
    });
    setTimeout(function() {
     e.close()
    }, 2e3)
   }, e.openNotify = function() {
    t.open({
     template: '<p>You can do whatever you want when I close, however that happens.</p><div><button type="button" class="btn btn-primary" ng-click="closeThisDialog(1)">Close Me</button></div>',
     plain: !0
    }).closePromise.then(function(e) {
     console.log("ngDialog closed" + (1 === e.value ? " using the button" : "") + " and notified by promise: " + e.id)
    })
   }, e.openWithoutOverlay = function() {
    t.open({
     template: "<h2>Notice that there is no overlay!</h2>",
     className: "ngdialog-theme-default",
     plain: !0,
     overlay: !1
    })
   }, a.$on("ngDialog.opened", function(e, a) {
    console.log("ngDialog opened: " + a.attr("id"))
   }), a.$on("ngDialog.closed", function(e, a) {
    console.log("ngDialog closed: " + a.attr("id"))
   }), a.$on("ngDialog.closing", function(e, a) {
    console.log("ngDialog closing: " + a.attr("id"))
   })
  }()
 }

 function t(e, a) {
  ! function() {
   e.dialogModel = {
    message: "message from passed scope"
   }, e.openSecond = function() {
    a.open({
     template: '<p class="lead m0"><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
     plain: !0,
     closeByEscape: !1,
     controller: "SecondModalCtrl"
    })
   }
  }()
 }

 function o(e, a) {
  ! function() {
   e.closeSecond = function() {
    a.close()
   }
  }()
 }
 angular.module("app.elements").controller("DialogIntroCtrl", e).controller("DialogMainCtrl", a).controller("InsideCtrl", t).controller("SecondModalCtrl", o), e.$inject = ["$scope", "ngDialog", "tpl"], a.$inject = ["$scope", "$rootScope", "ngDialog"], t.$inject = ["$scope", "ngDialog"], o.$inject = ["$scope", "ngDialog"]
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   e.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], e.loadMore = function() {
    for (var a = e.images[e.images.length - 1], t = 1; t <= 10; t++) e.images.push(a + t)
   }
  }()
 }

 function a(e, a) {
  return {
   get: function(e, t, o) {
    return a(function() {
     var a, n, r, i;
     for (n = [], a = r = e, i = e + t - 1; e <= i ? r <= i : r >= i; a = e <= i ? ++r : --r) n.push("item #" + a);
     return o(n)
    }, 100)
   }
  }
 }
 angular.module("app.elements").controller("InfiniteScrollController", e).factory("datasource", a), a.$inject = ["$log", "$timeout"]
}(),
function() {
 "use strict";

 function e(e) {
  var a = this;
  ! function() {
   a.basepath = e.basepath, a.photos = [{
    id: "photo-1",
    name: "Awesome photo",
    src: "http://lorempixel.com/400/300/abstract"
   }, {
    id: "photo-2",
    name: "Great photo",
    src: "http://lorempixel.com/450/400/city"
   }, {
    id: "photo-3",
    name: "Strange photo",
    src: "http://lorempixel.com/400/300/people"
   }, {
    id: "photo-4",
    name: "A photo?",
    src: "http://lorempixel.com/400/300/transport"
   }, {
    id: "photo-5",
    name: "What a photo",
    src: "http://lorempixel.com/450/300/fashion"
   }, {
    id: "photo-6",
    name: "Silly photo",
    src: "http://lorempixel.com/400/300/technics"
   }, {
    id: "photo-7",
    name: "Weird photo",
    src: "http://lorempixel.com/410/350/sports"
   }, {
    id: "photo-8",
    name: "Modern photo",
    src: "http://lorempixel.com/400/300/nightlife"
   }, {
    id: "photo-9",
    name: "Classical photo",
    src: "http://lorempixel.com/400/300/nature"
   }, {
    id: "photo-10",
    name: "Dynamic photo",
    src: "http://lorempixel.com/420/300/abstract"
   }, {
    id: "photo-11",
    name: "Neat photo",
    src: "http://lorempixel.com/400/300/sports"
   }, {
    id: "photo-12",
    name: "Bumpy photo",
    src: "http://lorempixel.com/400/300/nightlife"
   }, {
    id: "photo-13",
    name: "Brilliant photo",
    src: "http://lorempixel.com/400/380/nature"
   }, {
    id: "photo-14",
    name: "Excellent photo",
    src: "http://lorempixel.com/480/300/technics"
   }, {
    id: "photo-15",
    name: "Gorgeous photo",
    src: "http://lorempixel.com/400/300/sports"
   }, {
    id: "photo-16",
    name: "Lovely photo",
    src: "http://lorempixel.com/400/300/nightlife"
   }, {
    id: "photo-17",
    name: 'A "wow" photo',
    src: "http://lorempixel.com/400/300/nature"
   }, {
    id: "photo-18",
    name: "Bodacious photo",
    src: "http://lorempixel.com/400/300/abstract"
   }]
  }()
 }

 function a() {
  function e(e, a, t) {
   var o = t.loadedclass;
   a.bind("load", function() {
    angular.element(a).addClass(o)
   })
  }
  return {
   link: e,
   restrict: "A"
  }
 }
 angular.module("app.elements").controller("MasonryDeckController", e).directive("imageloaded", a), e.$inject = ["RouteHelpers"]
}(),
function() {
 "use strict";

 function e(e, a) {
  var t = this;
  ! function() {
   t.my_tree_handler = function(e) {
    if (t.output = "You selected: " + e.label, e.data && e.data.description) return t.output += "(" + e.data.description + ")", t.output
   };
   var e = function(e) {
     return t.output = "APPLE! : " + e.label, t.output
    },
    o = [{
     label: "Animal",
     children: [{
      label: "Dog",
      data: {
       description: "man's best friend"
      }
     }, {
      label: "Cat",
      data: {
       description: "Felis catus"
      }
     }, {
      label: "Hippopotamus",
      data: {
       description: "hungry, hungry"
      }
     }, {
      label: "Chicken",
      children: ["White Leghorn", "Rhode Island Red", "Jersey Giant"]
     }]
    }, {
     label: "Vegetable",
     data: {
      definition: "A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.",
      data_can_contain_anything: !0
     },
     onSelect: function(e) {
      return t.output = "Vegetable: " + e.data.definition, t.output
     },
     children: [{
      label: "Oranges"
     }, {
      label: "Apples",
      children: [{
       label: "Granny Smith",
       onSelect: e
      }, {
       label: "Red Delicous",
       onSelect: e
      }, {
       label: "Fuji",
       onSelect: e
      }]
     }]
    }, {
     label: "Mineral",
     children: [{
      label: "Rock",
      children: ["Igneous", "Sedimentary", "Metamorphic"]
     }, {
      label: "Metal",
      children: ["Aluminum", "Steel", "Copper"]
     }, {
      label: "Plastic",
      children: [{
       label: "Thermoplastic",
       children: ["polyethylene", "polypropylene", "polystyrene", " polyvinyl chloride"]
      }, {
       label: "Thermosetting Polymer",
       children: ["polyester", "polyurethane", "vulcanized rubber", "bakelite", "urea-formaldehyde"]
      }]
     }]
    }],
    n = [{
     label: "North America",
     children: [{
      label: "Canada",
      children: ["Toronto", "Vancouver"]
     }, {
      label: "USA",
      children: ["New York", "Los Angeles"]
     }, {
      label: "Mexico",
      children: ["Mexico City", "Guadalajara"]
     }]
    }, {
     label: "South America",
     children: [{
      label: "Venezuela",
      children: ["Caracas", "Maracaibo"]
     }, {
      label: "Brazil",
      children: ["Sao Paulo", "Rio de Janeiro"]
     }, {
      label: "Argentina",
      children: ["Buenos Aires", "Cordoba"]
     }]
    }];
   t.my_data = o, t.try_changing_the_tree_data = function() {
    return t.my_data === o ? t.my_data = n : t.my_data = o, t.my_data
   };
   var r;
   t.my_tree = r = {}, t.try_async_load = function() {
    return t.my_data = [], t.doing_async = !0, a("server/treedata.json").get(function(e) {
     return t.my_data = e.data, t.doing_async = !1, r.expand_all()
    }).$promise
   }, t.try_adding_a_branch = function() {
    var e;
    return e = r.get_selected_branch(), r.add_branch(e, {
     label: "New Branch",
     data: {
      something: 42,
      else: 43
     }
    })
   }
  }()
 }
 angular.module("app.elements").controller("AbnTestController", e), e.$inject = ["$timeout", "$resource"]
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   e.items = [{
    item: {
     text: "a"
    },
    children: []
   }, {
    item: {
     text: "b"
    },
    children: [{
     item: {
      text: "c"
     },
     children: []
    }, {
     item: {
      text: "d"
     },
     children: []
    }]
   }, {
    item: {
     text: "e"
    },
    children: []
   }, {
    item: {
     text: "f"
    },
    children: []
   }], e.items2 = [{
    item: {
     text: "1"
    },
    children: []
   }, {
    item: {
     text: "2"
    },
    children: [{
     item: {
      text: "3"
     },
     children: []
    }, {
     item: {
      text: "4"
     },
     children: []
    }]
   }, {
    item: {
     text: "5"
    },
    children: []
   }, {
    item: {
     text: "6"
    },
    children: []
   }]
  }()
 }
 angular.module("app.elements").controller("NestableController", e)
}(),
function() {
 "use strict";

 function e() {
  function e(e, a, t) {
   a.slimScroll({
    height: t.height || 250
   })
  }
  return {
   link: e,
   restrict: "EA"
  }
 }
 angular.module("app.elements").directive("scrollable", e)
}(),
function() {
 "use strict";

 function e(e) {
  ! function() {
   e.data1 = [{
    id: 1,
    name: "Donald Hoffman"
   }, {
    id: 2,
    name: "Wallace Barrett"
   }, {
    id: 3,
    name: "Marsha Hicks"
   }, {
    id: 4,
    name: "Roland Brown"
   }], e.add = function() {
    e.data1.push({
     id: e.data1.length + 1,
     name: "Earl Knight"
    })
   }, e.sortableOptions = {
    placeholder: "box-placeholder m0"
   }
  }()
 }
 angular.module("app.elements").controller("SortableController", e), e.$inject = ["$scope"]
}(),
function() {
 "use strict";

 function e(e) {
  var a = this;
  ! function() {
   a.demo1 = function() {
    e.swal("Here's a message")
   }, a.demo2 = function() {
    e.swal("Here's a message!", "It's pretty, isn't it?")
   }, a.demo3 = function() {
    e.swal("Good job!", "You clicked the button!", "success")
   }, a.demo4 = function() {
    e.swal({
     title: "Are you sure?",
     text: "Your will not be able to recover this imaginary file!",
     type: "warning",
     showCancelButton: !0,
     confirmButtonColor: "#DD6B55",
     confirmButtonText: "Yes, delete it!",
     closeOnConfirm: !1
    }, function() {
     e.swal("Booyah!")
    })
   }, a.demo5 = function() {
    e.swal({
     title: "Are you sure?",
     text: "Your will not be able to recover this imaginary file!",
     type: "warning",
     showCancelButton: !0,
     confirmButtonColor: "#DD6B55",
     confirmButtonText: "Yes, delete it!",
     cancelButtonText: "No, cancel plx!",
     closeOnConfirm: !1,
     closeOnCancel: !1
    }, function(a) {
     a ? e.swal("Deleted!", "Your imaginary file has been deleted.", "success") : e.swal("Cancelled", "Your imaginary file is safe :)", "error")
    })
   }, a.demo6 = function() {
    e.swal({
     title: "Sweet!",
     text: "Here's a custom image.",
     imageUrl: "http://oitozero.com/img/avatar.jpg"
    })
   }
  }()
 }
 angular.module("app.elements").controller("SweetAlertController", e), e.$inject = ["SweetAlert"]
}(),
function() {
 "use strict";

 function e(e) {
  var a = this;
  ! function() {
   a.toaster = {
    type: "success",
    title: "Title",
    text: "Message"
   }, a.pop = function() {
    e.pop(a.toaster.type, a.toaster.title, a.toaster.text)
   }
  }()
 }
 angular.module("app.elements").controller("ToasterDemoCtrl", e), e.$inject = ["toaster"]
}(),
function() {
 "use strict";

 function e(e) {
  ! function() {
   var a = angular.element(".wrapper > section");
   a.css({
    position: "static"
   }), e.$on("$destroy", function() {
    a.css({
     position: ""
    })
   })
  }()
 }
 angular.module("app.elements").controller("TourCtrl", e), e.$inject = ["$scope"]
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   e.htmlContent = "Article content...", e.postDemo = {}, e.postDemo.tags = ["coding", "less"], e.availableTags = ["coding", "less", "sass", "angularjs", "node", "expressJS"], e.postDemo.categories = ["JAVASCRIPT", "WEB"], e.availableCategories = ["JAVASCRIPT", "WEB", "BOOTSTRAP", "SERVER", "HTML5", "CSS"], e.reviewers = [{
    name: "Adam",
    email: "adam@email.com",
    age: 10
   }, {
    name: "Amalie",
    email: "amalie@email.com",
    age: 12
   }, {
    name: "Wladimir",
    email: "wladimir@email.com",
    age: 30
   }, {
    name: "Samantha",
    email: "samantha@email.com",
    age: 31
   }, {
    name: "Estefanía",
    email: "estefanía@email.com",
    age: 16
   }, {
    name: "Natasha",
    email: "natasha@email.com",
    age: 54
   }, {
    name: "Nicole",
    email: "nicole@email.com",
    age: 43
   }, {
    name: "Adrian",
    email: "adrian@email.com",
    age: 21
   }], e.alerts = [{
    type: "info",
    msg: 'There is an autosaved version of this article that is more recent than the version below. <a href="#" class="text-white">Restore</a>'
   }], e.closeAlert = function(a) {
    e.alerts.splice(a, 1)
   }
  }()
 }
 angular.module("app.extras").controller("ArticleController", e)
}(),
function() {
 "use strict";

 function e(e, a, t) {
  this.title = "CalendarController",
   function() {
    var o = new Date,
     n = o.getDate(),
     r = o.getMonth(),
     i = o.getFullYear();
    e.changeTo = "Hungarian", e.eventSource = {
     url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
     className: "gcal-event",
     currentTimezone: "America/Chicago"
    }, e.events = [{
     title: "All Day Event",
     start: new Date(i, r, 1),
     backgroundColor: "#f56954",
     borderColor: "#f56954"
    }, {
     title: "Long Event",
     start: new Date(i, r, n - 5),
     end: new Date(i, r, n - 2),
     backgroundColor: "#f39c12",
     borderColor: "#f39c12"
    }, {
     id: 999,
     title: "Repeating Event",
     start: new Date(i, r, n + 4, 16, 0),
     allDay: !1,
     backgroundColor: "#00c0ef",
     borderColor: "#00c0ef"
    }, {
     title: "Birthday Party",
     start: new Date(i, r, n + 1, 19, 0),
     end: new Date(i, r, n + 1, 22, 30),
     allDay: !1,
     backgroundColor: "#00a65a",
     borderColor: "#00a65a"
    }, {
     title: "Click for Google",
     start: new Date(i, r, 28),
     end: new Date(i, r, 29),
     url: "http://google.com/",
     backgroundColor: "#2f80e7",
     borderColor: "#2f80e7"
    }], e.eventsF = function(e, a, t, o) {
     var n = new Date(e).getTime() / 1e3;
     new Date(a).getTime(), o([{
      title: "Feed Me " + new Date(e).getMonth(),
      start: n + 5e4,
      end: n + 1e5,
      allDay: !1,
      className: ["customFeed"]
     }])
    }, e.calEventsExt = {
     color: "#f00",
     textColor: "white",
     events: [{
      type: "party",
      title: "Lunch",
      start: new Date(i, r, n, 12, 0),
      end: new Date(i, r, n, 14, 0),
      allDay: !1,
      backgroundColor: "#9289ca",
      borderColor: "#9289ca"
     }, {
      type: "party",
      title: "Lunch 2",
      start: new Date(i, r, n, 12, 0),
      end: new Date(i, r, n, 14, 0),
      allDay: !1,
      backgroundColor: "#9289ca",
      borderColor: "#9289ca"
     }, {
      type: "party",
      title: "Click for Google",
      start: new Date(i, r, 28),
      end: new Date(i, r, 29),
      url: "http://google.com/",
      backgroundColor: "#9289ca",
      borderColor: "#9289ca"
     }]
    }, e.alertOnEventClick = function(a, t, o) {
     e.alertMessage = a.title + " was clicked "
    }, e.alertOnDrop = function(a, t, o, n, r, i) {
     e.alertMessage = "Event Droped"
    }, e.alertOnResize = function(a, t, o, n, r, i) {
     e.alertMessage = "Event Resized"
    }, e.addRemoveEventSource = function(e, a) {
     var t = 0;
     angular.forEach(e, function(o, n) {
      e[n] === a && (e.splice(n, 1), t = 1)
     }), 0 === t && e.push(a)
    }, e.addEvent = function() {
     e.events.push({
      title: "Open Sesame",
      start: new Date(i, r, 28),
      end: new Date(i, r, 29),
      className: ["openSesame"]
     })
    }, e.remove = function(a) {
     e.events.splice(a, 1)
    }, e.changeView = function(e, a) {
     t.calendars[a].fullCalendar("changeView", e)
    }, e.renderCalender = function(e) {
     t.calendars[e] && t.calendars[e].fullCalendar("render")
    }, e.eventRender = function(t, o, n) {
     o.attr({
      tooltip: t.title,
      "tooltip-append-to-body": !0
     }), a(o)(e)
    }, e.uiConfig = {
     calendar: {
      height: 450,
      editable: !0,
      header: {
       left: "prev,next today",
       center: "title",
       right: "month,agendaWeek,agendaDay"
      },
      buttonIcons: {
       prev: " fa fa-caret-left",
       next: " fa fa-caret-right"
      },
      buttonText: {
       today: "today",
       month: "month",
       week: "week",
       day: "day"
      },
      eventClick: e.alertOnEventClick,
      eventDrop: e.alertOnDrop,
      eventResize: e.alertOnResize,
      eventRender: e.eventRender
     }
    }, e.changeLang = function() {
     "Hungarian" === e.changeTo ? (e.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"], e.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"], e.changeTo = "English") : (e.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], e.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], e.changeTo = "Hungarian")
    }, e.eventSources = [e.calEventsExt, e.eventsF, e.events]
   }()
 }
 angular.module("app.extras").controller("CalendarController", e), e.$inject = ["$scope", "$compile", "uiCalendarConfig"]
}(),
function() {
 "use strict";

 function e(e) {
  return e("server/editor/filetree.json")
 }
 angular.module("app.extras").service("LoadTreeService", e), e.$inject = ["$resource"]
}(),
function() {
 "use strict";

 function e(e, a, t, o, n) {
  var r = this;
  ! function() {
   e.app.useFullLayout = !0, e.app.hiddenFooter = !0, e.app.layout.isCollapsed = !0, a.$on("$destroy", function() {
    e.app.useFullLayout = !1, e.app.hiddenFooter = !1
   })
  }(),
  function() {
   function e(e) {
    var a = e.split(".");
    switch (a = a ? a[a.length - 1] : "") {
     case "html":
      return "htmlmixed";
     case "css":
      return "css";
     default:
      return "javascript"
    }
   }
   r.filetree_data = n, r.editorThemes = ["3024-day", "3024-night", "ambiance-mobile", "ambiance", "base16-dark", "base16-light", "blackboard", "cobalt", "eclipse", "elegant", "erlang-dark", "lesser-dark", "mbo", "mdn-like", "midnight", "monokai", "neat", "neo", "night", "paraiso-dark", "paraiso-light", "pastel-on-dark", "rubyblue", "solarized", "the-matrix", "tomorrow-night-eighties", "twilight", "vibrant-ink", "xq-dark", "xq-light"], r.editorOpts = {
     mode: "javascript",
     lineNumbers: !0,
     matchBrackets: !0,
     theme: "mbo",
     viewportMargin: 1 / 0
    }, r.refreshEditor = 0, r.loadTheme = function() {
     o.load("vendor/codemirror/theme/" + r.editorOpts.theme + ".css"), r.refreshEditor = !r.refreshEditor
    }, r.loadTheme(r.editorOpts.theme), r.code = "// Open a file from the left menu 
    // It will be requested to the server and loaded into the editor
    // Also try adding a New File from the toolbar
   ";var a;r.handle_filetree=function(o){a=o;var n=!!o.children.length;console.log("
   You selected: "+o.label+" - isFolder ? "+n),n||t.get("
   server / editor / "+o.path).then(function(a){console.log("
   Loaded..
   "+o.path),r.code=a.data,r.editorOpts.mode=e(o.path),console.log("
   Mode is: "+r.editorOpts.mode)})};var i;i=r.filetree={},r.new_filetree=function(){var e;return e=i.get_selected_branch(),e&&0===e.children.length&&(e=i.get_parent_branch(e)),i.add_branch(e,{label:"
   another.html ",path:"
   source / another.html "})}}()}angular.module("
   app.extras ").controller("
   CodeEditorController ",e),e.$inject=["
   $rootScope ","
   $scope ","
   $http ","
   $ocLazyLoad ","
   filetree "]}(),function(){"
   use strict ";function e(e){var a=this;!function(){a.items=[{todo:{title:"
   Meeting with Mark at 7 am.
   ",description:"
   Pellentesque convallis mauris eu elit imperdiet quis eleifend quam aliquet.
   "},complete:!0},{todo:{title:"
   Call Sonya.Talk about the new project.
   ",description:"
   "},complete:!1},{todo:{title:"
   Find a new place
   for vacations ",description:"
   "},complete:!1}],a.editingTodo=!1,a.todo={},a.addTodo=function(){"
   "!==a.todo.title&&(a.todo.description||(a.todo.description="
   "),a.editingTodo?(a.todo={},a.editingTodo=!1):(a.items.push({todo:angular.copy(a.todo),complete:!1}),a.todo.title="
   ",a.todo.description="
   "))},a.editTodo=function(e,t){t.preventDefault(),t.stopPropagation(),a.todo=a.items[e].todo,a.editingTodo=!0},a.removeTodo=function(e){a.items.splice(e,1)},a.clearAll=function(){a.items=[]},a.totalCompleted=function(){return e("
   filter ")(a.items,function(e){return e.complete}).length},a.totalPending=function(){return e("
   filter ")(a.items,function(e){return!e.complete}).length}}()}angular.module("
   app.extras ").controller("
   TodoController ",e),e.$inject=["
   $filter "]}(),function(){"
   use strict ";function e(){var e=this;!function(){e.words=[{text:"
   Lorem ",weight:13},{text:"
   Ipsum ",weight:10.5},{text:"
   Dolor ",weight:9.4},{text:"
   Sit ",weight:8},{text:"
   Amet ",weight:6.2},{text:"
   Consectetur ",weight:5},{text:"
   Adipiscing ",weight:5},{text:"
   Sit ",weight:8},{text:"
   Amet ",weight:6.2},{text:"
   Consectetur ",weight:5},{text:"
   Adipiscing ",weight:5}]}()}angular.module("
   app.extras ").controller("
   WordCloudController ",e)}(),function(){"
   use strict ";function e(){function e(e,a,t){Flatdoc.run({fetcher:Flatdoc.file(t.src)});var o,n=$("
   html, body "),r=$(document).on("
   flatdoc: ready ",function(){var e=$('[role="
   flatdoc - menu "]');o=e.find("
   a ").on("
   click ",function(a){a.preventDefault(),a.stopPropagation();var t=$(this);e.find("
   a.active ").removeClass("
   active "),t.addClass("
   active "),n.animate({scrollTop:$(this.getAttribute("
   href ")).offset().top-($(".topnavbar ").height()+10)},800)})});e.$on("
   $destroy ",function(){o&&o.off(),r.off("
   flatdoc: ready ")})}return{template:'<div role="
   flatdoc "><div role="
   flatdoc - menu "></div><div role="
   flatdoc - content "></div></div>',link:e,restrict:"
   EA "}}angular.module("
   app.flatdoc ").directive("
   flatdoc ",e)}(),function(){"
   use strict ";function e(){var e=this;!function(){e.hexPicker={color:"
   "},e.rgbPicker={color:"
   "},e.rgbaPicker={color:"
   "},e.nonInput={color:"
   "},e.resetColor=function(){e.hexPicker={color:"#
   ff0000 "}},e.resetRBGColor=function(){e.rgbPicker={color:"
   rgb(255, 255, 255)
   "}},e.resetRBGAColor=function(){e.rgbaPicker={color:"
   rgb(255, 255, 255, 0.25)
   "}},e.resetNonInputColor=function(){e.nonInput={color:"#
   ffffff "}}}()}angular.module("
   app.forms ").controller("
   ColorPickerController ",e)}(),function(){"
   use strict ";function e(){function e(e,a){var t=a.data();t.classInput=a.data("
   classinput ")||t.classInput,a.filestyle(t)}return{link:e,restrict:"
   A "}}angular.module("
   app.forms ").directive("
   filestyle ",e)}(),function(){"
   use strict ";function e(e){var a=this;!function(){a.reset=function(){a.myImage="
   ",a.myCroppedImage="
   ",a.imgcropType="
   square "},a.reset();var t=function(t){var o=t.currentTarget.files[0],n=new FileReader;n.onload=function(t){e.$apply(function(){a.myImage=t.target.result})},o&&n.readAsDataURL(o)};angular.element(document.querySelector("#
   fileInput ")).on("
   change ",t)}()}angular.module("
   app.forms ").controller("
   ImageCropController ",e),e.$inject=["
   $scope "]}(),function(){"
   use strict ";function e(){var e=this;!function(){e.notBlackListed=function(e){return-1===["
   some @mail.com ","
   another @email.com "].indexOf(e)},e.words=function(e){return e&&e.split("
   ").length},e.submitted=!1,e.validateInput=function(a,t){var o=e.formValidate[a];return(o.$dirty||e.submitted)&&o.$error[t]},e.submitForm=function(){if(e.submitted=!0,!e.formValidate.$valid)return console.log("
   Not valid!!"),!1;console.log("
   Submitted!!")}}()}angular.module("
   app.forms ").controller("
   FormValidationController ",e)}(),function(){"
   use strict ";function e(e){function t(a,t,n){var r=e(n.validateSteps)(a),i=new o(n.steps,!!r,t);a.wizard=i.init()}function o(e,a,t){var o=this;o.quantity=parseInt(e,10),o.validate=a,o.element=t,o.init=function(){return o.createsteps(o.quantity),o.go(1),o},o.go=function(e){if(angular.isDefined(o.steps[e])){if(o.validate&&1!==e){var a=o.element.scope();if("
   function "==typeof a.wizardValidate){var t=$(o.element).children().children("
   div ").eq(e-2).children(" [ng - form]
   ");if(!a.wizardValidate(t.attr("
   ng - form ")))return!1}}o.cleanall(),o.steps[e]=!0}},o.active=function(e){return!!o.steps[e]},o.cleanall=function(){for(var e in o.steps)o.steps[e]=!1},o.createsteps=function(e){o.steps=[];for(var a=1;a<=e;a++)o.steps[a]=!1}}return{link:t,controller:a,restrict:"
   A ",scope:!0}}function a(e){e.wizardValidate=function(a){if(angular.isDefined(e[a]))return e[a].$setSubmitted(!0),e[a].$valid}}angular.module("
   app.forms ").directive("
   formWizard ",e),e.$inject=["
   $parse "],a.$inject=["
   $scope "]}(),function(){"
   use strict ";function e(e,a,t,o,n){var r=this;r.title="
   Controller ",function(){a.theme="
   bs3 ",t.bs3.inputClass="
   input - sm ",t.bs3.buttonsClass="
   btn - sm ",t.bs3.submitTpl='<button type="
   submit " class="
   btn btn - success "><span class="
   fa fa - check "></span></button>',t.bs3.cancelTpl='<button type="
   button " class="
   btn btn -
    default " ng-click="
   $form.$cancel()
   "><span class="
   fa fa - times text - muted "></span></button>',r.user={email:"
   email @example.com ",tel:"
   123 - 45 - 67 ",number:29,range:10,url:"
   http: //example.com",search:"blabla",color:"#6a4415",date:null,time:new Date,datetime:null,month:null,week:null,desc:"Sed pharetra euismod dolor, id feugiat ante volutpat eget. "},r.user2={status:2},r.statuses=[{value:1,text:"status1"},{value:2,text:"status2"},{value:3,text:"status3"},{value:4,text:"status4"}],r.showStatus=function(){var e=o("filter")(r.statuses,{value:r.user2.status});return r.user2.status&&e.length?e[0].text:"Not set"},r.user3={id:4,text:"admin"},r.groups=[],r.loadGroups=function(){return r.groups.length?null:n.get("server/xeditable-groups.json").then(function(e){r.groups=e.data})},e.$watch("user3.id",function(e,a){if(e!==a){var t=o("filter")(r.groups,{id:r.user3.id});r.user3.text=t.length?t[0].text:null}}),r.user4={state:"Arizona"},r.states=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]}()}angular.module("app.forms").controller("FormxEditableController",e),e.$inject=["$scope","editableOptions","editableThemes","$filter","$http"]}(),function(){"use strict";function e(e){var a=this;!function(){e("server/cities.json",{},{get:{method:"GET",isArray:!0}}).get(function(e){a.cities=e}),a.slider1=5,a.slider2=10,a.slider3=15,a.slider4=20,a.slider5=25,a.slider6=30,a.slider7=10,a.slider8=[250,750];var t=e("server/chosen-states.json",{},{query:{method:"GET",isArray:!0}});a.states=t.query(),a.alertSubmit=function(){return alert("Form submitted!"),!1},a.wysiwygContent="<p> Write something here.. </p>"}()}angular.module("app.forms").controller("FormDemoCtrl",e),e.$inject=["$resource"]}(),function(){"use strict";function e(){function e(e,a){var t=$(a);$.fn.inputmask&&t.inputmask()}return{link:e,restrict:"A"}}angular.module("app.forms").directive("masked",e)}(),function(){"use strict";function e(){function e(e,a){var t=[];return angular.isArray(e)?e.forEach(function(e){for(var o=!1,n=Object.keys(a),r=0;r<n.length;r++){var i=n[r],l=a[i].toLowerCase();if(-1!==e[i].toString().toLowerCase().indexOf(l)){o=!0;break}}o&&t.push(e)}):t=e,t}return e}angular.module("app.forms").filter("propsFilter",e)}(),function(){"use strict";function e(e){function a(a,t,o,n){t.on("itemAdded itemRemoved",function(){n.$viewValue&&n.$viewValue.split&&(n.$setViewValue(n.$viewValue.split(",")),n.$render())}),e(function(){t.tagsinput()})}return{link:a,require:"ngModel",restrict:"A"}}angular.module("app.forms").directive("tagsinput",e),e.$inject=["$timeout"]}(),function(){"use strict";function e(e,a){var t=this;!function(){t.disabled=void 0,t.enable=function(){t.disabled=!1},t.disable=function(){t.disabled=!0},t.clear=function(){t.person.selected=void 0,t.address.selected=void 0,t.country.selected=void 0},t.person={},t.people=[{name:"Adam",email:"adam@email.com",age:10},{name:"Amalie",email:"amalie@email.com",age:12},{name:"Wladimir",email:"wladimir@email.com",age:30},{name:"Samantha",email:"samantha@email.com",age:31},{name:"Estefanía",email:"estefanía@email.com",age:16},{name:"Natasha",email:"natasha@email.com",age:54},{name:"Nicole",email:"nicole@email.com",age:43},{name:"Adrian",email:"adrian@email.com",age:21}],t.address={},t.refreshAddresses=function(e){if(e){var o={address:e};return a.get("//maps.googleapis.com/maps/api/geocode/json",{params:o}).then(function(e){t.addresses=e.data.results})}},t.country={},t.countries=[{name:"Afghanistan",code:"AF"},{name:"Åland Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"Andorra",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Cote D'Ivoire",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",
    code: "JO"
  }, {
   name: "Kazakhstan",
   code: "KZ"
  }, {
   name: "Kenya",
   code: "KE"
  }, {
   name: "Kiribati",
   code: "KI"
  }, {
   name: "Korea, Democratic People's Republic of",
   code: "KP"
  }, {
   name: "Korea, Republic of",
   code: "KR"
  }, {
   name: "Kuwait",
   code: "KW"
  }, {
   name: "Kyrgyzstan",
   code: "KG"
  }, {
   name: "Lao People's Democratic Republic",
   code: "LA"
  }, {
   name: "Latvia",
   code: "LV"
  }, {
   name: "Lebanon",
   code: "LB"
  }, {
   name: "Lesotho",
   code: "LS"
  }, {
   name: "Liberia",
   code: "LR"
  }, {
   name: "Libyan Arab Jamahiriya",
   code: "LY"
  }, {
   name: "Liechtenstein",
   code: "LI"
  }, {
   name: "Lithuania",
   code: "LT"
  }, {
   name: "Luxembourg",
   code: "LU"
  }, {
   name: "Macao",
   code: "MO"
  }, {
   name: "Macedonia, The Former Yugoslav Republic of",
   code: "MK"
  }, {
   name: "Madagascar",
   code: "MG"
  }, {
   name: "Malawi",
   code: "MW"
  }, {
   name: "Malaysia",
   code: "MY"
  }, {
   name: "Maldives",
   code: "MV"
  }, {
   name: "Mali",
   code: "ML"
  }, {
   name: "Malta",
   code: "MT"
  }, {
   name: "Marshall Islands",
   code: "MH"
  }, {
   name: "Martinique",
   code: "MQ"
  }, {
   name: "Mauritania",
   code: "MR"
  }, {
   name: "Mauritius",
   code: "MU"
  }, {
   name: "Mayotte",
   code: "YT"
  }, {
   name: "Mexico",
   code: "MX"
  }, {
   name: "Micronesia, Federated States of",
   code: "FM"
  }, {
   name: "Moldova, Republic of",
   code: "MD"
  }, {
   name: "Monaco",
   code: "MC"
  }, {
   name: "Mongolia",
   code: "MN"
  }, {
   name: "Montserrat",
   code: "MS"
  }, {
   name: "Morocco",
   code: "MA"
  }, {
   name: "Mozambique",
   code: "MZ"
  }, {
   name: "Myanmar",
   code: "MM"
  }, {
   name: "Namibia",
   code: "NA"
  }, {
   name: "Nauru",
   code: "NR"
  }, {
   name: "Nepal",
   code: "NP"
  }, {
   name: "Netherlands",
   code: "NL"
  }, {
   name: "Netherlands Antilles",
   code: "AN"
  }, {
   name: "New Caledonia",
   code: "NC"
  }, {
   name: "New Zealand",
   code: "NZ"
  }, {
   name: "Nicaragua",
   code: "NI"
  }, {
   name: "Niger",
   code: "NE"
  }, {
   name: "Nigeria",
   code: "NG"
  }, {
   name: "Niue",
   code: "NU"
  }, {
   name: "Norfolk Island",
   code: "NF"
  }, {
   name: "Northern Mariana Islands",
   code: "MP"
  }, {
   name: "Norway",
   code: "NO"
  }, {
   name: "Oman",
   code: "OM"
  }, {
   name: "Pakistan",
   code: "PK"
  }, {
   name: "Palau",
   code: "PW"
  }, {
   name: "Palestinian Territory, Occupied",
   code: "PS"
  }, {
   name: "Panama",
   code: "PA"
  }, {
   name: "Papua New Guinea",
   code: "PG"
  }, {
   name: "Paraguay",
   code: "PY"
  }, {
   name: "Peru",
   code: "PE"
  }, {
   name: "Philippines",
   code: "PH"
  }, {
   name: "Pitcairn",
   code: "PN"
  }, {
   name: "Poland",
   code: "PL"
  }, {
   name: "Portugal",
   code: "PT"
  }, {
   name: "Puerto Rico",
   code: "PR"
  }, {
   name: "Qatar",
   code: "QA"
  }, {
   name: "Reunion",
   code: "RE"
  }, {
   name: "Romania",
   code: "RO"
  }, {
   name: "Russian Federation",
   code: "RU"
  }, {
   name: "Rwanda",
   code: "RW"
  }, {
   name: "Saint Helena",
   code: "SH"
  }, {
   name: "Saint Kitts and Nevis",
   code: "KN"
  }, {
   name: "Saint Lucia",
   code: "LC"
  }, {
   name: "Saint Pierre and Miquelon",
   code: "PM"
  }, {
   name: "Saint Vincent and the Grenadines",
   code: "VC"
  }, {
   name: "Samoa",
   code: "WS"
  }, {
   name: "San Marino",
   code: "SM"
  }, {
   name: "Sao Tome and Principe",
   code: "ST"
  }, {
   name: "Saudi Arabia",
   code: "SA"
  }, {
   name: "Senegal",
   code: "SN"
  }, {
   name: "Serbia and Montenegro",
   code: "CS"
  }, {
   name: "Seychelles",
   code: "SC"
  }, {
   name: "Sierra Leone",
   code: "SL"
  }, {
   name: "Singapore",
   code: "SG"
  }, {
   name: "Slovakia",
   code: "SK"
  }, {
   name: "Slovenia",
   code: "SI"
  }, {
   name: "Solomon Islands",
   code: "SB"
  }, {
   name: "Somalia",
   code: "SO"
  }, {
   name: "South Africa",
   code: "ZA"
  }, {
   name: "South Georgia and the South Sandwich Islands",
   code: "GS"
  }, {
   name: "Spain",
   code: "ES"
  }, {
   name: "Sri Lanka",
   code: "LK"
  }, {
   name: "Sudan",
   code: "SD"
  }, {
   name: "Suriname",
   code: "SR"
  }, {
   name: "Svalbard and Jan Mayen",
   code: "SJ"
  }, {
   name: "Swaziland",
   code: "SZ"
  }, {
   name: "Sweden",
   code: "SE"
  }, {
   name: "Switzerland",
   code: "CH"
  }, {
   name: "Syrian Arab Republic",
   code: "SY"
  }, {
   name: "Taiwan, Province of China",
   code: "TW"
  }, {
   name: "Tajikistan",
   code: "TJ"
  }, {
   name: "Tanzania, United Republic of",
   code: "TZ"
  }, {
   name: "Thailand",
   code: "TH"
  }, {
   name: "Timor-Leste",
   code: "TL"
  }, {
   name: "Togo",
   code: "TG"
  }, {
   name: "Tokelau",
   code: "TK"
  }, {
   name: "Tonga",
   code: "TO"
  }, {
   name: "Trinidad and Tobago",
   code: "TT"
  }, {
   name: "Tunisia",
   code: "TN"
  }, {
   name: "Turkey",
   code: "TR"
  }, {
   name: "Turkmenistan",
   code: "TM"
  }, {
   name: "Turks and Caicos Islands",
   code: "TC"
  }, {
   name: "Tuvalu",
   code: "TV"
  }, {
   name: "Uganda",
   code: "UG"
  }, {
   name: "Ukraine",
   code: "UA"
  }, {
   name: "United Arab Emirates",
   code: "AE"
  }, {
   name: "United Kingdom",
   code: "GB"
  }, {
   name: "United States",
   code: "US"
  }, {
   name: "United States Minor Outlying Islands",
   code: "UM"
  }, {
   name: "Uruguay",
   code: "UY"
  }, {
   name: "Uzbekistan",
   code: "UZ"
  }, {
   name: "Vanuatu",
   code: "VU"
  }, {
   name: "Venezuela",
   code: "VE"
  }, {
   name: "Vietnam",
   code: "VN"
  }, {
   name: "Virgin Islands, British",
   code: "VG"
  }, {
   name: "Virgin Islands, U.S.",
   code: "VI"
  }, {
   name: "Wallis and Futuna",
   code: "WF"
  }, {
   name: "Western Sahara",
   code: "EH"
  }, {
   name: "Yemen",
   code: "YE"
  }, {
   name: "Zambia",
   code: "ZM"
  }, {
   name: "Zimbabwe",
   code: "ZW"
  }], t.someGroupFn = function(e) {
  return e.name[0] >= "A" && e.name[0] <= "M" ? "From A - M" : e.name[0] >= "N" && e.name[0] <= "Z" ? "From N - Z" : void 0
 }, t.counter = 0, t.someFunction = function(e, a) {
  t.counter++, t.eventResult = {
   item: e,
   model: a
  }
 }, t.availableColors = ["Red", "Green", "Blue", "Yellow", "Magenta", "Maroon", "Umbra", "Turquoise"], t.multipleDemo = {}, t.multipleDemo.colors = ["Blue", "Red"], t.multipleDemo.selectedPeople = [t.people[5], t.people[4]], t.multipleDemo.selectedPeopleWithGroupBy = [t.people[8], t.people[6]], t.multipleDemo.selectedPeopleSimple = ["samantha@email.com", "wladimir@email.com"]
}()
}
angular.module("app.forms").controller("uiSelectController", e), e.$inject = ["$scope", "$http"]
}(),
function() {
 "use strict";

 function e(e) {
  var a = this;
  ! function() {
   var t = a.uploader = new e({
    url: "server/upload.php"
   });
   t.filters.push({
    name: "customFilter",
    fn: function() {
     return this.queue.length < 10
    }
   }), t.onWhenAddingFileFailed = function(e, a, t) {
    console.info("onWhenAddingFileFailed", e, a, t)
   }, t.onAfterAddingFile = function(e) {
    console.info("onAfterAddingFile", e)
   }, t.onAfterAddingAll = function(e) {
    console.info("onAfterAddingAll", e)
   }, t.onBeforeUploadItem = function(e) {
    console.info("onBeforeUploadItem", e)
   }, t.onProgressItem = function(e, a) {
    console.info("onProgressItem", e, a)
   }, t.onProgressAll = function(e) {
    console.info("onProgressAll", e)
   }, t.onSuccessItem = function(e, a, t, o) {
    console.info("onSuccessItem", e, a, t, o)
   }, t.onErrorItem = function(e, a, t, o) {
    console.info("onErrorItem", e, a, t, o)
   }, t.onCancelItem = function(e, a, t, o) {
    console.info("onCancelItem", e, a, t, o)
   }, t.onCompleteItem = function(e, a, t, o) {
    console.info("onCompleteItem", e, a, t, o)
   }, t.onCompleteAll = function() {
    console.info("onCompleteAll")
   }, console.info("uploader", t)
  }()
 }
 angular.module("app.forms").controller("FileUploadController", e), e.$inject = ["FileUploader"]
}(),
function() {
 "use strict";

 function e() {
  function e(e, a, t) {
   var o = new Skycons({
    color: t.color || "white"
   });
   a.html('<canvas width="' + t.width + '" height="' + t.height + '"></canvas>'), o.add(a.children()[0], t.skycon), o.play()
  }
  return {
   link: e,
   restrict: "A"
  }
 }
 angular.module("app.icons").directive("skycon", e)
}(),
function() {
 "use strict";

 function e(e, a) {
  e.config({
   debug: !1,
   events: !0,
   modules: a.modules
  })
 }
 angular.module("app.lazyload").config(e), e.$inject = ["$ocLazyLoadProvider", "APP_REQUIRES"]
}(),
function() {
 "use strict";
 angular.module("app.lazyload").constant("APP_REQUIRES", {
  scripts: {
   whirl: ["vendor/whirl/dist/whirl.css"],
   animo: ["vendor/animo.js/animo.js"],
   fastclick: ["vendor/fastclick/lib/fastclick.js"],
   modernizr: ["vendor/modernizr/modernizr.custom.js"],
   animate: ["vendor/animate.css/animate.min.css"],
   skycons: ["vendor/skycons/skycons.js"],
   icons: ["vendor/fontawesome/css/font-awesome.min.css", "vendor/simple-line-icons/css/simple-line-icons.css"],
   "weather-icons": ["vendor/weather-icons/css/weather-icons.min.css", "vendor/weather-icons/css/weather-icons-wind.min.css"],
   sparklines: ["vendor/sparkline/index.js"],
   wysiwyg: ["vendor/bootstrap-wysiwyg/bootstrap-wysiwyg.js", "vendor/bootstrap-wysiwyg/external/jquery.hotkeys.js"],
   slimscroll: ["vendor/slimScroll/jquery.slimscroll.min.js"],
   screenfull: ["vendor/screenfull/dist/screenfull.js"],
   "vector-map": ["vendor/ika.jvectormap/jquery-jvectormap-1.2.2.min.js", "vendor/ika.jvectormap/jquery-jvectormap-1.2.2.css"],
   "vector-map-maps": ["vendor/ika.jvectormap/jquery-jvectormap-world-mill-en.js", "vendor/ika.jvectormap/jquery-jvectormap-us-mill-en.js"],
   loadGoogleMapsJS: ["vendor/load-google-maps/load-google-maps.js"],
   "flot-chart": ["vendor/flot/jquery.flot.js"],
   "flot-chart-plugins": ["vendor/flot.tooltip/js/jquery.flot.tooltip.min.js", "vendor/flot/jquery.flot.resize.js", "vendor/flot/jquery.flot.pie.js", "vendor/flot/jquery.flot.time.js", "vendor/flot/jquery.flot.categories.js", "vendor/flot-spline/js/jquery.flot.spline.min.js"],
   moment: ["vendor/moment/min/moment-with-locales.min.js"],
   inputmask: ["vendor/jquery.inputmask/dist/jquery.inputmask.bundle.js"],
   flatdoc: ["vendor/flatdoc/flatdoc.js"],
   codemirror: ["vendor/codemirror/lib/codemirror.js", "vendor/codemirror/lib/codemirror.css"],
   "codemirror-modes-web": ["vendor/codemirror/mode/javascript/javascript.js", "vendor/codemirror/mode/xml/xml.js", "vendor/codemirror/mode/htmlmixed/htmlmixed.js", "vendor/codemirror/mode/css/css.js"],
   taginput: ["vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.css", "vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js"],
   filestyle: ["vendor/bootstrap-filestyle/src/bootstrap-filestyle.js"],
   morris: ["vendor/raphael/raphael.js", "vendor/morris.js/morris.js", "vendor/morris.js/morris.css"],
   "loaders.css": ["vendor/loaders.css/loaders.css"],
   spinkit: ["vendor/spinkit/css/spinkit.css"]
  },
  modules: [{
   name: "toaster",
   files: ["vendor/angularjs-toaster/toaster.js", "vendor/angularjs-toaster/toaster.css"]
  }, {
   name: "localytics.directives",
   files: ["vendor/chosen_v1.2.0/chosen.jquery.min.js", "vendor/chosen_v1.2.0/chosen.min.css", "vendor/angular-chosen-localytics/dist/angular-chosen.js"],
   serie: !0
  }, {
   name: "ngDialog",
   files: ["vendor/ngDialog/js/ngDialog.min.js", "vendor/ngDialog/css/ngDialog.min.css", "vendor/ngDialog/css/ngDialog-theme-default.min.css"]
  }, {
   name: "ngWig",
   files: ["vendor/ngWig/dist/ng-wig.min.js"]
  }, {
   name: "ngTable",
   files: ["vendor/ng-table/dist/ng-table.min.js", "vendor/ng-table/dist/ng-table.min.css"]
  }, {
   name: "ngTableExport",
   files: ["vendor/ng-table-export/ng-table-export.js"]
  }, {
   name: "angularBootstrapNavTree",
   files: ["vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js", "vendor/angular-bootstrap-nav-tree/dist/abn_tree.css"]
  }, {
   name: "xeditable",
   files: ["vendor/angular-xeditable/dist/js/xeditable.js", "vendor/angular-xeditable/dist/css/xeditable.css"]
  }, {
   name: "angularFileUpload",
   files: ["vendor/angular-file-upload/dist/angular-file-upload.js"]
  }, {
   name: "ngImgCrop",
   files: ["vendor/ng-img-crop/compile/unminified/ng-img-crop.js", "vendor/ng-img-crop/compile/unminified/ng-img-crop.css"]
  }, {
   name: "ui.select",
   files: ["vendor/angular-ui-select/dist/select.js", "vendor/angular-ui-select/dist/select.css"]
  }, {
   name: "ui.codemirror",
   files: ["vendor/angular-ui-codemirror/ui-codemirror.js"]
  }, {
   name: "angular-carousel",
   files: ["vendor/angular-carousel/dist/angular-carousel.css", "vendor/angular-carousel/dist/angular-carousel.js"]
  }, {
   name: "infinite-scroll",
   files: ["vendor/ngInfiniteScroll/build/ng-infinite-scroll.js"]
  }, {
   name: "ui.bootstrap-slider",
   files: ["vendor/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js", "vendor/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css", "vendor/angular-bootstrap-slider/slider.js"],
   serie: !0
  }, {
   name: "ui.grid",
   files: ["vendor/angular-ui-grid/ui-grid.min.css", "vendor/angular-ui-grid/ui-grid.min.js"]
  }, {
   name: "summernote",
   files: ["vendor/bootstrap/js/modal.js", "vendor/bootstrap/js/dropdown.js", "vendor/bootstrap/js/tooltip.js", "vendor/summernote/dist/summernote.css", "vendor/summernote/dist/summernote.js", "vendor/angular-summernote/dist/angular-summernote.js"],
   serie: !0
  }, {
   name: "angular-rickshaw",
   files: ["vendor/d3/d3.min.js", "vendor/rickshaw/rickshaw.js", "vendor/rickshaw/rickshaw.min.css", "vendor/angular-rickshaw/rickshaw.js"],
   serie: !0
  }, {
   name: "angular-chartist",
   files: ["vendor/chartist/dist/chartist.min.css", "vendor/chartist/dist/chartist.js", "vendor/angular-chartist.js/dist/angular-chartist.js"],
   serie: !0
  }, {
   name: "ui.map",
   files: ["vendor/angular-ui-map/ui-map.js"]
  }, {
   name: "datatables",
   files: ["vendor/datatables/media/css/jquery.dataTables.css", "vendor/datatables/media/js/jquery.dataTables.js", "vendor/datatables-buttons/js/dataTables.buttons.js", "vendor/datatables-buttons/js/buttons.bootstrap.js", "vendor/datatables-buttons/js/buttons.colVis.js", "vendor/datatables-buttons/js/buttons.flash.js", "vendor/datatables-buttons/js/buttons.html5.js", "vendor/datatables-buttons/js/buttons.print.js", "vendor/angular-datatables/dist/angular-datatables.js", "vendor/angular-datatables/dist/plugins/buttons/angular-datatables.buttons.js"],
   serie: !0
  }, {
   name: "angular-jqcloud",
   files: ["vendor/jqcloud2/dist/jqcloud.css", "vendor/jqcloud2/dist/jqcloud.js", "vendor/angular-jqcloud/angular-jqcloud.js"]
  }, {
   name: "angularGrid",
   files: ["vendor/ag-grid/dist/styles/ag-grid.css", "vendor/ag-grid/dist/ag-grid.js", "vendor/ag-grid/dist/styles/theme-dark.css", "vendor/ag-grid/dist/styles/theme-fresh.css"]
  }, {
   name: "ng-nestable",
   files: ["vendor/ng-nestable/src/angular-nestable.js", "vendor/nestable/jquery.nestable.js"]
  }, {
   name: "akoenig.deckgrid",
   files: ["vendor/angular-deckgrid/angular-deckgrid.js"]
  }, {
   name: "oitozero.ngSweetAlert",
   files: ["vendor/sweetalert/dist/sweetalert.css", "vendor/sweetalert/dist/sweetalert.min.js", "vendor/angular-sweetalert/SweetAlert.js"],
   serie: !0
  }, {
   name: "bm.bsTour",
   files: ["vendor/bootstrap-tour/build/css/bootstrap-tour.css", "vendor/bootstrap-tour/build/js/bootstrap-tour-standalone.js", "vendor/angular-bootstrap-tour/dist/angular-bootstrap-tour.js"],
   serie: !0
  }, {
   name: "ui.knob",
   files: ["vendor/angular-knob/src/angular-knob.js", "vendor/jquery-knob/dist/jquery.knob.min.js"]
  }, {
   name: "easypiechart",
   files: ["vendor/jquery.easy-pie-chart/dist/angular.easypiechart.min.js"]
  }, {
   name: "colorpicker.module",
   files: ["vendor/angular-bootstrap-colorpicker/css/colorpicker.css", "vendor/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js"]
  }, {
   name: "ui.sortable",
   files: ["vendor/jquery-ui/jquery-ui.min.js", "vendor/angular-ui-sortable/sortable.js"],
   serie: !0
  }, {
   name: "ui.calendar",
   files: ["vendor/jquery-ui/jquery-ui.min.js", "vendor/jqueryui-touch-punch/jquery.ui.touch-punch.min.js", "vendor/fullcalendar/dist/fullcalendar.min.js", "vendor/fullcalendar/dist/gcal.js", "vendor/fullcalendar/dist/fullcalendar.css", "vendor/angular-ui-calendar/src/calendar.js"],
   serie: !0
  }, {
   name: "chart.js",
   files: ["vendor/chart.js/dist/Chart.js", "vendor/angular-chart.js/dist/angular-chart.js"],
   serie: !0
  }]
 })
}(),
function() {
 "use strict";

 function e(e) {
  e.includeBar = !0, e.includeSpinner = !1, e.latencyThreshold = 500, e.parentSelector = ".wrapper > section"
 }
 angular.module("app.loadingbar").config(e), e.$inject = ["cfpLoadingBarProvider"]
}(),
function() {
 "use strict";

 function e(e, a, t) {
  var o;
  e.$on("$stateChangeStart", function() {
   $(".wrapper > section").length && (o = a(function() {
    t.start()
   }, 0))
  }), e.$on("$stateChangeSuccess", function(e) {
   e.targetScope.$watch("$viewContentLoaded", function() {
    a.cancel(o), t.complete()
   })
  })
 }
 angular.module("app.loadingbar").run(e), e.$inject = ["$rootScope", "$timeout", "cfpLoadingBar"]
}(),
function() {
 "use strict";

 function e(e) {
  e.localeLocationPattern("vendor/angular-i18n/angular-locale_{{locale}}.js")
 }
 angular.module("app.locale").config(e), e.$inject = ["tmhDynamicLocaleProvider"]
}(),
function() {
 "use strict";

 function e(e, a, t) {
  ! function() {
   e.availableLocales = {
    en: "English",
    es: "Spanish",
    de: "German",
    fr: "French",
    ar: "Arabic",
    ja: "Japanese",
    ko: "Korean",
    zh: "Chinese"
   }, e.model = {
    selectedLocale: "en"
   }, e.$locale = t, e.changeLocale = a.set
  }()
 }
 angular.module("app.locale").controller("LocalizationController", e), e.$inject = ["$rootScope", "tmhDynamicLocale", "$locale"]
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   e.folders = [{
    name: "Inbox",
    folder: "inbox",
    alert: 42,
    icon: "fa-inbox"
   }, {
    name: "Starred",
    folder: "starred",
    alert: 10,
    icon: "fa-star"
   }, {
    name: "Sent",
    folder: "sent",
    alert: 0,
    icon: "fa-paper-plane-o"
   }, {
    name: "Draft",
    folder: "draft",
    alert: 5,
    icon: "fa-edit"
   }, {
    name: "Trash",
    folder: "trash",
    alert: 0,
    icon: "fa-trash"
   }], e.labels = [{
    name: "Red",
    color: "danger"
   }, {
    name: "Pink",
    color: "pink"
   }, {
    name: "Blue",
    color: "info"
   }, {
    name: "Yellow",
    color: "warning"
   }], e.mail = {
    cc: !1,
    bcc: !1
   }, e.content = "<p>Type something..</p>"
  }()
 }
 angular.module("app.mailbox").controller("MailboxController", e)
}(),
function() {
 "use strict";

 function e(e, a) {
  var t = this;
  ! function() {
   t.folder = {}, t.folder.folder = "inbox" === a.folder ? "" : a.folder, e.all().then(function(e) {
    t.mails = e
   })
  }()
 }
 angular.module("app.mailbox").controller("MailFolderController", e), e.$inject = ["mails", "$stateParams"]
}(),
function() {
 "use strict";

 function e(e) {
  function a() {
   return e.get("server/mails.json").then(function(e) {
    return e.data.mails
   })
  }

  function t() {
   return a()
  }

  function o(e) {
   return a().then(function(a) {
    for (var t = 0; t < a.length; t++)
     if (+a[t].id == +e) return a[t];
    return null
   })
  }
  return {
   all: t,
   get: o
  }
 }
 angular.module("app.mailbox").factory("mails", e), e.$inject = ["$http"]
}(),
function() {
 "use strict";

 function e(e, a) {
  var t = this;
  ! function() {
   e.get(a.mid).then(function(e) {
    t.mail = e
   })
  }()
 }
 angular.module("app.mailbox").controller("MailViewController", e), e.$inject = ["mails", "$stateParams"]
}(),
function() {
 "use strict";

 function e() {
  return {
   controller: t,
   restrict: "A"
  }
 }

 function a() {
  return {
   controller: o,
   restrict: "A"
  }
 }

 function t(e, a, t) {
  a.on("click", function(e) {
   e.stopPropagation()
  }).on("click", t.toggle)
 }

 function o(e, a, t) {
  $('.navbar-form input[type="text"]').on("click", function(e) {
   e.stopPropagation()
  }).on("keyup", function(e) {
   27 === e.keyCode && t.dismiss()
  }), $(document).on("click", t.dismiss), a.on("click", function(e) {
   e.stopPropagation()
  }).on("click", t.dismiss)
 }
 angular.module("app.navsearch").directive("searchOpen", e).directive("searchDismiss", a), t.$inject = ["$scope", "$element", "NavSearch"], o.$inject = ["$scope", "$element", "NavSearch"]
}(),
function() {
 "use strict";

 function e() {
  function e() {
   var e = $(t);
   e.toggleClass("open");
   var a = e.hasClass("open");
   e.find("input")[a ? "focus" : "blur"]()
  }

  function a() {
   $(t).removeClass("open").find('input[type="text"]').blur()
  }
  this.toggle = e, this.dismiss = a;
  var t = "form.navbar-form"
 }
 angular.module("app.navsearch").service("NavSearch", e)
}(),
function() {
 "use strict";

 function e(e, a) {
  var t = this;
  ! function() {
   t.msgHtml = '<em class="fa fa-check"></em> Message with icon..', t.notifyMsg = "Some messages here..", t.notifyOpts = {
    status: "danger",
    pos: "bottom-center"
   }, a(function() {
    e.alert("This is a custom message from notify..", {
     status: "success"
    })
   }, 500)
  }()
 }
 angular.module("app.notify").controller("NotifyDemoCtrl", e), e.$inject = ["Notify", "$timeout"]
}(),
function() {
 "use strict";

 function e(e, a) {
  function t(e, t) {
   t.on("click", function(t) {
    t.preventDefault(), a.alert(e.message, e.options)
   })
  }
  return {
   link: t,
   restrict: "A",
   scope: {
    options: "=",
    message: "="
   }
  }
 }
 angular.module("app.notify").directive("notify", e), e.$inject = ["$window", "Notify"]
}(),
function() {
 "use strict";

 function e(e) {
  function a(a, t) {
   a && e(function() {
    $.notify(a, t || {})
   })
  }
  this.alert = a
 }
 angular.module("app.notify").service("Notify", e), e.$inject = ["$timeout"]
}(),
function(e) {
 "use strict";
 var a = {},
  t = {},
  o = function(a) {
   return "string" === e.type(a) && (a = {
    message: a
   }), arguments[1] && (a = e.extend(a, "string" === e.type(arguments[1]) ? {
    status: arguments[1]
   } : arguments[1])), new r(a).show()
  },
  n = function(e, a) {
   var o;
   if (e)
    for (o in t) e === t[o].group && t[o].close(a);
   else
    for (o in t) t[o].close(a)
  },
  r = function(o) {
   this.options = e.extend({}, r.defaults, o), this.uuid = "ID" + (new Date).getTime() + "RAND" + Math.ceil(1e5 * Math.random()), this.element = e(['<div class="uk-notify-message alert-dismissable">', '<a class="close">&times;</a>', "<div>" + this.options.message + "</div>", "</div>"].join("")).data("notifyMessage", this), this.options.status && (this.element.addClass("alert alert-" + this.options.status), this.currentstatus = this.options.status), this.group = this.options.group, t[this.uuid] = this, a[this.options.pos] || (a[this.options.pos] = e('<div class="uk-notify uk-notify-' + this.options.pos + '"></div>').appendTo("body").on("click", ".uk-notify-message", function() {
    e(this).data("notifyMessage").close()
   }))
  };
 e.extend(r.prototype, {
  uuid: !1,
  element: !1,
  timout: !1,
  currentstatus: "",
  group: !1,
  show: function() {
   if (!this.element.is(":visible")) {
    var e = this;
    a[this.options.pos].show().prepend(this.element);
    var t = parseInt(this.element.css("margin-bottom"), 10);
    return this.element.css({
     opacity: 0,
     "margin-top": -1 * this.element.outerHeight(),
     "margin-bottom": 0
    }).animate({
     opacity: 1,
     "margin-top": 0,
     "margin-bottom": t
    }, function() {
     if (e.options.timeout) {
      var a = function() {
       e.close()
      };
      e.timeout = setTimeout(a, e.options.timeout), e.element.hover(function() {
       clearTimeout(e.timeout)
      }, function() {
       e.timeout = setTimeout(a, e.options.timeout)
      })
     }
    }), this
   }
  },
  close: function(e) {
   var o = this,
    n = function() {
     o.element.remove(), a[o.options.pos].children().length || a[o.options.pos].hide(), delete t[o.uuid]
    };
   this.timeout && clearTimeout(this.timeout), e ? n() : this.element.animate({
    opacity: 0,
    "margin-top": -1 * this.element.outerHeight(),
    "margin-bottom": 0
   }, function() {
    n()
   })
  },
  content: function(e) {
   var a = this.element.find(">div");
   return e ? (a.html(e), this) : a.html()
  },
  status: function(e) {
   return e ? (this.element.removeClass("alert alert-" + this.currentstatus).addClass("alert alert-" + e), this.currentstatus = e, this) : this.currentstatus
  }
 }), r.defaults = {
  message: "",
  status: "normal",
  timeout: 5e3,
  group: null,
  pos: "top-center"
 }, e.notify = o, e.notify.message = r, e.notify.closeAll = n
}(jQuery),
function() {
 "use strict";

 function e(e) {
  var a = this;
  ! function() {
   function t(e, a, t) {
    a.opened.then(function() {
     var a = new google.maps.LatLng(33.790807, -117.835734);
     e.mapOptionsModal = {
      zoom: 14,
      center: a,
      mapTypeId: google.maps.MapTypeId.ROADMAP
     }, t(function() {
      new google.maps.Marker({
       map: e.myMapModal,
       position: a
      }), google.maps.event.trigger(e.myMapModal, "resize"), e.myMapModal.panTo(a)
     })
    }), e.ok = function() {
     a.close("closed")
    }, e.cancel = function() {
     a.dismiss("cancel")
    }
   }
   a.open = function(a) {
    e.open({
     templateUrl: "/myModalContent.html",
     controller: t,
     size: a
    })
   }, t.$inject = ["$scope", "$uibModalInstance", "$timeout"]
  }()
 }
 angular.module("app.maps").controller("ModalGmapController", e), e.$inject = ["$uibModal"]
}(),
function() {
 "use strict";

 function e(e) {
  var a = this;
  ! function() {
   function t(e, a) {
    return new google.maps.Marker({
     map: e,
     position: a
    })
   }
   var o = [new google.maps.LatLng(33.790807, -117.835734), new google.maps.LatLng(33.790807, -117.835734), new google.maps.LatLng(33.790807, -117.835734), new google.maps.LatLng(33.790807, -117.835734), new google.maps.LatLng(33.787453, -117.835858)];
   a.addMarker = t, e(function() {
    t(a.myMap1, o[0]), t(a.myMap2, o[1]), t(a.myMap3, o[2]), t(a.myMap5, o[3])
   }), a.mapOptions1 = {
    zoom: 14,
    center: o[0],
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: !1
   }, a.mapOptions2 = {
    zoom: 19,
    center: o[1],
    mapTypeId: google.maps.MapTypeId.ROADMAP
   }, a.mapOptions3 = {
    zoom: 14,
    center: o[2],
    mapTypeId: google.maps.MapTypeId.SATELLITE
   }, a.mapOptions4 = {
    zoom: 14,
    center: o[3],
    mapTypeId: google.maps.MapTypeId.ROADMAP
   }, e(function() {
    t(a.myMap4, o[3]), t(a.myMap4, o[4])
   });
   var n = [{
    featureType: "water",
    stylers: [{
     visibility: "on"
    }, {
     color: "#bdd1f9"
    }]
   }, {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [{
     color: "#334165"
    }]
   }, {
    featureType: "landscape",
    stylers: [{
     color: "#e9ebf1"
    }]
   }, {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{
     color: "#c5c6c6"
    }]
   }, {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{
     color: "#fff"
    }]
   }, {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [{
     color: "#fff"
    }]
   }, {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{
     color: "#d8dbe0"
    }]
   }, {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{
     color: "#cfd5e0"
    }]
   }, {
    featureType: "administrative",
    stylers: [{
     visibility: "on"
    }, {
     lightness: 33
    }]
   }, {
    featureType: "poi.park",
    elementType: "labels",
    stylers: [{
     visibility: "on"
    }, {
     lightness: 20
    }]
   }, {
    featureType: "road",
    stylers: [{
     color: "#d8dbe0",
     lightness: 20
    }]
   }];
   a.mapOptions5 = {
    zoom: 14,
    center: o[3],
    styles: n,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: !1
   }
  }()
 }
 angular.module("app.maps").controller("GMapController", e), e.$inject = ["$timeout"]
}(),
function() {
 "use strict";

 function e(e) {
  function a(a, t, o) {
   var n = {
     markerColor: "#23b7e5",
     bgColor: "transparent",
     scaleColors: ["#878c9a"],
     regionFill: "#bbbec6"
    },
    r = o.height || "300",
    i = {
     markerColor: o.markerColor || n.markerColor,
     bgColor: o.bgColor || n.bgColor,
     scale: o.scale || 1,
     scaleColors: o.scaleColors || n.scaleColors,
     regionFill: o.regionFill || n.regionFill,
     mapName: o.mapName || "world_mill_en"
    };
   t.css("height", r), e.init(t, i, a.seriesData, a.markersData)
  }
  return {
   link: a,
   restrict: "EA",
   scope: {
    seriesData: "=",
    markersData: "="
   }
  }
 }
 angular.module("app.maps").directive("vectorMap", e), e.$inject = ["VectorMap"]
}(),
function() {
 "use strict";

 function e() {
  function e(e, a, t, o) {
   e.vectorMap({
    map: a.mapName,
    backgroundColor: a.bgColor,
    zoomMin: 1,
    zoomMax: 8,
    zoomOnScroll: !1,
    regionStyle: {
     initial: {
      fill: a.regionFill,
      "fill-opacity": 1,
      stroke: "none",
      "stroke-width": 1.5,
      "stroke-opacity": 1
     },
     hover: {
      "fill-opacity": .8
     },
     selected: {
      fill: "blue"
     },
     selectedHover: {}
    },
    focusOn: {
     x: .4,
     y: .6,
     scale: a.scale
    },
    markerStyle: {
     initial: {
      fill: a.markerColor,
      stroke: a.markerColor
     }
    },
    onRegionLabelShow: function(e, a, o) {
     t && t[o] && a.html(a.html() + ": " + t[o] + " visitors")
    },
    markers: o,
    series: {
     regions: [{
      values: t,
      scale: a.scaleColors,
      normalizeFunction: "polynomial"
     }]
    }
   })
  }
  this.init = e
 }
 angular.module("app.maps").service("VectorMap", e)
}(),
function() {
 "use strict";

 function e() {
  var e = this;
  ! function() {
   e.seriesData = {
    CA: 11100,
    DE: 2510,
    FR: 3710,
    AU: 5710,
    GB: 8310,
    RU: 9310,
    BR: 6610,
    IN: 7810,
    CN: 4310,
    US: 839,
    SA: 410
   }, e.markersData = [{
    latLng: [41.9, 12.45],
    name: "Vatican City"
   }, {
    latLng: [43.73, 7.41],
    name: "Monaco"
   }, {
    latLng: [-.52, 166.93],
    name: "Nauru"
   }, {
    latLng: [-8.51, 179.21],
    name: "Tuvalu"
   }, {
    latLng: [7.11, 171.06],
    name: "Marshall Islands"
   }, {
    latLng: [17.3, -62.73],
    name: "Saint Kitts and Nevis"
   }, {
    latLng: [3.2, 73.22],
    name: "Maldives"
   }, {
    latLng: [35.88, 14.5],
    name: "Malta"
   }, {
    latLng: [41, -71.06],
    name: "New England"
   }, {
    latLng: [12.05, -61.75],
    name: "Grenada"
   }, {
    latLng: [13.16, -59.55],
    name: "Barbados"
   }, {
    latLng: [17.11, -61.85],
    name: "Antigua and Barbuda"
   }, {
    latLng: [-4.61, 55.45],
    name: "Seychelles"
   }, {
    latLng: [7.35, 134.46],
    name: "Palau"
   }, {
    latLng: [42.5, 1.51],
    name: "Andorra"
   }]
  }()
 }
 angular.module("app.maps").controller("VectorMapController", e)
}(),
function() {
 "use strict";

 function e(e, a) {
  var t = this;
  ! function() {
   t.account = {}, t.authMsg = "", t.login = function() {
    t.authMsg = "", t.loginForm.$valid ? e.post("api/account/login", {
     email: t.account.email,
     password: t.account.password
    }).then(function(e) {
     e.account ? a.go("app.dashboard") : t.authMsg = "Incorrect credentials."
    }, function() {
     t.authMsg = "Server Request Error"
    }) : (t.loginForm.account_email.$dirty = !0, t.loginForm.account_password.$dirty = !0)
   }
  }()
 }
 angular.module("app.pages").controller("LoginFormController", e), e.$inject = ["$http", "$state"]
}(),
function() {
 "use strict";

 function e(e, a) {
  var t = this;
  ! function() {
   t.account = {}, t.authMsg = "", t.register = function() {
    t.authMsg = "", t.registerForm.$valid ? e.post("api/account/register", {
     email: t.account.email,
     password: t.account.password
    }).then(function(e) {
     e.account ? a.go("app.dashboard") : t.authMsg = e
    }, function() {
     t.authMsg = "Server Request Error"
    }) : (t.registerForm.account_email.$dirty = !0, t.registerForm.account_password.$dirty = !0, t.registerForm.account_agreed.$dirty = !0)
   }
  }()
 }
 angular.module("app.pages").controller("RegisterFormController", e), e.$inject = ["$http", "$state"]
}(),
function() {
 "use strict";

 function e() {
  return {
   controller: a,
   restrict: "A",
   scope: !1
  }
 }

 function a(e, a, t, o) {
  function n(e, a) {
   if (!e) return !1;
   var t = angular.fromJson(o[r]);
   t || (t = {}), t[e] = a, o[r] = angular.toJson(t)
  }
  var r = "panelState",
   i = $(a),
   l = i.closest(".panel"),
   s = l.attr("id"),
   c = function(e) {
    if (!e) return !1;
    var a = angular.fromJson(o[r]);
    return a ? a[e] : void 0
   }(s);
  void 0 !== c && t(function() {
   e[s] = c
  }, 10), a.bind("click", function(a) {
   a.preventDefault(), n(s, !e[s])
  })
 }
 angular.module("app.panels").directive("panelCollapse", e), a.$inject = ["$scope", "$element", "$timeout", "$localStorage"]
}(),
function() {
 "use strict";

 function e() {
  return {
   controller: a,
   restrict: "A"
  }
 }

 function a(e, a, t, o) {
  var n = "panel-remove";
  a.on("click", function(a) {
   function r() {
    o.support.animation ? l.animo({
     animation: "bounceOut"
    }, i) : i()
   }

   function i() {
    var a = l.parent();
    l.remove(), a.filter(function() {
     var e = $(this);
     return e.is('[class*="col-"]:not(.sortable)') && 0 === e.children("*").length
    }).remove(), e.$emit("panel-removed", l.attr("id"))
   }
   a.preventDefault();
   var l = $(this).closest(".panel");
   ! function() {
    var a = t.defer(),
     o = a.promise;
    e.$emit(n, l.attr("id"), a), o.then(r)
   }()
  })
 }
 angular.module("app.panels").directive("panelDismiss", e), a.$inject = ["$scope", "$element", "$q", "Utils"]
}(),
function() {
 "use strict";

 function e() {
  return {
   controller: a,
   restrict: "A",
   scope: !1
  }
 }

 function a(e, a) {
  function t(e, a) {
   if (a) {
    var t = "#" === a.charAt(0) ? a : "#" + a;
    angular.element(t).removeClass(o)
   }
  }
  var o = "whirl";
  a.on("click", function(a) {
   a.preventDefault();
   var t = $(this),
    n = t.parents(".panel").eq(0),
    r = t.data("spinner") || "standard";
   n.addClass(o + " " + r), e.$emit("panel-refresh", n.attr("id"))
  }), e.$on("removeSpinner", t)
 }
 angular.module("app.panels").directive("panelRefresh", e), a.$inject = ["$scope", "$element"]
}(),
function() {
 "use strict";

 function e(e, a) {
  function t(t, o, n) {
   function r(e, a) {
    var t = "";
    return a = a || {}, a.toolCollapse && (t += i.collapse.replace(/{{panelId}}/g, e.parent().parent().attr("id"))), a.toolDismiss && (t += i.dismiss), a.toolRefresh && (t += i.refresh.replace(/{{spinner}}/g, a.toolRefresh)), t
   }
   var i = {
     collapse: '<a href="#" panel-collapse="" uib-tooltip="Collapse Panel" ng-click="{{panelId}} = !{{panelId}}">                         <em ng-show="{{panelId}}" class="fa fa-plus ng-no-animation"></em>                         <em ng-show="!{{panelId}}" class="fa fa-minus ng-no-animation"></em>                       </a>',
     dismiss: '<a href="#" panel-dismiss="" uib-tooltip="Close Panel">                       <em class="fa fa-times"></em>                     </a>',
     refresh: '<a href="#" panel-refresh="" data-spinner="{{spinner}}" uib-tooltip="Refresh Panel">                       <em class="fa fa-refresh"></em>                     </a>'
    },
    l = t.panelTools || n;
   a(function() {
    o.html(r(o, l)).show(), e(o.contents())(t), o.addClass("pull-right")
   })
  }
  return {
   link: t,
   restrict: "E",
   scope: !1
  }
 }
 angular.module("app.panels").directive("paneltool", e), e.$inject = ["$compile", "$timeout"]
}(),
function() {
 "use strict";

 function e(e, a) {
  ! function() {
   e.$watch("panelDemo1", function(e) {
    console.log("panelDemo1 collapsed: " + e)
   }), e.$on("panel-remove", function(e, a, t) {
    console.log("Panel #" + a + " removing"), t.resolve()
   }), e.$on("panel-removed", function(e, a) {
    console.log("Panel #" + a + " removed")
   }), e.$on("panel-refresh", function(t, o) {
    console.log("Refreshing during 3s #" + o), a(function() {
     e.$broadcast("removeSpinner", o), console.log("Refreshed #" + o)
    }, 3e3)
   }), e.panels = [{
    id: "panelRepeat1",
    title: "Panel Title 1",
    body: "Nulla eget lorem leo, sit amet elementum lorem. "
   }, {
    id: "panelRepeat2",
    title: "Panel Title 2",
    body: "Nulla eget lorem leo, sit amet elementum lorem. "
   }, {
    id: "panelRepeat3",
    title: "Panel Title 3",
    body: "Nulla eget lorem leo, sit amet elementum lorem. "
   }]
  }()
 }
 angular.module("app.panels").controller("PanelsCtrl", e), e.$inject = ["$scope", "$timeout"]
}(),
function() {
 "use strict";

 function e(e, a) {
  var t = this,
   o = "portletState";
  ! function() {
   function n(n) {
    e(function() {
     a[o] = angular.toJson(t.panels)
    })
   }

   function r(n) {
    var r = angular.fromJson(a[o]);
    r && e(function() {
     t.panels = r, t.panelList1 = t.panels[0], t.panelList2 = t.panels[1], t.panelList3 = t.panels[2]
    })
   }
   t.panels = [
    [{
     id: "panelPortlet1",
     type: "default",
     heading: "Panel heading",
     content: "Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.",
     footer: "Panale footer"
    }, {
     id: "panelPortlet2",
     type: "primary",
     heading: "Panel heading",
     content: "Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.",
     footer: "Panale footer"
    }, {
     id: "panelPortlet3",
     type: "success",
     heading: "Panel heading",
     content: "Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.",
     footer: "Panale footer"
    }],
    [{
     id: "panelPortlet4",
     type: "info",
     heading: "Panel heading",
     content: "Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.",
     footer: "Panale footer"
    }, {
     id: "panelPortlet5",
     type: "warning",
     heading: "Panel heading",
     content: "Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.",
     footer: "Panale footer"
    }, {
     id: "panelPortlet6",
     type: "danger",
     heading: "Panel heading",
     content: "Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.",
     footer: "Panale footer"
    }],
    [{
     id: "panelPortlet7",
     type: "inverse",
     heading: "Panel heading",
     content: "Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.",
     footer: "Panale footer"
    }, {
     id: "panelPortlet8",
     type: "purple",
     heading: "Panel heading",
     content: "Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.",
     footer: "Panale footer"
    }, {
     id: "panelPortlet9",
     type: "green",
     heading: "Panel heading",
     content: "Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.",
     footer: "Panale footer"
    }]
   ], t.panelList1 = t.panels[0], t.panelList2 = t.panels[1], t.panelList3 = t.panels[2], t.sortablePortletOptions = {
    connectWith: ".portlet-connect",
    handle: ".panel-heading",
    opacity: .7,
    placeholder: "portlet box-placeholder",
    cancel: ".portlet-cancel",
    forcePlaceholderSize: !0,
    iframeFix: !1,
    tolerance: "pointer",
    helper: "original",
    revert: 200,
    forceHelperSize: !0,
    update: n,
    create: r
   }
  }()
 }
 angular.module("app.panels").controller("DraggablePanelController", e), e.$inject = ["$timeout", "$localStorage"]
}(),
function() {
 "use strict";

 function e(e, a, t) {
  function o(o, n) {
   function r() {
    var e = 100 - s;
    s += .015 * Math.pow(1 - Math.sqrt(e), 2), o.loadCounter = parseInt(s, 10), l = a(r, 20)
   }

   function i() {
    a.cancel(l), o.loadCounter = 100, a(function() {
     e.addClass(n, "preloader-hidden"), angular.element("body").css("overflow", "")
    }, 300)
   }
   o.loadCounter = 0;
   var l, s = 0;
   angular.element("body").css("overflow", "hidden"), n.addClass("preloader"),
    function() {
     var e = t.defer(),
      n = 0,
      r = o.$on("$viewContentLoaded", function() {
       2 === ++n && (a(function() {
        e.resolve()
       }, 3e3), r())
      });
     return e.promise
    }().then(i), l = a(r)
  }
  return {
   restrict: "EAC",
   template: '<div class="preloader-progress"><div class="preloader-progress-bar" ng-style="{width: loadCounter + ' % '}"></div></div>',
   link: o
  }
 }
 angular.module("app.preloader").directive("preloader", e), e.$inject = ["$animate", "$timeout", "$q"]
}(),
function() {
 "use strict";

 function e(e) {
  function a(e) {
   return "app/views/" + e
  }

  function t() {
   var a = arguments;
   return {
    deps: ["$ocLazyLoad", "$q", function(t, o) {
     function n(a) {
      if (e.modules)
       for (var t in e.modules)
        if (e.modules[t].name && e.modules[t].name === a) return e.modules[t];
      return e.scripts && e.scripts[a]
     }
     for (var r = o.when(1), i = 0, l = a.length; i < l; i++) r = function(e) {
      return "function" == typeof e ? r.then(e) : r.then(function() {
       var a = n(e);
       return a ? t.load(a) : $.error("Route resolve: Bad resource name [" + e + "]")
      })
     }(a[i]);
     return r
    }]
   }
  }
  return {
   basepath: a,
   resolveFor: t,
   $get: function() {
    return {
     basepath: a,
     resolveFor: t
    }
   }
  }
 }
 angular.module("app.routes").provider("RouteHelpers", e), e.$inject = ["APP_REQUIRES"]
}(),
//************************RouteHelpersProvider************************
function() {
 "use strict";

 function e(e, a, t, o) {
  a.html5Mode(!1), t.otherwise("/app/dashboard"), e.state("app", {
   url: "/app",
   abstract: !0,
   templateUrl: o.basepath("app.html"),
   resolve: o.resolveFor("fastclick", "modernizr", "icons", "screenfull", "animo", "sparklines", "slimscroll", "easypiechart", "toaster", "whirl")
  }).state("app.dashboard", {
   url: "/dashboard",
   title: "Dashboard",
   templateUrl: o.basepath("dashboard.html"),
   resolve: o.resolveFor("flot-chart", "flot-chart-plugins", "weather-icons")
  }).state("app.dashboard_v2", {
   url: "/dashboard_v2",
   title: "Dashboard v2",
   templateUrl: o.basepath("dashboard_v2.html"),
   controller: "DashboardV2Controller",
   controllerAs: "dash2",
   resolve: o.resolveFor("flot-chart", "flot-chart-plugins")
  }).state("app.dashboard_v3", {
   url: "/dashboard_v3",
   title: "Dashboard v3",
   controller: "DashboardV3Controller",
   controllerAs: "dash3",
   templateUrl: o.basepath("dashboard_v3.html"),
   resolve: o.resolveFor("flot-chart", "flot-chart-plugins", "vector-map", "vector-map-maps")
  }).state("app.widgets", {
   url: "/widgets",
   title: "Widgets",
   templateUrl: o.basepath("widgets.html"),
   resolve: o.resolveFor("loadGoogleMapsJS", function() {
    return loadGoogleMaps()
   }, "ui.map")
  }).state("app.buttons", {
   url: "/buttons",
   title: "Buttons",
   templateUrl: o.basepath("buttons.html")
  }).state("app.colors", {
   url: "/colors",
   title: "Colors",
   templateUrl: o.basepath("colors.html")
  }).state("app.localization", {
   url: "/localization",
   title: "Localization",
   templateUrl: o.basepath("localization.html")
  }).state("app.infinite-scroll", {
   url: "/infinite-scroll",
   title: "Infinite Scroll",
   templateUrl: o.basepath("infinite-scroll.html"),
   resolve: o.resolveFor("infinite-scroll")
  }).state("app.navtree", {
   url: "/navtree",
   title: "Nav Tree",
   templateUrl: o.basepath("nav-tree.html"),
   resolve: o.resolveFor("angularBootstrapNavTree")
  }).state("app.nestable", {
   url: "/nestable",
   title: "Nestable",
   templateUrl: o.basepath("nestable.html"),
   resolve: o.resolveFor("ng-nestable")
  }).state("app.sortable", {
   url: "/sortable",
   title: "Sortable",
   templateUrl: o.basepath("sortable.html"),
   resolve: o.resolveFor("ui.sortable")
  }).state("app.notifications", {
   url: "/notifications",
   title: "Notifications",
   templateUrl: o.basepath("notifications.html")
  }).state("app.carousel", {
   url: "/carousel",
   title: "Carousel",
   templateUrl: o.basepath("carousel.html"),
   resolve: o.resolveFor("angular-carousel")
  }).state("app.ngdialog", {
   url: "/ngdialog",
   title: "ngDialog",
   templateUrl: o.basepath("ngdialog.html"),
   resolve: angular.extend(o.resolveFor("ngDialog"), {
    tpl: function() {
     return {
      path: o.basepath("ngdialog-template.html")
     }
    }
   }),
   controller: "DialogIntroCtrl"
  }).state("app.sweetalert", {
   url: "/sweetalert",
   title: "SweetAlert",
   templateUrl: o.basepath("sweetalert.html"),
   resolve: o.resolveFor("oitozero.ngSweetAlert")
  }).state("app.tour", {
   url: "/tour",
   title: "Tour",
   templateUrl: o.basepath("tour.html"),
   resolve: o.resolveFor("bm.bsTour")
  }).state("app.interaction", {
   url: "/interaction",
   title: "Interaction",
   templateUrl: o.basepath("interaction.html")
  }).state("app.spinners", {
   url: "/spinners",
   title: "Spinners",
   templateUrl: o.basepath("spinners.html"),
   resolve: o.resolveFor("loaders.css", "spinkit")
  }).state("app.dropdown-animations", {
   url: "/dropdown-animations",
   title: "Dropdown Animations",
   templateUrl: o.basepath("dropdown-animations.html")
  }).state("app.panels", {
   url: "/panels",
   title: "Panels",
   templateUrl: o.basepath("panels.html")
  }).state("app.portlets", {
   url: "/portlets",
   title: "Portlets",
   templateUrl: o.basepath("portlets.html"),
   resolve: o.resolveFor("ui.sortable")
  }).state("app.maps-google", {
   url: "/maps-google",
   title: "Maps Google",
   templateUrl: o.basepath("maps-google.html"),
   resolve: o.resolveFor("loadGoogleMapsJS", function() {
    return loadGoogleMaps()
   }, "ui.map")
  }).state("app.maps-vector", {
   url: "/maps-vector",
   title: "Maps Vector",
   templateUrl: o.basepath("maps-vector.html"),
   controller: "VectorMapController",
   controllerAs: "vmap",
   resolve: o.resolveFor("vector-map", "vector-map-maps")
  }).state("app.grid", {
   url: "/grid",
   title: "Grid",
   templateUrl: o.basepath("grid.html")
  }).state("app.grid-masonry", {
   url: "/grid-masonry",
   title: "Grid Masonry",
   templateUrl: o.basepath("grid-masonry.html")
  }).state("app.grid-masonry-deck", {
   url: "/grid-masonry-deck",
   title: "Grid Masonry",
   templateUrl: o.basepath("grid-masonry-deck.html"),
   resolve: o.resolveFor("spinkit", "akoenig.deckgrid")
  }).state("app.typo", {
   url: "/typo",
   title: "Typo",
   templateUrl: o.basepath("typo.html")
  }).state("app.icons-font", {
   url: "/icons-font",
   title: "Icons Font",
   templateUrl: o.basepath("icons-font.html"),
   resolve: o.resolveFor("icons")
  }).state("app.icons-weather", {
   url: "/icons-weather",
   title: "Icons Weather",
   templateUrl: o.basepath("icons-weather.html"),
   resolve: o.resolveFor("weather-icons", "skycons")
  }).state("app.form-standard", {
   url: "/form-standard",
   title: "Form Standard",
   templateUrl: o.basepath("form-standard.html")
  }).state("app.form-extended", {
   url: "/form-extended",
   title: "Form Extended",
   templateUrl: o.basepath("form-extended.html"),
   resolve: o.resolveFor("colorpicker.module", "codemirror", "moment", "taginput", "inputmask", "localytics.directives", "ui.bootstrap-slider", "ngWig", "filestyle", "summernote")
  }).state("app.form-validation", {
   url: "/form-validation",
   title: "Form Validation",
   templateUrl: o.basepath("form-validation.html"),
   resolve: o.resolveFor("ui.select", "taginput", "inputmask", "localytics.directives")
  }).state("app.form-wizard", {
   url: "/form-wizard",
   title: "Form Wizard",
   templateUrl: o.basepath("form-wizard.html")
  }).state("app.form-upload", {
   url: "/form-upload",
   title: "Form upload",
   templateUrl: o.basepath("form-upload.html"),
   resolve: o.resolveFor("angularFileUpload", "filestyle")
  }).state("app.form-xeditable", {
   url: "/form-xeditable",
   templateUrl: o.basepath("form-xeditable.html"),
   resolve: o.resolveFor("xeditable")
  }).state("app.form-imagecrop", {
   url: "/form-imagecrop",
   templateUrl: o.basepath("form-imagecrop.html"),
   resolve: o.resolveFor("ngImgCrop", "filestyle")
  }).state("app.form-uiselect", {
   url: "/form-uiselect",
   templateUrl: o.basepath("form-uiselect.html"),
   controller: "uiSelectController",
   controllerAs: "uisel",
   resolve: o.resolveFor("ui.select")
  }).state("app.chart-flot", {
   url: "/chart-flot",
   title: "Chart Flot",
   templateUrl: o.basepath("chart-flot.html"),
   resolve: o.resolveFor("flot-chart", "flot-chart-plugins")
  }).state("app.chart-radial", {
   url: "/chart-radial",
   title: "Chart Radial",
   templateUrl: o.basepath("chart-radial.html"),
   resolve: o.resolveFor("ui.knob", "easypiechart")
  }).state("app.chart-js", {
   url: "/chart-js",
   title: "Chart JS",
   templateUrl: o.basepath("chart-js.html"),
   resolve: o.resolveFor("chart.js")
  }).state("app.chart-rickshaw", {
   url: "/chart-rickshaw",
   title: "Chart Rickshaw",
   templateUrl: o.basepath("chart-rickshaw.html"),
   resolve: o.resolveFor("angular-rickshaw")
  }).state("app.chart-morris", {
   url: "/chart-morris",
   title: "Chart Morris",
   templateUrl: o.basepath("chart-morris.html"),
   resolve: o.resolveFor("morris")
  }).state("app.chart-chartist", {
   url: "/chart-chartist",
   title: "Chart Chartist",
   templateUrl: o.basepath("chart-chartist.html"),
   resolve: o.resolveFor("angular-chartist")
  }).state("app.table-standard", {
   url: "/table-standard",
   title: "Table Standard",
   templateUrl: o.basepath("table-standard.html")
  }).state("app.table-extended", {
   url: "/table-extended",
   title: "Table Extended",
   templateUrl: o.basepath("table-extended.html")
  }).state("app.table-datatable", {
   url: "/table-datatable",
   title: "Table Datatable",
   templateUrl: o.basepath("table-datatable.html"),
   resolve: o.resolveFor("datatables")
  }).state("app.table-xeditable", {
   url: "/table-xeditable",
   templateUrl: o.basepath("table-xeditable.html"),
   resolve: o.resolveFor("xeditable")
  }).state("app.table-ngtable", {
   url: "/table-ngtable",
   templateUrl: o.basepath("table-ngtable.html"),
   resolve: o.resolveFor("ngTable", "ngTableExport")
  }).state("app.table-uigrid", {
   url: "/table-uigrid",
   templateUrl: o.basepath("table-uigrid.html"),
   resolve: o.resolveFor("ui.grid")
  }).state("app.table-angulargrid", {
   url: "/table-angulargrid",
   templateUrl: o.basepath("table-angulargrid.html"),
   resolve: o.resolveFor("angularGrid")
  }).state("app.contacts", {
   url: "/contacts",
   title: "Contacts",
   templateUrl: o.basepath("contacts.html")
  }).state("app.contact-details", {
   url: "/contact-details",
   title: "Contact Details",
   templateUrl: o.basepath("contact-details.html")
  }).state("app.projects", {
   url: "/projects",
   title: "Projects",
   templateUrl: o.basepath("projects.html")
  }).state("app.project-details", {
   url: "/project-details",
   title: "Project Details",
   templateUrl: o.basepath("project-details.html")
  }).state("app.team-viewer", {
   url: "/team-viewer",
   title: "Team Viewer",
   templateUrl: o.basepath("team-viewer.html")
  }).state("app.social-board", {
   url: "/social-board",
   title: "Social Board",
   templateUrl: o.basepath("social-board.html")
  }).state("app.vote-links", {
   url: "/vote-links",
   title: "Vote Links",
   templateUrl: o.basepath("vote-links.html")
  }).state("app.bug-tracker", {
   url: "/bug-tracker",
   title: "Bug Tracker",
   templateUrl: o.basepath("bug-tracker.html"),
   resolve: o.resolveFor("datatables")
  }).state("app.faq", {
   url: "/faq",
   title: "FAQ",
   templateUrl: o.basepath("faq.html"),
   resolve: o.resolveFor("datatables")
  }).state("app.help-center", {
   url: "/help-center",
   title: "Help Center",
   templateUrl: o.basepath("help-center.html")
  }).state("app.followers", {
   url: "/followers",
   title: "Followers",
   templateUrl: o.basepath("followers.html")
  }).state("app.settings", {
   url: "/settings",
   title: "Settings",
   templateUrl: o.basepath("settings.html"),
   resolve: o.resolveFor("filestyle")
  }).state("app.plans", {
   url: "/plans",
   title: "Plans",
   templateUrl: o.basepath("plans.html")
  }).state("app.file-manager", {
   url: "/file-manager",
   title: "File Manager",
   templateUrl: o.basepath("file-manager.html"),
   resolve: o.resolveFor("filestyle")
  }).state("app.timeline", {
   url: "/timeline",
   title: "Timeline",
   templateUrl: o.basepath("timeline.html")
  }).state("app.calendar", {
   url: "/calendar",
   title: "Calendar",
   templateUrl: o.basepath("calendar.html"),
   resolve: o.resolveFor("moment", "ui.calendar")
  }).state("app.invoice", {
   url: "/invoice",
   title: "Invoice",
   templateUrl: o.basepath("invoice.html")
  }).state("app.search", {
   url: "/search",
   title: "Search",
   templateUrl: o.basepath("search.html"),
   resolve: o.resolveFor("moment", "localytics.directives", "ui.bootstrap-slider")
  }).state("app.todo", {
   url: "/todo",
   title: "Todo List",
   templateUrl: o.basepath("todo.html"),
   controller: "TodoController",
   controllerAs: "todo"
  }).state("app.profile", {
   url: "/profile",
   title: "Profile",
   templateUrl: o.basepath("profile.html"),
   resolve: o.resolveFor("loadGoogleMapsJS", function() {
    return loadGoogleMaps()
   }, "ui.map")
  }).state("app.code-editor", {
   url: "/code-editor",
   templateUrl: o.basepath("code-editor.html"),
   controller: "CodeEditorController",
   controllerAs: "coder",
   resolve: {
    deps: o.resolveFor("codemirror", "ui.codemirror", "codemirror-modes-web", "angularBootstrapNavTree").deps,
    filetree: ["LoadTreeService", function(e) {
     return e.get().$promise.then(function(e) {
      return e.data
     })
    }]
   }
  }).state("app.template", {
   url: "/template",
   title: "Blank Template",
   templateUrl: o.basepath("template.html")
  }).state("app.documentation", {
   url: "/documentation",
   title: "Documentation",
   templateUrl: o.basepath("documentation.html"),
   resolve: o.resolveFor("flatdoc")
  }).state("app.forum", {
   url: "/forum",
   title: "Forum",
   templateUrl: o.basepath("forum.html")
  }).state("app.forum-topics", {
   url: "/forum/topics/:catid",
   title: "Forum Topics",
   templateUrl: o.basepath("forum-topics.html")
  }).state("app.forum-discussion", {
   url: "/forum/discussion/:topid",
   title: "Forum Discussion",
   templateUrl: o.basepath("forum-discussion.html")
  }).state("app.blog", {
   url: "/blog",
   title: "Blog",
   templateUrl: o.basepath("blog.html"),
   resolve: o.resolveFor("angular-jqcloud")
  }).state("app.blog-post", {
   url: "/post",
   title: "Post",
   templateUrl: o.basepath("blog-post.html"),
   resolve: o.resolveFor("angular-jqcloud")
  }).state("app.articles", {
   url: "/articles",
   title: "Articles",
   templateUrl: o.basepath("blog-articles.html"),
   resolve: o.resolveFor("datatables")
  }).state("app.article-view", {
   url: "/article/:id",
   title: "Article View",
   templateUrl: o.basepath("blog-article-view.html"),
   resolve: o.resolveFor("ui.select", "summernote")
  }).state("app.orders", {
   url: "/orders",
   title: "Orders",
   templateUrl: o.basepath("ecommerce-orders.html"),
   resolve: o.resolveFor("datatables")
  }).state("app.order-view", {
   url: "/order-view",
   title: "Order View",
   templateUrl: o.basepath("ecommerce-order-view.html")
  }).state("app.products", {
   url: "/products",
   title: "Products",
   templateUrl: o.basepath("ecommerce-products.html"),
   resolve: o.resolveFor("datatables")
  }).state("app.product-view", {
   url: "/product/:id",
   title: "Product View",
   templateUrl: o.basepath("ecommerce-product-view.html")
  }).state("app.checkout", {
   url: "/checkout",
   title: "Checkout",
   templateUrl: o.basepath("ecommerce-checkout.html")
  }).state("app.mailbox", {
   url: "/mailbox",
   title: "Mailbox",
   abstract: !0,
   templateUrl: o.basepath("mailbox.html")
  }).state("app.mailbox.folder", {
   url: "/folder/:folder",
   title: "Mailbox",
   templateUrl: o.basepath("mailbox-inbox.html")
  }).state("app.mailbox.view", {
   url: "/{mid:[0-9]{1,4}}",
   title: "View mail",
   templateUrl: o.basepath("mailbox-view.html"),
   resolve: o.resolveFor("ngWig")
  }).state("app.mailbox.compose", {
   url: "/compose",
   title: "Mailbox",
   templateUrl: o.basepath("mailbox-compose.html"),
   resolve: o.resolveFor("ngWig")
  }).state("app.multilevel", {
   url: "/multilevel",
   title: "Multilevel",
   template: '<h3>Multilevel Views</h3><div class="lead ba p">View @ Top Level <div ui-view=""></div> </div>'
  }).state("app.multilevel.level1", {
   url: "/level1",
   title: "Multilevel - Level1",
   template: '<div class="lead ba p">View @ Level 1<div ui-view=""></div> </div>'
  }).state("app.multilevel.level1.item", {
   url: "/item",
   title: "Multilevel - Level1",
   template: '<div class="lead ba p"> Menu item @ Level 1</div>'
  }).state("app.multilevel.level1.level2", {
   url: "/level2",
   title: "Multilevel - Level2",
   template: '<div class="lead ba p">View @ Level 2<div ui-view=""></div> </div>'
  }).state("app.multilevel.level1.level2.level3", {
   url: "/level3",
   title: "Multilevel - Level3",
   template: '<div class="lead ba p">View @ Level 3<div ui-view=""></div> </div>'
  }).state("app.multilevel.level1.level2.level3.item", {
   url: "/item",
   title: "Multilevel - Level3 Item",
   template: '<div class="lead ba p"> Menu item @ Level 3</div>'
  }).state("page", {
   url: "/page",
   templateUrl: "app/pages/page.html",
   resolve: o.resolveFor("modernizr", "icons"),
   controller: ["$rootScope", function(e) {
    e.app.layout.isBoxed = !1
   }]
  }).state("page.login", {
   url: "/login",
   title: "Login",
   templateUrl: "app/pages/login.html"
  }).state("page.register", {
   url: "/register",
   title: "Register",
   templateUrl: "app/pages/register.html"
  }).state("page.recover", {
   url: "/recover",
   title: "Recover",
   templateUrl: "app/pages/recover.html"
  }).state("page.lock", {
   url: "/lock",
   title: "Lock",
   templateUrl: "app/pages/lock.html"
  }).state("page.404", {
   url: "/404",
   title: "Not Found",
   templateUrl: "app/pages/404.html"
  }).state("page.500", {
   url: "/500",
   title: "Server error",
   templateUrl: "app/pages/500.html"
  }).state("page.maintenance", {
   url: "/maintenance",
   title: "Maintenance",
   templateUrl: "app/pages/maintenance.html"
  }).state("app-h", {
   url: "/app-h",
   abstract: !0,
   templateUrl: o.basepath("app-h.html"),
   resolve: o.resolveFor("fastclick", "modernizr", "icons", "screenfull", "animo", "sparklines", "slimscroll", "easypiechart", "toaster", "whirl")
  }).state("app-h.dashboard_v2", {
   url: "/dashboard_v2",
   title: "Dashboard v2",
   templateUrl: o.basepath("dashboard_v2.html"),
   controller: "DashboardV2Controller",
   controllerAs: "dash2",
   resolve: o.resolveFor("flot-chart", "flot-chart-plugins")
  })
 }
 angular.module("app.routes").config(e), e.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider", "RouteHelpersProvider"]
}(),
//settings
function() {
 "use strict";

 function e(e, a) {
  e.user = {
   name: "John",
   job: "ng-developer",
   picture: "app/img/user/02.jpg"
  }, e.toggleUserBlock = function() {
   e.$broadcast("toggleUserBlock")
  }, e.app = {
   name: "Angle",
   description: "Angular Bootstrap Admin Template",
   year: (new Date).getFullYear(),
   layout: {
    isFixed: !0,
    isCollapsed: !1,
    isBoxed: !1,
    isRTL: !1,
    horizontal: !1,
    isFloat: !1,
    asideHover: !1,
    theme: null,
    asideScrollbar: !1,
    isCollapsedText: !1
   },
   useFullLayout: !1,
   hiddenFooter: !1,
   offsidebarOpen: !1,
   asideToggled: !1,
   viewAnimation: "ng-fadeInUp"
  }, e.app.layout.horizontal = "app-h" === e.$stateParams.layout, angular.isDefined(a.layout) ? e.app.layout = a.layout : a.layout = e.app.layout, e.$watch("app.layout", function() {
   a.layout = e.app.layout
  }, !0), e.$watch("app.layout.isCollapsed", function(a) {
   !1 === a && e.$broadcast("closeSidebarMenu")
  })
 }
 angular.module("app.settings").run(e), e.$inject = ["$rootScope", "$localStorage"]
}(),
    
//SidebarController    
function() {
 "use strict";

 function e(e, a, t, o, n) {
  ! function() {
   function r(e) {
    a.menuItems = e.data
   }

   function i(e) {
    if (e) {
     if (e.sref && "#" !== e.sref) return t.is(e.sref) || t.includes(e.sref);
     var a = !1;
     return angular.forEach(e.submenu, function(e) {
      i(e) && (a = !0)
     }), a
    }
   }

   function l(e) {
    e += "";
    for (var a in c)(e < 0 || e.indexOf(a) < 0) && (c[a] = !0)
   }

   function s(e) {
    return "string" == typeof e && !(e.indexOf("-") < 0)
   }
   var c = [],
    u = e.$watch("app.layout.asideHover", function(e, a) {
     !1 === a && !0 === e && l(-1)
    });
   o.getMenu(r), a.getMenuItemPropClasses = function(e) {
    return (e.heading ? "nav-heading" : "") + (i(e) ? " active" : "")
   }, a.addCollapse = function(a, t) {
    c[a] = !!e.app.layout.asideHover || !i(t)
   }, a.isCollapse = function(e) {
    return c[e]
   }, a.toggleCollapse = function(t, o) {
    return !(!n.isSidebarCollapsed() && !e.app.layout.asideHover && (angular.isDefined(c[t]) ? a.lastEventFromChild || (c[t] = !c[t], l(t)) : o && l(-1), a.lastEventFromChild = s(t), 0))
   }, a.$on("$destroy", function() {
    u()
   })
  }()
 }
 angular.module("app.sidebar").controller("SidebarController", e), e.$inject = ["$rootScope", "$scope", "$state", "SidebarLoader", "Utils"]
}(),
// sidebar   
function() {
 "use strict";

 function e(e, a, t, o) {
  function n(t, n, i) {
   function u(e) {
    !0 === e ? a(function() {
     b.on(y, function(e) {
      $(e.target).parents(".aside").length || d()
     })
    }) : b.off(y)
   }

   function d() {
    e.app.asideToggled = !1, t.$$phase || t.$apply()
   }
   var p = e.$state.current.name,
    m = n,
    g = o.isTouch() ? "click" : "mouseenter",
    f = $();
   m.on(g, ".nav > li", function() {
    (o.isSidebarCollapsed() || e.app.layout.asideHover) && (f.trigger("mouseleave"), f = l($(this), m), r())
   });
   var h = t.$on("closeSidebarMenu", function() {
    s()
   });
   c.on("resize.sidebar", function() {
    o.isMobile() || d()
   });
   var v = e.$on("$stateChangeStart", function(a, t) {
    p = t.name, d(), e.$broadcast("closeSidebarMenu")
   });
   if (angular.isDefined(i.sidebarAnyclickClose)) var b = $(".wrapper"),
    y = "click.sidebar",
    C = e.$watch("app.asideToggled", u);
   t.$on("$destroy", function() {
    h(), v(), C(), m.off(g), c.off("resize.sidebar"), b.off(y)
   })
  }

  function r() {
   $("<div/>", {
    class: "dropdown-backdrop"
   }).insertAfter(".aside-inner").on("click mouseenter", function() {
    s()
   })
  }

  function i(e) {
   e.siblings("li").removeClass("open").end().toggleClass("open")
  }

  function l(a, t) {
   s();
   var o = a.children("ul");
   if (!o.length) return $();
   if (a.hasClass("open")) return i(a), $();
   var n = $(".aside"),
    r = $(".aside-inner"),
    l = parseInt(r.css("padding-top"), 0) + parseInt(n.css("padding-top"), 0),
    u = o.clone().appendTo(n);
   i(a);
   var d = a.position().top + l - t.scrollTop(),
    p = c.height();
   return u.addClass("nav-floating").css({
    position: e.app.layout.isFixed ? "fixed" : "absolute",
    top: d,
    bottom: u.outerHeight(!0) + d > p ? 0 : "auto"
   }), u.on("mouseleave", function() {
    i(a), u.remove()
   }), u
  }

  function s() {
   $(".dropdown-backdrop").remove(), $(".sidebar-subnav.nav-floating").remove(), $(".sidebar li.open").removeClass("open")
  }
  var c = angular.element(t);
  return {
   link: n,
   restrict: "EA",
   template: '<nav class="sidebar" ng-transclude></nav>',
   transclude: !0,
   replace: !0
  }
 }
 angular.module("app.sidebar").directive("sidebar", e), e.$inject = ["$rootScope", "$timeout", "$window", "Utils"]
}(),
function() {
 "use strict";

 function e(e) {
  function a(a, t) {
   var o = "server/sidebar-menu.json?v=" + (new Date).getTime();
   t = t || function() {
    alert("Failure loading menu")
   }, e.get(o).then(a, t)
  }
  this.getMenu = a
 }
 angular.module("app.sidebar").service("SidebarLoader", e), e.$inject = ["$http"]
}(),
function() {
 "use strict";

 function e(e) {
  ! function() {
   e.userBlockVisible = !0;
   var a = e.$on("toggleUserBlock", function() {
    e.userBlockVisible = !e.userBlockVisible
   });
   e.$on("$destroy", a)
  }()
 }
 angular.module("app.sidebar").controller("UserBlockController", e), e.$inject = ["$scope"]
}(),
function() {
 "use strict";

 function e(e, a, t, o) {
  var n = this;
  ! function() {
   var r = $(t),
    i = [{
     headerName: "Athlete",
     field: "athlete",
     width: 150
    }, {
     headerName: "Age",
     field: "age",
     width: 90
    }, {
     headerName: "Country",
     field: "country",
     width: 120
    }, {
     headerName: "Year",
     field: "year",
     width: 90
    }, {
     headerName: "Date",
     field: "date",
     width: 110
    }, {
     headerName: "Sport",
     field: "sport",
     width: 110
    }, {
     headerName: "Gold",
     field: "gold",
     width: 100
    }, {
     headerName: "Silver",
     field: "silver",
     width: 100
    }, {
     headerName: "Bronze",
     field: "bronze",
     width: 100
    }, {
     headerName: "Total",
     field: "total",
     width: 100
    }];
   n.gridOptions = {
    columnDefs: i,
    rowData: null,
    onGridReady: function(e) {
     e.api.sizeColumnsToFit(), r.on("resize.ag-grid", function() {
      o(function() {
       e.api.sizeColumnsToFit()
      })
     })
    }
   };
   var l = ["John Joe Nevin", "Katie Taylor", "Paddy Barnes", "Kenny Egan", "Darren Sutherland", "Margaret Thatcher", "Tony Blair", "Ronald Regan", "Barack Obama"],
    s = [{
     headerName: "Athlete",
     field: "athlete",
     width: 150,
     filter: "set",
     filterParams: {
      cellHeight: 20,
      values: l
     }
    }, {
     headerName: "Age",
     field: "age",
     width: 90,
     filter: "number"
    }, {
     headerName: "Country",
     field: "country",
     width: 120
    }, {
     headerName: "Year",
     field: "year",
     width: 90
    }, {
     headerName: "Date",
     field: "date",
     width: 110
    }, {
     headerName: "Sport",
     field: "sport",
     width: 110
    }, {
     headerName: "Gold",
     field: "gold",
     width: 100,
     filter: "number"
    }, {
     headerName: "Silver",
     field: "silver",
     width: 100,
     filter: "number"
    }, {
     headerName: "Bronze",
     field: "bronze",
     width: 100,
     filter: "number"
    }, {
     headerName: "Total",
     field: "total",
     width: 100,
     filter: "number"
    }];
   n.gridOptions1 = {
    columnDefs: s,
    rowData: null,
    enableFilter: !0,
    onGridReady: function(e) {
     e.api.sizeColumnsToFit(), r.on("resize.ag-grid", function() {
      o(function() {
       e.api.sizeColumnsToFit()
      })
     })
    }
   };
   var c = angular.copy(i);
   c[0].pinned = "left", n.gridOptions2 = {
    columnDefs: c,
    rowData: null,
    pinnedColumnCount: 2,
    onGridReady: function(e) {
     e.api.sizeColumnsToFit(), r.on("resize.ag-grid", function() {
      o(function() {
       e.api.sizeColumnsToFit()
      })
     })
    }
   }, a.get("server/ag-owinners.json").then(function(e) {
    n.gridOptions.api.setRowData(e.data), n.gridOptions.api.sizeColumnsToFit(), n.gridOptions1.api.setRowData(e.data), n.gridOptions1.api.sizeColumnsToFit(), n.gridOptions2.api.setRowData(e.data), n.gridOptions2.api.sizeColumnsToFit()
   }), e.$on("$destroy", function() {
    r.off("resize.ag-grid")
   })
  }()
 }
 angular.module("app.tables").controller("AngularGridController", e), e.$inject = ["$scope", "$http", "$window", "$timeout"]
}(),
function() {
 "use strict";

 function e(e, a, t) {
  var o = this;
  ! function() {
   function n(e) {
    return {
     id: e,
     firstName: "Foo" + e,
     lastName: "Bar" + e
    }
   }

   function r() {
    o.heroes.push(angular.copy(o.person2Add)), o.person2Add = n(o.person2Add.id + 1)
   }

   function i(e) {
    o.heroes.splice(e, 1, angular.copy(o.person2Add)), o.person2Add = n(o.person2Add.id + 1)
   }

   function l(e) {
    o.heroes.splice(e, 1)
   }
   e("server/datatable.json").query().$promise.then(function(e) {
    o.persons = e
   }), o.heroes = [{
    id: 860,
    firstName: "Superman",
    lastName: "Yoda"
   }, {
    id: 870,
    firstName: "Ace",
    lastName: "Ventura"
   }, {
    id: 590,
    firstName: "Flash",
    lastName: "Gordon"
   }, {
    id: 803,
    firstName: "Luke",
    lastName: "Skywalker"
   }], o.dtOptions = a.newOptions().withPaginationType("full_numbers").withDOM('<"html5buttons"B>lTfgitp').withButtons([{
    extend: "copy",
    className: "btn-sm"
   }, {
    extend: "csv",
    className: "btn-sm"
   }, {
    extend: "excel",
    className: "btn-sm",
    title: "XLS-File"
   }, {
    extend: "pdf",
    className: "btn-sm",
    title: $("title").text()
   }, {
    extend: "print",
    className: "btn-sm"
   }]), o.dtColumnDefs = [t.newColumnDef(0), t.newColumnDef(1), t.newColumnDef(2), t.newColumnDef(3).notSortable()], o.person2Add = n(1), o.addPerson = r, o.modifyPerson = i, o.removePerson = l
  }()
 }
 angular.module("app.tables").controller("DataTableController", e), e.$inject = ["$resource", "DTOptionsBuilder", "DTColumnDefBuilder"]
}(),
function() {
 "use strict";

 function e() {
  function e(e, t, o) {
   function n(e, t) {
    var o = (t.page() - 1) * t.count(),
     n = t.page() * t.count(),
     r = a.cache.result.slice(o, n);
    t.total(a.cache.total), e.resolve(r)
   }
   a.cache ? n(e, t) : o && o.get(function(o) {
    a.cache = o, n(e, t)
   })
  }
  var a = this;
  this.cache = null, this.getData = e
 }
 angular.module("app.tables").service("ngTableDataService", e)
}(),
function() {
 "use strict";

 function e(e, a, t, o, n) {
  var r = this;
  r.title = "Controller",
   function() {
    var o = [{
     name: "Moroni",
     age: 50,
     money: -10
    }, {
     name: "Tiancum",
     age: 43,
     money: 120
    }, {
     name: "Jacob",
     age: 27,
     money: 5.5
    }, {
     name: "Nephi",
     age: 29,
     money: -54
    }, {
     name: "Enos",
     age: 34,
     money: 110
    }, {
     name: "Tiancum",
     age: 43,
     money: 1e3
    }, {
     name: "Jacob",
     age: 27,
     money: -201
    }, {
     name: "Nephi",
     age: 29,
     money: 100
    }, {
     name: "Enos",
     age: 34,
     money: -52.5
    }, {
     name: "Tiancum",
     age: 43,
     money: 52.1
    }, {
     name: "Jacob",
     age: 27,
     money: 110
    }, {
     name: "Nephi",
     age: 29,
     money: -55
    }, {
     name: "Enos",
     age: 34,
     money: 551
    }, {
     name: "Tiancum",
     age: 43,
     money: -1410
    }, {
     name: "Jacob",
     age: 27,
     money: 410
    }, {
     name: "Nephi",
     age: 29,
     money: 100
    }, {
     name: "Enos",
     age: 34,
     money: -100
    }];
    r.data = o, r.tableParams3 = new a({
     page: 1,
     count: 10
    }, {
     total: o.length,
     getData: function(a, t) {
      var n = t.filter() ? e("filter")(o, t.filter()) : o,
       r = t.sorting() ? e("orderBy")(n, t.orderBy()) : o;
      t.total(r.length), a.resolve(r.slice((t.page() - 1) * t.count(), t.page() * t.count()))
     }
    }), r.changeSelection = function(e) {
     console.info(e)
    };
    var i = [{
     name: "Moroni",
     age: 50
    }, {
     name: "Tiancum",
     age: 43
    }, {
     name: "Jacob",
     age: 27
    }, {
     name: "Nephi",
     age: 29
    }, {
     name: "Enos",
     age: 34
    }, {
     name: "Tiancum",
     age: 43
    }, {
     name: "Jacob",
     age: 27
    }, {
     name: "Nephi",
     age: 29
    }, {
     name: "Enos",
     age: 34
    }, {
     name: "Tiancum",
     age: 43
    }, {
     name: "Jacob",
     age: 27
    }, {
     name: "Nephi",
     age: 29
    }, {
     name: "Enos",
     age: 34
    }, {
     name: "Tiancum",
     age: 43
    }, {
     name: "Jacob",
     age: 27
    }, {
     name: "Nephi",
     age: 29
    }, {
     name: "Enos",
     age: 34
    }];
    r.tableParams4 = new a({
     page: 1,
     count: 10
    }, {
     total: i.length,
     getData: function(e, a) {
      e.resolve(i.slice((a.page() - 1) * a.count(), a.page() * a.count()))
     }
    }), r.tableParams = new a({
     page: 1,
     count: 10,
     sorting: {
      name: "asc"
     }
    }, {
     total: o.length,
     getData: function(a, t) {
      var n = t.sorting() ? e("orderBy")(o, t.orderBy()) : o;
      a.resolve(n.slice((t.page() - 1) * t.count(), t.page() * t.count()))
     }
    }), r.tableParams2 = new a({
     page: 1,
     count: 10,
     filter: {
      name: "",
      age: ""
     }
    }, {
     total: o.length,
     getData: function(a, t) {
      var n = t.filter() ? e("filter")(o, t.filter()) : o;
      r.users = n.slice((t.page() - 1) * t.count(), t.page() * t.count()), t.total(n.length), a.resolve(r.users)
     }
    });
    var l = t("server/table-data.json");
    r.tableParams5 = new a({
     page: 1,
     count: 10
    }, {
     total: 0,
     counts: [],
     getData: function(e, a) {
      n.getData(e, a, l)
     }
    })
   }()
 }
 angular.module("app.tables").controller("NGTableCtrl", e), e.$inject = ["$filter", "ngTableParams", "$resource", "$timeout", "ngTableDataService"]
}(),
function() {
 "use strict";

 function e(e, a, t, o, n) {
  var r = this;
  ! function() {
   r.users = [{
    id: 1,
    name: "awesome user1",
    status: 2,
    group: 4,
    groupName: "admin"
   }, {
    id: 2,
    name: "awesome user2",
    status: void 0,
    group: 3,
    groupName: "vip"
   }, {
    id: 3,
    name: "awesome user3",
    status: 2,
    group: null
   }], r.statuses = [{
    value: 1,
    text: "status1"
   }, {
    value: 2,
    text: "status2"
   }, {
    value: 3,
    text: "status3"
   }, {
    value: 4,
    text: "status4"
   }], r.groups = [], r.loadGroups = function() {
    return r.groups.length ? null : a.get("server/xeditable-groups.json").then(function(e) {
     r.groups = e.data
    })
   }, r.showGroup = function(a) {
    if (a.group && r.groups.length) {
     var t = e("filter")(r.groups, {
      id: a.group
     });
     return t.length ? t[0].text : "Not set"
    }
    return a.groupName || "Not set"
   }, r.showStatus = function(a) {
    var t = [];
    return a.status && (t = e("filter")(r.statuses, {
     value: a.status
    })), t.length ? t[0].text : "Not set"
   }, r.checkName = function(e, a) {
    if (2 === a && "awesome" !== e) return "Username 2 should be `awesome`"
   }, r.saveUser = function(e, a) {
    angular.extend(e, {
     id: a
    }), console.log("Saving user: " + a)
   }, r.removeUser = function(e) {
    r.users.splice(e, 1)
   }, r.addUser = function() {
    r.inserted = {
     id: r.users.length + 1,
     name: "",
     status: null,
     group: null,
     isNew: !0
    }, r.users.push(r.inserted)
   }, r.saveColumn = function(e) {
    var a = [];
    return angular.forEach(r.users, function() {
     console.log("Saving column: " + e)
    }), n.all(a)
   }, r.filterUser = function(e) {
    return !0 !== e.isDeleted
   }, r.deleteUser = function(a) {
    var t = e("filter")(r.users, {
     id: a
    });
    t.length && (t[0].isDeleted = !0)
   }, r.cancel = function() {
    for (var e = r.users.length; e--;) {
     var a = r.users[e];
     a.isDeleted && delete a.isDeleted, a.isNew && r.users.splice(e, 1)
    }
   }, r.saveTable = function() {
    for (var e = [], a = r.users.length; a--;) {
     var t = r.users[a];
     t.isDeleted && r.users.splice(a, 1), t.isNew && (t.isNew = !1), console.log("Saving Table...")
    }
    return n.all(e)
   }
  }()
 }
 angular.module("app.tables").controller("TablexEditableController", e), e.$inject = ["$filter", "$http", "editableOptions", "editableThemes", "$q"]
}(),
function() {
 "use strict";

 function e(e, a) {
  var t = this;
  ! function() {
   t.gridOptions = {
    rowHeight: 34,
    data: [{
     name: "Wilder Gonzales",
     gender: "male",
     company: "Geekko"
    }, {
     name: "Georgina Schultz",
     gender: "female",
     company: "Suretech"
    }, {
     name: "Carroll Buchanan",
     gender: "male",
     company: "Ecosys"
    }, {
     name: "Valarie Atkinson",
     gender: "female",
     company: "Hopeli"
    }, {
     name: "Schroeder Mathews",
     gender: "male",
     company: "Polarium"
    }, {
     name: "Ethel Price",
     gender: "female",
     company: "Enersol"
    }, {
     name: "Claudine Neal",
     gender: "female",
     company: "Sealoud"
    }, {
     name: "Beryl Rice",
     gender: "female",
     company: "Velity"
    }, {
     name: "Lynda Mendoza",
     gender: "female",
     company: "Dogspa"
    }, {
     name: "Sarah Massey",
     gender: "female",
     company: "Bisba"
    }, {
     name: "Robles Boyle",
     gender: "male",
     company: "Comtract"
    }, {
     name: "Evans Hickman",
     gender: "male",
     company: "Parleynet"
    }, {
     name: "Dawson Barber",
     gender: "male",
     company: "Dymi"
    }, {
     name: "Bruce Strong",
     gender: "male",
     company: "Xyqag"
    }, {
     name: "Nellie Whitfield",
     gender: "female",
     company: "Exospace"
    }, {
     name: "Jackson Macias",
     gender: "male",
     company: "Aquamate"
    }, {
     name: "Pena Pena",
     gender: "male",
     company: "Quarx"
    }, {
     name: "Lelia Gates",
     gender: "female",
     company: "Proxsoft"
    }, {
     name: "Letitia Vasquez",
     gender: "female",
     company: "Slumberia"
    }, {
     name: "Trevino Moreno",
     gender: "male",
     company: "Conjurica"
    }]
   };
   var o = [];
   t.gridOptionsComplex = {
    showGridFooter: !0,
    showColumnFooter: !0,
    enableFiltering: !0,
    columnDefs: [{
     field: "name",
     width: "13%"
    }, {
     field: "address.street",
     aggregationType: e.aggregationTypes.sum,
     width: "13%"
    }, {
     field: "age",
     aggregationType: e.aggregationTypes.avg,
     aggregationHideLabel: !0,
     width: "13%"
    }, {
     name: "ageMin",
     field: "age",
     aggregationType: e.aggregationTypes.min,
     width: "13%",
     displayName: "Age for min"
    }, {
     name: "ageMax",
     field: "age",
     aggregationType: e.aggregationTypes.max,
     width: "13%",
     displayName: "Age for max"
    }, {
     name: "customCellTemplate",
     field: "age",
     width: "14%",
     footerCellTemplate: '<div class="ui-grid-cell-contents bg-info text-center">Custom HTML</div>'
    }, {
     name: "registered",
     field: "registered",
     width: "20%",
     cellFilter: "date",
     footerCellFilter: "date",
     aggregationType: e.aggregationTypes.max
    }],
    data: o,
    onRegisterApi: function(e) {
     t.gridApi = e
    }
   }, a.get("server/uigrid-complex.json").then(function(e) {
    e.data.forEach(function(e) {
     e.registered = Date.parse(e.registered)
    }), t.gridOptionsComplex.data = e.data
   }), t.gridOptions1 = {
    paginationPageSizes: [25, 50, 75],
    paginationPageSize: 25,
    columnDefs: [{
     name: "name"
    }, {
     name: "gender"
    }, {
     name: "company"
    }]
   }, a.get("server/uigrid-100.json").then(function(e) {
    t.gridOptions1.data = e.data
   }), t.gridOptions2 = {
    columnDefs: [{
     field: "name"
    }, {
     field: "gender",
     visible: !1
    }, {
     field: "company"
    }],
    enableGridMenu: !0,
    enableSelectAll: !0
   }, a.get("server/uigrid-100.json").then(function(e) {
    t.gridOptions2.data = e.data
   })
  }()
 }
 angular.module("app.tables").controller("UIGridController", e), e.$inject = ["uiGridConstants", "$http"]
}(),
function() {
 "use strict";

 function e(e) {
  e.useStaticFilesLoader({
   prefix: "app/i18n/",
   suffix: ".json"
  }), e.preferredLanguage("en"), e.useLocalStorage(), e.usePostCompiling(!0), e.useSanitizeValueStrategy("sanitizeParameters")
 }
 angular.module("app.translate").config(e), e.$inject = ["$translateProvider"]
}(),
function() {
 "use strict";

 function e(e, a) {
  e.language = {
   listIsOpen: !1,
   available: {
    en: "English",
    es_AR: "Español"
   },
   init: function() {
    var t = a.proposedLanguage() || a.use(),
     o = a.preferredLanguage();
    e.language.selected = e.language.available[t || o]
   },
   set: function(t) {
    a.use(t), e.language.selected = e.language.available[t], e.language.listIsOpen = !e.language.listIsOpen
   }
  }, e.language.init()
 }
 angular.module("app.translate").run(e), e.$inject = ["$rootScope", "$translate"]
}(),
function() {
 "use strict";

 function e(e) {
  function a(a, t, o) {
   a.$watch(function() {
    return a.$eval(o.animateEnabled, a)
   }, function(a) {
    e.enabled(!!a, t)
   })
  }
  return {
   link: a,
   restrict: "A"
  }
 }
 angular.module("app.utils").directive("animateEnabled", e), e.$inject = ["$animate"]
}(),
function() {
 "use strict";

 function e(e) {
  return e.jQBrowser
 }
 angular.module("app.utils").service("Browser", e), e.$inject = ["$window"]
}(),
function() {
 "use strict";

 function e(e, a) {
  function t(t, o) {
   o.on("click", function(o) {
    o.preventDefault(), t.resetKey ? (delete a[t.resetKey], e.go(e.current, {}, {
     reload: !0
    })) : $.error("No storage key specified for reset.")
   })
  }
  return {
   link: t,
   restrict: "A",
   scope: {
    resetKey: "@"
   }
  }
 }
 angular.module("app.utils").directive("resetKey", e), e.$inject = ["$state", "$localStorage"]
}(),
function() {
 "use strict";

 function e(e) {
  function a(a, t) {
   e.msie ? t.addClass("hide") : t.on("click", function(e) {
    e.preventDefault(), screenfull.enabled ? (screenfull.toggle(), screenfull.isFullscreen ? $(this).children("em").removeClass("fa-expand").addClass("fa-compress") : $(this).children("em").removeClass("fa-compress").addClass("fa-expand")) : $.error("Fullscreen not enabled")
   })
  }
  return {
   link: a,
   restrict: "A"
  }
 }
 angular.module("app.utils").directive("toggleFullscreen", e), e.$inject = ["Browser"]
}(),
function() {
 "use strict";

 function e() {
  function e(e, t, o) {
   t.on("click", function(e) {
    t.is("a") && e.preventDefault();
    var n = o.loadCss;
    n ? a(n) || $.error("Error creating stylesheet link element.") : $.error("No stylesheet location defined.")
   })
  }

  function a(e) {
   var a = "autoloaded-stylesheet",
    t = $("#" + a).attr("id", a + "-old");
   return $("head").append($("<link/>").attr({
    id: a,
    rel: "stylesheet",
    href: e
   })), t.length && t.remove(), $("#" + a)
  }
  return {
   link: e,
   restrict: "A"
  }
 }
 angular.module("app.utils").directive("loadCss", e)
}(),
function() {
 "use strict";

 function e(e, a) {
  function t(t, o, n) {
   function r() {
    var a = e(new Date, i);
    o.text(a)
   }
   var i = n.format;
   r();
   var l = a(r, 1e3);
   t.$on("$destroy", function() {
    a.cancel(l)
   })
  }
  return {
   link: t,
   restrict: "EA"
  }
 }
 angular.module("app.utils").directive("now", e), e.$inject = ["dateFilter", "$interval"]
}(),
function() {
 "use strict";

 function e() {
  function e(e, a) {
   a.on("change", function() {
    var e = $(this),
     a = e.index() + 1,
     t = e.find('input[type="checkbox"]');
    e.parents("table").find("tbody > tr > td:nth-child(" + a + ') input[type="checkbox"]').prop("checked", t[0].checked)
   })
  }
  return {
   link: e,
   restrict: "A"
  }
 }
 angular.module("app.utils").directive("checkAll", e)
}(),
function() {
 "use strict";

 function e(e, a) {
  function t(t, o, n) {
   o.on("click", function() {
    a(function() {
     var a = document.createEvent("UIEvents");
     a.initUIEvent("resize", !0, !1, e, 0), e.dispatchEvent(a)
    }, n.triggerResize || 300)
   })
  }
  return {
   link: t,
   restrict: "A"
  }
 }
 angular.module("app.utils").directive("triggerResize", e), e.$inject = ["$window", "$timeout"]
}(),
function() {
 "use strict";

 function e(e, a) {
  var t = angular.element("html"),
   o = angular.element(e),
   n = angular.element("body");
  return {
   support: {
    transition: function() {
     var e = function() {
      var e, a = document.body || document.documentElement,
       t = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
       };
      for (e in t)
       if (void 0 !== a.style[e]) return t[e]
     }();
     return e && {
      end: e
     }
    }(),
    animation: function() {
     var e = function() {
      var e, a = document.body || document.documentElement,
       t = {
        WebkitAnimation: "webkitAnimationEnd",
        MozAnimation: "animationend",
        OAnimation: "oAnimationEnd oanimationend",
        animation: "animationend"
       };
      for (e in t)
       if (void 0 !== a.style[e]) return t[e]
     }();
     return e && {
      end: e
     }
    }(),
    requestAnimationFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(e) {
     window.setTimeout(e, 1e3 / 60)
    },
    touch: "ontouchstart" in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/) || window.DocumentTouch && document instanceof window.DocumentTouch || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0 || !1,
    mutationobserver: window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null
   },
   isInView: function(e, a) {
    var t = $(e);
    if (!t.is(":visible")) return !1;
    var n = o.scrollLeft(),
     r = o.scrollTop(),
     i = t.offset(),
     l = i.left,
     s = i.top;
    return a = $.extend({
     topoffset: 0,
     leftoffset: 0
    }, a), s + t.height() >= r && s - a.topoffset <= r + o.height() && l + t.width() >= n && l - a.leftoffset <= n + o.width()
   },
   langdirection: "rtl" === t.attr("dir") ? "right" : "left",
   isTouch: function() {
    return t.hasClass("touch")
   },
   isSidebarCollapsed: function() {
    return n.hasClass("aside-collapsed") || n.hasClass("aside-collapsed-text")
   },
   isSidebarToggled: function() {
    return n.hasClass("aside-toggled")
   },
   isMobile: function() {
    return o.width() < a.tablet
   }
  }
 }
 angular.module("app.utils").service("Utils", e), e.$inject = ["$window", "APP_MEDIAQUERY"]
}(),
function() {
 "use strict";
 angular.module("custom", ["angle", "app.core", "app.sidebar"])
}(),
function() {
 "use strict";

 function e(e) {
  ! function() {
   e.log("I'm a line from custom.js")
  }()
 }
 angular.module("custom").controller("Controller", e), e.$inject = ["$log"]
}();