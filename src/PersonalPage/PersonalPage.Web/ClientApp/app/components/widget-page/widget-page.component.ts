import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { WidgetService } from './../../services/widget.service';
import { Widget } from './../../interfaces/widget';

@Component({
    selector: 'widget-page',
    templateUrl: './widget-page.component.html'
})
export class WidgetPageComponent {
    widgets : Widget[];

    constructor(private widgetService: WidgetService, private route: ActivatedRoute) {
        route.params.subscribe(params => {
            this.widgetService.getWidgetsByPage(params.pageName).subscribe(widgets => this.widgets = widgets);
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
