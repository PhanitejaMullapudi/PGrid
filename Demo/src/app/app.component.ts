import { Component, OnInit } from '@angular/core';
import { PGridOptions, PGridColumn } from './CustomGrid/PGridComponent';

@Component({
  selector: 'my-app',
  templateUrl: `./app-component.html`,

})
export class AppComponent implements OnInit {
  name = 'Angular';
  gridRows: Array<any> = [];
  ngOnInit() {
    for (let i = 0; i < 20; i++) {
      this.gridRows.push({ "Header1": "Text 1", "Header2": "Text 2", "Header3": "Text 3", "Header4": "Text 4", "Header5": "Text 5" })
    }
  }
  resizableGrid: PGridOptions = new PGridOptions(true, "ResizableGrid", "100%", 30, true, true, false);
  ScrolableGrid: PGridOptions = new PGridOptions(false, "ScrolableGrid", "100%", 30, true, true, true);
  SRGrid: PGridOptions = new PGridOptions(true, "SRGrid", "100%", 30, true, true, true);
  
  girdColumns: Array<PGridColumn> = new Array<PGridColumn>(
    { ColumnName: "Header1", HeaderName: "Header 1" },
    { ColumnName: "Header2", HeaderName: "Header 2" },
    { ColumnName: "Header3", HeaderName: "Header 3" },
    { ColumnName: "Header4", HeaderName: "Header 4" },
    { ColumnName: "Header5", HeaderName: "Header 5" });

}
