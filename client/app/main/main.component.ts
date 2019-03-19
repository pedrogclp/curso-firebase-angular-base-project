import { Component } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

@Component({
    selector: 'main',
    templateUrl: './main.component.html'
})
export class MainComponent  {
    public title = 'Hola mundo!';
}