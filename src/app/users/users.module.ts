import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent} from './users-list/users-list.component';
import {FormUserComponent} from '../component/form-user/form-user.component'


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [UsersListComponent, FormUserComponent],
})
export class UsersModule { }
