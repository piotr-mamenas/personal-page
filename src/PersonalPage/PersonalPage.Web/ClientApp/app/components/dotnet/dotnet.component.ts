import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { ColorPalette } from './../../enums/color-palette.enum';

@Component({
    selector: 'dotnet',
    templateUrl: './dotnet.component.html'
})
export class DotnetComponent {
    widgetColor = ColorPalette.Red;

    onWidgetOpened(id : number) {
        console.log(id);
    }
}
