import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from'@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
// App views
import {MainViewModule} from "./views/main-view/main-view.module";
import {MinorViewModule} from "./views/minor-view/minor-view.module";
import {LoginModule} from "./views/login/login.module";
import {RegisterModule} from "./views/register/register.module";
import { LayoutsModule } from './components/common/layouts/layouts.module';

import {ROUTES} from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    //View
    MainViewModule,
    MinorViewModule,
    LoginModule,
    RegisterModule,

    //Modules
    LayoutsModule,
    
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
