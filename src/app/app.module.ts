import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserComponent } from './components/user/user.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { MessageComponent } from './components/message/message.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { UserService } from './services/user/user.service';
import { BubuiltInStrDirComponent } from './components/bubuilt-in-str-dir/bubuilt-in-str-dir.component';
import { ParentComponent } from './components/parent/parent.component';
import { BuiltInAttributeDirectiveComponent } from './components/built-in-attribute-directive/built-in-attribute-directive.component';
import { DirectivehostComponent } from './components/directivehost/directivehost.component';
import { ChangeCaseDirective } from './directives/change-case.directive';
import { UnlessDirective } from './directives/unless/unless.directive';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { AppendorPipe } from './pipes/appendor/appendor.pipe';
import { FilterPipe } from './pipes/flter/filter.pipe';
import { NewUserComponent } from './components/new-user/new-user.component';
import { NewUserReactiveComponent } from './components/new-user-reactive/new-user-reactive.component';

import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    HeaderComponent,
    UsersComponent,
    UserDetailsComponent,
    UserComponent,
    PlaceholderComponent,
    MessageComponent,
    MessageListComponent,
    BubuiltInStrDirComponent,
    ParentComponent,
    BuiltInAttributeDirectiveComponent,
    DirectivehostComponent,
    ChangeCaseDirective,
    UnlessDirective,
    OneComponent,
    TwoComponent,
    AppendorPipe,
    FilterPipe,
    NewUserComponent,
    NewUserReactiveComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
