export class PGridOptions {
    ShowSelection:boolean;
    ShowComandButtons:boolean;
    isResizable: boolean;
    GridID: string;
    GridWidth: string;
    ColMinWidth: number;
    constructor(isResizable: boolean, GridID: string, GridWidth: string, ColMinWidth: number = 30,ShowSelection:boolean = false,ShowComandButtons:boolean= false) {
        this.isResizable = isResizable;
        this.GridID = GridID;
        this.GridWidth = GridWidth;
        this.ColMinWidth = ColMinWidth;
    }
}