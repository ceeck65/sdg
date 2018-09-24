import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../_services/auth/authentication-service.service';
import { NgxNotificationService } from 'ngx-notification';
import { NgxNotifierService } from 'ngx-notifier';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  login = 'Iniciar sesión';
  message = '';
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private ngxNotificationService: NgxNotificationService,
    private _ngxNotifierService: NgxNotifierService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // invoca la funcion que elimina el valor de local Storage
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.login = 'Iniciando sesión...';
    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this._ngxNotifierService.createToast('Sesión iniciada', 'success', 5000);
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.message = '<i class="ti-alert icon-toarst"></i> Credenciales incorrectas, verifica e intenta de nuevo';
          this._ngxNotifierService.createToast(this.message, 'danger', 5000);
          this.loading = false;
          this.login = 'Iniciar sesión';
        });
  }


}
