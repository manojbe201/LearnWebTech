import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class  UserService {

    constructor (private counteService : CounterService)
    {

    }
    activeUsers = ['bala', 'manoj'];
    inactiveUsers = ['ganesh', 'murali'];
  
    onSetToActive(id: number){
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id,1);
      this.counteService.IncrementInactivetoActive();
    }
  
  
    onSetToInactive(id: number){
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id,1);
      this.counteService.IncrementActivetoInactive();
    }

}