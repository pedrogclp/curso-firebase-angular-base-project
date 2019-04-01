import { Component } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'reset',
  templateUrl: './reset.component.html'
})
export class ResetComponent {

  public _emailEnviado = false;

  onSubmit(form) {

  }

  backHome() {

  }
}
