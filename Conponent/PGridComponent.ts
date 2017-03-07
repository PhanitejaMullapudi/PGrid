import { Component, Input, AfterViewInit, ElementRef, ChangeDetectorRef, Renderer } from '@angular/core';

import { PGridOptions } from './PGridOptions';
import { PGridColumn } from './PGridColumn';
import { PGHGrip } from './PGHGrips'
import { CommonModule } from '@angular/common';


@Component({
    selector: 'PGrid',
    templateUrl: `./PGrid.html`,
    styleUrls: ['./PGrid.css'],
})
export class PGridComponent implements AfterViewInit {
    domElement: ElementRef;
    PGHGrips: Array<PGHGrip> = [];

    @Input()
    Options: PGridOptions;

    @Input()
    GridColums: Array<PGridColumn>;

    @Input()
    Rows: Array<any>;
    Table: any;

    constructor(private el: ElementRef, private cdRef: ChangeDetectorRef, public renderer: Renderer) {
        this.domElement = el;
    }

    ngAfterViewInit() {
        this.GridColums.forEach(col => {
            this.PGHGrips.push(new PGHGrip(col.ColumnName, 0))
        });
        this.Table = this.domElement.nativeElement.querySelector('#' + this.Options.GridID);
        this.setIntWidths();
    }



    private ShowResizer: boolean;
    private OffsetWidth: number;
    private OffsetHeight: number;
    private startX: number;
    private endX: number;
    private DragedGrip: any;
    private TotalCols: number;

    setIntWidths() {
        this.OffsetWidth = this.Table.offsetWidth;
        this.OffsetHeight = this.Table.offsetHeight;
        this.ShowResizer = this.Options.isResizable;
        let col = (this.Options.ShowSelection && this.Options.ShowComandButtons) ? 3 : (this.Options.ShowComandButtons) ? 2 : this.Options.ShowSelection ? 1 : 0;
        this.TotalCols = this.GridColums.length + col;
        this.cdRef.detectChanges();
    }

    onSyncHandlers() {
        let left: number = 0;
        let ExtraSpaceleft = 0;
        if (this.Options.ShowSelection) {
            ExtraSpaceleft = 30;
        }
        let i: number = 0;
        let ScrolSyncCol;
        this.PGHGrips.forEach(grip => {

            let column = this.domElement.nativeElement.querySelector('#' + this.Options.GridID + '_' + grip.ColumnName);
            let table = this.domElement.nativeElement.querySelector('#' + this.Options.GridID);

            if (this.Options.isScrollable)
                ScrolSyncCol = this.domElement.nativeElement.querySelector('#' + this.Options.GridID + '_0_' + grip.ColumnName);

            let cellSpacing: number = isNaN(parseInt(table.cellSpacing)) ? 0 : parseInt(table.cellSpacing);
            left = left + column.offsetWidth + cellSpacing;

            if (this.Options.isScrollable) {
                ScrolSyncCol.width = window.getComputedStyle(column).width
            }

            if (i == 0)
                left = left + ExtraSpaceleft;

            grip.OffsetLeft = left;
            i += 1;
        });
    }


    onMousedown(Obj: any) {
        this.DragedGrip = this.domElement.nativeElement.querySelector('#RH' + this.Options.GridID + '_' + Obj.Column.ColumnName);
        this.DragedGrip.className += ' JCLRgripDrag';
    }

    onMouseup(Obj: any) {
        let classname: string = this.DragedGrip.className;
        this.DragedGrip.className = classname.replace("JCLRgripDrag", "");
    }

    onDragend(Obj: any) {

        this.endX = Obj.event.clientX;
        let classname: string = this.DragedGrip.className;
        this.DragedGrip.className = classname.replace("JCLRgripDrag", "");

        let CurrCol = this.getDColumn(Obj.index);
        let effectivecol: any;

        if (this.GridColums.length - 1 == Obj.index)
            effectivecol = this.getDColumn(Obj.index - 1);
        else
            effectivecol = this.getDColumn(Obj.index + 1);

        let diffX = this.getOptimualDiff(Obj.index);

        let currwidth: string = window.getComputedStyle(CurrCol).width.replace("px", "");
        let effwidth: string = window.getComputedStyle(effectivecol).width.replace("px", "");

        let modCurWidth = parseInt(currwidth) + diffX;
        let modeffeWidth = parseInt(effwidth) - diffX;

        this.renderer.setElementStyle(CurrCol, "width", modCurWidth + 'px');
        this.renderer.setElementStyle(effectivecol, "width", modeffeWidth + 'px');

        this.onSyncHandlers();
    }

    onDragstart(Obj: any) {
        this.startX = Obj.event.clientX;
    }

    getOptimualDiff(Dragindex: number) {
        let CurrCol = this.getDColumn(Dragindex);
        let effectivecol: any;
        let diff: number = this.endX - this.startX;

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
    }

    getDColumn(index: number): any {
        return this.domElement.nativeElement.querySelector('#' + this.Options.GridID + '_' + this.PGHGrips[index].ColumnName);
    }

}

export * from './PGridOptions';
export * from './PGridColumn';
export * from './PGridDragHandler';