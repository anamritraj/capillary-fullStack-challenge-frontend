import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { GameListComponent } from './game-list/game-list.component';

const appRoutes: Routes = [
  {
    path: 'games-list',
    component: GameListComponent
  },
  {
    path: '',
    redirectTo: '/games-list',
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
