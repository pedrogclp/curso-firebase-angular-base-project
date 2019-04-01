import { Component } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { AuthService } from "../object/user/auth.service";
import { ObservableInput } from "rxjs/Observable";
import { UserInfo } from "../object/user/user-info";

@Component({
    selector: 'main',
    templateUrl: './main.component.html'
})
export class MainComponent  {
  public title = 'Hola mundo!';

  public userInfo: Observable<UserInfo>;
  public isLoggedIn = new BehaviorSubject(false);

  constructor(
    private authService: AuthService,
    private router: Router
  ){
    this.userInfo = authService.userInfo;
    this.userInfo.map( userInfo => !userInfo.isAnonymous).subscribe(this.isLoggedIn);
  }

  redireccionarALogin(){
    this.router.navigate(['/login']);
  }

  redireccionarARegistro(){
    this.router.navigate(['/registro']);
  }

}
