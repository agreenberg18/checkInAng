import { Component } from '@angular/core';

@Component({
  selector: 'time',
  template: `<h1>{{time | date:'shortTime'}}</h1>`,
})
export class CurrentTimeComponent  {
  private time:Date;


  constructor(){
      this.time = new Date();

      setInterval(() =>{
       this.time = new Date();
        }, 1000);
  }
   

}