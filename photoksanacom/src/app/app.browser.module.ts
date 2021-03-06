import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PricesComponent } from './prices/prices.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FamilyComponent } from './family/family.component';
import { PortraitComponent } from './portrait/portrait.component';
import { ChildrenComponent } from './children/children.component';
import { WeddingComponent } from './wedding/wedding.component';
import { EventComponent } from './event/event.component';
import { MaternityComponent } from './maternity/maternity.component';
import { PortfolioPortraitComponent } from './portfolio/portfolio-portrait/portfolio-portrait.component';
import { PortfolioChildrenComponent } from './portfolio/portfolio-children/portfolio-children.component';
import { PortfolioEventComponent } from './portfolio/portfolio-event/portfolio-event.component';
import { PortfolioNewbornComponent } from './portfolio/portfolio-newborn/portfolio-newborn.component';
import { PortfolioWeddingComponent } from './portfolio/portfolio-wedding/portfolio-wedding.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    CommonModule,
    
    HttpClientModule,
    AppRoutingModule,
    AppModule,
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
