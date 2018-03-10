import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'machine-learning',
    templateUrl: './machine-learning.component.html'
})
export class MachineLearningComponent {

    //constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    //http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
    //    this.forecasts = result.json() as WeatherForecast[];
    //}, error => console.error(error));
    //}
}
