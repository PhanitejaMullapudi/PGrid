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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var PGridOptions_1 = require('./PGridOptions');
var PGHGrips_1 = require('./PGHGrips');
var PGridComponent = (function () {
    function PGridComponent(el, cdRef, renderer) {
        this.el = el;
        this.cdRef = cdRef;
        this.renderer = renderer;
        this.PGHGrips = [];
        this.domElement = el;
    }
    PGridComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.GridColums.forEach(function (col) {
            _this.PGHGrips.push(new PGHGrips_1.PGHGrip(col.ColumnName, 0));
        });
        this.Table = this.domElement.nativeElement.querySelector('#' + this.Options.GridID);
        this.setIntWidths();
    };
    PGridComponent.prototype.setIntWidths = function () {
        this.OffsetWidth = this.Table.offsetWidth;
        this.OffsetHeight = this.Table.offsetHeight;
        var tempdom = this.domElement;
        this.ShowResizer = this.Options.isResizable;
        this.cdRef.detectChanges();
    };
    PGridComponent.prototype.onSyncHandlers = function () {
        var _this = this;
        var left = 0;
        this.PGHGrips.forEach(function (grip) {
            var column = _this.domElement.nativeElement.querySelector('#' + _this.Options.GridID + '_' + grip.ColumnName);
            var table = _this.domElement.nativeElement.querySelector('#' + _this.Options.GridID);
            var cellSpacing = isNaN(parseInt(table.cellSpacing)) ? 0 : parseInt(table.cellSpacing);
            left = left + column.offsetWidth + cellSpacing;
            grip.OffsetLeft = left;
        });
    };
    PGridComponent.prototype.onMousedown = function (Obj) {
        this.DragedGrip = this.domElement.nativeElement.querySelector('#RH' + this.Options.GridID + '_' + Obj.Column.ColumnName);
        this.DragedGrip.className += ' JCLRgripDrag';
    };
    PGridComponent.prototype.onMouseup = function (Obj) {
        var classname = this.DragedGrip.className;
        this.DragedGrip.className = classname.replace("JCLRgripDrag", "");
    };
    PGridComponent.prototype.onDragend = function (Obj) {
        this.endX = Obj.event.clientX;
        var classname = this.DragedGrip.className;
        this.DragedGrip.className = classname.replace("JCLRgripDrag", "");
        var CurrCol = this.getDColumn(Obj.index);
        var effectivecol;
        if (this.GridColums.length - 1 == Obj.index)
            effectivecol = this.getDColumn(Obj.index - 1);
        else
            effectivecol = this.getDColumn(Obj.index + 1);
        var diffX = this.getOptimualDiff(Obj.index);
        var currwidth = window.getComputedStyle(CurrCol).width.replace("px", "");
        var effwidth = window.getComputedStyle(effectivecol).width.replace("px", "");
        var modCurWidth = parseInt(currwidth) + diffX;
        var modeffeWidth = parseInt(effwidth) - diffX;
        this.renderer.setElementStyle(CurrCol, "width", modCurWidth + 'px');
        this.renderer.setElementStyle(effectivecol, "width", modeffeWidth + 'px');
        this.onSyncHandlers();
    };
    PGridComponent.prototype.onDragstart = function (Obj) {
        this.startX = Obj.event.clientX;
    };
    PGridComponent.prototype.getOptimualDiff = function (Dragindex) {
        var CurrCol = this.getDColumn(Dragindex);
        var effectivecol;
        var diff = this.endX - this.startX;
        if (this.GridColums.length - 1 == Dragindex)
            effectivecol = this.getDColumn(Dragindex - 1);
        else
            effectivecol = this.getDColumn(Dragindex + 1);
        if (effectivecol.offsetWidth - diff < this.Options.ColMinWidth) {
            diff = effectivecol.offsetWidth - this.Options.ColMinWidth;
        }
        if (CurrCol.offsetWidth + diff < this.Options.ColMinWidth) {
            diff = this.Options.ColMinWidth - CurrCol;
        }
        return diff;
    };
    PGridComponent.prototype.getDColumn = function (index) {
        return this.domElement.nativeElement.querySelector('#' + this.Options.GridID + '_' + this.PGHGrips[index].ColumnName);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', PGridOptions_1.PGridOptions)
    ], PGridComponent.prototype, "Options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PGridComponent.prototype, "GridColums", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PGridComponent.prototype, "Rows", void 0);
    PGridComponent = __decorate([
        core_1.Component({
            selector: 'PGrid',
            templateUrl: "app/CustomGrid/PGrid.html",
            styleUrls: ['app/CustomGrid/PGrid.css'],
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ChangeDetectorRef, core_1.Renderer])
    ], PGridComponent);
    return PGridComponent;
}());
exports.PGridComponent = PGridComponent;
__export(require('./PGridOptions'));
__export(require('./PGridColumn'));
__export(require('./PGridDragHandler'));
//# sourceMappingURL=PGridComponent.js.map