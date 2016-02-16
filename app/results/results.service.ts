import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

export class Result {
    constructor(public home: string, public visiting: string) { }
}

@Injectable()
export class ResultsService {

    constructor(private _http: Http) {}

    getResults() {
        return this._http.get('http://localhost:8080/api/results')
            .map(response => response.json().result);
    }
}