import { Component, OnInit } from '@angular/core';

import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

users:String[];

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.users = this.UserService.activeUsers;

  }

  onSetToInactive(id: number){
    this.UserService.onSetToInactive(id);
  }

}
