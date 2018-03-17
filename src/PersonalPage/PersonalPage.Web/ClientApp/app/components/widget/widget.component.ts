import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';

import { ColorPalette } from './../../enums/color-palette.enum';

@
Component({
    selector: 'widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.css'],
    animations: [
        trigger('openWidget',
            [
                state('closed',
                    style({
                        backgroundColor: ColorPalette.Red
                    })),
                state('open',
                    style({
                        backgroundColor: ColorPalette.Blue,
                        width: '100%',
                        height: '40px'
                    })),
                transition('open => closed', animate('600ms ease-in')),
                transition('closed => open', animate('600ms ease-out'))
            ]),
        trigger('toggleWidgetArticle',
            [
                state('visible',
                    style({
                        opacity: 1
                    })),
                state('hidden',
                    style({
                        opacity: 0
                    })),
                transition('visible => hidden', animate('600ms ease-in')),
                transition('hidden => visible', animate('600ms ease-out'))
            ])
    ]
})
export class WidgetComponent implements OnInit {
    @Input() colorRgb: string;
    @Input() widgetId: string;
    widgetState: string = 'closed';
    widgetArticleState: string = 'hidden';
    isArticleVisible: boolean = false;

    onClick() {
        this.widgetState = (this.widgetState === 'closed' ? 'open' : 'closed');
        this.widgetArticleState = (this.widgetArticleState === 'hidden' ? 'visible' : 'hidden');
    }

    ngOnInit() {
        this.widgetId = "123";
    }
}
