import { Component, OnInit, NgModule, ViewContainerRef } from '@angular/core';
import $ from 'jquery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard-v1',
  templateUrl: './dashboard-v1.component.html',
  styleUrls: ['./dashboard-v1.component.css'],
  // template: `
  // <div class="pull-right">
  // <button class="btn btn-default" (click)="showSuccess()">Toastr Tester</button>
  // </div>`
})

export class DashboardV1Component implements OnInit {
  constructor(public toastr: ToastrService) {

  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
 
  public ngOnInit(): void {
    setTimeout(() => this.showSuccess());
  }
  title = "My Chart";

}
