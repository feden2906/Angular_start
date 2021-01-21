import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';
import {AddressComponent} from './address/address.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    UserComponent,
    AddressComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
