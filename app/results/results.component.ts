import {Component, OnInit} from 'angular2/core';
import {Result, ResultsService} from "./results.service";

@Component({
    selector: 'results',
    template: `
        <h1>Ergebnisse</h1>
        <ul>
            <li *ngFor="#result of results">
                <span>{{ result.team }} vs {{ result.opponent }} - {{ result.result }}</span>
            </li>
        </ul>
    `,
    providers: [ResultsService]
})

export class ResultsComponent implements OnInit {
    results: Result[];

    constructor(
        private _service: ResultsService
    ){}

    ngOnInit() {
        this._service.getResults().then(results => this.results = results)
    }
}