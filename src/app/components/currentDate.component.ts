import { Component } from '@angular/core';

@Component({
  selector: 'date',
  template: `<h1>{{date | date:'longDate'}}</h1>`,
})
export class CurrentDateComponent  {
  private date:Date;


  constructor(){
      this.date = new Date();
  }
   

}
