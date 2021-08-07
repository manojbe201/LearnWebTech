import { Component, OnInit} from '@angular/core';

import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

 users:String[];
 
 
  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.users = this.UserService.inactiveUsers;
  }

  onSetToActive(id: number){
  this.UserService.onSetToActive(id);
  }


}
