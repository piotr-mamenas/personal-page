import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from './../../services/post.service';
import { TagService } from './../../services/tag.service';

@Component({
    selector: 'blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent {
    posts: any[];
    tags: any[];

    //constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        //http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
        //    this.forecasts = result.json() as WeatherForecast[];
        //}, error => console.error(error));
    //}

    constructor(private postService: PostService, private tagService: TagService) { }

    ngOnInit() {
        this.postService.getPosts().subscribe(posts => this.posts = posts);
        this.tagService.getTags().subscribe(tags => this.tags = tags);
    }
}
