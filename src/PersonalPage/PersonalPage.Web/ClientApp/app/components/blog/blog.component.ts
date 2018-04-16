import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { PostService } from './../../services/post.service';
import { TagService } from './../../services/tag.service';

import { Post } from './../../interfaces/post';
import { Tag } from './../../interfaces/tag';

@Component({
    selector: 'blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
    posts: Post[];
    recentPosts: Post[];
    tags: Tag[];
    currentPost: Post;
    isPostSectionExpanded: boolean;

    constructor(private postService: PostService, private tagService: TagService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
        route.params.subscribe(params => {
            this.tagService.getTags().subscribe(tags => this.tags = tags);
            if (params.postId != null) {
                this.postService.getPostById(params.postId).subscribe(post => this.currentPost = post);
                this.isPostSectionExpanded = true;
            } else {
                if (params.tagName == null) {
                    this.postService.getPosts().subscribe(posts => this.posts = posts);
                } else {
                    this.postService.getPostsByTag(params.tagName).subscribe(posts => this.posts = posts);
                }                
            }
            this.postService.getRecentPosts(10).subscribe(recentPosts => this.recentPosts = recentPosts);
        });
    }

    expandPostSection() {
        this.isPostSectionExpanded = !this.isPostSectionExpanded;
    }

    getIconColor(tag: Tag) {
        return this.sanitizer.bypassSecurityTrustStyle(tag.iconColor);
    }
}
