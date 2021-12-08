import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../material.module';

import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        LoginComponent,
    ]
})

export class AuthModule { }