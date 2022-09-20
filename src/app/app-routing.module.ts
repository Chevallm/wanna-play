import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PartiesComponent} from './parties/parties.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'parties', component: PartiesComponent},
    {pathMatch: 'full', path: '**', redirectTo: 'parties'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
