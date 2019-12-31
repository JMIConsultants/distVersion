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
            /* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-us/about-us.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-us/about-us.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class='row justify-content-end bannerText'>\n    <div class='col-md-3'>\n        <h1>About\n            Us</h1>\n    </div>\n</div>\n<div class='container-fluid'>\n    <div class=\"row\" id=\"addSpaceTop\">\n        <div class='col-md-12'>\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class='row justify-content-center'>\n                        <img class='iconSet' src=\"../../../assets/Icons/PeopleBubble.png\" alt=\"PeopleBubble.png\">\n                    </div>\n                    <h2 class=\"card-title d-flex justify-content-center\">About Us</h2>\n                    <p class=\"card-text d-flex justify-content-center\">JMI Consultants, LLC (JMI) was founded in\n                        February\n                        2019 by three market veterans with extensive\n                        experience in the deregulated energy industry, including direct experience with many\n                        organizations\n                        in\n                        the Fortune 500. JMI’s Principal Officers have accumulated 35+ years of industry experience\n                        between\n                        them and strive to assist customers in navigating the complexities of the energy industry. Over\n                        the\n                        years, its Principal Officers have assisted some of the largest energy users in North America.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" id=\"addSpaceTop\">\n        <div class='col-md-12'>\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class='row justify-content-center'>\n                        <img class='iconSet' src=\"../../../assets/Icons/PeopleBubble.png\" alt=\"PeopleBubble.png\">\n                    </div>\n                    <h2 class=\"card-title d-flex justify-content-center\">Experience</h2>\n                    <p class=\"card-text d-flex justify-content-center\">Through their experience, JMI’s Principal\n                        Officers\n                        have established relationships with countless energy\n                        providers and have learned the many nuances between them. It is through this experience that\n                        JMI’s\n                        founders decided to launch an organization to continually assist customers in navigating the\n                        industry.\n                        JMI works with a multitude of energy providers and is constantly seeking to expand our service\n                        offerings\n                        through continued and new provider relationships.</p>\n                    <p class=\"card-text d-flex justify-content-left\">The Principal Officers of JMI have over 35 years of\n                        experience in the deregulated energy industry,\n                        managing the relationships of over 3,000 commercial customers throughout the United States.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blurbs/blurbs.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blurbs/blurbs.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class='row justify-content-end bannerText'>\n        <div class='col-md-6'>\n            <h1>Our Services</h1>\n        </div>\n    </div>\n\n    <div class=\"row\" id=\"addSpaceTop\">\n        <div class='col-md-4'>\n            <div class=\"card hoverChange\" (click)='goToService(blurbs[0].id)'>\n                <div class='row justify-content-center' id=\"addSpaceTop\">\n                    <img class='iconSet' src=\"../../../assets/Icons/{{blurbs[0]['icon']}}\" alt=\"{{blurbs[0]['icon']}}\">\n                </div>\n                <div class=\"card-body\">\n                    <h6 class=\"card-title d-flex justify-content-center\">{{blurbs[0].service}}</h6>\n                    <p class=\"card-text d-flex justify-content-center\">{{blurbs[0].blurb}}</p>\n                </div>\n            </div>\n        </div>\n        <div class='col-md-4'>\n            <div class=\"card hoverChange\" (click)='goToService(blurbs[1].id)'>\n                <div class='row justify-content-center' id=\"addSpaceTop\">\n                    <img class='iconSet' src=\"../../../assets/Icons/{{blurbs[1]['icon']}}\" alt=\"{{blurbs[1]['icon']}}\">\n                </div>\n                <div class=\"card-body\">\n                    <h6 class=\"card-title d-flex justify-content-center\">{{blurbs[1].service}}</h6>\n                    <p class=\"card-text d-flex justify-content-center\">{{blurbs[1].blurb}}</p>\n                </div>\n            </div>\n        </div>\n        <div class='col-md-4'>\n            <div class=\"card hoverChange\" (click)='goToService(blurbs[2].id)'>\n                <div class='row justify-content-center' id=\"addSpaceTop\">\n                    <img class='iconSet' src=\"../../../assets/Icons/{{blurbs[2]['icon']}}\" alt=\"{{blurbs[2]['icon']}}\">\n                </div>\n                <div class=\"card-body\">\n                    <h6 class=\"card-title d-flex justify-content-center\">{{blurbs[2].service}}</h6>\n                    <p class=\"card-text d-flex justify-content-center\">{{blurbs[2].blurb}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" id=\"addSpaceTop\">\n        <div class='col-md-4'>\n            <div class=\"card hoverChange\" (click)='goToService(blurbs[3].id)'>\n                <div class='row justify-content-center' id=\"addSpaceTop\">\n                    <img class='iconSet' src=\"../../../assets/Icons/{{blurbs[3]['icon']}}\" alt=\"{{blurbs[3]['icon']}}\">\n                </div>\n                <div class=\"card-body\">\n                    <h6 class=\"card-title d-flex justify-content-center\">{{blurbs[3].service}}</h6>\n                    <p class=\"card-text d-flex justify-content-center\">{{blurbs[3].blurb}}</p>\n                </div>\n            </div>\n        </div>\n        <div class='col-md-4'>\n            <div class=\"card hoverChange\" (click)='goToService(blurbs[4].id)'>\n                <div class='row justify-content-center' id=\"addSpaceTop\">\n                    <img class='iconSet' src=\"../../../assets/Icons/{{blurbs[4]['icon']}}\" alt=\"{{blurbs[4]['icon']}}\">\n                </div>\n                <div class=\"card-body\">\n                    <h6 class=\"card-title d-flex justify-content-center\">{{blurbs[4].service}}</h6>\n                    <p class=\"card-text d-flex justify-content-center\">{{blurbs[4].blurb}}</p>\n                </div>\n            </div>\n        </div>\n        <div class='col-md-4'>\n            <div class=\"card hoverChange\" (click)='goToService(blurbs[5].id)'>\n                <div class='row justify-content-center' id=\"addSpaceTop\">\n                    <img class='iconSet' src=\"../../../assets/Icons/{{blurbs[5]['icon']}}\" alt=\"{{blurbs[5]['icon']}}\">\n                </div>\n                <div class=\"card-body\">\n                    <h6 class=\"card-title d-flex justify-content-center\">{{blurbs[5].service}}</h6>\n                    <p class=\"card-text d-flex justify-content-center\">{{blurbs[5].blurb}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" id=\"addSpaceTop\" style=\"margin-bottom:15px\">\n        <div class='col-md-12'>\n            <div class=\"card hoverChange\" (click)='goToService(blurbs[6].id)'>\n                <div class='row justify-content-center' id=\"addSpaceTop\">\n                    <img class='iconSet' src=\"../../../assets/Icons/{{blurbs[6]['icon']}}\" alt=\"{{blurbs[6]['icon']}}\">\n                </div>\n                <div class=\"card-body\">\n                    <h6 class=\"card-title d-flex justify-content-center\">{{blurbs[6].service}}</h6>\n                    <p class=\"card-text d-flex justify-content-center\">{{blurbs[6].blurb}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class='row justify-content-end bannerText'>\n        <div class='col-md-5'>\n            <h1>Contact Us</h1>\n        </div>\n    </div>\n    <!--Google map-->\n    <div id=\"map-container-google-1\" class=\"z-depth-1-half map-container\" style=\"width: 100%; height: 350;\">\n        <iframe\n            src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.0909714615914!2d-78.68146208453078!3d42.95528730529588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3757353f31b8d%3A0x30a2529057ff0fb7!2s2809%20Wehrle%20Dr%20%239%2C%20Buffalo%2C%20NY%2014221!5e0!3m2!1sen!2sus!4v1577739990233!5m2!1sen!2sus\"\n            frameborder=\"0\" style=\"border:0\" allowfullscreen width=100% height=300px\n            style=\"padding-top:25px; padding-bottom: 25px;\"></iframe>\n    </div>\n    <div class=\"row\" id=\"addSpaceTop\">\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <form>\n                        <div class=\"form-group\">\n                            <label for=\"exampleInputEmail1\">Email address</label>\n                            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\"\n                                aria-describedby=\"emailHelp\" placeholder=\"Enter email\" disabled>\n                            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone\n                                else, we just need it to get back to you!</small>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"exampleInputPassword1\">Company or Name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"companyNameInput\"\n                                placeholder=\"Enter your name or your company's name\" disabled>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"exampleFormControlTextarea1\">Comments</label>\n                            <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"\n                                disabled></textarea>\n                            <small id=\"emailHelp\" class=\"form-text text-muted\">Please provide any info relevant to your\n                                inquiry.</small>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-primary\" disabled>Submit</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n\n                    <div class='row'>\n                        <div class='col-md-6'>\n                            <img src=\"assets/Email_Logo.png\" alt=\"JMI Logo\" width=100%\n                                style='margin-left:15px; max-height: 175px;'>\n                        </div>\n                        <div class='col-md-6' style=\"height:175px;\">\n                            <div class='addressInfo'>\n                                <p>2809 Wehrle Drive, Suite 9 <br>\n                                    Williamsville, NY 14221 <br>\n                                    <a href=\"mailto:support@jmiconsultants.com\">support@jmiconsultants.com</a>\n                                    716.428.3501 <br>\n                                    <a href=\"https://www.linkedin.com/company/jmi-consultants-llc/?viewAsMember=true\">\n                                        <img class='iconSet' src=\"../../../assets/Icons/link.png\"> Connect with us\n                                        on LinkedIn\n                                    </a>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm navbar-dark addSpaceTop\" style='background-color:black;'>\n    <!-- Links -->\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/who-we-are\" routerLinkActive=\"active\">Who We Are</a>\n        </li>\n\n\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" routerLink=\"/services\" routerLinkActive=\"active\">\n                Our Services\n            </a>\n        </li>\n\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/about-us\" routerLinkActive=\"active\">About Us</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/contact-us\" routerLinkActive=\"active\">Contact</a>\n        </li>\n    </ul>\n</nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-menu/nav-menu.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-menu/nav-menu.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm navbar-dark\" style='background-color:black;'>\n    <!-- Brand -->\n    <a class=\"navbar-brand\"><img src=\"assets/Email_Logo.png\" alt=\"JMI Logo\" width=90px style='margin-left:15px;'></a>\n\n    <!-- Links -->\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/who-we-are\" routerLinkActive=\"active\">Who We Are</a>\n        </li>\n\n        <!-- Dropdown -->\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" routerLink=\"/services\" routerLinkActive=\"active\">\n                Our Services\n            </a>\n            <!-- <a class=\"nav-link dropdown-toggle\" routerLink=\"/services\" routerLinkActive=\"active\" id=\"navbardrop\"\n                data-toggle=\"dropdown\">\n                Our Services\n            </a>\n            <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item\" href=\"fullserve.html\">Strategic Procurement of Energy</a>\n                <a class=\"dropdown-item\" href=\"fullserve.html#utilAud\">Utility Bill Auditing</a>\n                <a class=\"dropdown-item\" href=\"fullserve.html#utilMana\">Utility Bill Management</a>\n                <a class=\"dropdown-item\" href=\"fullserve.html#genEn\">General Energy Management Consulting</a>\n                <a class=\"dropdown-item\" href=\"fullserve.html#utilRate\">Utility Rate Analysis</a>\n                <a class=\"dropdown-item\" href=\"fullserve.html#budFor\">Budget Forecasting and Performance Reporting</a>\n                <a class=\"dropdown-item\" href=\"fullserve.html#specEn\">Specialized Energy Products and Services</a>\n            </div> -->\n        </li>\n\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/about-us\" routerLinkActive=\"active\">About Us</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/contact-us\" routerLinkActive=\"active\">Contact</a>\n        </li>\n    </ul>\n</nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/who-we-are/who-we-are.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/who-we-are/who-we-are.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class='row justify-content-end bannerText'>\n    <div class='col-md-6'>\n        <h1>JMI Consultants</h1>\n        <h3>Energy Made Easy</h3>\n        <p style=\"margin-top: 25px;\"> JMI Consultants, LLC (JMI) is a full-service sonsulting firm, focused on\n            delivering simple solutions in a\n            complex\n            market. Navigating options throughout the energy markets can appear to be an impossible task with the\n            endless\n            combinations of solutions to monitor and manage an organization's energy spend. Our firm is focused on\n            delivering\n            comprehensive solutions which work cohesively with on another to maximize value. With over 35 years of\n            combined\n            experience, JMI's principals bring industry-leading knowledge and innovative ideas to tackle any energy\n            needs.\n            Working with JMI is the equivalent of hiring several full-time energy managers directly for your\n            organization.\n        </p>\n    </div>\n</div>\n<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-md-4' id=\"addSpaceTop\">\n            <div class=\"card hoverChange\" id='services' routerLink='/services'>\n                <div class='row justify-content-center'>\n                    <img class='iconSet' src=\"../../../assets/Icons/ElectricBubble.png\" alt=\"ElectricBubble.png\">\n                </div>\n                <div class=\"card-body\">\n                    <h6 class=\"card-title d-flex justify-content-center\">Services</h6>\n                    <p class=\"card-text d-flex justify-content-center\">Brief One liner about category</p>\n                </div>\n            </div>\n        </div>\n        <div class='col-md-4' id=\"addSpaceTop\">\n            <div class=\"card hoverChange\" id='aboutUs' routerLink='/about-us'>\n                <div class='row justify-content-center'>\n                    <img class='iconSet' src=\"../../../assets/Icons/PeopleBubble.png\" alt=\"PeopleBubble.png\">\n                </div>\n                <div class=\"card-body\">\n                    <h6 class=\"card-title d-flex justify-content-center\">About Us</h6>\n                    <p class=\"card-text d-flex justify-content-center\">Brief One liner about category</p>\n                </div>\n            </div>\n        </div>\n        <div class='col-md-4' id=\"addSpaceTop\">\n            <div class=\"card hoverChange\" id='contact' routerLink='/contact-us'>\n                <div class='row justify-content-center'>\n                    <img class='iconSet' src=\"../../../assets/Icons/PeopleBubble.png\" alt=\"PeopleBubble.png\">\n                </div>\n                <div class=\"card-body\">\n                    <h6 class=\"card-title d-flex justify-content-center\">Contact Us</h6>\n                    <p class=\"card-text d-flex justify-content-center\">Brief One liner about category</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
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
            /* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
            /* harmony import */ var _components_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/who-we-are/who-we-are.component */ "./src/app/components/who-we-are/who-we-are.component.ts");
            /* harmony import */ var _components_blurbs_blurbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/blurbs/blurbs.component */ "./src/app/components/blurbs/blurbs.component.ts");
            /* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
            var routes = [
                { path: 'about-us', component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"] },
                { path: 'services', component: _components_blurbs_blurbs_component__WEBPACK_IMPORTED_MODULE_5__["BlurbsComponent"] },
                { path: 'who-we-are', component: _components_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_4__["WhoWeAreComponent"] },
                { path: '', component: _components_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_4__["WhoWeAreComponent"] },
                { path: 'contact-us', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] }
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
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
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
                    this.title = 'JMIang';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav-menu/nav-menu.component */ "./src/app/components/nav-menu/nav-menu.component.ts");
            /* harmony import */ var _components_blurbs_blurbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/blurbs/blurbs.component */ "./src/app/components/blurbs/blurbs.component.ts");
            /* harmony import */ var _components_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/who-we-are/who-we-are.component */ "./src/app/components/who-we-are/who-we-are.component.ts");
            /* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
            /* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
            /* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_5__["NavMenuComponent"],
                        _components_blurbs_blurbs_component__WEBPACK_IMPORTED_MODULE_6__["BlurbsComponent"],
                        _components_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_7__["WhoWeAreComponent"],
                        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                        _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"],
                        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/about-us/about-us.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/components/about-us/about-us.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".hoverChange:hover {\n    background-color: #E4DDDD;\n}\n\n#addSpaceTop {\n    margin-top: 15px;\n}\n\nh1 {\n    font-size: 100px;\n    text-align: right;\n    margin-right: 15px;\n}\n\nh3 {\n    text-align: right;\n    margin-right: 15px;\n}\n\n.iconSet {\n    width: 96px;\n}\n\n.bannerText {\n    background: url('aboutUs.jpg') no-repeat;\n    background-size: cover;\n    height: 500px;\n    width: 100%;\n    padding-left: 300px;\n    box-sizing: border-box;\n    box-shadow: inset -500px 0 300px 10px rgb(130, 130, 130);\n    color: white;\n    text-shadow: 0.5px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;\n    padding-top: 30px;\n    padding-right: 30px;\n    margin: 0;\n}\n\n.leftRight {\n    margin-left: 15px;\n    margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksd0NBQWdFO0lBQ2hFLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsd0RBQXdEO0lBQ3hELFlBQVk7SUFDWix1RUFBdUU7SUFDdkUsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvdmVyQ2hhbmdlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTREREREO1xufVxuXG4jYWRkU3BhY2VUb3Age1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbmgzIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5pY29uU2V0IHtcbiAgICB3aWR0aDogOTZweDtcbn1cblxuLmJhbm5lclRleHQge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYW5uZXJzL2Fib3V0VXMuanBnXCIpIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAzMDBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC01MDBweCAwIDMwMHB4IDEwcHggcmdiKDEzMCwgMTMwLCAxMzApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMC41cHggMCAwICMwMDAsIDAgLTFweCAwICMwMDAsIDAgMXB4IDAgIzAwMCwgLTFweCAwIDAgIzAwMDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmxlZnRSaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/about-us/about-us.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/about-us/about-us.component.ts ***!
          \***********************************************************/
        /*! exports provided: AboutUsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () { return AboutUsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutUsComponent = /** @class */ (function () {
                function AboutUsComponent() {
                }
                AboutUsComponent.prototype.ngOnInit = function () {
                };
                return AboutUsComponent;
            }());
            AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about-us',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-us/about-us.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.css */ "./src/app/components/about-us/about-us.component.css")).default]
                })
            ], AboutUsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/blurbs/blurbs.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/blurbs/blurbs.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".hoverChange:hover {\n    background-color: #E4DDDD;\n}\n\n#addSpaceTop {\n    margin-top: 15px;\n}\n\n.iconSet {\n    width: 96px;\n}\n\nh1 {\n    font-size: 100px;\n    text-align: right;\n    margin-right: 15px;\n}\n\n.bannerText {\n    background: url('services.jpg') no-repeat;\n    height: 500px;\n    padding-left: 300px;\n    box-sizing: border-box;\n    box-shadow: inset -500px 0 300px 10px rgb(130, 130, 130);\n    color: white;\n    text-shadow: 0.5px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;\n    padding-top: 30px;\n    padding-right: 30px;\n}\n\n.leftRight {\n    margin-left: 15px;\n    margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibHVyYnMvYmx1cmJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlDQUFpRTtJQUNqRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix3REFBd0Q7SUFDeEQsWUFBWTtJQUNaLHVFQUF1RTtJQUN2RSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmx1cmJzL2JsdXJicy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvdmVyQ2hhbmdlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTREREREO1xufVxuXG4jYWRkU3BhY2VUb3Age1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5pY29uU2V0IHtcbiAgICB3aWR0aDogOTZweDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uYmFubmVyVGV4dCB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2Jhbm5lcnMvc2VydmljZXMuanBnXCIpIG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzAwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAtNTAwcHggMCAzMDBweCAxMHB4IHJnYigxMzAsIDEzMCwgMTMwKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDAuNXB4IDAgMCAjMDAwLCAwIC0xcHggMCAjMDAwLCAwIDFweCAwICMwMDAsIC0xcHggMCAwICMwMDA7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuLmxlZnRSaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/blurbs/blurbs.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/blurbs/blurbs.component.ts ***!
          \*******************************************************/
        /*! exports provided: BlurbsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlurbsComponent", function () { return BlurbsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _data_blurbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/blurbs */ "./src/app/data/blurbs.ts");
            var BlurbsComponent = /** @class */ (function () {
                function BlurbsComponent() {
                    this.blurbs = _data_blurbs__WEBPACK_IMPORTED_MODULE_2__["serviceBlurbs"];
                }
                BlurbsComponent.prototype.ngOnInit = function () {
                    console.log(this.blurbs[0]['icon']);
                };
                BlurbsComponent.prototype.goToService = function (id) {
                    console.log(id);
                };
                return BlurbsComponent;
            }());
            BlurbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-blurbs',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blurbs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blurbs/blurbs.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blurbs.component.css */ "./src/app/components/blurbs/blurbs.component.css")).default]
                })
            ], BlurbsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/contact/contact.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/components/contact/contact.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".bannerText {\n    background: url('contactUs.jpg') no-repeat center;\n    background-size: cover;\n    height: 500px;\n    padding-left: 300px;\n    box-sizing: border-box;\n    box-shadow: inset -500px 0 300px 10px rgb(130, 130, 130);\n    color: white;\n    text-shadow: 0.5px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;\n    padding-top: 30px;\n    padding-right: 30px;\n}\n\n.leftRight {\n    margin-left: 15px;\n    margin-right: 15px;\n}\n\nh1 {\n    font-size: 100px;\n    text-align: right;\n    margin-right: 15px;\n}\n\n#addSpaceTop {\n    margin-top: 15px;\n}\n\n.iconSet {\n    height: 30px;\n}\n\n#addSpaceTop > div:nth-child(2) > div > div > div > div:nth-child(2) > div > p{\n    margin-bottom: 0px;\n}\n\n.addressInfo {\n    padding-top: 25px;\n    padding-bottom: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlEQUF5RTtJQUN6RSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsd0RBQXdEO0lBQ3hELFlBQVk7SUFDWix1RUFBdUU7SUFDdkUsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXJUZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFubmVycy9jb250YWN0VXMuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzAwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAtNTAwcHggMCAzMDBweCAxMHB4IHJnYigxMzAsIDEzMCwgMTMwKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDAuNXB4IDAgMCAjMDAwLCAwIC0xcHggMCAjMDAwLCAwIDFweCAwICMwMDAsIC0xcHggMCAwICMwMDA7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuLmxlZnRSaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuaDEge1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4jYWRkU3BhY2VUb3Age1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5pY29uU2V0IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbiNhZGRTcGFjZVRvcCA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gcHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5hZGRyZXNzSW5mbyB7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IGF1dG87XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/contact/contact.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/contact/contact.component.ts ***!
          \*********************************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ContactComponent = /** @class */ (function () {
                function ContactComponent() {
                }
                ContactComponent.prototype.ngOnInit = function () {
                };
                return ContactComponent;
            }());
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")).default]
                })
            ], ContactComponent);
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/footer/footer.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".addSpaceTop {\n    margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRTcGFjZVRvcCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/footer/footer.component.ts ***!
          \*******************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/nav-menu/nav-menu.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/components/nav-menu/nav-menu.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/nav-menu/nav-menu.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/nav-menu/nav-menu.component.ts ***!
          \***********************************************************/
        /*! exports provided: NavMenuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () { return NavMenuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavMenuComponent = /** @class */ (function () {
                function NavMenuComponent() {
                }
                NavMenuComponent.prototype.ngOnInit = function () {
                };
                return NavMenuComponent;
            }());
            NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nav-menu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-menu/nav-menu.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/components/nav-menu/nav-menu.component.css")).default]
                })
            ], NavMenuComponent);
            /***/ 
        }),
        /***/ "./src/app/components/who-we-are/who-we-are.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/components/who-we-are/who-we-are.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".hoverChange:hover {\n    background-color: #E4DDDD;\n}\n\n#addSpaceTop {\n    margin-top: 15px;\n}\n\n.iconSet {\n    width: 96px;\n}\n\n.bannerText {\n    background: url('services.jpg') no-repeat;\n    height: 500px;\n    width: 100%;\n    padding-left: 300px;\n    box-sizing: border-box;\n    box-shadow: inset -500px 0 300px 10px rgb(130, 130, 130);\n    color: white;\n    padding-top: 30px;\n    padding-right: 30px;\n    margin: 0;\n}\n\n.leftRight {\n    margin-left: 15px;\n    margin-right: 15px;\n}\n\nh1 {\n    color: rgb(23,167,181);\n    text-shadow: grey 1px 1px 10px; \n    text-align: right;\n    margin-right: 15px;\n    font-size: 50px;\n}\n\nh3 {\n    text-align: right;\n    margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aG8td2UtYXJlL3doby13ZS1hcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlDQUFpRTtJQUNqRSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsd0RBQXdEO0lBQ3hELFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3doby13ZS1hcmUvd2hvLXdlLWFyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvdmVyQ2hhbmdlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTREREREO1xufVxuXG4jYWRkU3BhY2VUb3Age1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5pY29uU2V0IHtcbiAgICB3aWR0aDogOTZweDtcbn1cblxuLmJhbm5lclRleHQge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYW5uZXJzL3NlcnZpY2VzLmpwZ1wiKSBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTUwMHB4IDAgMzAwcHggMTBweCByZ2IoMTMwLCAxMzAsIDEzMCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubGVmdFJpZ2h0IHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5oMSB7XG4gICAgY29sb3I6IHJnYigyMywxNjcsMTgxKTtcbiAgICB0ZXh0LXNoYWRvdzogZ3JleSAxcHggMXB4IDEwcHg7IFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBmb250LXNpemU6IDUwcHg7XG59XG5oMyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/who-we-are/who-we-are.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/who-we-are/who-we-are.component.ts ***!
          \***************************************************************/
        /*! exports provided: WhoWeAreComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhoWeAreComponent", function () { return WhoWeAreComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var WhoWeAreComponent = /** @class */ (function () {
                function WhoWeAreComponent() {
                }
                WhoWeAreComponent.prototype.ngOnInit = function () {
                };
                return WhoWeAreComponent;
            }());
            WhoWeAreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-who-we-are',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./who-we-are.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/who-we-are/who-we-are.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./who-we-are.component.css */ "./src/app/components/who-we-are/who-we-are.component.css")).default]
                })
            ], WhoWeAreComponent);
            /***/ 
        }),
        /***/ "./src/app/data/blurbs.ts": 
        /*!********************************!*\
          !*** ./src/app/data/blurbs.ts ***!
          \********************************/
        /*! exports provided: serviceBlurbs */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceBlurbs", function () { return serviceBlurbs; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var serviceBlurbs = [
                {
                    id: 1,
                    icon: "ElectricBubble.png",
                    service: "Strategic Procurement of Energy",
                    blurb: "Make more informed decisions about your energy spend. Fully understand current and future\n        energy needs through a comprehensive procurement strategy."
                },
                {
                    id: 2,
                    icon: "Money.png",
                    service: "Utility Bill Auditing",
                    blurb: "Ensure your organization\u2019s monthly utility invoices are correct. Recover mischarges and ensure\n        future invoices are administered properly."
                },
                {
                    id: 3,
                    icon: "PigBankBubble.png",
                    service: "Utility Bill Management",
                    blurb: "Streamline your accounts payable process through a consolidated bill management solution.\n        Manage monthly recurring invoices through a single source."
                },
                {
                    id: 4,
                    icon: "ElectricBubble.png",
                    service: "General Energy Management Consulting",
                    blurb: "JMI\u2019s diverse team of Analysts have experience with nearly every type of energy management\n        solution. Let us take a look at any capital or non-capital-intensive proposals or solutions you\u2019re\n        looking into."
                },
                {
                    id: 5,
                    icon: "Money.png",
                    service: "Utility Rate Analysis",
                    blurb: "There are hundreds of tariffs and rate structures within a given utility company. Get peace of\n        mind through our free Otherwise Applicable Tariff (OAT) analysis."
                },
                {
                    id: 6,
                    icon: "ElectricBubble.png",
                    service: "Budget Forecasting and Performance Reporting",
                    blurb: "In an ever-changing market, organizations need to know what to expect on their monthly\n        invoices. Is your energy management strategy paying off? Let&#39;s evaluate."
                },
                {
                    id: 7,
                    icon: "Money.png",
                    service: "Specialized Energy Products and Services",
                    blurb: "A partnership with a sophisticated energy consultant has its perks. One, in particular, is access to\n        products and services not typically available to end-users."
                }
            ];
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
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/diakou/Documents/Projects/jess/JMIang/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map