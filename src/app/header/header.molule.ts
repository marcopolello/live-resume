import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginModalComponent } from "./login-modal/login.modal.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../core/core.module";

@NgModule({
    imports: [ CommonModule, FontAwesomeModule, CoreModule, BrowserAnimationsModule ],
    declarations: [ LoginModalComponent ],
    exports: [ LoginModalComponent ]
})

export class HeaderModule { }