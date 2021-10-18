import { PrimengModule } from './primeng/primeng.module';
import { HeroesModule } from './heroes/heroes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { Error404Component } from './errors/error404/error404.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzResultModule } from 'ng-zorro-antd/result';

registerLocaleData(es);
@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HeroesModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzResultModule,
    PrimengModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
