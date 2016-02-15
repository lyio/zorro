import {Injectable} from 'angular2/core';

export class Result {
    constructor(public id: number, public team: string, public opponent: string, public result: string) { }
}

@Injectable()
export class ResultsService {
    getResults() {
        return resultsPromise;
    }
}

var results = [
    new Result(1, 'LTTV Leutzscher Füchse 12', 'TSV Einheit Lindenthal 3', '5:10'),
    new Result(2, 'LTTV Leutzscher Füchse 12', 'Tauchaer SV 4', '10:6'),
    new Result(3, 'LTTV Leutzscher Füchse 12', 'SV Eintracht Leipzig 5', '10:4')
];

var resultsPromise = Promise.resolve(results);



