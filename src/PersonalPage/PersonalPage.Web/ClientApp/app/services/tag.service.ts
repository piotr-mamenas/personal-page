import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TagService {
    constructor(private http: Http) {

    }

    getTags() {
        return this.http.get('/api/tags').map(res => res.json());
    }
}