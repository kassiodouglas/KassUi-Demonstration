import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorModule } from 'kass-ui-nav-lib';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
