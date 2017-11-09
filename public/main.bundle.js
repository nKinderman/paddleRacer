webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n <div class=\"container \">\n     <flash-messages></flash-messages> \n     <router-outlet></router-outlet>\n </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_race_index_race_index_component__ = __webpack_require__("../../../../../src/app/components/race-index/race-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_race_new_race_new_component__ = __webpack_require__("../../../../../src/app/components/race-new/race-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_race_show_race_show_component__ = __webpack_require__("../../../../../src/app/components/race-show/race-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_race_update_race_update_component__ = __webpack_require__("../../../../../src/app/components/race-update/race-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_racer_new_racer_new_component__ = __webpack_require__("../../../../../src/app/components/racer-new/racer-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_racer_edit_racer_edit_component__ = __webpack_require__("../../../../../src/app/components/racer-edit/racer-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_race_service__ = __webpack_require__("../../../../../src/app/services/race.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_racer_service__ = __webpack_require__("../../../../../src/app/services/racer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Import Modules





// Import Components 













// Import Services






// Declare routes
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_17__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'races', component: __WEBPACK_IMPORTED_MODULE_11__components_race_index_race_index_component__["a" /* RaceIndexComponent */] },
    { path: 'races/new', component: __WEBPACK_IMPORTED_MODULE_12__components_race_new_race_new_component__["a" /* RaceNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'races/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_race_show_race_show_component__["a" /* RaceShowComponent */] },
    { path: 'races/:id/edit', component: __WEBPACK_IMPORTED_MODULE_14__components_race_update_race_update_component__["a" /* RaceUpdateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'races/:id/racers/new', component: __WEBPACK_IMPORTED_MODULE_15__components_racer_new_racer_new_component__["a" /* RacerNewComponent */] },
    { path: 'races/:id/racers/:racer_id/edit', component: __WEBPACK_IMPORTED_MODULE_16__components_racer_edit_racer_edit_component__["a" /* RacerEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: '' }
];
// Include components, modules and services
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_race_index_race_index_component__["a" /* RaceIndexComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_race_new_race_new_component__["a" /* RaceNewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_race_show_race_show_component__["a" /* RaceShowComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_race_update_race_update_component__["a" /* RaceUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_racer_new_racer_new_component__["a" /* RacerNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_racer_edit_racer_edit_component__["a" /* RacerEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_about_about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_22__services_race_service__["a" /* RaceService */],
            __WEBPACK_IMPORTED_MODULE_23__services_racer_service__["a" /* RacerService */],
            __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.profile-right {\r\n    border-right: 1px solid #eee;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h2 class=\"page-header\">About</h2>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-md-6 profile-right mb-3\">\n      <div class=\"h5\">What is PaddleRacer?</div>\n      <br>\n      <p>\n        PaddleRacer is an event listing & registration demo application for kayak/canoe/SUP races. It \n        is designed for 2 types of users, race participants and race managers.   \n      </p>\n      <h6>Race participants can:</h6>\n      <ul>\n        <li>Browse an index of available races</li>\n        <li>View info of a particular race</li>\n        <li>Register for a race</li>\n        <li>Confirm their registration on the race page</li>\n      </ul>\n      <h6>Race managers can: <br>\n        <small class=\"text-muted\">- A user account must be created</small>\n      </h6>\n      <ul>\n        <li>Create a race</li>\n        <li>Edit/Delete a race they own</li>\n        <li>Edit/Delete a participant in a race they own</li>\n        <li>View their account profile & races they have created</li>\n      </ul>\n    </div>\n    <div class=\"col-md-6 mb-3\">\n      <!-- <div class=\"test\"></div> -->\n      <div class=\"h5\">Under the hood</div>\n      <br>\n      <p>\n        This web app is a student's attack at a MEAN stack application. A good fraction of the know-how \n        used towards the development of PaddleRacer was gleaned from various Udemy & TraversyMedia courses/tutorials.  \n      </p>\n      <ul>\n        <li>\n            <a href=\"https://www.udemy.com/the-web-developer-bootcamp/learn/v4/overview\">The Web Developer Bootcamp</a> \n        </li>\n        <li>\n            <a href=\"https://www.udemy.com/angular-4-front-to-back/learn/v4/overview\">Angular 4 Front to Back</a> \n        </li>\n        <li>\n            <a href=\"http://www.traversymedia.com/\">TraversyMedia</a> \n        </li>\n      </ul>\n        \n      <h6>Some of the implemented features include:</h6>\n      <ul>\n          <li>Authentication via Passport middleware</li>\n          <li>Client/Server verification with JWT</li>\n          <li>RESTful routing</li>\n          <li>BootStrap 4 styling</li>\n          <li>CRUD functionality</li>\n      </ul>\n      <a class=\"btn btn-success\" href=\"https://github.com/nKinderman/paddleRacer\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i> View on GitHub</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-right {\r\n    border-right: 1px solid #eee;\r\n}\r\n\r\n.image {\r\n    \r\n    height: 175px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.footer {\r\n    position:absolute;\r\n    bottom:0;\r\n    left:0;\r\n    width:100%;\r\n }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <h2 class=\"col-md-6 page-header\">Dashboard</h2>\n        <div class=\"col-md-6\">\n            <a class=\"btn btn-secondary pull-right nav-link\" (click)=\"onLogoutClick()\" href=\"#\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Logout</a>\n        </div>\n    </div>                              \n    <hr>\n    <div class=\"row\">\n        <div class=\"col-md-3 profile-right\">\n                <h4 class=\"h4\">Profile</h4>\n                <hr>\n            <div class=\"card border-light mb-3\" >\n                <div class=\"card-body\">\n                    <p class=\"card-text\"><span class=\"text-muted\">Name: &nbsp;</span>{{user.name}}</p>\n                    <p class=\"card-text\"><span class=\"text-muted\">Username: &nbsp;</span>{{user.username}}</p>\n                    <p class=\"card-text\"><span class=\"text-muted\">Email: &nbsp;</span>{{user.email}}</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-9\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"h4\">Your Races</div>\n                </div>\n                <div class=\"col-md-6\">\n                    <a class=\"btn btn-primary pull-right\" [routerLink]=\"['/races/new']\" role=\"button\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Create New Race</a>                        \n                </div>\n            </div>\n            \n            <div class=\"row text-center mt-4\" style=\"height: 400px;\" *ngIf=\"myRaces.length > 0; else other\">\n                <div class=\"col-md-4 col-sm 6 d-flex align-items-stretch h-100\" *ngFor=\"let myRace of myRaces\">\n                    <div class=\"card mb-3\" style=\"width: 100%;\" >\n                        <img class=\"card-img-top image\" src=\"{{ myRace.image }}\" style=\"padding: 10px;\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">{{ myRace.name }}</h4>\n                            <p class=\"card-text\">{{ myRace.date }} <br>{{ myRace.location }}</p>\n                            <div class=\"card-footer footer\">\n                                <a class=\"btn btn-secondary\" [routerLink]=\"['/races', myRace._id]\" role=\"button\"><i class=\"fa fa-info\" aria-hidden=\"true\"></i> More Info</a>  \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <ng-template #other><br>You have no races yet.</ng-template>                \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_race_service__ = __webpack_require__("../../../../../src/app/services/race.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(authService, raceService, router, flashMessagesService) {
        this.authService = authService;
        this.raceService = raceService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.user = {
            name: '',
            username: '',
            email: ''
        };
        this.i = 0;
        this.myRaces = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.raceService.getRaces().subscribe(function (races) {
                _this.races = races;
                for (_this.i = 0; _this.i < _this.races.length; _this.i++) {
                    if (races[_this.i].author.username == _this.user.username) {
                        _this.myRaces.push(races[_this.i]);
                    }
                }
            });
        }, function (err) {
            console.log(err);
            console.log(_this.user);
            return false;
        });
    };
    // call logout from authService, display logout message, navigate to login route  
    DashboardComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesService.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_race_service__["a" /* RaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_race_service__["a" /* RaceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Alfa+Slab+One);", ""]);

// module
exports.push([module.i, ".title {\r\n  font-family: 'Alfa Slab One', Arial;\r\n  font-size: 8vmin;\r\n}\r\n\r\n::ng-deep #level{\r\n  z-index: 1;\r\n  position: relative;\r\n}\r\n\r\n::ng-deep .slideshow { \r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 0;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n::ng-deep .slideshow li { \r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-size: cover;\r\n  background-position: 50% 50%;\r\n  background-repeat: no-repeat;\r\n  opacity: 0;\r\n  z-index: 0;\r\n  -webkit-animation: imageAnimation 36s linear infinite;\r\n          animation: imageAnimation 36s linear infinite; \r\n}\r\n\r\n::ng-deep li.one { \r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/toRight.jpg") + ") \r\n}\r\n::ng-deep li.two { \r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/toBottom.jpg") + ");\r\n  -webkit-animation-delay: 9s;\r\n          animation-delay: 9s; \r\n}\r\n::ng-deep li.three { \r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/toLeft.jpg") + ");\r\n  -webkit-animation-delay: 18s;\r\n          animation-delay: 18s; \r\n}\r\n::ng-deep li.four { \r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/toTop.jpg") + ");\r\n  -webkit-animation-delay: 27s;\r\n          animation-delay: 27s; \r\n}\r\n\r\n@-webkit-keyframes imageAnimation { \r\n  0% { \r\n    opacity: 0; \r\n    -webkit-animation-timing-function: ease-in; \r\n            animation-timing-function: ease-in;\r\n  }\r\n  10% {\r\n    opacity: 1;\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n  }\r\n  20% {\r\n    opacity: 1\r\n  }\r\n  30% {\r\n    opacity: 0\r\n  }\r\n}\r\n\r\n@keyframes imageAnimation { \r\n  0% { \r\n    opacity: 0; \r\n    -webkit-animation-timing-function: ease-in; \r\n            animation-timing-function: ease-in;\r\n  }\r\n  10% {\r\n    opacity: 1;\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n  }\r\n  20% {\r\n    opacity: 1\r\n  }\r\n  30% {\r\n    opacity: 0\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div id=\"level\">\n        <div class=\"jumbotron\">\n            <div class=\"container\">\n                <h1 class=\"title\">PaddleRacer</h1>\n                <p class=\"lead\">Welcome to a paddling themed event listing/registration application built using MEAN stack technology</p>\n                <hr>\n                <p>\n                    <a class=\"btn btn-primary\" [routerLink]=\"['/races']\" role=\"button\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i> Browse Races</a>\n                    <a class=\"btn btn-secondary\" [routerLink]=\"['/login']\" role=\"button\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Login</a>\n                </p>\n            </div>\n        </div>  \n    </div>\n    \n    <ul class=\"slideshow\">\n    <li class=\"one\"></li>\n    <li class=\"two\"></li>\n    <li class=\"three\"></li>\n    <li class=\"four\"></li>\n    </ul>\n\n\n    \n    \n    \n    \n\n\n      \n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import modules 


var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\" class=\"mb-4\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Enter username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Login</button>\n  <a class=\"btn btn-secondary\" [routerLink]=\"['/']\" role=\"button\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Cancel</a>\n</form>\n<hr>\n<div class=\"mb-3\">\n  <h5 class=\"text-primary\">Not signed up?</h5>\n    <h6>Registered users can:</h6>\n    <p class=\"text-secondary pl-2\">1. Create a race <br> 2. Edit/Delete a race they own <br> 3. Edit/Delete a participant in a race they own</p>\n    <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/register']\" role=\"button\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> Sign-up</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashmessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashmessagesService = flashmessagesService;
        this.localUser = {
            id: '',
            name: '',
            email: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // use authService to authenticate input user
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.authService.loadUser();
                _this.flashmessagesService.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashmessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Alfa+Slab+One);", ""]);

// module
exports.push([module.i, "::ng-deep #level{\r\n    z-index: 1;\r\n    position: relative;\r\n  }\r\n  \r\n  .title {\r\n    font-family: 'Alfa Slab One', cursive;\r\n    font-size: 150%;\r\n    color: white;\r\n    pointer-events: none;\r\n    cursor: default;\r\n  }\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"level\">\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <a class=\"title disabled\" href=\"#\">PaddleRacer </a>&nbsp;\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a class=\"nav-link inner\" [routerLink]=\"['/races']\">Races</a>\n        </li>\n      </ul>\n\n      <ul class=\"navbar-nav ml-auto\">\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a class=\"nav-link disabled\" >{{authService.user.email}}</a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/register']\">Sign-up</a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <br><br>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import modules and service




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashmessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashmessagesService = flashmessagesService;
        this.user = {
            id: '',
            name: '',
            email: ''
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = this.authService.loadUser();
        if (this.authService.loggedIn()) {
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }
    };
    // call logout from authService, display logout message, navigate to login route  
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashmessagesService.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/race-index/race-index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.image {\r\n    \r\n    height: 175px;\r\n    -o-object-fit: fill;\r\n       object-fit: fill;\r\n    \r\n}\r\n\r\n.footer {\r\n    position:absolute;\r\n    bottom:0;\r\n    left:0;\r\n    width:100%;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/race-index/race-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <h2 class=\"page-header\">Browse Races</h2>\n        </div>\n        <div class=\"col-md-6\">\n            <a class=\"btn btn-primary pull-right\" [routerLink]=\"['/races/new']\" role=\"button\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Create New Race</a>\n        </div>\n    </div>\n    <hr>\n    <div class=\"row text-center mt-4\" style=\"height: 400px;\">\n        <div class=\"col-md-3 col-sm 6 d-flex align-items-stretch h-100\" *ngFor=\"let race of races\">\n            <div class=\"card mb-3\" style=\"width: 100%;\">\n                <div>\n                    <img class=\"card-img-top image\" src=\"{{ race.image }}\" style=\"padding: 10px;\" alt=\"Card image cap\">\n                </div>\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">{{ race.name }}</h4>\n                    <p class=\"card-text\">{{ race.date }} <br>{{ race.location }}</p>\n                    <div class=\"card-footer footer\">\n                        <a class=\"btn btn-secondary\" [routerLink]=\"['/races', race._id]\" role=\"button\"><i class=\"fa fa-info\" aria-hidden=\"true\"></i> More Info</a>\n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/race-index/race-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_race_service__ = __webpack_require__("../../../../../src/app/services/race.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RaceIndexComponent = (function () {
    function RaceIndexComponent(raceService, router) {
        this.raceService = raceService;
        this.router = router;
    }
    RaceIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.raceService.getRaces().subscribe(function (races) {
            _this.races = races;
        });
    };
    return RaceIndexComponent;
}());
RaceIndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/race-index/race-index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/race-index/race-index.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_race_service__["a" /* RaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_race_service__["a" /* RaceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RaceIndexComponent);

var _a, _b;
//# sourceMappingURL=race-index.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/race-new/race-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/race-new/race-new.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">New Race</h2>\n<form novalidate #f=\"ngForm\" (ngSubmit)=\"onNewRaceSubmit(f)\" class=\"mb-4\">\n    <div class=\"form-group\">\n      <label>Race Name</label>\n      <input \n        type=\"text\" \n        class=\"form-control\"\n        [(ngModel)]=\"race.name\" \n        name=\"name\"  \n        #raceName=\"ngModel\"\n        minlength=\"2\"\n        required\n        placeholder=\"Race name\"        \n        >\n      <div *ngIf=\"raceName.errors?.required && raceName.touched\" class=\"alert alert-danger\">\n        Name is required\n      </div>\n      <div *ngIf=\"raceName.errors?.minlength && raceName.touched\" class=\"alert alert-danger\">\n        Name should be greater than 2 characters\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Date</label>\n      <input \n      type=\"text\" \n      class=\"form-control\"\n      [(ngModel)]=\"race.date\" \n      name=\"date\"  \n      #raceDate=\"ngModel\"\n      required\n      pattern=\"\\d{1,2}/\\d{1,2}/\\d{4}\"\n      placeholder=\"MM/DD/YYYY\"        \n      >\n      <div *ngIf=\"raceDate.errors?.required && raceDate.touched\" class=\"alert alert-danger\">\n        Date is required\n      </div>\n      <div *ngIf=\"raceDate.errors?.pattern && raceDate.touched\" class=\"alert alert-danger\">\n        Date format: MM/DD/YYYY\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Location</label>\n      <input \n      type=\"text\" \n      class=\"form-control\"\n      [(ngModel)]=\"race.location\" \n      name=\"location\"  \n      #raceLocation=\"ngModel\"\n      minlength=\"5\"\n      required\n      placeholder=\"City, State\"        \n      >\n      <div *ngIf=\"raceLocation.errors?.required && raceLocation.touched\" class=\"alert alert-danger\">\n        Location is required\n      </div>\n      <div *ngIf=\"raceLocation.errors?.minlength && raceLocation.touched\" class=\"alert alert-danger\">\n        Location should be greater than 5 characters\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Image URL</label>\n      <input \n      type=\"text\" \n      class=\"form-control\"\n      [(ngModel)]=\"race.image\" \n      name=\"image\"  \n      #raceimage=\"ngModel\"\n      required\n      pattern=\"https?://.+\"\n      placeholder=\"Image URL\"        \n      >\n      <div *ngIf=\"raceimage.errors?.required && raceimage.touched\" class=\"alert alert-danger\">\n        Image URL is required\n      </div>\n      <div *ngIf=\"raceimage.errors?.pattern && raceimage.touched\" class=\"alert alert-danger\">\n        Format: http:// or https:// (image address)\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Description</label>\n      <input \n      type=\"text\" \n      class=\"form-control\"\n      [(ngModel)]=\"race.description\" \n      name=\"description\"  \n      #raceDescription=\"ngModel\"\n      required\n      placeholder=\"Brief description of race\"        \n      >\n      <div *ngIf=\"raceDescription.errors?.required && raceDescription.touched\" class=\"alert alert-danger\">\n        Location is required\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Registration Fee</label>\n      <input \n      type=\"number\" \n      class=\"form-control\"\n      [(ngModel)]=\"race.cost\" \n      name=\"cost\"  \n      #cost=\"ngModel\"\n      required\n      placeholder=\"Price per participant\"        \n      >\n      <div *ngIf=\"cost.errors?.required && cost.touched\" class=\"alert alert-danger\">\n        Registration fee is required\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" value=\"Submit\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Submit</button>    \n    <a class=\"btn btn-secondary\" [routerLink]=\"['/races']\" role=\"button\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Cancel</a>\n  </form>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/race-new/race-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_race_service__ = __webpack_require__("../../../../../src/app/services/race.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RaceNewComponent = (function () {
    function RaceNewComponent(raceService, router, flashMessagesService) {
        this.raceService = raceService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.race = {
            name: '',
            date: '',
            location: '',
            image: '',
            description: '',
            cost: 0
        };
    }
    RaceNewComponent.prototype.ngOnInit = function () {
    };
    // call raceService to add new race to DB
    RaceNewComponent.prototype.onNewRaceSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            //Create Race
            this.raceService.newRace(value).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessagesService.show('You have created a new race', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/races']);
                }
                else {
                    _this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/races/new']);
                }
            });
        }
        else {
            this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    return RaceNewComponent;
}());
RaceNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-race-new',
        template: __webpack_require__("../../../../../src/app/components/race-new/race-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/race-new/race-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_race_service__["a" /* RaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_race_service__["a" /* RaceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], RaceNewComponent);

var _a, _b, _c;
//# sourceMappingURL=race-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/race-show/race-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/race-show/race-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngIf=\"authService.loggedIn(); else guest\">\n    <a [routerLink]=\"['/dashboard']\" href=\"#\" class=\"btn btn-link\"><i class=\"fa  fa-arrow-circle-o-left\"></i> Back to Dashboard</a>\n  </div>\n    <ng-template #guest><a [routerLink]=\"['/races']\" href=\"#\" class=\"btn btn-link\">\n      <i class=\"fa  fa-arrow-circle-o-left\"></i> Back to Races</a>\n    </ng-template>\n  <div class=\"row mb-4\" *ngIf=\"race\">\n    <div class=\"col-md-6\">\n      <div class=\"card mb-3\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{ race.name }}</h4>\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{ race.date }}</h6>\n          <hr>\n          <p class=\"card-text\"><span class=\"text-muted\">Location: \t&nbsp;</span>{{ race.location }}</p>\n          <p class=\"card-text\"><span class=\"text-muted\">Organized by: \t&nbsp;</span>{{ race.author.username }}</p>\n          <p class=\"card-text\"><span class=\"text-muted\">Description: \t&nbsp;</span>{{ race.description }}</p>\n          <p class=\"card-text\"><span class=\"text-muted\">Registration fee: \t&nbsp;</span>{{ race.cost | currency:\"USD\":true }}</p>\n          <a [routerLink]=\"['/races/' + id +'/racers/new']\" class=\"btn btn-primary mb-1\" href=\"#\" role=\"button\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> Race Registration</a>\n          <span *ngIf=\"authService.loggedIn()\">\n            <a *ngIf=\"authService.ownRace(race.author.id)\" [routerLink]=\"['/races/' + id +'/edit']\" class=\"btn btn-warning btn-sm\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</a>\n            <button *ngIf=\"authService.ownRace(race.author.id)\" (click)=\"onDeleteRaceSubmit()\" type=\"button\" class=\"btn btn-danger btn-sm\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> Delete</button>\n          </span>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-md-6\">\n      <img src=\"{{ race.image }}\" alt=\"{{race.name }}\" class=\"img-fluid\">\n    </div>\n  </div>\n  \n  <div class=\"row mb-4 mt-4\" >\n    <div class=\"col md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Registration Confirmation</h4>\n          <table class=\"table table-responsive\">\n              <thead class=\"thead-default\">\n                <tr>\n                  <th>First Name</th>\n                  <th>Last Name</th>\n                  <th>Class</th>\n                  <th>Age</th>\n                  <th>Gender</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody *ngIf=\"race.racers.length > 0; else noRacers\">\n                <tr *ngFor=\"let racer of race.racers\">\n                  <td>{{ racer.firstName }}</td>\n                  <td>{{ racer.lastName }}</td>\n                  <td>{{ racer.class }}</td>\n                  <td>{{ racer.age }}</td>\n                  <td>{{ racer.gender }}</td>\n                  <td *ngIf=\"authService.loggedIn()\">\n                    <a *ngIf=\"authService.ownRace(race.author.id)\"  [routerLink]=\"['/races/' + id +'/racers/' + racer._id + '/edit']\" class=\"btn btn-warning btn-sm mb-1\" ><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</a>\n                    <button *ngIf=\"authService.ownRace(race.author.id)\"  (click)=\"onDeleteRacerSubmit(racer._id)\" type=\"button\" class=\"btn btn-danger btn-sm mb-1\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> Delete</button>                    \n                  </td>\n                </tr>\n              </tbody>      \n              <ng-template #noRacers><br>There are no registered racers.</ng-template>\n            </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/race-show/race-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_race_service__ = __webpack_require__("../../../../../src/app/services/race.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_racer_service__ = __webpack_require__("../../../../../src/app/services/racer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RaceShowComponent = (function () {
    function RaceShowComponent(raceService, racerService, authService, router, activatedRoute, flashMessagesService) {
        this.raceService = raceService;
        this.racerService = racerService;
        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.flashMessagesService = flashMessagesService;
        this.race = {
            name: '',
            date: '',
            location: '',
            image: '',
            description: '',
            cost: 0,
            racers: [],
            author: {
                id: '',
                username: ''
            }
        };
    }
    RaceShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.raceService.getRace(this.id).subscribe(function (race) {
            _this.race = race;
        });
    };
    // Call raceService delete race
    RaceShowComponent.prototype.onDeleteRaceSubmit = function () {
        var _this = this;
        if (confirm('Are you sure you want to delete?')) {
            this.raceService.deleteRace(this.id).subscribe(function (data) {
                if (data.success) {
                    console.log(data);
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/races']);
                }
                else {
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/races/']);
                }
            });
        }
    };
    // Call racerService to delete racer 
    RaceShowComponent.prototype.onDeleteRacerSubmit = function (racerId) {
        var _this = this;
        if (confirm('Are you sure you want to delete?')) {
            this.racerService.deleteRacer(this.id, racerId).subscribe(function (data) {
                if (data.success) {
                    _this.raceService.getRace(_this.id).subscribe(function (race) {
                        _this.race = race;
                    });
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/races/' + _this.id]);
                }
                else {
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/races/' + _this.id]);
                }
            });
        }
    };
    return RaceShowComponent;
}());
RaceShowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-race-show',
        template: __webpack_require__("../../../../../src/app/components/race-show/race-show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/race-show/race-show.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_race_service__["a" /* RaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_race_service__["a" /* RaceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_racer_service__["a" /* RacerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_racer_service__["a" /* RacerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object])
], RaceShowComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=race-show.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/race-update/race-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/race-update/race-update.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <a [routerLink]=\"['/races/'+id]\" href=\"#\" class=\"btn btn-link\"><i class=\"fa  fa-arrow-circle-o-left\"></i> Back to Race</a>\n</div>\n\n<h2 class=\"page-header\">Edit Race</h2>\n<form *ngIf=\"race\" novalidate #f=\"ngForm\" (ngSubmit)=\"onEditRaceSubmit(f)\" class=\"mb-4\">\n    <div class=\"form-group\">\n      <label>Race Name</label>\n      <input \n        type=\"text\" \n        class=\"form-control\"\n        [(ngModel)]=\"race.name\" \n        name=\"name\"  \n        #raceName=\"ngModel\"\n        minlength=\"2\"\n        required\n        placeholder=\"Race name\"        \n        >\n      <div *ngIf=\"raceName.errors?.required && raceName.touched\" class=\"alert alert-danger\">\n        Name is required\n      </div>\n      <div *ngIf=\"raceName.errors?.minlength && raceName.touched\" class=\"alert alert-danger\">\n        Name should be greater than 2 characters\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Date</label>\n      <input \n      type=\"text\" \n      class=\"form-control\"\n      [(ngModel)]=\"race.date\" \n      name=\"date\"  \n      #raceDate=\"ngModel\"\n      required\n      pattern=\"\\d{1,2}/\\d{1,2}/\\d{4}\"\n      placeholder=\"MM/DD/YYYY\"        \n      >\n      <div *ngIf=\"raceDate.errors?.required && raceDate.touched\" class=\"alert alert-danger\">\n        Date is required\n      </div>\n      <div *ngIf=\"raceDate.errors?.pattern && raceDate.touched\" class=\"alert alert-danger\">\n        Date format: MM/DD/YYYY\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Location</label>\n      <input \n      type=\"text\" \n      class=\"form-control\"\n      [(ngModel)]=\"race.location\" \n      name=\"location\"  \n      #raceLocation=\"ngModel\"\n      minlength=\"5\"\n      required\n      placeholder=\"City, State\"        \n      >\n      <div *ngIf=\"raceLocation.errors?.required && raceLocation.touched\" class=\"alert alert-danger\">\n        Location is required\n      </div>\n      <div *ngIf=\"raceLocation.errors?.minlength && raceLocation.touched\" class=\"alert alert-danger\">\n        Location should be greater than 5 characters\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Image URL</label>\n      <input \n      type=\"text\" \n      class=\"form-control\"\n      [(ngModel)]=\"race.image\" \n      name=\"image\"  \n      #raceimage=\"ngModel\"\n      required\n      pattern=\"https?://.+\"\n      placeholder=\"Image URL\"        \n      >\n      <div *ngIf=\"raceimage.errors?.required && raceimage.touched\" class=\"alert alert-danger\">\n        Image URL is required\n      </div>\n      <div *ngIf=\"raceimage.errors?.pattern && raceimage.touched\" class=\"alert alert-danger\">\n        Format: http:// or https:// (image address)\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Description</label>\n      <input \n      type=\"text\" \n      class=\"form-control\"\n      [(ngModel)]=\"race.description\" \n      name=\"description\"  \n      #raceDescription=\"ngModel\"\n      required\n      placeholder=\"Brief description of race\"        \n      >\n      <div *ngIf=\"raceDescription.errors?.required && raceDescription.touched\" class=\"alert alert-danger\">\n        Location is required\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Registration Fee</label>\n      <input \n      type=\"number\" \n      class=\"form-control\"\n      [(ngModel)]=\"race.cost\" \n      name=\"cost\"  \n      #cost=\"ngModel\"\n      required\n      placeholder=\"Price per participant\"        \n      >\n      <div *ngIf=\"cost.errors?.required && cost.touched\" class=\"alert alert-danger\">\n        Registration fee is required\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" value=\"Submit\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Submit</button>    \n    <a class=\"btn btn-secondary\" [routerLink]=\"['/races/' + this.id]\" role=\"button\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Cancel</a>\n  </form>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/race-update/race-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_race_service__ = __webpack_require__("../../../../../src/app/services/race.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RaceUpdateComponent = (function () {
    function RaceUpdateComponent(raceService, validateService, router, activatedRoute, flashMessagesService) {
        this.raceService = raceService;
        this.validateService = validateService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.flashMessagesService = flashMessagesService;
        this.race = {
            name: '',
            date: '',
            location: '',
            image: '',
            description: '',
            cost: 0
        };
    }
    RaceUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.raceService.getRace(this.id).subscribe(function (race) {
            _this.race = race;
            // console.log(race);
        });
    };
    // Call raceService to edit race
    RaceUpdateComponent.prototype.onEditRaceSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        else {
            // Create Race
            this.raceService.updateRace(value, this.id).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessagesService.show('You have updated the race', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/races/' + _this.id]);
                }
                else {
                    _this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/races/' + _this.id]);
                }
            });
        }
    };
    return RaceUpdateComponent;
}());
RaceUpdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-race-update',
        template: __webpack_require__("../../../../../src/app/components/race-update/race-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/race-update/race-update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_race_service__["a" /* RaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_race_service__["a" /* RaceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], RaceUpdateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=race-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/racer-edit/racer-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/racer-edit/racer-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <a [routerLink]=\"['/races/' + id ]\" href=\"#\" class=\"btn btn-link\"><i class=\"fa  fa-arrow-circle-o-left\"></i> Back to Race</a>\n  </div>\n  <h2 class=\"page-header\">Edit Racer</h2>\n  <form novalidate #f=\"ngForm\" (ngSubmit)=\"onEditRacerSubmit(f)\" class=\"mb-5\">\n      <div class=\"form-group\">\n        <label>First Name</label>\n        <input \n          type=\"text\" \n          class=\"form-control\"\n          [(ngModel)]=\"racer.firstName\" \n          name=\"firstName\"  \n          #firstName=\"ngModel\"\n          minlength=\"2\"\n          required\n          placeholder=\"First Name\"        \n          >\n        <div *ngIf=\"firstName.errors?.required && firstName.touched\" class=\"alert alert-danger\">\n          First name is required\n        </div>\n        <div *ngIf=\"firstName.errors?.minlength && firstName.touched\" class=\"alert alert-danger\">\n          First name should be greater than 2 characters\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Last Name</label>\n        <input \n        type=\"text\" \n        class=\"form-control\"\n        [(ngModel)]=\"racer.lastName\" \n        name=\"lastName\"  \n        #lastName=\"ngModel\"\n        required\n        minlength=\"2\"\n        placeholder=\"Last Name\"        \n        >\n        <div *ngIf=\"lastName.errors?.required && lastName.touched\" class=\"alert alert-danger\">\n          Last name is required\n        </div>\n        <div *ngIf=\"lastName.errors?.minlength && lastName.touched\" class=\"alert alert-danger\">\n          Last name should be greater than 2 characters\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Age</label>\n        <input \n        type=\"number\" \n        class=\"form-control\"\n        [(ngModel)]=\"racer.age\" \n        name=\"age\"  \n        #age=\"ngModel\"\n        required\n        placeholder=\"Age\"        \n        >\n        <div *ngIf=\"age.errors?.required && age.touched\" class=\"alert alert-danger\">\n          Age is required\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Gender</label>\n        <input \n        type=\"text\" \n        class=\"form-control\"\n        [(ngModel)]=\"racer.gender\" \n        name=\"gender\"  \n        #gender=\"ngModel\"\n        required\n        placeholder=\"Gender\"        \n        >\n        <div *ngIf=\"gender.errors?.required && gender.touched\" class=\"alert alert-danger\">\n          Gender is required\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input \n        type=\"email\" \n        class=\"form-control\"\n        [(ngModel)]=\"racer.email\" \n        name=\"email\"  \n        #email=\"ngModel\"\n        required\n        placeholder=\"Enter a valid email address\"        \n        >\n        <div *ngIf=\"email.errors?.required && email.touched\" class=\"alert alert-danger\">\n          Email is required\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Phone</label>\n        <input \n        type=\"number\" \n        class=\"form-control\"\n        [(ngModel)]=\"racer.phone\" \n        name=\"phone\"  \n        #phone=\"ngModel\"\n        placeholder=\"##########\"        \n        >\n      </div>\n      <div class=\"form-group\">\n        <label>Hometown</label>\n        <input \n        type=\"text\" \n        class=\"form-control\"\n        [(ngModel)]=\"racer.hometown\" \n        name=\"hometown\"  \n        #hometown=\"ngModel\"\n        minlength=\"2\"\n        placeholder=\"Hometown\"        \n        >\n        <div *ngIf=\"hometown.errors?.minlength && hometown.touched\" class=\"alert alert-danger\">\n            Hometown should be greater than 2 characters\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Boat Class</label>\n        <select \n        class=\"form-control\" \n        name=\"class\"\n        [(ngModel)]=\"racer.class\">\n        <option *ngFor=\"let boat of boatClass\" [ngValue]=\"boat\">{{boat}}</option>\n        </select>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" value=\"Submit\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Submit</button>    \n      <a class=\"btn btn-secondary\" [routerLink]=\"['/races/' + this.id]\" role=\"button\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Cancel</a>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/racer-edit/racer-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RacerEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_racer_service__ = __webpack_require__("../../../../../src/app/services/racer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RacerEditComponent = (function () {
    function RacerEditComponent(racerService, router, flashMessagesService, activatedRoute) {
        this.racerService = racerService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.activatedRoute = activatedRoute;
        this.racer = {
            firstName: '',
            lastName: '',
            email: '',
            phone: 0,
            age: 0,
            hometown: '',
            gender: '',
            class: ''
        };
    }
    RacerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub1 = this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.sub2 = this.activatedRoute.params.subscribe(function (params) {
            _this.racerId = params['racer_id'];
        });
        this.racerService.getRacer(this.id, this.racerId).subscribe(function (racer) {
            _this.racer = racer;
        });
        this.boatClass = [
            'Rec Kayak', 'Race Kayak',
            'Sea Kayak', 'Rec Canoe',
            'Race Canoe', 'SUP Rec',
            'SUP Rec', 'Pedal Craft',
            'Unlimited'
        ];
    };
    // Call racerService to edit racer
    RacerEditComponent.prototype.onEditRacerSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            //Edit Racer
            this.racerService.updateRacer(value, this.id, this.racerId).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessagesService.show('Racer updated', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/races/' + _this.id]);
                }
                else {
                    _this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/races/' + _this.id]);
                }
            });
        }
        else {
            this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    return RacerEditComponent;
}());
RacerEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-racer-edit',
        template: __webpack_require__("../../../../../src/app/components/racer-edit/racer-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/racer-edit/racer-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_racer_service__["a" /* RacerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_racer_service__["a" /* RacerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], RacerEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=racer-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/racer-new/racer-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/racer-new/racer-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <a [routerLink]=\"['/races/' + id ]\" href=\"#\" class=\"btn btn-link\"><i class=\"fa  fa-arrow-circle-o-left\"></i> Back to Race</a>\n  </div>\n  <h2 class=\"page-header\">Race Registration</h2>\n  <form novalidate #f=\"ngForm\" (ngSubmit)=\"onNewRacerSubmit(f)\" class=\"mb-5\">\n      <div class=\"form-group\">\n        <label>First Name</label>\n        <input \n          type=\"text\" \n          class=\"form-control\"\n          [(ngModel)]=\"racer.firstName\" \n          name=\"firstName\"  \n          #firstName=\"ngModel\"\n          minlength=\"2\"\n          required\n          placeholder=\"First Name\"        \n          >\n        <div *ngIf=\"firstName.errors?.required && firstName.touched\" class=\"alert alert-danger\">\n          First name is required\n        </div>\n        <div *ngIf=\"firstName.errors?.minlength && firstName.touched\" class=\"alert alert-danger\">\n          First name should be greater than 2 characters\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Last Name</label>\n        <input \n        type=\"text\" \n        class=\"form-control\"\n        [(ngModel)]=\"racer.lastName\" \n        name=\"lastName\"  \n        #lastName=\"ngModel\"\n        required\n        minlength=\"2\"\n        placeholder=\"Last Name\"        \n        >\n        <div *ngIf=\"lastName.errors?.required && lastName.touched\" class=\"alert alert-danger\">\n          Last name is required\n        </div>\n        <div *ngIf=\"lastName.errors?.minlength && lastName.touched\" class=\"alert alert-danger\">\n          Last name should be greater than 2 characters\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Age</label>\n        <input \n        type=\"number\" \n        class=\"form-control\"\n        [(ngModel)]=\"racer.age\" \n        name=\"age\"  \n        #age=\"ngModel\"\n        required\n        placeholder=\"Age\"        \n        >\n        <div *ngIf=\"age.errors?.required && age.touched\" class=\"alert alert-danger\">\n          Age is required\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Gender</label>\n        <input \n        type=\"text\" \n        class=\"form-control\"\n        [(ngModel)]=\"racer.gender\" \n        name=\"gender\"  \n        #gender=\"ngModel\"\n        required\n        placeholder=\"Gender\"        \n        >\n        <div *ngIf=\"gender.errors?.required && gender.touched\" class=\"alert alert-danger\">\n          Gender is required\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input \n        type=\"email\" \n        class=\"form-control\"\n        [(ngModel)]=\"racer.email\" \n        name=\"email\"  \n        #email=\"ngModel\"\n        required\n        placeholder=\"Enter a valid email address\"        \n        >\n        <div *ngIf=\"email.errors?.required && email.touched\" class=\"alert alert-danger\">\n          Email is required\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Phone</label>\n        <input \n        type=\"number\" \n        class=\"form-control\"\n        [(ngModel)]=\"racer.phone\" \n        name=\"phone\"  \n        #phone=\"ngModel\"\n        placeholder=\"##########\"        \n        >\n      </div>\n      <div class=\"form-group\">\n        <label>Hometown</label>\n        <input \n        type=\"text\" \n        class=\"form-control\"\n        [(ngModel)]=\"racer.hometown\" \n        name=\"hometown\"  \n        #hometown=\"ngModel\"\n        minlength=\"2\"\n        placeholder=\"Hometown\"        \n        >\n        <div *ngIf=\"hometown.errors?.minlength && hometown.touched\" class=\"alert alert-danger\">\n            Hometown should be greater than 2 characters\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Boat Class</label>\n        <select \n        class=\"form-control\" \n        name=\"class\"\n        [(ngModel)]=\"racer.class\">\n        <option *ngFor=\"let boat of boatClass\" [ngValue]=\"boat\">{{boat}}</option>\n        </select>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" value=\"Submit\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Submit</button>          \n      <a class=\"btn btn-secondary\" [routerLink]=\"['/races/' + this.id]\" role=\"button\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Cancel</a>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/racer-new/racer-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RacerNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_race_service__ = __webpack_require__("../../../../../src/app/services/race.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_racer_service__ = __webpack_require__("../../../../../src/app/services/racer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RacerNewComponent = (function () {
    function RacerNewComponent(raceService, racerService, router, flashMessagesService, activatedRoute) {
        this.raceService = raceService;
        this.racerService = racerService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.activatedRoute = activatedRoute;
        this.racer = {
            firstName: '',
            lastName: '',
            email: '',
            phone: 0,
            age: 0,
            hometown: '',
            gender: '',
            class: ''
        };
    }
    RacerNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.boatClass = [
            'Rec Kayak', 'Race Kayak',
            'Sea Kayak', 'Rec Canoe',
            'Race Canoe', 'SUP Rec',
            'SUP', 'Pedal Craft',
            'Unlimited'
        ];
    };
    // Call racerService to register racer
    RacerNewComponent.prototype.onNewRacerSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            //Create Racer
            this.racerService.newRacer(value, this.id).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessagesService.show('You are registered', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/races/' + _this.id]);
                }
                else {
                    _this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/races/' + _this.id + '/racers/new']);
                }
            });
        }
        else {
            this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    return RacerNewComponent;
}());
RacerNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-racer-new',
        template: __webpack_require__("../../../../../src/app/components/racer-new/racer-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/racer-new/racer-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_race_service__["a" /* RaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_race_service__["a" /* RaceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_racer_service__["a" /* RacerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_racer_service__["a" /* RacerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], RacerNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=racer-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Sign-Up</h2>\n<form class=\"mb-3\" (submit)=\"onRegisterSubmit()\">\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter name\">\n    </div>\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Enter username\">\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter email\">\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\"  placeholder=\"Enter Password\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" value=\"Submit\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Submit</button>\n    <a class=\"btn btn-secondary\" [routerLink]=\"['/login']\" role=\"button\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Cancel</a>\n  </form>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import modules and services





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router, flashMessagesService) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    // Call validateService and authService to add new user
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        // Requires all fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessagesService.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.flashMessagesService.show('You need to be logged in to do that', { cssClass: 'alert-danger', timeout: 3000 });
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.localUser = {
            id: '',
            name: '',
            email: ''
        };
    }
    // add user to DB
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // authenticate input credentials with DB 
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // retrieve user info from DB
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('api/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // store user and token data locally
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    // retrieve token from local storage
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // retrieve user from local storage
    AuthService.prototype.loadUser = function () {
        var user = localStorage.getItem('user');
        this.user = JSON.parse(user);
        return this.user;
    };
    // check token for loggedin status
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    // check for user ownership of race
    AuthService.prototype.ownRace = function (ownerId) {
        this.localUser = this.loadUser();
        if (ownerId == this.user.id) {
            return true;
        }
        else {
            return false;
        }
    };
    // clear user and token and empty user storage
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/race.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RaceService = (function () {
    function RaceService(http) {
        this.http = http;
    }
    // get races from server DB
    RaceService.prototype.getRaces = function () {
        return this.http.get('api/races')
            .map(function (res) { return res.json(); });
    };
    // add race to server DB
    RaceService.prototype.newRace = function (race) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/races', race, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // get one race from server DB
    RaceService.prototype.getRace = function (id) {
        return this.http.get('api/races/' + id)
            .map(function (res) { return res.json(); });
    };
    // delete race from server DB
    RaceService.prototype.deleteRace = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(('api/races/' + id), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // update race in server DB
    RaceService.prototype.updateRace = function (race, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put(('api/races/' + id), race, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // load token from local storage
    RaceService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    return RaceService;
}());
RaceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], RaceService);

var _a;
//# sourceMappingURL=race.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/racer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RacerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RacerService = (function () {
    function RacerService(http) {
        this.http = http;
    }
    // add racer to server DB
    RacerService.prototype.newRacer = function (racer, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(('api/races/' + id + '/racers'), racer, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // get one racer from server DB
    RacerService.prototype.getRacer = function (raceId, racerId) {
        return this.http.get('api/races/' + raceId + '/racers/' + racerId)
            .map(function (res) { return res.json(); });
    };
    // update race in server DB
    RacerService.prototype.updateRacer = function (racer, raceId, racerId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put(('api/races/' + raceId + '/racers/' + racerId), racer, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // delete race from server DB
    RacerService.prototype.deleteRacer = function (raceId, racerId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(('api/races/' + raceId + '/racers/' + racerId), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // load token from local storage
    RacerService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    return RacerService;
}());
RacerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], RacerService);

var _a;
//# sourceMappingURL=racer.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    // check for empty input 
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // check for empty input
    ValidateService.prototype.validateRace = function (race) {
        if (race.name == undefined || race.date == undefined || race.location == undefined || race.image == undefined || race.description == undefined || race.cost == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // validate email 
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/assets/images/toBottom.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "toBottom.f1d7f95345081ba2fa30.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/toLeft.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "toLeft.8f2f1325c362ba8e24f8.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/toRight.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "toRight.07c7b2f59e55c240b4eb.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/toTop.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "toTop.37e1678d00e8ee58aad2.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map