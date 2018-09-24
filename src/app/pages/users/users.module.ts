import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { MaterialModule } from '../../material';
import { NgxNotificationComponent } from 'ngx-notification';
import { NgxNotifierModule } from 'ngx-notifier';

const routes: Routes = [{
    // tslint:disable-next-line:indent
    path: '',
    data: {
        title: 'Usuarios',
        urls: [{ title: 'Usuarios', url: '/users' }, { title: 'Usuarios' }]
    }, component: UsersComponent
}];

@NgModule({
    // tslint:disable-next-line:indent
    imports: [CommonModule, ReactiveFormsModule,
        RouterModule.forChild(routes), MaterialModule,
        NgxNotifierModule
    ], declarations: [UsersComponent]
})
export class UsersModule { }