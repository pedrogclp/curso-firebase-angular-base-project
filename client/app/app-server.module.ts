import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Interceptor } from './object/universal/interceptor';

@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }],
  imports: [
    AppModule,
    ServerModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}