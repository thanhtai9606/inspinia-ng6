import {Routes} from "@angular/router";
import {MainViewComponent} from "./views/main-view/main-view.component";
import {MinorViewComponent} from "./views/minor-view/minor-view.component";
import {LoginComponent} from "./views/login/login.component";
import {RegisterComponent} from "./views/register/register.component";
import {BlankComponent} from "./components/common/layouts/blank/blank.component";
import {BasicComponent} from "./components/common/layouts/basic/basic.component";
import {BasedashComponent} from './dashboards/basedash/basedash.component';
import {Dashv2Component} from './dashboards/dashv2/dashv2.component';
import { Dashv1Component } from './dashboards/dashv1/dashv1.component';
export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'mainView', pathMatch: 'full'},

  // App views
  {
    path: '', component: BasicComponent,
    children: [
      {path: 'mainView', component: MainViewComponent},
      {path: 'minorView', component: MinorViewComponent},
      {
        path:'dashboardsView',component:BasedashComponent        
      },  
      {
        path:'dash1View',component:Dashv1Component        
      },
      {
        path:'dash2View',component:Dashv2Component        
      }
    ]
  },
  {
    path: '', component: BlankComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },

  // Handle all other routes
  {path: '**',    component: MainViewComponent }
 
];
