import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from'@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
// App views
import {MainViewModule} from "./views/main-view/main-view.module";
import {MinorViewModule} from "./views/minor-view/minor-view.module";
import {LoginModule} from "./views/login/login.module";
import {RegisterModule} from "./views/register/register.module";
import { LayoutsModule } from './components/common/layouts/layouts.module';
import {ROUTES} from './app.routes';
import { DashboardV1Component } from './views/dashboard-v1/dashboard-v1.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DashboardV1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //View
    MainViewModule,
    MinorViewModule,
    LoginModule,
    RegisterModule,

    //Modules
    LayoutsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-top-right',
      preventDuplicates:true,
      progressBar:true,
      closeButton:true
    }),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    //{provide:ToastOptions,useClass:CustomOption}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
