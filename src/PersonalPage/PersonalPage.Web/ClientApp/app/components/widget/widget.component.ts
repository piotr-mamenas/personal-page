import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
    @Input() colorRgb: string;
    @Input() widgetId: string;
    
    ngOnInit() {
        this.widgetId = "123";

    }
}
