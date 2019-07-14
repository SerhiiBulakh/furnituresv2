import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureComponent } from './furniture/furniture.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail/:id', canActivate:[AuthGuard], component: FurnitureDetailsComponent },
  { path: 'furnitures', canActivate:[AuthGuard], component: FurnitureComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
