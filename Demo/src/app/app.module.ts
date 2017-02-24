import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PGridComponent, PGDragHandlerComponent } from './CustomGrid/PGridComponent';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, PGridComponent, PGDragHandlerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
