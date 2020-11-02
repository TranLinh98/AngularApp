"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.tokenGetter = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var dropdown_1 = require("ngx-bootstrap/dropdown");
var router_1 = require("@angular/router");
var routes_1 = require("./routes");
var angular_jwt_1 = require("@auth0/angular-jwt");
var ngx_gallery_9_1 = require("ngx-gallery-9");
var datepicker_1 = require("ngx-bootstrap/datepicker");
var ng2_file_upload_1 = require("ng2-file-upload");
var pagination_1 = require("ngx-bootstrap/pagination");
var buttons_1 = require("ngx-bootstrap/buttons");
var tabs_1 = require("ngx-bootstrap/tabs");
var nav_component_1 = require("./nav/nav.component");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("./_services/auth.service");
var home_component_1 = require("./home/home.component");
var register_component_1 = require("./register/register.component");
var error_interceptor_1 = require("./_services/error.interceptor");
var alertify_service_1 = require("./_services/alertify.service");
var animations_1 = require("@angular/platform-browser/animations");
var lists_component_1 = require("./lists/lists.component");
var messages_component_1 = require("./messages/messages.component");
var member_card_component_1 = require("./members/member-card/member-card.component");
var member_list_component_1 = require("./members/member-list/member-list.component");
var member_detail_component_1 = require("./members/member-detail/member-detail.component");
var User_service_1 = require("./_services/User.service");
var auth_guard_1 = require("./_guards/auth.guard");
var member_detail_resolver_1 = require("./_resovlvers/member-detail.resolver");
var member_list_resolver_1 = require("./_resovlvers/member-list.resolver");
var member_edit_component_1 = require("./members/member-edit/member-edit.component");
var member_edit_resolver_1 = require("./_resovlvers/member-edit.resolver");
var prevent_unsaved_changes_guard_1 = require("./_guards/prevent-unsaved-changes.guard");
var photo_edit_component_1 = require("./members/photo-edit/photo-edit.component");
var lists_resolver_1 = require("./_resovlvers/lists.resolver");
var messages_resolver_1 = require("./_resovlvers/messages.resolver");
var member_messages_component_1 = require("./members/member-messages/member-messages.component");
function tokenGetter() {
    return localStorage.getItem('token');
}
exports.tokenGetter = tokenGetter;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                home_component_1.HomeComponent,
                register_component_1.RegisterComponent,
                member_list_component_1.MemberListComponent,
                lists_component_1.ListsComponent,
                messages_component_1.MessagesComponent,
                member_card_component_1.MemberCardComponent,
                member_detail_component_1.MemberDetailComponent,
                member_edit_component_1.MemberEditComponent,
                photo_edit_component_1.PhotoEditComponent,
                member_messages_component_1.MemberMessagesComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                ngx_gallery_9_1.NgxGalleryModule,
                animations_1.BrowserAnimationsModule,
                datepicker_1.BsDatepickerModule.forRoot(),
                dropdown_1.BsDropdownModule.forRoot(),
                tabs_1.TabsModule.forRoot(),
                buttons_1.ButtonsModule.forRoot(),
                pagination_1.PaginationModule.forRoot(),
                animations_1.BrowserAnimationsModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes),
                ng2_file_upload_1.FileUploadModule,
                forms_1.ReactiveFormsModule,
                angular_jwt_1.JwtModule.forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        allowedDomains: ['localhost:5000'],
                        disallowedRoutes: ['localhost:5000/api/auth']
                    }
                }),
            ],
            providers: [
                auth_service_1.AuthService,
                error_interceptor_1.ErrorInterceptorProvider,
                alertify_service_1.AlertifyService,
                User_service_1.UserService,
                auth_guard_1.AuthGuard,
                member_detail_resolver_1.MemberDetailResolver,
                member_list_resolver_1.MemberListResolver,
                member_edit_resolver_1.MemberEditResolver,
                lists_resolver_1.ListsResolver,
                messages_resolver_1.MessagesResolver,
                prevent_unsaved_changes_guard_1.PreventUnsavedChanges
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
