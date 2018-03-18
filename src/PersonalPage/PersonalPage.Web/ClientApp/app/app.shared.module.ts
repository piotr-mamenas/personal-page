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
import { WidgetPageComponent } from './components/widget-page/widget-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WidgetComponent } from './components/widget/widget.component';

import { PostService } from './services/post.service';
import { TagService } from './services/tag.service';
import { WidgetService } from './services/widget.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        BlogComponent,
        HomeComponent,
        WidgetPageComponent,
        AboutMeComponent,
        WidgetComponent
    ],
    providers: [
        PostService,
        TagService,
        WidgetService
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'blog', component: BlogComponent },
            { path: 'blog/:tagName', component: BlogComponent },
            { path: 'page/:pageName', component: WidgetPageComponent },
            { path: 'about-me', component: AboutMeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
