import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { LoginComponent } from './components/login/login.component';
import { RoomListComponent } from './components/room-list/room-list.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'roomlist', component: RoomListComponent},
  {path:'addroom', component: AddRoomComponent},
  {path:'chatroom/:roomname', component: ChatRoomComponent},
  {path:'', redirectTo:'/login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
