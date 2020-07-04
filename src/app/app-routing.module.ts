import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { MessageListComponent } from './components/message-list/message-list.component';
import { ConfirmationGuard } from "./guards/confirmation/confirmation.guard";
import { UserService } from './services/user/user.service';
import { UserResolveGuard} from './guards/UsersResolve/users-resolve.guard';
import { BubuiltInStrDirComponent } from './components/bubuilt-in-str-dir/bubuilt-in-str-dir.component';
import { ParentComponent } from './components/parent/parent.component';
import { BuiltInAttributeDirectiveComponent } from './components/built-in-attribute-directive/built-in-attribute-directive.component';
import { DirectivehostComponent } from './components/directivehost/directivehost.component';


const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'users',component:UsersComponent,
children:[
 { path:":userid",component:UserDetailsComponent},
{path:"",component:PlaceholderComponent}
]},
{path:'parent', component:ParentComponent},
{path:'build-in' ,component:BubuiltInStrDirComponent},
{path:'build-in-atr' ,component:BuiltInAttributeDirectiveComponent},
{path:'directives' ,component:DirectivehostComponent},
{path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  providers:[AuthGuard,ConfirmationGuard,UserService],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
