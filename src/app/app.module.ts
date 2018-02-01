import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LeftNavComponent } from './component/left-nav/left-nav.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
