import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

import { HomeComponent } from './home.component';


const routes: Routes = [{
    // tslint:disable-next-line:indent
    path: '',
    data: {
        title: 'Home',
        urls: [{ title: 'Home', url: '/home' }, { title: 'Home Page' }]
    }, component: HomeComponent
}];

@NgModule({
    // tslint:disable-next-line:indent
    imports: [FormsModule, CommonModule,
        RouterModule.forChild(routes), MatTableModule
    ], declarations: [HomeComponent]
})
export class HomeModule { }