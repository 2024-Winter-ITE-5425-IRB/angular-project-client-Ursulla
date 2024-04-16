import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: 'rooms', component: RoomsComponent },
    { path: 'add-room', component: AddRoomComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
   //{ path: '**', redirectTo: '/login', pathMatch: 'full' }
    { path: '**', component: PageNotFoundComponent }
];
