import { Component, Inject, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './../../services/post.service';
import { TagService } from './../../services/tag.service';

import { Post } from './../../interfaces/post';

@Component({
    selector: 'blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnDestroy {
    posts: Post[];
    tags: any[];

    constructor(private postService: PostService, private tagService: TagService, private route: ActivatedRoute) {
        route.params.subscribe(params => {
            this.tagService.getTags().subscribe(tags => this.tags = tags);

            if (params.tagName == null) {
                this.postService.getPosts().subscribe(posts => this.posts = posts);
            } else {
                this.postService.getPostsByTag(params.tagName).subscribe(posts => this.posts = posts);
            }
        });
    }

    ngOnDestroy() {
    }
}
