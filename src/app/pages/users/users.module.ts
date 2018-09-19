import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';


const routes: Routes = [{
// tslint:disable-next-line:indent
        path: '',
        data: {
            title: 'Usuarios',
            urls: [{title: 'Usuarios', url: '/users'}, {title: 'Usuarios'}]
    }, component: UsersComponent
}];

@NgModule({
// tslint:disable-next-line:indent
	imports: [FormsModule, CommonModule,
		RouterModule.forChild(routes)
    ], declarations: [UsersComponent]
})
export class UsersModule { }