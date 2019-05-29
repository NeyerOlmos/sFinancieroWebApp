import { Component, OnInit } from '@angular/core';
import { MatTooltip, MatSnackBar } from '@angular/material';
import { AuthService } from '../auth.service';
import {NgForm} from '@angular/forms';
import {User } from 'src/app/Models/user';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email = '';
  password = '';
  confirmPassword = '';
  roles: any[];
user: User;
emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private authService: AuthService, private SnackBar: MatSnackBar,private router: Router) { }

  ngOnInit() {
this.resetForm();

this.authService.getAllRoles().then(
      (data: any[]) => {
        data.forEach(obj => {obj.selected = false;});
        this.roles = data;

      }
    );
  }
resetForm(form?: NgForm) {
if (form != null) {
  form.reset();
} else {
  this.user = {
    UserName: '',
    Password: '',
    Email: '',
    FirstName: '',
    LastName: '',
    Roles: []
    };
  if (this.roles) {
      this.roles.map(x => x.selected = false);
    }
}
}
updateSelectedRoles(index) {
  this.roles[index].selected = !this.roles[index].selected;
}
  OnSubmit(form : NgForm) {
    let x = this.roles.filter(x => x.selected).map(y => y.Name);
    this.authService.registerUser(form.value,x).then((val) => {
      console.log(val);
      this.resetForm(form);
      this.SnackBar.open('se registro correctamente', ':)', {duration: 3000});
      }).catch(reason=>{
        this.SnackBar.open(reason.Errors[0], ':(', {duration: 3000});
    } );

  }
  getErrorMessage(form?: NgForm) {
    if (form != null){

      return form.hasError('required') ? 'You must enter a value' :
      form.hasError('email') ? 'Not a valid email' :
      '';
    }
  }

}
