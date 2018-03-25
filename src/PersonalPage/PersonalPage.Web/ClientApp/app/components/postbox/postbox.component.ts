import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Post } from './../../interfaces/post';
import { Tag } from './../../interfaces/tag';

@Component({
    selector: 'postbox',
    templateUrl: './postbox.component.html',
    styleUrls: ['./postbox.component.css']
})
export class PostBoxComponent {
    @Input() componentVisible: boolean;
    @Input() post: Post;
    @Input() truncateContent: boolean;

    constructor(private sanitizer: DomSanitizer) {
    }

    getIconColor(tag: Tag) {
        return this.sanitizer.bypassSecurityTrustStyle(tag.iconColor);
    }
}
