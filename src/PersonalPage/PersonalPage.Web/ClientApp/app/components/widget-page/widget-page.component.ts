import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from './../../services/post.service';
import { WidgetService } from './../../services/widget.service';
import { Widget } from './../../interfaces/widget';
import { Post } from './../../interfaces/post';

@Component({
    selector: 'widget-page',
    templateUrl: './widget-page.component.html',
    styleUrls: ['./widget-page.component.css']
})
export class WidgetPageComponent {
    widgets: Widget[];
    posts: Post[];

    constructor(private widgetService: WidgetService, private postService: PostService, private route: ActivatedRoute) {
        route.params.subscribe(params => {
            this.widgetService.getWidgetsByPage(params.pageName).subscribe(widgets => this.widgets = widgets);
            this.postService.getPostsByTag(params.pageName).subscribe(posts => this.posts = posts )
        });
    }

    onWidgetOpened(id : number) {
        this.widgets.forEach(widget => {
            if (widget.id !== id) {
                widget.isClosed = true;
            } else {
                widget.isClosed = false;
            }
        });
    }

    onWidgetClosed(id: number) {
        this.widgets.forEach(widget => {
            widget.isClosed = false;
        });
    }
}
