import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    constructor(private http: Http) {   
    }

    getPosts() {
        return this.http.get('/api/posts').map(res => res.json());
    }

    getPostsByTag(tagName: string) {
        return this.http.get('/api/posts/' + tagName).map(res => res.json());
    }

    getRecentPosts(postAmount: number) {
        return this.http.get('/api/posts/recent/' + postAmount).map(res => res.json());
    }

    getPostById(postId: number) {
        return this.http.get('/api/posts/' + postId).map(res => res.json());
    }
}