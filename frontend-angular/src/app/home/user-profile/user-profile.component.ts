import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {PasswordMatchValidators} from '../../validate-equal.directive';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @ViewChild('userFormGroup') public form: NgForm;
  submitted = false;
  current_user: User;
  editable = false;
  userFormGroup: FormGroup;
  passwordFormGroup: FormGroup;

  constructor(private _userService: UserService,
              private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.current_user = this._userService.current_user;
    this.userFormGroup = this._formBuilder.group({
      username: [this.current_user.username, Validators.required],
      email: [this.current_user.email, Validators.required],
      first_name: [this.current_user.first_name, Validators.required],
      last_name: [this.current_user.last_name, Validators.required],
    });
    this.passwordFormGroup = this._formBuilder.group({
      old_password: ['', Validators.required],
      new_password: ['', Validators.required],
      new_password2: ['', Validators.required],
      }, {'validator': PasswordMatchValidators.validate('new_password', 'new_password2') }
    );
  }

  toggleEdit(): void { this.editable = !this.editable; }

  update_user(): void {
    this.submitted = true;
  }

  change_password(): void {
    // Required old_password, new_password1, new_password2
  }
}
