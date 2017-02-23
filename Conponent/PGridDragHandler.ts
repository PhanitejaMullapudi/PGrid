import { Component, ElementRef, HostListener, EventEmitter, AfterViewInit, Input, Output, Injectable, ChangeDetectorRef } from '@angular/core';
import { PGHGrip } from './PGHGrips'

@Component({
    selector: 'PGdragHandler',
    templateUrl: `app/CustomGrid/PGdragHandler.html`,
    styleUrls: ['app/CustomGrid/PGrid.css'],
})
export class PGDragHandlerComponent implements AfterViewInit {
    domElement: ElementRef
    width: string;

    constructor(private el: ElementRef, private cdRef: ChangeDetectorRef) {
        this.domElement = this.el
    }

    @Input()
    Grips: Array<PGHGrip>;

    @Input()
    GridID: string;

    @Input()
    GridWidth: string;

    @Input()
    GridHeight: string;

    @Output()
    SyncHandlers: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    PGMousedown: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    PGDragstart: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    PGDragend: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    PGMouseup: EventEmitter<any> = new EventEmitter<any>();

    ngAfterViewInit() {
        this.setIntWidths();
    }

    setIntWidths() {
        this.SyncHandlers.emit();
        this.cdRef.detectChanges();
    }


    onMousedown(event: any, col: PGHGrip, index: number) {
        this.PGMousedown.emit({ event: event, Column: col, index: index });
    }

    onDragstart(event: any, col: PGHGrip, index: number) {
        this.PGDragstart.emit({ event: event, Column: col, index: index });
    }

    onDragend(event: any, col: PGHGrip, index: number) {
        this.PGDragend.emit({ event: event, Column: col, index: index });
    }
    
    onMouseup(event: any, col: PGHGrip, index: number) {
        this.PGMouseup.emit({ event: event, Column: col, index: index });
    }

}