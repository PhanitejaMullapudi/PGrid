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
var PGDragHandlerComponent = (function () {
    function PGDragHandlerComponent(el, cdRef) {
        this.el = el;
        this.cdRef = cdRef;
        this.SyncHandlers = new core_1.EventEmitter();
        this.PGMousedown = new core_1.EventEmitter();
        this.PGDragstart = new core_1.EventEmitter();
        this.PGDragend = new core_1.EventEmitter();
        this.PGMouseup = new core_1.EventEmitter();
        this.domElement = this.el;
    }
    PGDragHandlerComponent.prototype.ngAfterViewInit = function () {
        this.setIntWidths();
    };
    PGDragHandlerComponent.prototype.setIntWidths = function () {
        this.SyncHandlers.emit();
        this.cdRef.detectChanges();
    };
    PGDragHandlerComponent.prototype.onMousedown = function (event, col, index) {
        this.PGMousedown.emit({ event: event, Column: col, index: index });
    };
    PGDragHandlerComponent.prototype.onDragstart = function (event, col, index) {
        this.PGDragstart.emit({ event: event, Column: col, index: index });
    };
    PGDragHandlerComponent.prototype.onDragend = function (event, col, index) {
        this.PGDragend.emit({ event: event, Column: col, index: index });
    };
    PGDragHandlerComponent.prototype.onMouseup = function (event, col, index) {
        this.PGMouseup.emit({ event: event, Column: col, index: index });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PGDragHandlerComponent.prototype, "Grips", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PGDragHandlerComponent.prototype, "GridID", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PGDragHandlerComponent.prototype, "GridWidth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PGDragHandlerComponent.prototype, "GridHeight", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PGDragHandlerComponent.prototype, "SyncHandlers", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PGDragHandlerComponent.prototype, "PGMousedown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PGDragHandlerComponent.prototype, "PGDragstart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PGDragHandlerComponent.prototype, "PGDragend", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PGDragHandlerComponent.prototype, "PGMouseup", void 0);
    PGDragHandlerComponent = __decorate([
        core_1.Component({
            selector: 'PGdragHandler',
            templateUrl: "app/CustomGrid/PGdragHandler.html",
            styleUrls: ['app/CustomGrid/PGrid.css'],
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ChangeDetectorRef])
    ], PGDragHandlerComponent);
    return PGDragHandlerComponent;
}());
exports.PGDragHandlerComponent = PGDragHandlerComponent;
//# sourceMappingURL=PGridDragHandler.js.map