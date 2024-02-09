import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { ManageAddComponent } from './pages/manage/manage-add.component';
import { ManageEditComponent } from './pages/manage/manage-edit.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/add', component: ManageAddComponent },
  { path: 'product/edit/:id', component: ManageEditComponent },
];