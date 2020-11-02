"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MemberCardComponent = void 0;
var core_1 = require("@angular/core");
var MemberCardComponent = /** @class */ (function () {
    function MemberCardComponent(authService, alertify, userService) {
        this.authService = authService;
        this.alertify = alertify;
        this.userService = userService;
    }
    MemberCardComponent.prototype.ngOnInit = function () {
    };
    MemberCardComponent.prototype.sendLike = function (id) {
        var _this = this;
        this.userService.sendLike(this.authService.decodeToken.nameid, id)
            .subscribe(function (data) {
            _this.alertify.success('You have liked ' + _this.user.knownAs);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    __decorate([
        core_1.Input()
    ], MemberCardComponent.prototype, "user");
    MemberCardComponent = __decorate([
        core_1.Component({
            selector: 'app-member-card',
            templateUrl: './member-card.component.html',
            styleUrls: ['./member-card.component.css']
        })
    ], MemberCardComponent);
    return MemberCardComponent;
}());
exports.MemberCardComponent = MemberCardComponent;
