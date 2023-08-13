import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/components/app/app.component';
import { BoardComponent } from 'src/components/board/board.component';
import { CallbackComponent } from 'src/components/callback/callback.component';
import { LoginComponent } from 'src/components/login/login.component';
import { AuthGuard } from 'src/guards/auth.guard';

const routes: Routes = [
  { path: 'callback', component: CallbackComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'main', component: BoardComponent ,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
