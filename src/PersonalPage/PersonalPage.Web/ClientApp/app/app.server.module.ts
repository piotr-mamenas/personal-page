import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './components/app/app.component';

import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        ServerModule,
        NgxGistModule,
        AppModuleShared
    ]
})
export class AppModule {
}
