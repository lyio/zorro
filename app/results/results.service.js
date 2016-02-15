System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Result, ResultsService, results, resultsPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Result = (function () {
                function Result(id, team, opponent, result) {
                    this.id = id;
                    this.team = team;
                    this.opponent = opponent;
                    this.result = result;
                }
                return Result;
            })();
            exports_1("Result", Result);
            ResultsService = (function () {
                function ResultsService() {
                }
                ResultsService.prototype.getResults = function () {
                    return resultsPromise;
                };
                ResultsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ResultsService);
                return ResultsService;
            })();
            exports_1("ResultsService", ResultsService);
            results = [
                new Result(1, 'LTTV Leutzscher Füchse 12', 'TSV Einheit Lindenthal 3', '5:10'),
                new Result(2, 'LTTV Leutzscher Füchse 12', 'Tauchaer SV 4', '10:6'),
                new Result(3, 'LTTV Leutzscher Füchse 12', 'SV Eintracht Leipzig 5', '10:4')
            ];
            resultsPromise = Promise.resolve(results);
        }
    }
});
//# sourceMappingURL=results.service.js.map