import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  branchSelected: null|any = null
  notifications:Array<any> = []
  qntNotifications:number = 0

  constructor() { }

  ngOnInit() {

    this.qntNotifications = this.notifications.length

  }

}
