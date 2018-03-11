import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './../../services/post.service';
import { TagService } from './../../services/tag.service';

@Component({
    selector: 'blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {
    posts: any[];
    tags: any[];
    routeParams: string;

    constructor(private postService: PostService, private tagService: TagService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.tagService.getTags().subscribe(tags => this.tags = tags);
        this.route.params.subscribe(params => this.routeParams = params.tagName);

        if (this.routeParams == null) {
            this.postService.getPosts().subscribe(posts => this.posts = posts);
        } else {
            this.postService.getPostsByTag(this.routeParams).subscribe(posts => this.posts = posts);
        }
    }

    ngOnDestroy() {
    }
}
