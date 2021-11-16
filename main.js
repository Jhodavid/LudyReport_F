(self["webpackChunkapp_ordenes_map"] = self["webpackChunkapp_ordenes_map"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    { path: '', redirectTo: 'dashboard/inicio', pathMatch: 'full' },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent },
    { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/dashboard/dashboard.module */ 5649)).
            then(x => x.DashboardModule) },
    // { path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AppComponent {
    constructor() {
        this.title = 'appOrdenesMap';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shared/shared.module */ 4065);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _components_dashboard_mapa_modal_reporte_modal_reporte_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/mapa/modal-reporte/modal-reporte.component */ 5878);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat */ 5908);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 6303);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 3315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.firebase),
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestoreModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent,
        _components_dashboard_mapa_modal_reporte_modal_reporte_component__WEBPACK_IMPORTED_MODULE_4__.ModalReporteComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestoreModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrModule] }); })();


/***/ }),

/***/ 619:
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ 6883);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);










function DashboardComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mapa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(breakpointObserver) {
        this.showFiller = false;
        this.showPhone = false;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.displayNameMap = new Map([
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.XSmall, 'XSmall'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Small, 'Small'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Medium, 'Medium'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Large, 'Large'],
        ]);
        breakpointObserver
            .observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Large,
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroyed))
            .subscribe(result => {
            var _a;
            for (const query of Object.keys(result.breakpoints)) {
                if (result.breakpoints[query]) {
                    this.currentScreenSize = (_a = this.displayNameMap.get(query)) !== null && _a !== void 0 ? _a : 'Unknown';
                }
            }
            if (this.currentScreenSize == 'XSmall') {
                this.showPhone = true;
            }
            else if (this.currentScreenSize == 'Small') {
                this.showPhone = true;
            }
            else {
                this.showPhone = false;
            }
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    alargarMenu() {
        this.showFiller = true;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.BreakpointObserver)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 21, vars: 2, consts: [[2, "background-color", "#2b3557", "height", "70px"], ["routerLink", "/dashboard/inicio", 1, "divLogo"], ["src", "./././assets/logo.png", 1, "logo"], [1, "titulo"], [1, "icono-menu", 3, "click"], ["autosize", "", 1, "container-barraLateral"], ["mode", "side", 1, "barraLateral"], ["drawer", ""], ["routerLink", "/dashboard/inicio", 1, "menuItems"], [1, "material-icons"], [4, "ngIf"], ["routerLink", "/dashboard/mapa", 1, "menuItems"], [1, "material-icons", 3, "click"], [1, "container-contenido"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "LudyReport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_mat_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "toc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-drawer-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-drawer", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DashboardComponent_p_13_Template, 2, 0, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_15_listener() { return ctx.showFiller = !ctx.showFiller; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " map ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DashboardComponent_p_18_Template, 2, 0, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPhone);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatDrawer, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["img[_ngcontent-%COMP%]{\r\n    cursor:pointer;\r\n}\r\n\r\n\r\n\r\nmat-toolbar[_ngcontent-%COMP%]{\r\n    height: 11.2vh;\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%]{\r\n    color:#fff;\r\n    cursor:pointer;\r\n}\r\n\r\n.icono-menu[_ngcontent-%COMP%]{\r\n    color:#fff;\r\n    margin-left: 20px;\r\n    cursor: pointer;\r\n    padding: 7px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.icono-menu[_ngcontent-%COMP%]:hover{\r\n    background-color: rgba(30, 30, 117, 0.651);\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%]{\r\n    font-family: roboto;\r\n    font-size: 40px;\r\n}\r\n\r\n.inputBuscar[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n}\r\n\r\n\r\n\r\n.container-barraLateral[_ngcontent-%COMP%]{\r\n    height: 88.8%;\r\n}\r\n\r\n.barraLateral[_ngcontent-%COMP%]{\r\n    background-color:#19202f;\r\n}\r\n\r\n.menuItems[_ngcontent-%COMP%]{\r\n    margin: 4px;\r\n    align-items: center;\r\n    display: flex;\r\n    cursor: pointer;\r\n}\r\n\r\n.menuItems[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    margin: 5px 0 5px;\r\n    padding: 10px;\r\n    background-color: rgba(170, 188, 212, 0.445);\r\n    color: rgb(196, 196, 114);\r\n    border-radius: 0 10px;\r\n}\r\n\r\n.menuItems[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 17px 2px 3px 0;\r\n    padding: 8px;\r\n    background-color: rgba(170, 188, 212, 0.445);\r\n    color: rgb(196, 196, 114);\r\n    border-radius: 0 10px 10px 4px;\r\n}\r\n\r\n.menuItems[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    margin: 10px 0 10px;\r\n    padding: 10px;\r\n    background-color: rgba(170, 188, 212, 0.445);\r\n    color: rgb(196, 196, 114);\r\n    border-radius: 0 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.container-contenido[_ngcontent-%COMP%]{\r\n    background-color: rgba(16, 200, 224, 0.089);\r\n}\r\n\r\n.divLogo[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDRDQUE0QztJQUM1Qyx5QkFBeUI7SUFDekIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4vKiBOQVZCQVIgKi9cclxuXHJcbm1hdC10b29sYmFye1xyXG4gICAgaGVpZ2h0OiAxMS4ydmg7XHJcbn1cclxuXHJcbi50aXR1bG97XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi5pY29uby1tZW51e1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmljb25vLW1lbnU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCAzMCwgMTE3LCAwLjY1MSk7XHJcbn1cclxuXHJcbi50aXR1bG97XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4uaW5wdXRCdXNjYXJ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4vKiBCQVJBIExBVEVSQUwgKi9cclxuXHJcbi5jb250YWluZXItYmFycmFMYXRlcmFse1xyXG4gICAgaGVpZ2h0OiA4OC44JTtcclxufVxyXG5cclxuLmJhcnJhTGF0ZXJhbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzE5MjAyZjtcclxufVxyXG5cclxuLm1lbnVJdGVtc3tcclxuICAgIG1hcmdpbjogNHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tZW51SXRlbXMgc3BhbntcclxuICAgIG1hcmdpbjogNXB4IDAgNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcwLCAxODgsIDIxMiwgMC40NDUpO1xyXG4gICAgY29sb3I6IHJnYigxOTYsIDE5NiwgMTE0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweDtcclxufVxyXG5cclxuLm1lbnVJdGVtcyBwe1xyXG4gICAgbWFyZ2luOiAxN3B4IDJweCAzcHggMDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcwLCAxODgsIDIxMiwgMC40NDUpO1xyXG4gICAgY29sb3I6IHJnYigxOTYsIDE5NiwgMTE0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDRweDtcclxufVxyXG5cclxuLm1lbnVJdGVtcyBzcGFue1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MCwgMTg4LCAyMTIsIDAuNDQ1KTtcclxuICAgIGNvbG9yOiByZ2IoMTk2LCAxOTYsIDExNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXItY29udGVuaWRve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNiwgMjAwLCAyMjQsIDAuMDg5KTtcclxufVxyXG5cclxuLmRpdkxvZ297XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ 2333:
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/inicio/inicio.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioComponent": () => (/* binding */ InicioComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 6883);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_reportes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/reportes.service */ 5334);
/* harmony import */ var _services_fecha_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fecha.service */ 2777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 3315);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ 5937);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);











function InicioComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Reporte");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-card-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reporte_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.formatearFecha(reporte_r1.fecha));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("# ", reporte_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](reporte_r1.descripcion);
} }
class InicioComponent {
    constructor(breakpointObserver, reportesService, fechaService, toastr) {
        this.reportesService = reportesService;
        this.fechaService = fechaService;
        this.toastr = toastr;
        this.reportes = [];
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.displayNameMap = new Map([
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.XSmall, 'XSmall'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Small, 'Small'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Medium, 'Medium'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Large, 'Large'],
        ]);
        breakpointObserver
            .observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Large,
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroyed))
            .subscribe(result => {
            var _a;
            for (const query of Object.keys(result.breakpoints)) {
                if (result.breakpoints[query]) {
                    this.currentScreenSize = (_a = this.displayNameMap.get(query)) !== null && _a !== void 0 ? _a : 'Unknown';
                }
            }
            if (this.currentScreenSize == 'XSmall') {
                this.gridColums = 1;
                this.gridRows = "10:6";
            }
            else if (this.currentScreenSize == 'Small') {
                this.gridColums = 2;
                this.gridRows = "10:12";
            }
            else if (this.currentScreenSize == 'Medium') {
                this.gridColums = 4;
                this.alturaDescripcion = '4em';
                this.gridRows = "8:10";
            }
            else if (this.currentScreenSize == 'Large') {
                this.gridColums = 5;
                this.gridRows = "5:5";
            }
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    ngOnInit() {
        this.getReportes();
        // this.registrarReportes(this.reportes);
    }
    getReportes() {
        this.reportesService.getReportes().subscribe(datos => {
            this.reportes = [];
            datos.forEach((reporte) => {
                this.reportes.push(Object.assign({ id: reporte.payload.doc.id }, reporte.payload.doc.data()));
                // reporte.codigo = reporte.id;
                // console.log(reporte.codigo," ",reporte.id)
            });
        });
    }
    formatearFecha(fecha) {
        return this.fechaService.formatearFecha(fecha);
    }
    reportesConsola() {
        console.log(this.reportes);
        this.toastr.info('Todos los reportes fueron escritos en consola.', 'Reportes en consola', {
            positionClass: 'toast-bottom-right'
        });
    }
}
InicioComponent.ɵfac = function InicioComponent_Factory(t) { return new (t || InicioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_reportes_service__WEBPACK_IMPORTED_MODULE_0__.ReportesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_fecha_service__WEBPACK_IMPORTED_MODULE_1__.FechaService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService)); };
InicioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InicioComponent, selectors: [["app-inicio"]], decls: 12, vars: 4, consts: [[3, "cols", "rowHeight"], [1, "reporte"], ["fxLayoutAlign", "start start", 1, "card"], [1, "reportes", 3, "click"], [4, "ngFor", "ngForOf"], ["fxLayoutAlign", "start start", 1, "card", "scroll"], [2, "display", "inline-block", "text-align", "right"], [1, "titulo"], [1, "descripcion"]], template: function InicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Total reportes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InicioComponent_Template_div_click_6_listener() { return ctx.reportesConsola(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Click en el n\u00FAmero de reportes para verlos en consola.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, InicioComponent_tr_11_Template, 11, 3, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("cols", ctx.gridColums);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("rowHeight", ctx.gridRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.reportes.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.reportes);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__.MatGridTile, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], styles: [".card[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%]{\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n.reportes[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 10% 8% 0 8%;\r\n    padding: 60px 30px 0px 30px;\r\n    height: 80px;\r\n    font-size: 100px;\r\n    background-color: rgba(243, 243, 19, 0.582);\r\n    border-radius: 50px;\r\n    cursor: pointer;\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n}\r\n\r\n.scroll[_ngcontent-%COMP%]{\r\n      overflow-y: auto;\r\n  }\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n      max-height: 90%;\r\n      max-width: 100%;\r\n      min-width: 90%;\r\n      min-height: 90%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFRTtNQUNJLGdCQUFnQjtFQUNwQjs7QUFFQTtJQUNFLGFBQWE7TUFDWCxlQUFlO01BQ2YsZUFBZTtNQUNmLGNBQWM7TUFDZCxlQUFlO0VBQ25COztBQUlGOztrQkFFa0I7O0FBQ2Q7R0FDRCIsImZpbGUiOiJpbmljaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5yZXBvcnRlc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTAlIDglIDAgOCU7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDMwcHggMHB4IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDI0MywgMTksIDAuNTgyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50aXR1bG97XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiAgLnNjcm9sbHtcclxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcblxyXG4gIG1hdC1jYXJke1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi13aWR0aDogOTAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiA5MCU7XHJcbiAgfVxyXG5cclxuIFxyXG5cclxuLyogXHJcbi5kZXNjcmlwY2lvbntcclxuICAgIGhlaWdodDogOWVtOyAqL1xyXG4gICAgLyogb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59ICovIl19 */"] });


/***/ }),

/***/ 9340:
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/mapa/mapa.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaComponent": () => (/* binding */ MapaComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_dashboard_mapa_modal_reporte_modal_reporte_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/dashboard/mapa/modal-reporte/modal-reporte.component */ 5878);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _services_reportes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/reportes.service */ 5334);
/* harmony import */ var _services_fecha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fecha.service */ 2777);






const _c0 = ["mapElement"];
class MapaComponent {
    constructor(dialog, reportesService, fecha) {
        this.dialog = dialog;
        this.reportesService = reportesService;
        this.fecha = fecha;
        this.reportes = [];
        this.marcadores = [];
        this.image = "././assets/marcador.png";
        this.contadorMarcadores = 0;
    }
    ngAfterViewInit() {
        const posInicial = { lat: 10.997655, lng: -74.790784 };
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: posInicial,
            zoom: 19,
            disableDefaultUI: true,
            zoomControl: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                mapTypeIds: ["roadmap", "terrain"],
            },
            streetViewControl: false,
            fullscreenControl: false
        });
        google.maps.event.addListener(this.map, "click", (event) => {
            this.crearMarcador(event.latLng, this.map);
        });
    }
    crearMarcador(location, map) {
        const marcador = new google.maps.Marker({
            position: location,
            map: map,
            icon: "././assets/marcadorRojo.png",
            animation: google.maps.Animation.DROP,
        });
        // ELIMINAMOS ESPACIOS Y PARANTESIS DEL STRING DE UBICACION Y CONVERTIMOS EN ARRAY
        // PARA LUEGO CONVERTIRLO UN OBJETO DE TIPO UBICACION 
        const ubic = ((("" + marcador.getPosition()).slice(1, -1)).replace(/\s/g, "")).split(",");
        const ubicacion = {
            lat: ubic[0],
            lng: ubic[1]
        };
        google.maps.event.addListener(marcador, "click", () => {
            const fecha = moment__WEBPACK_IMPORTED_MODULE_1__().format('lll');
            const fechaActual = Date.parse(fecha);
            this.openDialog("", "", fechaActual, "", ubicacion, marcador);
            marcador.setMap(null);
        });
    }
    // METODOS
    openDialog(id, codigo, fecha, descripcion, ubicacion, marcador) {
        const modalRef = this.dialog.open(src_app_components_dashboard_mapa_modal_reporte_modal_reporte_component__WEBPACK_IMPORTED_MODULE_0__.ModalReporteComponent, {
            data: [id, codigo, fecha, descripcion, ubicacion],
        });
    }
    generarMarcadores(id, codigo, fecha, descripcion, ubicacion) {
        const posicionMarcador = { lat: parseFloat(ubicacion.lat), lng: parseFloat(ubicacion.lng) };
        const marcador = new google.maps.Marker({
            position: posicionMarcador,
            map: this.map,
            icon: "././assets/marcador.png",
            animation: google.maps.Animation.DROP,
        });
        this.marcadores.push(marcador);
        google.maps.event.addListener(marcador, "click", () => {
            this.openDialog(id, codigo, fecha, descripcion, ubicacion, marcador);
        });
    }
    getReportes() {
        this.reportesService.getReportes().subscribe(datos => {
            this.reportes = [];
            datos.forEach((reporte) => {
                this.reportes.push(Object.assign({ id: reporte.payload.doc.id }, reporte.payload.doc.data()));
                this.contadorMarcadores++;
            });
            this.eliminarMarcadores();
            this.reportes.forEach(reporte => {
                this.generarMarcadores(reporte.id, reporte.codigo, reporte.fecha, reporte.descripcion, reporte.ubicacion);
            });
        });
    }
    eliminarMarcadores() {
        this.marcadores.forEach((marcador) => {
            marcador.setMap(null);
        });
    }
    ngOnInit() {
        this.getReportes();
    }
}
MapaComponent.ɵfac = function MapaComponent_Factory(t) { return new (t || MapaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_reportes_service__WEBPACK_IMPORTED_MODULE_2__.ReportesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_fecha_service__WEBPACK_IMPORTED_MODULE_3__.FechaService)); };
MapaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MapaComponent, selectors: [["app-mapa"]], viewQuery: function MapaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    } }, decls: 2, vars: 0, consts: [[1, "map"], ["mapElement", ""]], template: function MapaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: [".map[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 88.8vh;\r\n}\r\n\r\n.mat-dialog-container[_ngcontent-%COMP%]{\r\n  width: 350px;\r\n  height: auto;\r\n}\r\n\r\n.descripcionReporte[_ngcontent-%COMP%]{\r\n  width: 300px;\r\n  height: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2QiLCJmaWxlIjoibWFwYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODguOHZoO1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmRlc2NyaXBjaW9uUmVwb3J0ZXtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59Il19 */"] });


/***/ }),

/***/ 5878:
/*!************************************************************************************!*\
  !*** ./src/app/components/dashboard/mapa/modal-reporte/modal-reporte.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalReporteComponent": () => (/* binding */ ModalReporteComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_components_services_reportes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/services/reportes.service */ 5334);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 3315);
/* harmony import */ var src_app_components_services_fecha_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/services/fecha.service */ 2777);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);













function ModalReporteComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eviar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.formulario.valid);
} }
function ModalReporteComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalReporteComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.eliminarReporte(ctx_r3.datosReporte.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ModalReporteComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalReporteComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.editarReporte(ctx_r5.datosReporte.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ModalReporteComponent {
    constructor(fb, router, modalRef, reporteService, toastr, fechaService, 
    // private mapaComponent: MapaComponent,
    datos) {
        this.fb = fb;
        this.router = router;
        this.modalRef = modalRef;
        this.reporteService = reporteService;
        this.toastr = toastr;
        this.fechaService = fechaService;
        this.datos = datos;
        this.formulario = this.fb.group({
            id: [],
            codigo: [],
            fechaReporte: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
        this.datosReporte = {
            id: datos[0],
            codigo: datos[1],
            fecha: datos[2],
            descripcion: datos[3],
            ubicacion: datos[4],
            marcador: datos[5]
        };
    }
    ngOnInit() {
        this.formatearFecha();
        this.existeReporteMethod();
    }
    agregarReporte() {
        // this.router.navigate(['./dashboard/mapa']);
        const reporte = {
            fecha: this.datosReporte.fecha,
            descripcion: this.formulario.value.descripcion,
            ubicacion: this.datosReporte.ubicacion
        };
        this.reporteService.agregarReporte(reporte).then(() => {
            this.toastr.success('El reporte fué guardado con éxito.', 'Reporte guardado', {
                positionClass: 'toast-bottom-right'
            });
        }).catch(error => {
            console.log(error);
        });
        this.formulario.reset();
    }
    formatearFecha() {
        this.fechaFormulario = this.fechaService.formatearFecha(this.datosReporte.fecha);
    }
    eliminarReporte(id) {
        this.reporteService.eliminarReporte(id).then(() => {
            this.toastr.error('El reporte fué eliminado con exito', 'Reporte eliminado', {
                positionClass: 'toast-bottom-right',
            });
        }).catch(error => {
            console.log(error);
        });
    }
    editarReporte(id) {
        const reporte = {
            descripcion: this.formulario.value.descripcion,
            fecha: this.datosReporte.fecha,
        };
        this.reporteService.actualizarReporte(id, reporte).then(() => {
            this.toastr.info('El reporte fue modificado con exito', 'Reporte modificado', {
                positionClass: 'toast-bottom-right'
            });
        });
    }
    existeReporteMethod() {
        if (this.datosReporte.id == "") {
            this.existeReporte = false;
        }
        else {
            this.existeReporte = true;
        }
    }
}
ModalReporteComponent.ɵfac = function ModalReporteComponent_Factory(t) { return new (t || ModalReporteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_components_services_reportes_service__WEBPACK_IMPORTED_MODULE_0__.ReportesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_components_services_fecha_service__WEBPACK_IMPORTED_MODULE_1__.FechaService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
ModalReporteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ModalReporteComponent, selectors: [["app-modal-reporte"]], decls: 23, vars: 7, consts: [["mat-dialog-content", "", 1, "capturaReporte"], ["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "descripcionReporte"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "formControlName", "codigo", "readonly", "", "placeholder", "Por asignaci\u00F3n autom\u00E1tica", 1, "inputCodigo", 3, "ngModel", "ngModelChange"], ["matInput", "", "formControlName", "fechaReporte", "readonly", "", 1, "inputCodigo", 3, "ngModel", "ngModelChange"], ["matInput", "", "formControlName", "descripcion", 1, "inputDescripcion", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", "", 1, "contenedorBotones"], ["mat-raised-button", "", "color", "warn", "mat-dialog-close", "", "type", "button"], ["mat-raised-button", "", "color", "primary", "type", "submit", "mat-dialog-close", "", 3, "disabled", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", "mat-dialog-close", "", "type", "button", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "button", "mat-dialog-close", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", "mat-dialog-close", "", 3, "disabled"], ["mat-raised-button", "", "color", "warn", "mat-dialog-close", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "button", "mat-dialog-close", "", 3, "click"]], template: function ModalReporteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Reporte");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ModalReporteComponent_Template_form_ngSubmit_4_listener() { return ctx.agregarReporte(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "C\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalReporteComponent_Template_input_ngModelChange_8_listener($event) { return ctx.datosReporte.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Fecha del reporte");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalReporteComponent_Template_input_ngModelChange_12_listener($event) { return ctx.fechaFormulario = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalReporteComponent_Template_textarea_ngModelChange_16_listener($event) { return ctx.datosReporte.descripcion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ModalReporteComponent_button_20_Template, 2, 1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ModalReporteComponent_button_21_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ModalReporteComponent_button_22_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.datosReporte.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.fechaFormulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.datosReporte.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.existeReporte);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.existeReporte);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.existeReporte);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf], styles: [".capturaReporte[_ngcontent-%COMP%]{\r\n    width: 255px;\r\n    height: 100vh;\r\n    text-align: center;\r\n    padding: 0;\r\n    margin: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.descripcionReporte[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 90%;\r\n    padding: 0;\r\n    margin: 0;\r\n    background-color: rgba(255, 255, 255, 0.219);\r\n    \r\n}\r\n\r\n.inputCodigo[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n}\r\n\r\n.inputDescripcion[_ngcontent-%COMP%]{\r\n    height: 16vh;\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n}\r\n\r\n.contenedorBotones[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    margin: 0;\r\n    display: flex;\r\n    float: right;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    margin-left: 17px;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLXJlcG9ydGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULDRDQUE0QztJQUM1QyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6Im1vZGFsLXJlcG9ydGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXB0dXJhUmVwb3J0ZXtcclxuICAgIHdpZHRoOiAyNTVweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmRlc2NyaXBjaW9uUmVwb3J0ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxOSk7XHJcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG59XHJcblxyXG4uaW5wdXRDb2RpZ297XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnB1dERlc2NyaXBjaW9ue1xyXG4gICAgaGVpZ2h0OiAxNnZoO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVuZWRvckJvdG9uZXN7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuaDF7XHJcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcclxufVxyXG5cclxucHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 2777:
/*!******************************************************!*\
  !*** ./src/app/components/services/fecha.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FechaService": () => (/* binding */ FechaService)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class FechaService {
    constructor() { }
    formatearFecha(fecha) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(fecha).format('L - ' + 'LT');
    }
    desformatearFecha(fecha) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(fecha).format('L - ' + 'LT');
    }
    fechaActual() {
        return moment__WEBPACK_IMPORTED_MODULE_0__().format('L - ' + 'LT');
    }
}
FechaService.ɵfac = function FechaService_Factory(t) { return new (t || FechaService)(); };
FechaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FechaService, factory: FechaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5334:
/*!*********************************************************!*\
  !*** ./src/app/components/services/reportes.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportesService": () => (/* binding */ ReportesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 6303);


class ReportesService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    agregarReporte(reporte) {
        return this.firestore.collection('Reportes').add(reporte);
    }
    getReportes() {
        const col = this.firestore.collection('Reportes', ref => ref.orderBy('fecha', 'asc')).snapshotChanges();
        return col;
    }
    eliminarReporte(id) {
        return this.firestore.collection('Reportes').doc(id).delete();
    }
    actualizarReporte(id, data) {
        return this.firestore.collection('Reportes').doc(id).update(data);
    }
}
ReportesService.ɵfac = function ReportesService_Factory(t) { return new (t || ReportesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
ReportesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReportesService, factory: ReportesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4065:
/*!****************************************************!*\
  !*** ./src/app/components/shared/shared.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ 3616);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ 5937);
/* harmony import */ var _dashboard_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dashboard/inicio/inicio.component */ 2333);
/* harmony import */ var _dashboard_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard/mapa/mapa.component */ 9340);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ 6883);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);

// Material














class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__.MatSliderModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__.MatGridListModule,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__.LayoutModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        ], _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__.MatSliderModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__.MatGridListModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__.LayoutModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_dashboard_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_0__.InicioComponent,
        _dashboard_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_1__.MapaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__.MatSliderModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__.MatGridListModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__.LayoutModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__.MatSliderModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__.MatGridListModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__.LayoutModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBbONVhyE8BUnmDDrpA0WkLT2IXBP0imaY",
        authDomain: "ludyreport-18d91.firebaseapp.com",
        projectId: "ludyreport-18d91",
        storageBucket: "ludyreport-18d91.appspot.com",
        messagingSenderId: "242950807138",
        appId: "1:242950807138:web:f48c2c59849994bd157b3b"
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 2275,
	"./af.js": 2275,
	"./ar": 857,
	"./ar-dz": 1218,
	"./ar-dz.js": 1218,
	"./ar-kw": 4754,
	"./ar-kw.js": 4754,
	"./ar-ly": 6680,
	"./ar-ly.js": 6680,
	"./ar-ma": 2178,
	"./ar-ma.js": 2178,
	"./ar-sa": 6522,
	"./ar-sa.js": 6522,
	"./ar-tn": 5682,
	"./ar-tn.js": 5682,
	"./ar.js": 857,
	"./az": 164,
	"./az.js": 164,
	"./be": 9774,
	"./be.js": 9774,
	"./bg": 947,
	"./bg.js": 947,
	"./bm": 1832,
	"./bm.js": 1832,
	"./bn": 9650,
	"./bn-bd": 4477,
	"./bn-bd.js": 4477,
	"./bn.js": 9650,
	"./bo": 6005,
	"./bo.js": 6005,
	"./br": 8492,
	"./br.js": 8492,
	"./bs": 534,
	"./bs.js": 534,
	"./ca": 2061,
	"./ca.js": 2061,
	"./cs": 4737,
	"./cs.js": 4737,
	"./cv": 1167,
	"./cv.js": 1167,
	"./cy": 7996,
	"./cy.js": 7996,
	"./da": 9528,
	"./da.js": 9528,
	"./de": 5915,
	"./de-at": 9430,
	"./de-at.js": 9430,
	"./de-ch": 7978,
	"./de-ch.js": 7978,
	"./de.js": 5915,
	"./dv": 3426,
	"./dv.js": 3426,
	"./el": 6616,
	"./el.js": 6616,
	"./en-au": 3816,
	"./en-au.js": 3816,
	"./en-ca": 2162,
	"./en-ca.js": 2162,
	"./en-gb": 3305,
	"./en-gb.js": 3305,
	"./en-ie": 1954,
	"./en-ie.js": 1954,
	"./en-il": 3060,
	"./en-il.js": 3060,
	"./en-in": 9923,
	"./en-in.js": 9923,
	"./en-nz": 3540,
	"./en-nz.js": 3540,
	"./en-sg": 6505,
	"./en-sg.js": 6505,
	"./eo": 1907,
	"./eo.js": 1907,
	"./es": 6640,
	"./es-do": 1246,
	"./es-do.js": 1246,
	"./es-mx": 6131,
	"./es-mx.js": 6131,
	"./es-us": 6430,
	"./es-us.js": 6430,
	"./es.js": 6640,
	"./et": 2551,
	"./et.js": 2551,
	"./eu": 2711,
	"./eu.js": 2711,
	"./fa": 2109,
	"./fa.js": 2109,
	"./fi": 3390,
	"./fi.js": 3390,
	"./fil": 7860,
	"./fil.js": 7860,
	"./fo": 8216,
	"./fo.js": 8216,
	"./fr": 9291,
	"./fr-ca": 8527,
	"./fr-ca.js": 8527,
	"./fr-ch": 8407,
	"./fr-ch.js": 8407,
	"./fr.js": 9291,
	"./fy": 7054,
	"./fy.js": 7054,
	"./ga": 9540,
	"./ga.js": 9540,
	"./gd": 3917,
	"./gd.js": 3917,
	"./gl": 4198,
	"./gl.js": 4198,
	"./gom-deva": 6245,
	"./gom-deva.js": 6245,
	"./gom-latn": 8868,
	"./gom-latn.js": 8868,
	"./gu": 9652,
	"./gu.js": 9652,
	"./he": 9019,
	"./he.js": 9019,
	"./hi": 2040,
	"./hi.js": 2040,
	"./hr": 3402,
	"./hr.js": 3402,
	"./hu": 9322,
	"./hu.js": 9322,
	"./hy-am": 7609,
	"./hy-am.js": 7609,
	"./id": 1894,
	"./id.js": 1894,
	"./is": 8275,
	"./is.js": 8275,
	"./it": 3053,
	"./it-ch": 4378,
	"./it-ch.js": 4378,
	"./it.js": 3053,
	"./ja": 6176,
	"./ja.js": 6176,
	"./jv": 679,
	"./jv.js": 679,
	"./ka": 2726,
	"./ka.js": 2726,
	"./kk": 2953,
	"./kk.js": 2953,
	"./km": 6957,
	"./km.js": 6957,
	"./kn": 9181,
	"./kn.js": 9181,
	"./ko": 7148,
	"./ko.js": 7148,
	"./ku": 7752,
	"./ku.js": 7752,
	"./ky": 5675,
	"./ky.js": 5675,
	"./lb": 1263,
	"./lb.js": 1263,
	"./lo": 5746,
	"./lo.js": 5746,
	"./lt": 9655,
	"./lt.js": 9655,
	"./lv": 8753,
	"./lv.js": 8753,
	"./me": 4054,
	"./me.js": 4054,
	"./mi": 1573,
	"./mi.js": 1573,
	"./mk": 202,
	"./mk.js": 202,
	"./ml": 8523,
	"./ml.js": 8523,
	"./mn": 9794,
	"./mn.js": 9794,
	"./mr": 6681,
	"./mr.js": 6681,
	"./ms": 6975,
	"./ms-my": 9859,
	"./ms-my.js": 9859,
	"./ms.js": 6975,
	"./mt": 3691,
	"./mt.js": 3691,
	"./my": 5152,
	"./my.js": 5152,
	"./nb": 7607,
	"./nb.js": 7607,
	"./ne": 1526,
	"./ne.js": 1526,
	"./nl": 6368,
	"./nl-be": 3496,
	"./nl-be.js": 3496,
	"./nl.js": 6368,
	"./nn": 8420,
	"./nn.js": 8420,
	"./oc-lnc": 1906,
	"./oc-lnc.js": 1906,
	"./pa-in": 4504,
	"./pa-in.js": 4504,
	"./pl": 4721,
	"./pl.js": 4721,
	"./pt": 4645,
	"./pt-br": 4548,
	"./pt-br.js": 4548,
	"./pt.js": 4645,
	"./ro": 1977,
	"./ro.js": 1977,
	"./ru": 6042,
	"./ru.js": 6042,
	"./sd": 8849,
	"./sd.js": 8849,
	"./se": 7739,
	"./se.js": 7739,
	"./si": 5546,
	"./si.js": 5546,
	"./sk": 2449,
	"./sk.js": 2449,
	"./sl": 3086,
	"./sl.js": 3086,
	"./sq": 3139,
	"./sq.js": 3139,
	"./sr": 607,
	"./sr-cyrl": 63,
	"./sr-cyrl.js": 63,
	"./sr.js": 607,
	"./ss": 131,
	"./ss.js": 131,
	"./sv": 1665,
	"./sv.js": 1665,
	"./sw": 5642,
	"./sw.js": 5642,
	"./ta": 3622,
	"./ta.js": 3622,
	"./te": 4825,
	"./te.js": 4825,
	"./tet": 8336,
	"./tet.js": 8336,
	"./tg": 9238,
	"./tg.js": 9238,
	"./th": 9463,
	"./th.js": 9463,
	"./tk": 9986,
	"./tk.js": 9986,
	"./tl-ph": 9672,
	"./tl-ph.js": 9672,
	"./tlh": 43,
	"./tlh.js": 43,
	"./tr": 1212,
	"./tr.js": 1212,
	"./tzl": 110,
	"./tzl.js": 110,
	"./tzm": 482,
	"./tzm-latn": 8309,
	"./tzm-latn.js": 8309,
	"./tzm.js": 482,
	"./ug-cn": 2495,
	"./ug-cn.js": 2495,
	"./uk": 4157,
	"./uk.js": 4157,
	"./ur": 5826,
	"./ur.js": 5826,
	"./uz": 4141,
	"./uz-latn": 3662,
	"./uz-latn.js": 3662,
	"./uz.js": 4141,
	"./vi": 2607,
	"./vi.js": 2607,
	"./x-pseudo": 6460,
	"./x-pseudo.js": 6460,
	"./yo": 2948,
	"./yo.js": 2948,
	"./zh-cn": 2658,
	"./zh-cn.js": 2658,
	"./zh-hk": 9352,
	"./zh-hk.js": 9352,
	"./zh-mo": 8274,
	"./zh-mo.js": 8274,
	"./zh-tw": 8451,
	"./zh-tw.js": 8451
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map