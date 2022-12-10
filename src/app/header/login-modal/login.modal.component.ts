import {
  Component, OnInit,
  Input, HostListener,
  EventEmitter, ElementRef,
  Output
} from "@angular/core";
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {FirebaseUISignInSuccessWithAuthResult} from 'firebaseui-angular';

@Component({
  selector: 'app-login-modal',
  templateUrl: "./login.modal.component.html",
  styleUrls: ["./login.modal.component.scss", "./login.modal.component.responsivity.scss"]
}) 

export class LoginModalComponent {

  constructor(private afAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(d => console.log(d));
  }

  logout() {
    this.afAuth.signOut();
  }

  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    console.log(data);
  }

  //@Input() isVisible = false;

  @Input() _isVisible: boolean;

  @Output() changeState = new EventEmitter<boolean>();


  closeModal() {
    this._isVisible = !this._isVisible;
    this.changeState.emit(this._isVisible);
    //console.log("CLOSE MODAL =>" + this._isVisible);
  }
}
