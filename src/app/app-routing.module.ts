import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './_layouts/full/full.component';
import { LoginComponent } from './pages/login/login.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { AuthGuard } from './_guard/auth.guard';

export const Approutes: Routes = [
    {
        path: '',
        component: FullComponent,
        children: [
            { path: '', redirectTo: '/', pathMatch: 'full', canActivate: [AuthGuard] },
            { path: '', redirectTo: '', pathMatch: 'full', canActivate: [AuthGuard] },
            { path: 'index', loadChildren: './pages/home/home.module#HomeModule', canActivate: [AuthGuard] },
            { path: 'index.html', loadChildren: './pages/home/home.module#HomeModule', canActivate: [AuthGuard] },
            { path: 'home', loadChildren: './pages/home/home.module#HomeModule', canActivate: [AuthGuard] },
            { path: 'users', loadChildren: './pages/users/users.module#UsersModule', canActivate: [AuthGuard] },
            { path: 'component', loadChildren: './component/component.module#ComponentsModule', canActivate: [AuthGuard] },
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '404',
        component: NoFoundComponent,
    },
    {
        path: '**',
        redirectTo: '/404'
    }];


