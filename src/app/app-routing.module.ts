import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { GameListComponent } from './game-list/game-list.component';
import {LoginComponent} from "./login/login.component";

const appRoutes: Routes = [
  {
    path: 'games-list',
    component: GameListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
