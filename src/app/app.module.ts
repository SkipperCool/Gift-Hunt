import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdDialogModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuizPageComponent } from './quiz/quiz-page/quiz-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LogoutComponent } from './logout/logout.component';

import { UsersService } from "app/services/users.service";
import { AuthService } from "app/services/auth.service";
import { GiftHintComponent } from './gift-hint/gift-hint.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyD4qyhOTwqDEsZgHYBtwSKHY4J_GJbKU9E',
  authDomain: 'today-b4261.firebaseapp.com',
  databaseURL: 'https://today-b4261.firebaseio.com',
  projectId: 'today-b4261',
  storageBucket: 'today-b4261.appspot.com',
  messagingSenderId: '698019990647'
};

const appRoutes: Routes = [
  { path: 'login', component: LogoutComponent },
  { path: 'admin', 
    canActivate: [AuthService], component: AdminPageComponent},
  { path: 'quiz',
    canActivate: [AuthService], component: QuizPageComponent},
  { path: 'gift-hint', 
    canActivate: [AuthService], component: GiftHintComponent},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: LogoutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizPageComponent,
    AdminPageComponent,
    LogoutComponent,
    GiftHintComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdDialogModule
  ],
  providers: [UsersService,AngularFireAuth,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
