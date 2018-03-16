import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'dotnet',
    templateUrl: './dotnet.component.html'
})
export class DotnetComponent {
    color = {
        red: "#e00404",
        blue: "#0479e0",
        green: "#53bf01"
    };
}
