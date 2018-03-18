import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WidgetService {
    constructor(private http: Http) {

    }

    getWidgets() {
        return this.http.get('/api/widgets').map(res => res.json());
    }

    getWidgetsByPage(page: string) {
        return this.http.get('/api/widgets/'+page).map(res => res.json());
    }
}