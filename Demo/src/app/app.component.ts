import { Component } from '@angular/core';
import { PGridOptions, PGridColumn } from './CustomGrid/PGridComponent';

@Component({
  selector: 'my-app',
  templateUrl: `./app-component.html`,

})
export class AppComponent {
  name = 'Angular';
  gridOptions: PGridOptions = new PGridOptions(true, "testTabe", "100%");

  girdColumns: Array<PGridColumn> = new Array<PGridColumn>(
    { ColumnName: "Header1", HeaderName: "Header 1" },
    { ColumnName: "Header2", HeaderName: "Header 2" },
    { ColumnName: "Header3", HeaderName: "Header 3" },
    { ColumnName: "Header4", HeaderName: "Header 4" },
    { ColumnName: "Header5", HeaderName: "Header 5" });

  gridRows: Array<any> = [{ "Header1": "Text 1", "Header2": "Text 2", "Header3": "Text 3", "Header4": "Text 4", "Header5": "Text 5" },
  { "Header1": "Text 1", "Header2": "Text 2", "Header3": "Text 3", "Header4": "Text 4", "Header5": "Text 5" },
  { "Header1": "Text 1", "Header2": "Text 2", "Header3": "Text 3", "Header4": "Text 4", "Header5": "Text 5" },
  { "Header1": "Text 1", "Header2": "Text 2", "Header3": "Text 3", "Header4": "Text 4", "Header5": "Text 5" }];


}
