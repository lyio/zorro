import 'rxjs/Rx';

import {Component} from 'angular2/core';
import {ResultsComponent} from './results/results.component.ts';

@Component({
    selector: 'app',
    template: `
        <h1>Übersicht</h1>
        <results></results>
    `,
    directives: [ResultsComponent]
})

export class AppComponent { }