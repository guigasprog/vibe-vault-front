import { Routes } from '@angular/router';
import { LoginComponent } from './representation/pages/login/login.component';
import { PrincipalComponent } from './representation/pages/principal/principal.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'login', component: LoginComponent },
];
