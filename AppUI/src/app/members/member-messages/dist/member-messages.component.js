"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MemberMessagesComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var MemberMessagesComponent = /** @class */ (function () {
    function MemberMessagesComponent(userService, authService, alertify) {
        this.userService = userService;
        this.authService = authService;
        this.alertify = alertify;
        this.newMessage = {};
    }
    MemberMessagesComponent.prototype.ngOnInit = function () {
        this.loadMessages();
    };
    MemberMessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        var currentUserId = +this.authService.decodeToken.nameid;
        this.userService.getMessageThread(this.authService.decodeToken.nameid, this.recipientId)
            .pipe(operators_1.tap(function (messages) {
            for (var i = 0; i < messages.length; i++) {
                if (messages[i].isRead === false && messages[i].recipientId === currentUserId) {
                    _this.userService.markAsRead(currentUserId, messages[i].id);
                }
            }
        }))
            .subscribe(function (messages) {
            _this.messages = messages;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberMessagesComponent.prototype.sendMessage = function () {
        var _this = this;
        this.newMessage.recipientId = this.recipientId;
        this.userService.sendMessage(this.authService.decodeToken.nameid, this.newMessage)
            .subscribe(function (message) {
            _this.messages.unshift(message);
            _this.newMessage = '';
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    __decorate([
        core_1.Input()
    ], MemberMessagesComponent.prototype, "recipientId");
    MemberMessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-member-messages',
            templateUrl: './member-messages.component.html',
            styleUrls: ['./member-messages.component.css']
        })
    ], MemberMessagesComponent);
    return MemberMessagesComponent;
}());
exports.MemberMessagesComponent = MemberMessagesComponent;
