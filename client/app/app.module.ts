import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgModule,
  ErrorHandler,
  Injectable,
  ApplicationRef,
  Provider,
  OnInit,
  OnDestroy,
} from '@angular/core';

import {
  Http,
  HttpModule,
  BaseRequestOptions,
  RequestOptions,
  RequestOptionsArgs,
} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RouterModule, Routes } from '@angular/router';

import {

  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialog,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatIcon,
  MatIconRegistry,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

// Componentes de la aplicación
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

// Servicio de Autenticación ligado a Firebase
import { AuthService } from "./object/user/auth.service";
import { LoggedInGuard } from "./object/user/logged-in-guard";

// Configuración de las variables de entorno de FIREBASE
import { environment } from '../environments/environment';

// Componentes que permiten interceptar las peticiones
import { Interceptor } from './object/universal/interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,

    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule,

  ],

})
export class MaterialModule { }

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '', component: MainComponent },
 
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'universal' }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,

    RouterModule.forRoot(appRoutes, { enableTracing: !environment.production }),

  ],
  exports: [],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit, OnDestroy {
  static parameters = [ApplicationRef];

  constructor(private appRef: ApplicationRef) {
    this.appRef = appRef;
  }

  ngOnDestroy(): void {
    // change detection
    this.appRef.tick();
  }

  ngOnInit(): void {

  }
}
