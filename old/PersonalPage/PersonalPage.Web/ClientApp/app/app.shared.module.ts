import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { PostBoxComponent } from './components/postbox/postbox.component';

import { PostService } from './services/post.service';
import { TagService } from './services/tag.service';

import { TruncatePipe } from './pipes/truncate.pipe';

import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        BlogComponent,
        HomeComponent,
        AboutComponent,
        PostBoxComponent,
        TruncatePipe
    ],
    providers: [
        PostService,
        TagService
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        BrowserAnimationsModule,
        NgxGistModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: BlogComponent },
            { path: 'blog', component: BlogComponent },
            { path: 'blog/tags/:tagName', component: BlogComponent },
            { path: 'blog/:postId', component: BlogComponent},
            { path: 'about', component: AboutComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
