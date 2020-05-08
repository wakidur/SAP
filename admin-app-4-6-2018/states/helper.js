//NotifyDemoCtrl
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
//NavSearch
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
//NotifyDemoCtrl
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
//notify
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
//Notify
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
}()

//LoginFormController
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
//    RegisterFormController
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
}()
//panelCollapse
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
//panelDismiss
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
//panelRefresh
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
}()
//RouteHelpers
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
}()

//routes
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
}();
//preloader
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
   template: '<div class="preloader-progress"><div class="preloader-progress-bar" ng-style="{width: loadCounter + \'%\'}"></div></div>',
   link: o
  }
 }
 angular.module("app.preloader").directive("preloader", e), e.$inject = ["$animate", "$timeout", "$q"]
}()

//lazyload
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
    
//constant
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
    
//loadingbar    
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
}()