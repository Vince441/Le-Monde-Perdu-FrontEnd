import { bootstrapApplication } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { App } from './app/app';
import { AuthInterceptor } from './app/interceptor/auth.interceptor';


bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter([...routes]),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
});