import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './pages/login/login.component';

export const Approutes: Routes = [
    {
        path: '',
        component: FullComponent,
        children: [
            { path: '', redirectTo: '/', pathMatch: 'full' },
            { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
            { path: 'users', loadChildren: './pages/users/users.module#UsersModule' },
            { path: 'component', loadChildren: './component/component.module#ComponentsModule' },
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '**',
        redirectTo: '/login'
    }];


