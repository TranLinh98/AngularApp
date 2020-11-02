"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var Pagination_1 = require("../_models/Pagination");
var environment_1 = require("src/environments/environment");
var operators_1 = require("rxjs/operators");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.apiUrl;
    }
    UserService.prototype.getUsers = function (page, itemsPerPage, userParams, likesParams) {
        var paginatedResult = new Pagination_1.PaginatedResult();
        var params = new http_1.HttpParams();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        if (userParams != null) {
            params = params.append('minAge', userParams.minAge);
            params = params.append('maxAge', userParams.maxAge);
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.orderBy);
        }
        if (likesParams === 'Likers') {
            params = params.append('Likers', 'true');
        }
        if (likesParams === 'Likees') {
            params = params.append('Likees', 'true');
        }
        return this.http.get(this.baseUrl + 'user', { observe: 'response', params: params })
            .pipe(operators_1.map(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.baseUrl + 'user/' + id);
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.http.put(this.baseUrl + 'user/' + id, user);
    };
    UserService.prototype.setMainPhoto = function (userId, id) {
        return this.http.post(this.baseUrl + 'user/' + userId + '/photo/' + id + '/setMain', {});
    };
    UserService.prototype.deletePhoto = function (userId, id) {
        return this.http["delete"](this.baseUrl + 'user/' + userId + '/photo/' + id);
    };
    UserService.prototype.sendLike = function (id, recipientId) {
        return this.http.post(this.baseUrl + 'user/' + id + '/like/' + recipientId, {});
    };
    UserService.prototype.getMessages = function (id, page, itemsPerPage, messageContainer) {
        var paginatedResult = new Pagination_1.PaginatedResult();
        var params = new http_1.HttpParams();
        params = params.append('MessageContainer', messageContainer);
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        return this.http.get(this.baseUrl + 'user/' + id + '/message', { observe: 'response', params: params })
            .pipe(operators_1.map(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') !== null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    UserService.prototype.getMessageThread = function (id, repcientId) {
        return this.http.get(this.baseUrl + 'user/' + id + '/message/thread/' + repcientId);
    };
    UserService.prototype.sendMessage = function (id, message) {
        return this.http.post(this.baseUrl + 'user/' + id + '/message', message);
    };
    UserService.prototype.deleteMessage = function (id, userId) {
        return this.http.post(this.baseUrl + 'user/' + userId + '/message/' + id, {});
    };
    UserService.prototype.markAsRead = function (userId, messageid) {
        this.http.post(this.baseUrl + 'user/' + userId + '/message/' + messageid + '/read', {})
            .subscribe();
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
