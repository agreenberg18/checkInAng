import { Component,
        trigger,
        state,
        style,
        transition,
        animate,
        keyframes,
        OnInit,
        HostBinding

 } from '@angular/core';
import { CurrentDateComponent } from './currentDate.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
//import { moveIn } from '';


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
export class LoginComponent implements OnInit {
  error: any;

  state: string = "slideIn";

  constructor(public af: AngularFire, private router: Router ){
    this.af.auth.subscribe(auth => {
        if(auth) {
            this.router.navigateByUrl('/checkIn')
        }
    })

  }

//   onSubmit(formData) {
//     if(formData.valid) {
//       console.log(formData.value);
//       this.af.auth.login({
//         email: formData.value.email,
//         password: formData.value.password
//       },
//       {
//         provider: AuthProviders.Password,
//         method: AuthMethods.Password,
//       }).then(
//         (success) => {
//         console.log(success);
//         this.router.navigate(['/members']);
//       }).catch(
//         (err) => {
//         console.log(err);
//         this.error = err;
//       })
//     }
//   }

  slideToggle(){
      if (this.state == "slideIn"){
        this.state = "slideOut";
      }
      else{
          this.state = "slideIn";
      }
      console.log(this.state);
  }

  ngOnInit(){

  }
}
