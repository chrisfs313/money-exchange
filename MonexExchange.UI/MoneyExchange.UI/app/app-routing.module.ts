import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';

import { AuthGuardService } from './services/auth-guard.services';

const routes: Routes = [
    { path: 'login',component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'about', component: AboutComponent, canActivate: [AuthGuardService] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
    HomeComponent,
    LoginComponent,
    AboutComponent,
    NotFoundComponent
]