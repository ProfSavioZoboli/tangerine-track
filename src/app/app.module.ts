import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { IndicNumeroComponent } from './pages/home/indic-numero/indic-numero.component';
import { HistoricoComponent } from './pages/home/historico/historico.component';
import { UltimaFotoComponent } from './pages/home/ultima-foto/ultima-foto.component';
import { PrevisaoTempoComponent } from './pages/home/previsao-tempo/previsao-tempo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    IndicNumeroComponent,
    HistoricoComponent,
    UltimaFotoComponent,
    PrevisaoTempoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
