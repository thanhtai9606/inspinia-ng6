import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { MainViewComponent } from './main-view.component';

@NgModule({
  declarations: [MainViewComponent],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class MainViewModule { }
