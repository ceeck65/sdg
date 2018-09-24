import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../_services/auth/authentication-service.service';
import { NgxNotificationService } from 'ngx-notification';
import { NgxNotifierService } from 'ngx-notifier';
import { UsersServicesService } from '../../_services/users/users-services.service';

export interface Gender {
  value: number;
  viewValue: any;
  icon: string;
}

export interface Roles {
  value: number;
  viewValue: any;
  icon: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  action_message = 'Registrar';
  message = '';
  dataSource: any;
  gender: Gender[] = [
    { value: 1, viewValue: 'Masculino', icon: 'fa fa-male' },
    { value: 2, viewValue: 'Femenino', icon: 'fa fa-female' },
  ];

  roles: Roles[] = [
    { value: 1, viewValue: 'Administrador', icon: 'fa-user-secret' },
    { value: 2, viewValue: 'Moderador', icon: 'fa fa-user-plus' },
    { value: 3, viewValue: 'Miembro', icon: 'fa fa-user-o' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private ngxNotificationService: NgxNotificationService,
    private _ngxNotifierService: NgxNotifierService,
    private userService: UsersServicesService) { }

  /**
   * id: number;
  name: string;
  last_name: string;
  identification_id: string;
  age: number;
  twitter_accoun: string;
  gender: number;
  telephone: string;
  register_id: number;
  email: string;
  password: string;
  rol_id: number;
  image: string;
   */

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      identification_id: ['', [Validators.required]],
      rol_id: ['', [Validators.required]],
      twitter_account: [null],
      telephone: ['', [Validators.required]],
      municipality: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [null]
    });
  }

  get f() { return this.userForm.controls; }

  onSubmit() {
    this.submitted = true;

    // Se detiene si el formulario es incorrecto
    console.log(this.userForm.invalid);
    if (this.userForm.invalid) {
      return;
    }

    this.loading = true;
    this.action_message = 'Registrando...';

    this.userService.storeUsers(this.userForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.message = '<i class="ti-success icon-toarst"></i> Registrado con éxitos';
          this._ngxNotifierService.createToast(this.message, 'success', 5000);
          this.loading = false;
          this.action_message = 'Registrar';
        },
        error => {
          this.message = '<i class="ti-alert icon-toarst"></i> Ha ocurrido un error';
          this._ngxNotifierService.createToast(this.message, 'danger', 5000);
          this.loading = false;
          this.action_message = 'Registrar';
        });
  }


}
