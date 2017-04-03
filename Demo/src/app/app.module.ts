import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PGridComponent, PGDragHandlerComponent } from './CustomGrid/PGridComponent';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule,FormsModule],
  declarations: [AppComponent, PGridComponent, PGDragHandlerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
