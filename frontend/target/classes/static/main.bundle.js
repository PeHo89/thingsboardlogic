webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_watcher__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_rest_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Component for showing overview
 */
var OverviewComponent = (function () {
    function OverviewComponent(restService, router) {
        this.restService = restService;
        this.router = router;
        this.watcherList = [];
        this.watcherForModal = new __WEBPACK_IMPORTED_MODULE_2__model_watcher__["a" /* Watcher */]();
        this.watcherIdToDelete = "";
        this.watcherNameToDelete = "";
    }
    OverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.isLoggedIn().then(function (result) {
            if (result != true) {
                _this.router.navigate(["login"]);
            }
        });
        this.loadWatcherList();
    };
    OverviewComponent.prototype.loadWatcherList = function () {
        var _this = this;
        this.restService.loadWatcherList().then(function (result) {
            _this.watcherList = result;
        });
    };
    OverviewComponent.prototype.startWatcher = function (watcherId) {
        var _this = this;
        this.restService.startWatcher(watcherId).then(function (result) {
            if (result == true) {
                _this.loadWatcherList();
            }
            else {
                _this.router.navigate(["error"]);
            }
        });
    };
    OverviewComponent.prototype.stopWatcher = function (watcherId) {
        var _this = this;
        this.restService.stopWatcher(watcherId).then(function (result) {
            if (result == true) {
                _this.loadWatcherList();
            }
            else {
                _this.router.navigate(["error"]);
            }
        });
    };
    OverviewComponent.prototype.prepareDelete = function (watcherid, watchername) {
        this.watcherIdToDelete = watcherid;
        this.watcherNameToDelete = watchername;
    };
    OverviewComponent.prototype.deleteWatcher = function () {
        var _this = this;
        this.restService.deleteWatcher(this.watcherIdToDelete).then(function (result) {
            if (result == true) {
                _this.loadWatcherList();
            }
            else {
                _this.router.navigate(["error"]);
            }
        });
    };
    OverviewComponent.prototype.loadWatcherForModal = function (watcherId) {
        for (var _i = 0, _a = this.watcherList; _i < _a.length; _i++) {
            var watcher = _a[_i];
            if (watcher.watcherId == watcherId) {
                this.watcherForModal = watcher;
                break;
            }
        }
    };
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'overview',
        template: __webpack_require__(171),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_rest_service__["a" /* RestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], OverviewComponent);

var _a, _b;
//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ 101:
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

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "footer {\r\n  text-align: center;\r\n  padding: 12px;\r\n  clear: both;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<my-header></my-header>\r\n<div class=\"container\">\r\n  <form (ngSubmit)=\"loadTelemetryKeys()\" #form=\"ngForm\" class=\"col-md-6 col-md-offset-3\" >\r\n    <div class=\"form-group {{sourcedeviceidVaild ? '' : 'has-error has-feedback'}}\">\r\n      <label for=\"inputsourcedeviceid\">Device id of source device</label>\r\n      <input id=\"inputsourcedeviceid\" name=\"sourcedeviceid\" (change)=\"resetSourcedeviceidVaild()\" (keyup)=\"resetSourcedeviceidVaild()\" [(ngModel)]=\"sourcedeviceid\" type=\"text\" class=\"form-control\" placeholder=\"e.g.: c2ac6f70-f8f7-11e6-adaf-bba93e912143\" required=\"required\" />\r\n      <span *ngIf=\"!sourcedeviceidVaild\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\r\n    </div>\r\n    <button class=\"btn btn-primary\" type=\"submit\">Load</button>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"container\" *ngIf=\"sourcetelemetrykeys.length != 0\">\r\n  <br/>\r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n    <label>Available telemetry keys of device: {{sourcedeviceid}}</label>\r\n    <ul class=\"list-group\">\r\n      <li *ngFor=\"let telemetrykey of sourcetelemetrykeys\" class=\"list-group-item\">{{telemetrykey}}</li>\r\n    </ul>\r\n    <hr />\r\n  </div>\r\n\r\n  <form (ngSubmit)=\"saveWatcher()\" #form=\"ngForm\" class=\"col-md-6 col-md-offset-3\">\r\n    <div class=\"form-group {{booleanlogicValid ? '' : 'has-error has-feedback'}}\">\r\n      <label for=\"booleanlogic\">Boolean logic</label>\r\n      <input type=\"text\" (change)=\"resetBooleanlogicVaild()\" (keyup)=\"resetBooleanlogicVaild()\" name=\"booleanlogic\" [(ngModel)]=\"booleanlogic\" class=\"form-control\" id=\"booleanLogic\" placeholder=\"e.g.: light > 50 &amp;&amp; motion == 1\" required=\"required\" />\r\n      <span *ngIf=\"!booleanlogicValid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\r\n    </div>\r\n    <div class=\"form-group {{timegranularityValid ? '' : 'has-error has-feedback'}}\">\r\n      <label for=\"timegranularity\">Time granularity in ms</label>\r\n      <input type=\"number\" (change)=\"resetTimegranularityVaild()\" (keyup)=\"resetTimegranularityVaild()\" name=\"timegranularity\" [(ngModel)]=\"timegranularity\" class=\"form-control\" id=\"timegranularity\" min=0 placeholder=\"e.g.: 50\" required=\"required\" />\r\n      <span *ngIf=\"!timegranularityValid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\r\n    </div>\r\n    <div class=\"form-group {{targetdeviceidValid ? '' : 'has-error has-feedback'}}\">\r\n      <label for=\"inputtargetdeviceid\">Device id of target device</label>\r\n      <input type=\"text\" (change)=\"resetTargetdeviceidVaild()\" (keyup)=\"resetTargetdeviceidVaild()\" name=\"targetdeviceid\" [(ngModel)]=\"targetdeviceid\" class=\"form-control\" id=\"inputtargetdeviceid\" placeholder=\"e.g.: d67b9640-f9d6-11e6-a6ba-7b5e529d1e1e\" required=\"required\" />\r\n      <span *ngIf=\"!targetdeviceidValid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\r\n    </div>\r\n    <div class=\"form-group {{messagetrueValid ? '' : 'has-error has-feedback'}}\">\r\n      <label for=\"messagetrue\">Message for true evaluation of boolean logic</label>\r\n      <input type=\"text\" (change)=\"resetMessagetrueVaild()\" (keyup)=\"resetMessagetrueVaild()\" name=\"messagetrue\" [(ngModel)]=\"messagetrue\" class=\"form-control\" id=\"messagetrue\" placeholder='e.g.: {\"method\":\"setGpioStatus\",\"params\":{\"pin\":12,\"enabled\":true}}' required=\"required\" />\r\n      <span *ngIf=\"!messagetrueValid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\r\n    </div>\r\n    <div class=\"form-group {{messagefalseValid ? '' : 'has-error has-feedback'}}\">\r\n      <label for=\"messagefalse\">Message for false evaluation of boolean logic</label>\r\n      <input type=\"text\" (change)=\"resetMessagefalseVaild()\" (keyup)=\"resetMessagefalseVaild()\" name=\"messagefalse\" [(ngModel)]=\"messagefalse\" class=\"form-control\" id=\"messagefalse\" placeholder='e.g.: {\"method\":\"setGpioStatus\",\"params\":{\"pin\":12,\"enabled\":false}}' required=\"required\" />\r\n      <span *ngIf=\"!messagefalseValid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\r\n    </div>\r\n    <div class=\"form-group {{watchernameValid ? '' : 'has-error has-feedback'}}\">\r\n      <label for=\"watchername\">Name of watcher</label>\r\n      <input type=\"text\" (change)=\"resetWatchernameVaild()\" (keyup)=\"resetWatchernameVaild()\" name=\"watchername\" [(ngModel)]=\"watchername\" class=\"form-control\" id=\"watchername\" placeholder=\"e.g.: Motion detection\" required=\"required\" />\r\n      <span *ngIf=\"!watchernameValid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\">Start Watcher</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<my-footer></my-footer>\n"

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<my-header></my-header>\r\n<div class=\"container\">\r\n  <form (ngSubmit)=\"editWatcher()\" #form=\"ngForm\" class=\"col-md-6 col-md-offset-3\">\r\n    <div class=\"form-group\">\r\n      <label for=\"inputsourcedeviceid\">Device id of source device</label>\r\n      <p id=\"inputsourcedeviceid\">{{watcherToEdit.sourceDeviceId}}</p>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"sourcetelemetrykeys\">Available telemetry keys of source device</label>\r\n      <p id=\"sourcetelemetrykeys\">{{watcherToEdit.sourceTelemetryKeys}}</p>\r\n    </div>\r\n    <div class=\"form-group {{booleanlogicValid ? '' : 'has-error has-feedback'}}\">\r\n      <label for=\"booleanlogic\">Boolean logic</label>\r\n      <input type=\"text\" (change)=\"resetBooleanlogicValid()\" (keyup)=\"resetBooleanlogicValid()\" name=\"booleanlogic\" [(ngModel)]=\"watcherToEdit.booleanLogic\" class=\"form-control\" id=\"booleanLogic\" placeholder=\"e.g.: light > 50 &amp;&amp; motion == 1\" required=\"required\" />\r\n      <span *ngIf=\"!booleanlogicValid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\r\n    </div>\r\n    <div class=\"form-group {{timegranularityValid ? '' : 'has-error has-feedback'}}\">\r\n      <label for=\"timegranularity\">Time granularity in ms</label>\r\n      <input type=\"number\" (change)=\"resetTimegranularityValid()\" (keyup)=\"resetTimegranularityValid()\" name=\"timegranularity\" [(ngModel)]=\"watcherToEdit.timeGranularity\" class=\"form-control\" id=\"timegranularity\" placeholder=\"e.g.: 50\" required=\"required\" />\r\n      <span *ngIf=\"!timegranularityValid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputtargetdeviceid\">Device id of target device</label>\r\n      <p id=\"inputtargetdeviceid\">{{watcherToEdit.targetDeviceId}}</p>\r\n    </div>\r\n    <div class=\"form-group {{messagetrueValid ? '' : 'has-error has-feedback'}}\">\r\n      <label for=\"messagetrue\">Message for true evaluation of boolean logic</label>\r\n      <input type=\"text\" (change)=\"resetMessagetrueValid()\" (keyup)=\"resetMessagetrueValid()\" name=\"messagetrue\" [(ngModel)]=\"watcherToEdit.messageTrue\" class=\"form-control\" id=\"messagetrue\" placeholder='e.g.: {\"method\":\"setGpioStatus\",\"params\":{\"pin\":12,\"enabled\":true}}' required=\"required\" />\r\n      <span *ngIf=\"!messagetrueValid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\r\n    </div>\r\n    <div class=\"form-group {{messagefalseValid ? '' : 'has-error has-feedback'}}\">\r\n      <label for=\"messagefalse\">Message for false evaluation of boolean logic</label>\r\n      <input type=\"text\" (change)=\"resetMessagefalseValid()\" (keyup)=\"resetMessagefalseValid()\" name=\"messagefalse\" [(ngModel)]=\"watcherToEdit.messageFalse\" class=\"form-control\" id=\"messagefalse\" placeholder='e.g.: {\"method\":\"setGpioStatus\",\"params\":{\"pin\":12,\"enabled\":false}}' required=\"required\" />\r\n      <span *ngIf=\"!messagefalseValid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\r\n    </div>\r\n    <div class=\"form-group {{watchernameValid ? '' : 'has-error has-feedback'}}\">\r\n      <label for=\"watchername\">Name of watcher</label>\r\n      <input type=\"text\" (change)=\"resetWatchernameValid()\" (keyup)=\"resetWatchernameValid()\" name=\"watchername\" [(ngModel)]=\"watcherToEdit.watcherName\" class=\"form-control\" id=\"watchername\" placeholder=\"e.g.: Motion detection\" required=\"required\" />\r\n      <span *ngIf=\"!watchernameValid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<my-header></my-header>\r\n<div class=\"container col-md-4 col-md-offset-4\">\r\n  <div class=\"page-header\">\r\n    <h2>Error</h2>\r\n    <div class=\"alert alert-danger\" role=\"alert\"><b>Oh snap!</b> Something went wrong. Please try again!</div>\r\n  </div>\r\n  <!--<nav>\r\n    <ul class=\"pager\">\r\n      <li class=\"previous\"><a class=\"btn\" (click)=\"backClicked()\"><span aria-hidden=\"true\">&larr;</span> Back</a></li>\r\n    </ul>\r\n  </nav>-->\r\n</div>\r\n"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  © 2017 Peter Holzer (e1425797)\r\n</footer>\r\n"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" routerLink=\"/login\">Thingsboardlogic</a>\r\n    </div>\r\n      <ul *ngIf=\"!isloggedin\" class=\"nav navbar-nav navbar-right\">\r\n        <li><a routerLink=\"/login\" href=\"#\">Login</a></li>\r\n      </ul>\r\n      <ul *ngIf=\"isloggedin\" class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{emailaddress}} <span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a href=\"#\" (click)=\"logout()\">Logout</a></li>\r\n            <li role=\"presentation\" class=\"divider\"></li>\r\n            <li><a href=\"#\" data-toggle=\"modal\" data-target=\"#deleteAccountModal\">Delete account</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n</nav>\r\n\r\n<div id=\"deleteAccountModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Delete account</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you, want to delete your account?</p>\r\n        <small>This action will delete your account at Thingsboardlogic, stop all<br/>\r\n          running watcher and delete all saved watcher. This action can't be undone.</small>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button (click)=\"deleteAccount()\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Delete account</button>\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Service for calling the REST service of Thingsboardlogic
 */
var RestService = (function () {
    function RestService(http, router) {
        this.http = http;
        this.router = router;
        this.loginUrl = "http://localhost:8090/login";
        this.logoutUrl = "http://localhost:8090/logout";
        this.deleteAccountUrl = "http://localhost:8090/deleteAccount";
        this.isLoggedInUrl = "http://localhost:8090/isLoggedIn";
        this.loadTelemetryKeysUrl = "http://localhost:8090/loadTelemetryKeys";
        this.saveWatcherUrl = "http://localhost:8090/saveWatcher";
        this.loadWatcherUrl = "http://localhost:8090/loadWatcher";
        this.editWatcherUrl = "http://localhost:8090/editWatcher";
        this.getWatcherListUrl = "http://localhost:8090/getWatcherList";
        this.startWatcherUrl = "http://localhost:8090/startWatcher";
        this.stopWatcherUrl = "http://localhost:8090/stopWatcher";
        this.deleteWatcherUrl = "http://localhost:8090/deleteWatcher";
        this.email = "";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    RestService.prototype.login = function (email, password, host, port) {
        var _this = this;
        var formData = "?email=" + email + "&password=" + password + "&host=" + host + "&port=" + port;
        return this.http.get(this.loginUrl + formData).toPromise().then(function (data) {
            if (data.text() == "loggedIn") {
                _this.email = email;
                return true;
            }
            else {
                return false;
            }
        }, function (error) {
            _this.router.navigate(["error"]);
        }).catch(this.handleError);
    };
    RestService.prototype.logout = function () {
        var _this = this;
        var formData = "?email=" + this.email;
        return this.http.get(this.logoutUrl + formData).toPromise().then(function (data) {
            if (data.text() == "loggedOut") {
                _this.email = "";
                return true;
            }
            else {
                return false;
            }
        }, function (error) {
            _this.router.navigate(["error"]);
        }).catch(this.handleError);
    };
    RestService.prototype.deleteAccount = function () {
        var _this = this;
        var formData = "?email=" + this.email;
        return this.http.delete(this.deleteAccountUrl + formData).toPromise().then(function (data) {
            if (data.text() == "accountDeleted") {
                _this.email = "";
                return true;
            }
            else {
                return false;
            }
        }, function (error) {
            _this.router.navigate(["error"]);
        }).catch(this.handleError);
    };
    RestService.prototype.isLoggedIn = function () {
        var _this = this;
        var formData = "?email=" + this.email;
        return this.http.get(this.isLoggedInUrl + formData).toPromise().then(function (data) {
            return data.text() == "true" && _this.email != "";
        }, function (error) {
            _this.router.navigate(["error"]);
        }).catch(this.handleError);
    };
    RestService.prototype.loadTelemetryKeys = function (sourcedeviceid) {
        var _this = this;
        var formData = "?email=" + this.email + "&deviceid=" + sourcedeviceid;
        return this.http.get(this.loadTelemetryKeysUrl + formData).toPromise().then(function (data) {
            var sourcetelemetrykeys = data.text().substring(1, data.text().length - 1).split(",");
            for (var i = 0; i < sourcetelemetrykeys.length; i++) {
                sourcetelemetrykeys[i] = sourcetelemetrykeys[i].substring(1, sourcetelemetrykeys[i].length - 1);
            }
            return sourcetelemetrykeys;
        }, function (error) {
            _this.router.navigate(["error"]);
        }).catch(this.handleError);
    };
    RestService.prototype.saveWatcher = function (sourcedeviceid, sourcetelemetrykeys, booleanlogic, timegranularity, targetdeviceid, messagetrue, messagefalse, watchername) {
        var _this = this;
        booleanlogic = booleanlogic.replace(/&/g, "and");
        var body = JSON.stringify({ 'email': this.email, 'sourcedeviceid': sourcedeviceid, 'sourcetelemetrykeys': sourcetelemetrykeys.toString(), 'booleanlogic': booleanlogic, 'timegranularity': timegranularity, 'targetdeviceid': targetdeviceid, 'messagetrue': messagetrue, 'messagefalse': messagefalse, 'watchername': watchername });
        return this.http.post(this.saveWatcherUrl, body, this.options).toPromise().then(function (data) {
            return data.text() == "watcherSaved";
        }, function (error) {
            _this.router.navigate(["error"]);
        }).catch(this.handleError);
    };
    RestService.prototype.loadWatcher = function (urlid) {
        var _this = this;
        var formData = "?email=" + this.email + "&watcherid=" + urlid;
        return this.http.get(this.loadWatcherUrl + formData).toPromise().then(function (data) {
            return JSON.parse(data.text());
        }, function (error) {
            _this.router.navigate(["error"]);
        }).catch(this.handleError);
    };
    RestService.prototype.editWatcher = function (watcherid, booleanlogic, timegranularity, messagetrue, messagefalse, watchername) {
        var _this = this;
        booleanlogic = booleanlogic.replace(/&/g, "and");
        var body = JSON.stringify({ 'email': this.email, 'watcherid': watcherid, 'booleanlogic': booleanlogic, 'timegranularity': timegranularity, 'messagetrue': messagetrue, 'messagefalse': messagefalse, 'watchername': watchername });
        return this.http.put(this.editWatcherUrl, body, this.options).toPromise().then(function (data) {
            return data.text() == "watcherEdited";
        }, function (error) {
            _this.router.navigate(["error"]);
        }).catch(this.handleError);
    };
    RestService.prototype.loadWatcherList = function () {
        var _this = this;
        var formData = "?email=" + this.email;
        return this.http.get(this.getWatcherListUrl + formData).toPromise().then(function (data) {
            return JSON.parse(data.text());
        }, function (error) {
            _this.router.navigate(["error"]);
        }).catch(this.handleError);
    };
    RestService.prototype.startWatcher = function (watcherId) {
        var _this = this;
        var body = JSON.stringify({ 'email': this.email, 'watcherid': watcherId });
        return this.http.put(this.startWatcherUrl, body, this.options).toPromise().then(function (data) {
            return data.text() == "watcherStarted";
        }, function (error) {
            _this.router.navigate(["error"]);
        }).catch(this.handleError);
    };
    RestService.prototype.stopWatcher = function (watcherId) {
        var _this = this;
        var body = JSON.stringify({ 'email': this.email, 'watcherid': watcherId });
        return this.http.put(this.stopWatcherUrl, body, this.options).toPromise().then(function (data) {
            return data.text() == "watcherStopped";
        }, function (error) {
            _this.router.navigate(["error"]);
        }).catch(this.handleError);
    };
    RestService.prototype.deleteWatcher = function (watcherIdToDelete) {
        var _this = this;
        var formData = "?email=" + this.email + "&watcherid=" + watcherIdToDelete;
        return this.http.delete(this.deleteWatcherUrl + formData).toPromise().then(function (data) {
            return data.text() == "watcherDeleted";
        }, function (error) {
            _this.router.navigate(["error"]);
        }).catch(this.handleError);
    };
    RestService.prototype.getEmail = function () {
        return Promise.resolve(this.email);
    };
    RestService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return RestService;
}());
RestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RestService);

var _a, _b;
//# sourceMappingURL=rest.service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<my-header></my-header>\r\n<div class=\"container\">\r\n  <div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n      <h1>Thingsboardlogic</h1>\r\n      <p>This is an application for adding more functionality to Thingsboard.io!</p>\r\n      <p><small>E.g. turn on GPIO 18 on Raspberry Pi 2, if temperature sensor from Latte Panda is more than 50 degree centrigrade</small></p>\r\n      <p>Try it!</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <form (ngSubmit)=\"login()\" #form=\"ngForm\" class=\"form col-md-6 col-md-offset-3\">\r\n      <div class=\"form-group {{emailValid ? '' : 'has-error has-feedback'}}\">\r\n        <label for=\"inputEmail\">Email</label>\r\n        <input type=\"email\" (change)=\"resetEmailValid()\" (keyup)=\"resetEmailValid()\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"e.g.: max.mustermann@internet.com\" required=\"required\" />\r\n        <span *ngIf=\"!emailValid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\r\n        <small class=\"form-text text-muted\">The user at the Thingsboard server.</small>\r\n      </div>\r\n\r\n      <div class=\"form-group {{passwordValid ? '' : 'has-error has-feedback'}}\">\r\n        <label for=\"inputPassword\">Password</label>\r\n        <input type=\"password\" (change)=\"resetPasswordValid()\" (keyup)=\"resetPasswordValid()\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"e.g.: 123456\" required=\"required\" />\r\n        <span *ngIf=\"!passwordValid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\r\n        <small class=\"form-text text-muted\">The password for the user at the Thingsboard server.</small>\r\n      </div>\r\n\r\n      <div class=\"form-group {{hostValid ? '' : 'has-error has-feedback'}}\">\r\n        <label for=\"inputHost\">Host</label>\r\n        <input type=\"text\" (change)=\"resetHostValid()\" (keyup)=\"resetHostValid()\" name=\"host\" [(ngModel)]=\"host\" class=\"form-control\" id=\"inputHost\" placeholder=\"e.g.: localhost\" required=\"required\" />\r\n        <span *ngIf=\"!hostValid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\r\n        <small class=\"form-text text-muted\">The address of the Thingsboard server.</small>\r\n      </div>\r\n\r\n      <div class=\"form-group {{portValid ? '' : 'has-error has-feedback'}}\">\r\n        <label for=\"inputPort\">Port</label>\r\n        <input type=\"number\" (change)=\"resetPortValid()\" (keyup)=\"resetPortValid()\" name=\"port\" [(ngModel)]=\"port\" min=0 max=\"65535\" class=\"form-control\" id=\"inputPort\" placeholder=\"e.g.: 8080\" required=\"required\" />\r\n        <span *ngIf=\"!portValid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\r\n        <small class=\"form-text text-muted\">The port of the Thingsboard server.</small>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\">Login</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<my-header></my-header>\r\n<div class=\"container\">\r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n    <label>Available Watcher</label>\r\n    <p *ngIf=\"watcherList.length == 0\">There are currently no watcher available.</p>\r\n    <div *ngIf=\"watcherList.length != 0\">\r\n      <div class=\"list-group\" *ngFor=\"let watcher of watcherList\">\r\n          <a (click)=\"loadWatcherForModal(watcher.watcherId)\" data-toggle=\"modal\" data-target=\"#watcherModal\" class=\"list-group-item {{watcher.active ? 'list-group-item-success' : 'list-group-item-danger'}}\"><span class=\"badge\">{{watcher.active ? 'active' : 'not active'}}</span>{{watcher.watcherName}}</a><br/><button (click)=\"startWatcher(watcher.watcherId)\" [disabled]=\"watcher.active\" class=\"btn btn-primary\">Start</button> <button (click)=\"stopWatcher(watcher.watcherId)\" [disabled]=\"!watcher.active\" class=\"btn btn-primary\">Stop</button> <button routerLink=\"/edit/{{watcher.watcherId}}\" class=\"btn btn-primary\">Edit</button> <button data-toggle=\"modal\" data-target=\"#deleteWatcherModal\" (click)=\"prepareDelete(watcher.watcherId, watcher.watcherName)\" class=\"btn btn-primary\">Delete</button>\r\n      </div>\r\n    </div>\r\n    <hr />\r\n    <button routerLink=\"/add\" class=\"btn btn-primary\">Add</button>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"watcherModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">{{watcherForModal.watcherName}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p><b>Source device id</b><br>{{watcherForModal.sourceDeviceId}}</p>\r\n        <p><b>Source telemetry keys</b><br>{{watcherForModal.sourceTelemetryKeys}}</p>\r\n        <p><b>Boolean logic</b><br>{{watcherForModal.booleanLogic}}</p>\r\n        <p><b>Time granularity in ms</b><br>{{watcherForModal.timeGranularity}}</p>\r\n        <p><b>Target device id</b><br>{{watcherForModal.targetDeviceId}}</p>\r\n        <p><b>Message for true evaluation of boolean logic</b><br>{{watcherForModal.messageTrue}}</p>\r\n        <p><b>Message for false evaluation of boolean logic</b><br>{{watcherForModal.messageFalse}}</p>\r\n        <p><b>State</b><br>{{watcherForModal.active ? 'active' : 'not active'}}</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"deleteWatcherModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button (click)=\"prepareDelete('', '')\" type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Delete watcher</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete the watcher <b>{{watcherNameToDelete}}</b>?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button (click)=\"deleteWatcher()\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Delete</button>\r\n        <button (click)=\"prepareDelete('', '')\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Watcher; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Watcher for Thingsboardlogic
 */
var Watcher = (function () {
    function Watcher() {
        this.watcherId = "";
        this.watcherName = "";
        this.booleanLogic = "";
        this.timeGranularity = -1;
        this.sourceDeviceId = "";
        this.sourceTelemetryKeys = "";
        this.targetDeviceId = "";
        this.messageTrue = "";
        this.messageFalse = "";
        this.active = false;
    }
    return Watcher;
}());
Watcher = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], Watcher);

//# sourceMappingURL=watcher.js.map

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 85;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(101);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_app_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_overview_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_error_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_add_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_my_footer_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_edit_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_rest_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_my_header_component__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_6__components_login_component__["a" /* LoginComponent */]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'overview',
        component: __WEBPACK_IMPORTED_MODULE_7__components_overview_component__["a" /* OverviewComponent */]
    },
    {
        path: 'add',
        component: __WEBPACK_IMPORTED_MODULE_9__components_add_component__["a" /* AddComponent */]
    },
    {
        path: 'edit/:watcherid',
        component: __WEBPACK_IMPORTED_MODULE_11__components_edit_component__["a" /* EditComponent */]
    },
    {
        path: 'error',
        component: __WEBPACK_IMPORTED_MODULE_8__components_error_component__["a" /* ErrorComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__components_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_overview_component__["a" /* OverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_add_component__["a" /* AddComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_my_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_my_header_component__["a" /* HeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__services_rest_service__["a" /* RestService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_5__components_app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_rest_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component for adding a Watcher
 */
var AddComponent = (function () {
    function AddComponent(restService, router) {
        this.restService = restService;
        this.router = router;
        this.sourcedeviceid = "";
        this.booleanlogic = "";
        this.timegranularity = null;
        this.targetdeviceid = "";
        this.messagetrue = "";
        this.messagefalse = "";
        this.watchername = "";
        this.sourcetelemetrykeys = [];
        this.sourcedeviceidVaild = true;
        this.booleanlogicValid = true;
        this.timegranularityValid = true;
        this.targetdeviceidValid = true;
        this.messagetrueValid = true;
        this.messagefalseValid = true;
        this.watchernameValid = true;
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.isLoggedIn().then(function (result) {
            if (result != true) {
                _this.router.navigate(["login"]);
            }
        });
    };
    AddComponent.prototype.loadTelemetryKeys = function () {
        var _this = this;
        this.restService.isLoggedIn().then(function (result) {
            if (result != true) {
                _this.router.navigate(["login"]);
            }
        });
        if (this.validateSourcedeviceidInput()) {
            this.restService.loadTelemetryKeys(this.sourcedeviceid).then(function (result) {
                _this.sourcetelemetrykeys = result;
            });
        }
    };
    AddComponent.prototype.saveWatcher = function () {
        var _this = this;
        if (this.validateWatcherDataInput()) {
            this.restService.saveWatcher(this.sourcedeviceid, this.sourcetelemetrykeys, this.booleanlogic, this.timegranularity, this.targetdeviceid, this.messagetrue, this.messagefalse, this.watchername).then(function (result) {
                if (result == true) {
                    _this.router.navigate(["overview"]);
                }
                else {
                    _this.router.navigate(["error"]);
                }
            });
        }
    };
    AddComponent.prototype.validateSourcedeviceidInput = function () {
        this.validateSourcedeviceid();
        return this.sourcedeviceidVaild;
    };
    AddComponent.prototype.validateWatcherDataInput = function () {
        this.validateBooleanlogic();
        this.validateTimegranularity();
        this.validateTargetdeviceid();
        this.validateMessagetrue();
        this.validateMessagefalse();
        this.validateWatchername();
        return this.booleanlogicValid && this.timegranularityValid && this.targetdeviceidValid && this.messagetrueValid && this.messagefalseValid && this.watchernameValid;
    };
    AddComponent.prototype.validateSourcedeviceid = function () {
        this.sourcedeviceidVaild = this.sourcedeviceid.length > 0;
    };
    AddComponent.prototype.validateBooleanlogic = function () {
        this.booleanlogicValid = this.booleanlogic.length > 0;
    };
    AddComponent.prototype.validateTimegranularity = function () {
        this.timegranularityValid = Number(this.timegranularity) > 0;
    };
    AddComponent.prototype.validateTargetdeviceid = function () {
        this.targetdeviceidValid = this.targetdeviceid.length > 0;
    };
    AddComponent.prototype.validateMessagetrue = function () {
        this.messagetrueValid = this.messagetrue.length > 0;
    };
    AddComponent.prototype.validateMessagefalse = function () {
        this.messagefalseValid = this.messagefalse.length > 0;
    };
    AddComponent.prototype.validateWatchername = function () {
        this.watchernameValid = this.watchername.length > 0;
    };
    AddComponent.prototype.resetSourcedeviceidVaild = function () {
        this.sourcedeviceidVaild = true;
    };
    AddComponent.prototype.resetBooleanlogicVaild = function () {
        this.booleanlogicValid = true;
    };
    AddComponent.prototype.resetTimegranularityVaild = function () {
        this.timegranularityValid = true;
    };
    AddComponent.prototype.resetTargetdeviceidVaild = function () {
        this.targetdeviceidValid = true;
    };
    AddComponent.prototype.resetMessagetrueVaild = function () {
        this.messagetrueValid = true;
    };
    AddComponent.prototype.resetMessagefalseVaild = function () {
        this.messagefalseValid = true;
    };
    AddComponent.prototype.resetWatchernameVaild = function () {
        this.watchernameValid = true;
    };
    return AddComponent;
}());
AddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'add',
        template: __webpack_require__(164),
        styles: [__webpack_require__(155)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_rest_service__["a" /* RestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AddComponent);

var _a, _b;
//# sourceMappingURL=add.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app',
        template: __webpack_require__(165),
        styles: [__webpack_require__(156)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_watcher__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_rest_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Component for updating a Watcher
 */
var EditComponent = (function () {
    function EditComponent(restService, router, route) {
        this.restService = restService;
        this.router = router;
        this.route = route;
        this.watcherToEdit = new __WEBPACK_IMPORTED_MODULE_2__model_watcher__["a" /* Watcher */]();
        this.booleanlogicValid = true;
        this.timegranularityValid = true;
        this.messagetrueValid = true;
        this.messagefalseValid = true;
        this.watchernameValid = true;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.isLoggedIn().then(function (result) {
            if (result != true) {
                _this.router.navigate(["login"]);
            }
        });
        this.route.params.subscribe(function (params) {
            _this.urlid = params['watcherid'];
        });
        this.loadWatcher();
    };
    EditComponent.prototype.loadWatcher = function () {
        var _this = this;
        this.restService.loadWatcher(this.urlid).then(function (result) {
            _this.watcherToEdit = result;
        });
    };
    EditComponent.prototype.editWatcher = function () {
        var _this = this;
        if (this.validateWatcherDataInput()) {
            this.restService.editWatcher(this.watcherToEdit.watcherId, this.watcherToEdit.booleanLogic, this.watcherToEdit.timeGranularity, this.watcherToEdit.messageTrue, this.watcherToEdit.messageFalse, this.watcherToEdit.watcherName).then(function (result) {
                if (result == true) {
                    _this.router.navigate(["overview"]);
                }
                else {
                    _this.router.navigate(["error"]);
                }
            });
        }
    };
    EditComponent.prototype.validateWatcherDataInput = function () {
        this.validateBooleanlogic();
        this.validateTimegranularity();
        this.validateMessagetrue();
        this.validateMessagefalse();
        this.validateWatchername();
        return this.booleanlogicValid && this.timegranularityValid && this.messagetrueValid && this.messagefalseValid && this.watchernameValid;
    };
    EditComponent.prototype.validateBooleanlogic = function () {
        this.booleanlogicValid = this.watcherToEdit.booleanLogic.length > 0;
    };
    EditComponent.prototype.validateTimegranularity = function () {
        this.timegranularityValid = Number(this.watcherToEdit.timeGranularity) > 0;
    };
    EditComponent.prototype.validateMessagetrue = function () {
        this.messagetrueValid = this.watcherToEdit.messageTrue.length > 0;
    };
    EditComponent.prototype.validateMessagefalse = function () {
        this.messagefalseValid = this.watcherToEdit.messageFalse.length > 0;
    };
    EditComponent.prototype.validateWatchername = function () {
        this.watchernameValid = this.watcherToEdit.watcherName.length > 0;
    };
    EditComponent.prototype.resetBooleanlogicValid = function () {
        this.booleanlogicValid = true;
    };
    EditComponent.prototype.resetTimegranularityValid = function () {
        this.timegranularityValid = true;
    };
    EditComponent.prototype.resetMessagetrueValid = function () {
        this.messagetrueValid = true;
    };
    EditComponent.prototype.resetMessagefalseValid = function () {
        this.messagefalseValid = true;
    };
    EditComponent.prototype.resetWatchernameValid = function () {
        this.watchernameValid = true;
    };
    return EditComponent;
}());
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'edit',
        template: __webpack_require__(166),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_rest_service__["a" /* RestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], EditComponent);

var _a, _b, _c;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component for showing error
 */
var ErrorComponent = (function () {
    function ErrorComponent(location) {
        this.location = location;
    }
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'error',
        template: __webpack_require__(167),
        styles: [__webpack_require__(158)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */]) === "function" && _a || Object])
], ErrorComponent);

var _a;
//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_rest_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component for login at Thingsboardlogic
 */
var LoginComponent = (function () {
    function LoginComponent(restService, router) {
        this.restService = restService;
        this.router = router;
        this.email = "";
        this.password = "";
        this.host = "";
        this.port = "";
        this.emailValid = true;
        this.passwordValid = true;
        this.hostValid = true;
        this.portValid = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.isLoggedIn().then(function (result) {
            if (result == true) {
                _this.router.navigate(["overview"]);
            }
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.validateInput()) {
            this.restService.login(this.email, this.password, this.host, this.port).then(function (result) {
                if (result == true) {
                    _this.router.navigate(["overview"]);
                }
                else {
                    _this.router.navigate(["error"]);
                }
            });
        }
    };
    LoginComponent.prototype.validateInput = function () {
        this.validateEmail();
        this.validatePassword();
        this.validateHost();
        this.validatePort();
        return this.emailValid && this.passwordValid && this.hostValid && this.portValid;
    };
    LoginComponent.prototype.validateEmail = function () {
        this.emailValid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(this.email);
    };
    LoginComponent.prototype.validatePassword = function () {
        this.passwordValid = this.password.length > 0;
    };
    LoginComponent.prototype.validateHost = function () {
        var pattern = new RegExp('^(https?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        this.hostValid = pattern.test(this.host);
    };
    LoginComponent.prototype.validatePort = function () {
        this.portValid = Number(this.port) > 0 && Number(this.port) < 65536;
    };
    LoginComponent.prototype.resetEmailValid = function () {
        this.emailValid = true;
    };
    LoginComponent.prototype.resetPasswordValid = function () {
        this.passwordValid = true;
    };
    LoginComponent.prototype.resetHostValid = function () {
        this.hostValid = true;
    };
    LoginComponent.prototype.resetPortValid = function () {
        this.portValid = true;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'login',
        template: __webpack_require__(170),
        styles: [__webpack_require__(161)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_rest_service__["a" /* RestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Component for showing footer
 */
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'my-footer',
        template: __webpack_require__(168),
        styles: [__webpack_require__(159)]
    })
], FooterComponent);

//# sourceMappingURL=my-footer.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_rest_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component for showing header
 */
var HeaderComponent = (function () {
    function HeaderComponent(restService, router) {
        this.restService = restService;
        this.router = router;
        this.isloggedin = false;
        this.emailaddress = "";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.isLoggedIn().then(function (result) {
            if (result == true) {
                _this.isloggedin = true;
                _this.restService.getEmail().then(function (result) {
                    _this.emailaddress = result;
                });
            }
            else {
                _this.isloggedin = false;
                _this.emailaddress = "";
            }
        });
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.restService.logout().then(function (result) {
            if (result == true) {
                _this.router.navigate(["login"]);
            }
            else {
                _this.router.navigate(["error"]);
            }
        });
    };
    HeaderComponent.prototype.deleteAccount = function () {
        var _this = this;
        this.restService.deleteAccount().then(function (result) {
            if (result == true) {
                _this.router.navigate(["login"]);
            }
            else {
                _this.router.navigate(["error"]);
            }
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'my-header',
        template: __webpack_require__(169),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_rest_service__["a" /* RestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=my-header.component.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.bundle.js.map