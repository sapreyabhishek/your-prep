import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard'
import { AmazonComponent } from './amazon/amazon.component';
import { MathworksComponent } from './mathworks/mathworks.component';
import { CiscoComponent } from './cisco/cisco.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path:'',component: HomeComponent},
  { path :'signup', component: SignupComponent},
  { path:'login',component: LoginComponent },
  { path:'team',component: TeamComponent },
  { path:'dashboard/:id',component: DashboardComponent, canActivate:[AuthGuard] },
  { path:'dashboard/:id/amazon',component: AmazonComponent,canActivate:[AuthGuard] },
  { path:'dashboard/:id/mathworks',component: MathworksComponent,canActivate:[AuthGuard] },
  { path:'dashboard/:id/cisco',component: CiscoComponent,canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
