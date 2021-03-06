import { enableProdMode, ╔ÁrenderComponent as renderComponent } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {AppComponent} from "./app/app.component";

if (environment.production) {
  enableProdMode();
}

renderComponent(AppComponent)

/*
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
*/
