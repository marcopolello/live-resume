import { NgModule } from "@angular/core";
import { HeaderComponent } from './header.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginModalComponent } from "./login-modal/login.modal.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../core/core.module";
import { FirebaseUIModule } from 'firebaseui-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', component: HeaderComponent},
  ];

@NgModule({
    imports: [ CommonModule, FontAwesomeModule, CoreModule, BrowserAnimationsModule, FirebaseUIModule.forFeature({tosUrl: 'MAIN_MODULE'}), RouterModule.forChild(routes) ],
    declarations: [ LoginModalComponent ],
    exports: [ LoginModalComponent ]
})

export class HeaderModule { }