"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PGridComponent_1 = require('./CustomGrid/PGridComponent');
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.gridOptions = new PGridComponent_1.PGridOptions(true, "testTabe", "100%");
        this.girdColumns = new Array({ ColumnName: "Header1", HeaderName: "Header 1" }, { ColumnName: "Header2", HeaderName: "Header 2" }, { ColumnName: "Header3", HeaderName: "Header 3" }, { ColumnName: "Header4", HeaderName: "Header 4" }, { ColumnName: "Header5", HeaderName: "Header 5" });
        this.gridRows = [{ "Header1": "Text 1", "Header2": "Text 2", "Header3": "Text 3", "Header4": "Text 4", "Header5": "Text 5" },
            { "Header1": "Text 1", "Header2": "Text 2", "Header3": "Text 3", "Header4": "Text 4", "Header5": "Text 5" },
            { "Header1": "Text 1", "Header2": "Text 2", "Header3": "Text 3", "Header4": "Text 4", "Header5": "Text 5" },
            { "Header1": "Text 1", "Header2": "Text 2", "Header3": "Text 3", "Header4": "Text 4", "Header5": "Text 5" }];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "app/app-component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map