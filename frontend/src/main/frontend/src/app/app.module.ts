import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './components/app.component';
import {LoginComponent} from "./components/login.component";
import {OverviewComponent} from "./components/overview.component";
import {ErrorComponent} from "./components/error.component";
import {AddComponent} from "./components/add.component";
import {FooterComponent} from "./components/my-footer.component";
import {EditComponent} from "./components/edit.component";
import {RestService} from "./services/rest.service";
import {HeaderComponent} from "./components/my-header.component";

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit/:watcherid',
    component: EditComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverviewComponent,
    AddComponent,
    EditComponent,
    ErrorComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RestService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
