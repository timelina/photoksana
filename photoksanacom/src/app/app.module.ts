import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PricesComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    AboutComponent,
    FamilyComponent,
    PortraitComponent,
    ChildrenComponent,
    WeddingComponent,
    EventComponent,
    MaternityComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
