import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
    selector: 'widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.css'],
    animations: [
        trigger('openWidget',
            [
                state('closed',
                    style({
                        width: '25%'
                    })), 
                state('open',
                    style({
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
export class WidgetComponent {
    @Input() colorRgb: string;
    @Input() widgetId: number;
    @Input() widgetContent: string;
    @Input() widgetName: string;
    @Input() widgetIcon: string;

    @Output() onWidgetOpened = new EventEmitter();
    @Output() onWidgetClosed = new EventEmitter();

    widgetState: string = 'closed';
    articleWidgetState: string = 'hidden';
    isArticleHidden: boolean = true;
    isAnimating: boolean = false;

    onClickWidget() {
        if (!this.isAnimating) {
            if (this.widgetState === 'closed') {
                this.widgetState = 'open';
                this.articleWidgetState = 'visible';
            }
            this.propagateState();            
        }
    }

    onClickBack(e: any) {
        if (!this.isAnimating) {
            if (this.widgetState === 'open') {
                this.widgetState = 'closed';
                this.articleWidgetState = 'hidden';
            }
            this.propagateState();
            e.stopPropagation();
        }
    }

    onAnimationStarted() {
        this.isAnimating = true;
    }

    onAnimationFinished() {
        this.isAnimating = false;
    }

    propagateState() {
        this.isArticleHidden = (this.articleWidgetState === 'hidden');

        if (this.isArticleHidden === false) {
            this.onWidgetOpened.emit(this.widgetId);
        } else {
            this.onWidgetClosed.emit(this.widgetId);
        } 
    }
}
