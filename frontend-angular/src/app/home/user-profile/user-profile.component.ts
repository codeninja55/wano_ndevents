import {Component, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {PasswordMatchValidators} from '../../validate-equal.directive';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  @ViewChild('userFormGroup') public form: NgForm;
  submitted = false;
  current_user: User;
  editable = false;
  userFormGroup: FormGroup;
  passwordFormGroup: FormGroup;

  constructor(private _userService: UserService,
              private _formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    // this.current_user = this._userService.current_user;
    this.current_user = UserService.getCurrentUser();
    this.userFormGroup = this._formBuilder.group({
      username: [UserService.getCurrentUser().username, Validators.required],
      email: [UserService.getCurrentUser().email, Validators.required],
      first_name: [UserService.getCurrentUser().first_name, Validators.required],
      last_name: [UserService.getCurrentUser().last_name, Validators.required],
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
    this._userService.putUser(UserService.getCurrentUser().pk, this.userFormGroup.value).subscribe(() => {
      console.log('[DEBUG]: Put user complete');
    })
  }

  change_password(): void {
    // Required old_password, new_password1, new_password2
  }
}
