import {
  Component, OnInit,
  Input, HostListener,
  EventEmitter, ElementRef,
  Output
} from "@angular/core";

@Component({
  selector: 'app-login-modal',
  templateUrl: "./login.modal.component.html",
  styleUrls: ["./login.modal.component.scss", "./login.modal.component.responsivity.scss"]
}) 

export class LoginModalComponent {

  constructor(private elRef: ElementRef) { }

  public elWidth: number;

  //@Input() isVisible = false;

  @Input() _isVisible: boolean;

  @Output() changeState = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  private onResizeElement(): void {
    this.elWidth = this.elRef.nativeElement.clientWidth;
  }

  closeModal() {
    this._isVisible = !this._isVisible;
    this.changeState.emit(this._isVisible);
    //console.log("CLOSE MODAL =>" + this._isVisible);
  }
}
