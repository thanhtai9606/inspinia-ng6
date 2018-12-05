import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from'@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import { BasicComponent } from './basic/basic.component';
import { BlankComponent } from './blank/blank.component';

import {NavigationModule} from '../navigation/navigation.module';
import {TopnavbarModule} from '../topnavbar/topnavbar.module';
import {FooterModule} from '../footer/footer.module';

@NgModule({
  declarations: [BasicComponent, BlankComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NavigationModule,
    TopnavbarModule,
    FooterModule,
    RouterModule
  ],
  exports:[BlankComponent,BasicComponent]
})
export class LayoutsModule { }
