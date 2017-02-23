export class PGridOptions {
    isResizable: boolean;
    GridID: string;
    GridWidth: string;
    ColMinWidth: number;
    constructor(isResizable: boolean, GridID: string, GridWidth: string, ColMinWidth: number = 30) {
        this.isResizable = isResizable;
        this.GridID = GridID;
        this.GridWidth = GridWidth;
        this.ColMinWidth = ColMinWidth;
    }
}