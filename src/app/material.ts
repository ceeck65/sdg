import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatGridTile } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatGridListModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatGridListModule
    ],
})
export class MaterialModule { }