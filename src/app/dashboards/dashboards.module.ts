import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashv1Component } from './dashv1/dashv1.component';
import { Dashv2Component } from './dashv2/dashv2.component';
import { BasedashComponent } from './basedash/basedash.component';

@NgModule({
  declarations: [Dashv1Component, Dashv2Component, BasedashComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardsModule { }
