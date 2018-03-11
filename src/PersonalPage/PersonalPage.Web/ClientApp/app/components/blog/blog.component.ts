import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from './../../services/post.service';

@Component({
    selector: 'blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent {
    posts: any[];

    //constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        //http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
        //    this.forecasts = result.json() as WeatherForecast[];
        //}, error => console.error(error));
    //}

    constructor(private postService: PostService) { }

    ngOnInit() {
        this.postService.getPosts().subscribe(posts => this.posts = posts);
    }
}
