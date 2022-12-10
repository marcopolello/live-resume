import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginModalComponent} from './login.modal.component';
import {RouterModule, Routes} from '@angular/router';
import {firebase, FirebaseUIModule} from 'firebaseui-angular';

const routes: Routes = [
  {path: '', component: LoginModalComponent},
];


@NgModule({
  imports: [
    CommonModule,
    FirebaseUIModule.forFeature({
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    }),
    RouterModule.forChild(routes)
  ],
  declarations: [LoginModalComponent]
})
export class LoginModalModule {
}