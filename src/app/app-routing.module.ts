import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Lobby', loadChildren: () => import('./Component/lobby/lobby.module').then(m => m.LobbyModule) }, 
  { path: 'newroom', loadChildren: () => import('./Component/newroom/newroom.module').then(m => m.NewroomModule) }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
