export class PGridOptions {
    ShowSelection: boolean;
    ShowComandButtons: boolean;
    isResizable: boolean;
    GridID: string;
    GridWidth: string;
    ColMinWidth: number;
    isScrollable: boolean;
    NoRecordsLable:string;
    ScrollAreaHeight:string;
    DefaultRowSelectionClass:string;
    constructor(isResizable: boolean,
        GridID: string,
        GridWidth: string,
        ColMinWidth: number = 30,
        ShowSelection: boolean = false,
        ShowComandButtons: boolean = false,
        isScrollable: boolean = false,
        NoRecordsLable:string="No Records To Show",
        ScrollAreaHeight:string="300px",
        DefaultRowSelectionClass="SelectedBackground") 
        {
            this.isResizable = isResizable;
            this.GridID = GridID;
            this.GridWidth = GridWidth;
            this.ColMinWidth = ColMinWidth;
            this.ShowSelection = ShowSelection;
            this.ShowComandButtons = ShowComandButtons;
            this.isScrollable = isScrollable;
            this.NoRecordsLable = NoRecordsLable;
            this.ScrollAreaHeight = ScrollAreaHeight;
            this.DefaultRowSelectionClass = DefaultRowSelectionClass;
    }

}