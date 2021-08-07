import { ThrowStmt } from '@angular/compiler';

export class CounterService{

    activetoinactiveCounter =0;
    inactivetoactiveCounter=0;

    IncrementActivetoInactive()
    {
       this.activetoinactiveCounter++;
       console.log('Active to Inactive Counter '+this.activetoinactiveCounter);
    }

    IncrementInactivetoActive(){
       this. inactivetoactiveCounter++;
       console.log('Inactive to Active Counter'+this.inactivetoactiveCounter);

    }


}