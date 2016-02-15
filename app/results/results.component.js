System.register(['angular2/core', "./results.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, results_service_1;
    var ResultsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (results_service_1_1) {
                results_service_1 = results_service_1_1;
            }],
        execute: function() {
            ResultsComponent = (function () {
                function ResultsComponent(_service) {
                    this._service = _service;
                }
                ResultsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getResults().then(function (results) { return _this.results = results; });
                };
                ResultsComponent = __decorate([
                    core_1.Component({
                        selector: 'results',
                        template: "\n        <h1>Ergebnisse</h1>\n        <ul>\n            <li *ngFor=\"#result of results\">\n                <span>{{ result.team }} vs {{ result.opponent }} - {{ result.result }}</span>\n            </li>\n        </ul>\n    ",
                        providers: [results_service_1.ResultsService]
                    }), 
                    __metadata('design:paramtypes', [results_service_1.ResultsService])
                ], ResultsComponent);
                return ResultsComponent;
            })();
            exports_1("ResultsComponent", ResultsComponent);
        }
    }
});
//# sourceMappingURL=results.component.js.map