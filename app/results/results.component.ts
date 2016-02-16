import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Result, ResultsService} from "./results.service";

@Component({
    selector: 'results',
    template: `
        <h1>Ergebnisse</h1>
        <ul>
            <li *ngFor="#result of results">
                <span>{{ result.Heimmannschaft }} vs {{ result.Gastmannschaft }} - {{ result.Ergebnis }}</span>
            </li>
        </ul>
    `,
    providers: [HTTP_PROVIDERS, ResultsService]
})

export class ResultsComponent implements OnInit {
    results:Result[];

    constructor(private _service:ResultsService) {
    }

    ngOnInit() {
        this._service.getResults().subscribe(results => this.results = results);
    }
}