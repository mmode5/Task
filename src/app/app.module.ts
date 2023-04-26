import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { PrizeInfoComponent } from './prize-info/prize-info.component';
import { RulesAndRegulationsComponent } from './rules-and-regulations/rules-and-regulations.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SimilarOffersComponent } from './similar-offers/similar-offers.component';
import { FooterComponent } from './footer/footer.component';
import { DailyTournamentsComponent } from './daily-tournaments/daily-tournaments.component';
import { FinalStageComponent } from './final-stage/final-stage.component';
import { FinlaTournamentsComponent } from './finla-tournaments/finla-tournaments.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    PrizeInfoComponent,
    RulesAndRegulationsComponent,
    SimilarOffersComponent,
    FooterComponent,
    DailyTournamentsComponent,
    FinalStageComponent,
    FinlaTournamentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
