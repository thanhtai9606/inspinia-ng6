import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashv1',
  templateUrl: './dashv1.component.html',
  styleUrls: ['./dashv1.component.css']
})
export class Dashv1Component implements OnInit {

  constructor(public toastr: ToastrService) {

  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  ngOnInit() {
    setTimeout(() => this.showSuccess());
  }

}
