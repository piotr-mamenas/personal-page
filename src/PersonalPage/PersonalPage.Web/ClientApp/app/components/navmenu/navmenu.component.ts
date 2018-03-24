import { Component } from '@angular/core';
import { Tag } from './../../interfaces/tag';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { TagService } from './../../services/tag.service';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    tags: Tag[];

    constructor(private tagService: TagService, private sanitizer: DomSanitizer) {
        this.tagService.getTags().subscribe(tags => this.tags = tags);
    }

    getIconColor(tag: Tag) {
        return this.sanitizer.bypassSecurityTrustStyle(tag.iconColor);
    }
}
