import { Component,
        trigger,
        state,
        style,
        transition,
        animate,
        keyframes

 } from '@angular/core';
import { CurrentDateComponent } from './currentDate.component';
import { FormsModule } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: `./login.component.html`,
  animations:[
      trigger('slidePanel',[
          state('slideIn', style({display: 'none'})),
          state('slideOut', style({display: 'auto'})),
          transition('* => *', animate('200ms'))
      ])
      
  ]
}) 
export class LoginComponent  {
  state: string = "slideIn";

  slideToggle(){
      if (this.state == "slideIn"){
        this.state = "slideOut";
      }
      else{
          this.state = "slideIn";
      }
      console.log(this.state);
  }
}
