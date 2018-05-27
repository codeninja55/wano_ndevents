import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {PasswordMatchValidators} from '../../validate-equal.directive'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') public form: NgForm;
  submitted = false;

  registerFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _userService: UserService) { }

  ngOnInit() {
    this.registerFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required], },
      { validator: PasswordMatchValidators.validate('password', 'password2') }
    );
  }

  registerUser() {
    this.submitted = true;

    const new_user = JSON.parse(JSON.stringify(this.registerFormGroup.value), User.reviver);
    this._userService.register(new_user).subscribe(() => {
      console.log('[DEBUG]: User Registered');
    });
  }
}
