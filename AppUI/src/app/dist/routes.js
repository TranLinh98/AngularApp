"use strict";
exports.__esModule = true;
exports.appRoutes = void 0;
var home_component_1 = require("./home/home.component");
var lists_component_1 = require("./lists/lists.component");
var member_detail_component_1 = require("./members/member-detail/member-detail.component");
var member_edit_component_1 = require("./members/member-edit/member-edit.component");
var member_list_component_1 = require("./members/member-list/member-list.component");
var messages_component_1 = require("./messages/messages.component");
var auth_guard_1 = require("./_guards/auth.guard");
var prevent_unsaved_changes_guard_1 = require("./_guards/prevent-unsaved-changes.guard");
var lists_resolver_1 = require("./_resovlvers/lists.resolver");
var member_detail_resolver_1 = require("./_resovlvers/member-detail.resolver");
var member_edit_resolver_1 = require("./_resovlvers/member-edit.resolver");
var member_list_resolver_1 = require("./_resovlvers/member-list.resolver");
var messages_resolver_1 = require("./_resovlvers/messages.resolver");
exports.appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: 'members', component: member_list_component_1.MemberListComponent, resolve: { users: member_list_resolver_1.MemberListResolver } },
            { path: 'members/:id', component: member_detail_component_1.MemberDetailComponent, resolve: { user: member_detail_resolver_1.MemberDetailResolver } },
            { path: 'member/edit', component: member_edit_component_1.MemberEditComponent, resolve: { user: member_edit_resolver_1.MemberEditResolver }, canDeactivate: [prevent_unsaved_changes_guard_1.PreventUnsavedChanges] },
            { path: 'messages', component: messages_component_1.MessagesComponent, resolve: { messages: messages_resolver_1.MessagesResolver } },
            { path: 'lists', component: lists_component_1.ListsComponent, resolve: { users: lists_resolver_1.ListsResolver } },
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
