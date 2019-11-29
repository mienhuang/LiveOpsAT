var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard-container\">\n    <mat-toolbar>\n        <mat-toolbar-row>\n            <fa-icon [icon]=\"faHome\" routerLink=\"\"></fa-icon>\n        </mat-toolbar-row>\n    </mat-toolbar>\n    <div class=\"dashboard-inner\">\n        <router-outlet></router-outlet>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/front-log/front-log.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/front-log/front-log.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fe-log\">\n    <div class=\"drop-area\" [ngClass]=\"{'drop-over': dropOver}\" (drop)=\"onDrop($event)\" (dragover)=\"onDragOver($event)\">\n        <button mat-button (click)=\"triggerFileSelect()\">Choose File</button>\n        <input class=\"files\" #file type=\"file\" title=\"''\" (change)=\"handleFileInput($event)\">\n        <ng-container *ngIf=\"hasFile\">\n            <input class=\"filter\" placeholder=\"Filter Key Words\" [(ngModel)]=\"keyWords\">\n            <button mat-button (click)=\"addFilterKey()\">Add Filter</button>\n            <button mat-button (click)=\"removeKeys(i)\" class=\"key\" *ngFor=\"let key of filterKeys; let i = index;\" title=\"click to remove\">{{key}}</button>\n        </ng-container>\n        <div *ngIf=\"hasFile\">\n            <div id=\"curve_chart\"></div>\n            <div id=\"curve_chart2\"></div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/liveOpsLA/liveOpsLA.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/liveOpsLA/liveOpsLA.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <mat-tab-group>\n        <mat-tab label=\"Front-end log\">\n            <app-front-log></app-front-log>\n        </mat-tab>\n        <mat-tab label=\"CPU & memory\">\n            <div class=\"cpu-log\">\n                <h4>Comming Soon...</h4>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"BFF log\">\n            <div class=\"bff-log\">\n                <h4>Comming Soon...</h4>\n            </div>\n        </mat-tab>\n    </mat-tab-group>\n\n\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sites-container\">\n    <div class=\"card\" routerLink=\"lla\">\n        <h3>LiveOpsLA</h3>\n        <span>LiveOpsLogAynalzer</span>\n    </div>\n    <div class=\"card\" (click)=\"openSnackBar('Srooy, Not Supported Yet', 'Oops')\">\n        <fa-icon [icon]=\"faPlus\"></fa-icon>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
            /* harmony import */ var _liveOpsLA_liveOpsLA_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./liveOpsLA/liveOpsLA.component */ "./src/app/liveOpsLA/liveOpsLA.component.ts");
            /* harmony import */ var _sites_sites_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sites/sites.component */ "./src/app/sites/sites.component.ts");
            var routes = [
                {
                    path: '',
                    component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                    children: [
                        {
                            path: '',
                            component: _sites_sites_component__WEBPACK_IMPORTED_MODULE_5__["SitesComponent"]
                        },
                        {
                            path: 'lla',
                            component: _liveOpsLA_liveOpsLA_component__WEBPACK_IMPORTED_MODULE_4__["LLAComponent"]
                        }
                    ]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
            /* harmony import */ var _liveOpsLA_liveOpsLA_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./liveOpsLA/liveOpsLA.component */ "./src/app/liveOpsLA/liveOpsLA.component.ts");
            /* harmony import */ var _front_log_front_log_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./front-log/front-log.component */ "./src/app/front-log/front-log.component.ts");
            /* harmony import */ var _sites_sites_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sites/sites.component */ "./src/app/sites/sites.component.ts");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _core_messageService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/messageService */ "./src/core/messageService.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                        _liveOpsLA_liveOpsLA_component__WEBPACK_IMPORTED_MODULE_8__["LLAComponent"],
                        _sites_sites_component__WEBPACK_IMPORTED_MODULE_10__["SitesComponent"],
                        _front_log_front_log_component__WEBPACK_IMPORTED_MODULE_9__["FrontLogComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                    ],
                    providers: [_core_messageService__WEBPACK_IMPORTED_MODULE_17__["MessageService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".dashboard-container {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n}\n.dashboard-container .mat-toolbar {\n  background: #1976d2;\n  color: #fff;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);\n}\n.dashboard-container .mat-toolbar fa-icon {\n  cursor: pointer;\n}\n.dashboard-container .mat-toolbar fa-icon:hover {\n  opacity: 0.8;\n}\n.dashboard-container .dashboard-inner {\n  flex: 1;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94SHVhbmcxNC9EZXNrdG9wL2RldmVsb3BlbWVudC9MaXZlT3BzQVQvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7QURBRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0FDRUo7QURESTtFQUNFLGVBQUE7QUNHTjtBREZNO0VBQ0ksWUFBQTtBQ0lWO0FEQUU7RUFDRSxPQUFBO0VBQ0EsYUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICAubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQ6ICMxOTc2ZDI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGZhLWljb24ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgJjpob3ZlcntcbiAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmRhc2hib2FyZC1pbm5lciB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG4iLCIuZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyIC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICMxOTc2ZDI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciAubWF0LXRvb2xiYXIgZmEtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyIC5tYXQtdG9vbGJhciBmYS1pY29uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuLmRhc2hib2FyZC1jb250YWluZXIgLmRhc2hib2FyZC1pbm5lciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.ts ***!
          \**************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _core_messageService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/messageService */ "./src/core/messageService.ts");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(_snackBar, _router, _ms) {
                    var _this = this;
                    this._snackBar = _snackBar;
                    this._router = _router;
                    this._ms = _ms;
                    this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"];
                    this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHome"];
                    this._sub = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
                    var routerSub = this._router.events
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (event) {
                        // TODO latter
                    }))
                        .subscribe();
                    var msSub = this._ms.message$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (_b) {
                        var message = _b.message, action = _b.action;
                        _this._snackBar.open(message, action, {
                            duration: 3000,
                        });
                    })).subscribe();
                    this._sub.add(routerSub);
                    this._sub.add(msSub);
                }
                DashboardComponent.prototype.ngOnInit = function () {
                };
                DashboardComponent.prototype.ngOnDestroy = function () {
                    this._sub.unsubscribe();
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _core_messageService__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
            ]; };
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/front-log/front-log.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/front-log/front-log.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".fe-log .files {\n  height: 0;\n  width: 0;\n}\n.fe-log .mat-button {\n  border: 1px solid #999;\n}\n.fe-log .key {\n  margin-left: 20px;\n}\n.fe-log .key:hover {\n  border-color: red;\n}\n.fe-log .drop-area {\n  position: fixed;\n  top: 112px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 20px;\n}\n.fe-log .drop-area.drop-over {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.fe-log .drop-area .filter {\n  width: 300px;\n  border: none;\n  border-bottom: 2px solid #333;\n  height: 30px;\n  font-size: 17px;\n  padding: 4px;\n  margin-left: 20px;\n}\n.fe-log #curve_chart,\n.fe-log #curve_chart2 {\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94SHVhbmcxNC9EZXNrdG9wL2RldmVsb3BlbWVudC9MaXZlT3BzQVQvc3JjL2FwcC9mcm9udC1sb2cvZnJvbnQtbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mcm9udC1sb2cvZnJvbnQtbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsU0FBQTtFQUNBLFFBQUE7QUNBSjtBREVFO0VBQ0Usc0JBQUE7QUNBSjtBREVFO0VBQ0UsaUJBQUE7QUNBSjtBRENJO0VBQ0UsaUJBQUE7QUNDTjtBREVFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0FDQUo7QURDSTtFQUNFLG9DQUFBO0FDQ047QURDSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NOO0FERUU7O0VBRUUsYUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZnJvbnQtbG9nL2Zyb250LWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZS1sb2cge1xuICAuZmlsZXMge1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAubWF0LWJ1dHRvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgfVxuICAua2V5e1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICY6aG92ZXJ7XG4gICAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgICB9XG4gIH1cbiAgLmRyb3AtYXJlYSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMTEycHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAmLmRyb3Atb3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgfVxuICAgIC5maWx0ZXIge1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMzM7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG4gIH1cbiAgI2N1cnZlX2NoYXJ0LFxuICAjY3VydmVfY2hhcnQyIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG59XG4iLCIuZmUtbG9nIC5maWxlcyB7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG4uZmUtbG9nIC5tYXQtYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbn1cbi5mZS1sb2cgLmtleSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmZlLWxvZyAua2V5OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG4uZmUtbG9nIC5kcm9wLWFyZWEge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTEycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uZmUtbG9nIC5kcm9wLWFyZWEuZHJvcC1vdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmZlLWxvZyAuZHJvcC1hcmVhIC5maWx0ZXIge1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMzM7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmZlLWxvZyAjY3VydmVfY2hhcnQsXG4uZmUtbG9nICNjdXJ2ZV9jaGFydDIge1xuICBoZWlnaHQ6IDUwMHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/front-log/front-log.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/front-log/front-log.component.ts ***!
          \**************************************************/
        /*! exports provided: FrontLogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontLogComponent", function () { return FrontLogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _core_messageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/messageService */ "./src/core/messageService.ts");
            var FrontLogComponent = /** @class */ (function () {
                function FrontLogComponent(_ms) {
                    var _this = this;
                    this._ms = _ms;
                    this.topics = [
                        'ui.jobstate',
                        'uimodal',
                        'timeline',
                        'timecarousel',
                        'ReceiveInitialData',
                        'correlation',
                        'depth_setting',
                        'hardware',
                        'automation_switch',
                        'well_sketch',
                        'well_sketch_value',
                        'template',
                        'tasklist_done',
                        'taskList',
                        'notification',
                        'notification_dismiss',
                        'speed',
                        'speed_value',
                        'tension',
                        'surface_tension_value',
                        'head_tension_value',
                        'tension_log',
                        'tension_log_depth',
                        'power',
                        'lqc',
                        'hardware_value_1',
                        'hardware_messages_1',
                        'hardware_value_2',
                        'hardware_messages_2',
                        'hardware_value_3',
                        'hardware_messages_3',
                        'hardware_value_4',
                        'hardware_messages_4',
                        'hardware_value_5',
                        'hardware_messages_5',
                        'hardware_value_6',
                        'hardware_messages_6',
                        'lqc_first_inner',
                        'lqc_first_outer',
                        'lqc_second_inner',
                        'lqc_second_outer',
                        'lqc_third_inner',
                        'lqc_third_outer',
                        'power_first_inner',
                        'power_first_outer',
                        'power_second_inner',
                        'power_second_outer',
                        'tension_log_value_1',
                        'tension_log_value_2',
                        'tension_log_depth_value_1',
                        'total'
                    ];
                    this.fileToUpload = null;
                    this.hasFile = false;
                    this.dropOver = false;
                    this.keyWords = '';
                    this.filterKeys = [];
                    this.chartInit = function () {
                        google.charts.load('current', { 'packages': ['corechart'] });
                        google.charts.setOnLoadCallback(_this.setChartsTool);
                    };
                    this.setChartsTool = function () {
                        _this.totalChart = new google.visualization.LineChart(document.getElementById('curve_chart'));
                        _this.itemChart = new google.visualization.LineChart(document.getElementById('curve_chart2'));
                        _this.drawTotalChart(_this.items);
                        _this.drawTopicChart(_this.items);
                    };
                }
                FrontLogComponent.prototype.ngOnInit = function () {
                    this._ms.sendMessage('Use button select file or drop file to this page', '😁');
                };
                FrontLogComponent.prototype.removeKeys = function (index) {
                    this.filterKeys.splice(index, 1);
                    this.redrawCurve();
                };
                FrontLogComponent.prototype.addFilterKey = function () {
                    this.filterKeys.push(this.keyWords);
                    this.keyWords = '';
                    this.redrawCurve();
                };
                FrontLogComponent.prototype.redrawCurve = function () {
                    var _this = this;
                    var list = this.topics.filter(function (topic) { return _this.filterKeys.some(function (key) { return topic.indexOf(key) !== -1; }); });
                    this.drawTopicChart(this.items, this.filterKeys.length === 0 ? this.topics : list);
                };
                FrontLogComponent.prototype.onDrop = function (e) {
                    var file = e.dataTransfer.files.item(0);
                    this.readFile(file);
                    e.preventDefault();
                };
                FrontLogComponent.prototype.onDragOver = function (e) {
                    var _this = this;
                    this.dropOver = true;
                    clearTimeout(this.changeDropOvserTimmer);
                    this.changeDropOvserTimmer = setTimeout(function () {
                        _this.dropOver = false;
                    }, 300);
                    e.stopPropagation();
                    e.preventDefault();
                };
                FrontLogComponent.prototype.triggerFileSelect = function () {
                    this.file.nativeElement.click();
                };
                FrontLogComponent.prototype.readFile = function (file) {
                    var _this = this;
                    if (file.type !== 'text/plain') {
                        this._ms.sendMessage('Wrong File Selected', '😱');
                        return;
                    }
                    ;
                    var reader = new FileReader();
                    reader.readAsText(file);
                    reader.onload = function () {
                        try {
                            _this.items = JSON.parse(reader.result.toString());
                            _this.hasFile = true;
                            _this.chartInit();
                        }
                        catch (_a) {
                            _this._ms.sendMessage('Wrong File Selected', '😱');
                        }
                    };
                };
                FrontLogComponent.prototype.handleFileInput = function (event) {
                    var file = event.target.files.item(0);
                    event.target.value = '';
                    this.readFile(file);
                };
                FrontLogComponent.prototype.drawTopicChart = function (items, topicList) {
                    if (topicList === void 0) { topicList = this.topics; }
                    var indexes = JSON.parse(items.indexes);
                    var labelArray = ['Time'];
                    var startData = [];
                    topicList.forEach(function (topic) {
                        if (topic !== 'total' && topic !== 'indexes') {
                            labelArray.push(topic);
                            var item = JSON.parse(items[topic]);
                            item.forEach(function (count, i) {
                                var pre = startData[i] || [];
                                startData[i] = __spread(pre, [count]);
                            });
                        }
                        ;
                    });
                    indexes.forEach(function (index, i) {
                        startData[i].unshift(index);
                    });
                    startData.unshift(labelArray);
                    var topicsChartData = google.visualization.arrayToDataTable(startData);
                    var topicsChartOptions = {
                        title: 'All Topics count in Min',
                        curveType: 'function',
                        legend: { position: 'bottom' }
                    };
                    this.itemChart.draw(topicsChartData, topicsChartOptions);
                };
                FrontLogComponent.prototype.drawTotalChart = function (items) {
                    var totalArray = JSON.parse(items.total);
                    var indexes = JSON.parse(items.indexes);
                    var startData = [
                        ['Time', 'Total']
                    ];
                    totalArray.forEach(function (count, index) {
                        startData.push([indexes[index], count]);
                    });
                    var totalChartData = google.visualization.arrayToDataTable(startData);
                    var totalChartOptions = {
                        title: 'Total count recieved in Min',
                        curveType: 'function',
                        legend: { position: 'bottom' }
                    };
                    this.totalChart.draw(totalChartData, totalChartOptions);
                };
                return FrontLogComponent;
            }());
            FrontLogComponent.ctorParameters = function () { return [
                { type: _core_messageService__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file', { static: true })
            ], FrontLogComponent.prototype, "file", void 0);
            FrontLogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-front-log',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./front-log.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/front-log/front-log.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./front-log.component.scss */ "./src/app/front-log/front-log.component.scss")).default]
                })
            ], FrontLogComponent);
            /***/ 
        }),
        /***/ "./src/app/liveOpsLA/liveOpsLA.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/liveOpsLA/liveOpsLA.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  flex: 1;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94SHVhbmcxNC9EZXNrdG9wL2RldmVsb3BlbWVudC9MaXZlT3BzQVQvc3JjL2FwcC9saXZlT3BzTEEvbGl2ZU9wc0xBLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9saXZlT3BzTEEvbGl2ZU9wc0xBLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvbGl2ZU9wc0xBL2xpdmVPcHNMQS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZmxleDogMTtcbn1cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuIiwiOmhvc3Qge1xuICBmbGV4OiAxO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/liveOpsLA/liveOpsLA.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/liveOpsLA/liveOpsLA.component.ts ***!
          \**************************************************/
        /*! exports provided: LLAComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LLAComponent", function () { return LLAComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LLAComponent = /** @class */ (function () {
                function LLAComponent() {
                }
                LLAComponent.prototype.ngOnInit = function () {
                };
                return LLAComponent;
            }());
            LLAComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-lla',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./liveOpsLA.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/liveOpsLA/liveOpsLA.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./liveOpsLA.component.scss */ "./src/app/liveOpsLA/liveOpsLA.component.scss")).default]
                })
            ], LLAComponent);
            /***/ 
        }),
        /***/ "./src/app/sites/sites.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/sites/sites.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  flex: 1;\n  display: flex;\n}\n\n.sites-container {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sites-container .card {\n  margin: 20px;\n  height: 120px;\n  width: 120px;\n  background-color: #414954;\n  border-radius: 8px;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.5s;\n}\n\n.sites-container .card span {\n  font-size: 12px;\n}\n\n.sites-container .card fa-icon {\n  font-size: 22px;\n}\n\n.sites-container .card:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94SHVhbmcxNC9EZXNrdG9wL2RldmVsb3BlbWVudC9MaXZlT3BzQVQvc3JjL2FwcC9zaXRlcy9zaXRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2l0ZXMvc2l0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEREU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNHSjs7QURGSTtFQUNFLGVBQUE7QUNJTjs7QURGSTtFQUNFLGVBQUE7QUNJTjs7QURGSTtFQUNFLDRCQUFBO0VBQ0EsNENBQUE7QUNJTiIsImZpbGUiOiJzcmMvYXBwL3NpdGVzL3NpdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNpdGVzLWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuY2FyZCB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTQ5NTQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgZmEtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2l0ZXMtY29udGFpbmVyIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2l0ZXMtY29udGFpbmVyIC5jYXJkIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTQ5NTQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLnNpdGVzLWNvbnRhaW5lciAuY2FyZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnNpdGVzLWNvbnRhaW5lciAuY2FyZCBmYS1pY29uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLnNpdGVzLWNvbnRhaW5lciAuY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/sites/sites.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/sites/sites.component.ts ***!
          \******************************************/
        /*! exports provided: SitesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitesComponent", function () { return SitesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            var SitesComponent = /** @class */ (function () {
                function SitesComponent() {
                    this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"];
                }
                SitesComponent.prototype.ngOnInit = function () {
                };
                return SitesComponent;
            }());
            SitesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sites',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sites.component.scss */ "./src/app/sites/sites.component.scss")).default]
                })
            ], SitesComponent);
            /***/ 
        }),
        /***/ "./src/core/messageService.ts": 
        /*!************************************!*\
          !*** ./src/core/messageService.ts ***!
          \************************************/
        /*! exports provided: MessageService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function () { return MessageService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var MessageService = /** @class */ (function () {
                function MessageService() {
                    var _this = this;
                    this.messageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.message$ = this.messageSubject.asObservable();
                    this.sendMessage = function (message, action) {
                        if (action === void 0) { action = ''; }
                        _this.messageSubject.next({ message: message, action: action });
                    };
                }
                return MessageService;
            }());
            MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], MessageService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/xHuang14/Desktop/developement/LiveOpsAT/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map