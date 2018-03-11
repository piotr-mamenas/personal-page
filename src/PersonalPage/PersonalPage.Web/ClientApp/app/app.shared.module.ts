import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { DotnetComponent } from './components/dotnet/dotnet.component';
import { DatabasesComponent } from './components/databases/databases.component';
import { LinguisticsComponent } from './components/linguistics/linguistics.component';
import { MachineLearningComponent } from './components/machine-learning/machine-learning.component';
import { HealthAndFitnessComponent } from './components/health-and-fitness/health-and-fitness.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

import { PostService } from './services/post.service';
import { TagService } from './services/tag.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        BlogComponent,
        HomeComponent,
        DotnetComponent,
        DatabasesComponent,
        LinguisticsComponent,
        MachineLearningComponent,
        HealthAndFitnessComponent,
        AboutMeComponent
    ],
    providers: [
        PostService,
        TagService
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'blog', component: BlogComponent },
            { path: 'blog/:tagName', component: BlogComponent },
            { path: 'dotnet', component: DotnetComponent },
            { path: 'databases', component: DatabasesComponent },
            { path: 'linguistics', component: LinguisticsComponent },
            { path: 'machine-learning', component: MachineLearningComponent },
            { path: 'health-and-fitness', component: HealthAndFitnessComponent },
            { path: 'about-me', component: AboutMeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
