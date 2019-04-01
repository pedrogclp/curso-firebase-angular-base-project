import { Component } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent {

  public _registroExito = false;

  onSubmit(form) {

  }

  backHome() {

  }
}
