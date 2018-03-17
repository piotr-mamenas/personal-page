import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { WidgetService } from './../../services/widget.service';
import { Widget } from './../../interfaces/widget';

@Component({
    selector: 'dotnet',
    templateUrl: './dotnet.component.html'
})
export class DotnetComponent implements OnInit {
    widgets : Widget[];

    constructor(private widgetService: WidgetService) {
        this.widgetService.getWidgets().subscribe(widgets => this.widgets = widgets);
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
        console.log('hello');
        this.widgets.forEach(widget => {
            widget.isClosed = false;
        });
    }

    ngOnInit() {
        console.log(this.widgets);
    }
}
