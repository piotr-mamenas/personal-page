import { Component } from '@angular/core';
import { Tag } from './../../interfaces/tag';

import { TagService } from './../../services/tag.service';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    tags: Tag[];

    constructor(private tagService: TagService) {
        this.tagService.getTags().subscribe(tags => this.tags = tags);
    }
}
