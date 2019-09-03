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
import { PortfolioPortraitComponent } from './portfolio/portfolio-portrait/portfolio-portrait.component';
import { PortfolioChildrenComponent } from './portfolio/portfolio-children/portfolio-children.component';
import { PortfolioEventComponent } from './portfolio/portfolio-event/portfolio-event.component';
import { PortfolioNewbornComponent } from './portfolio/portfolio-newborn/portfolio-newborn.component';
import { PortfolioWeddingComponent } from './portfolio/portfolio-wedding/portfolio-wedding.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { NewbornComponent } from './newborn/newborn.component';
import { SeniorsComponent } from './seniors/seniors.component';
import { CertificateComponent } from './certificate/certificate.component';
import { Post1Component } from './blog/post1/post1.component';
import { Post2Component } from './blog/post2/post2.component';
import { Post3Component } from './blog/post3/post3.component';
import { Post4Component } from './blog/post4/post4.component';
import { Post5Component } from './blog/post5/post5.component';
import { TestComponent } from './test/test.component';
import { PhotographyComponent } from './photography/photography.component';

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
    MaternityComponent,
    PortfolioPortraitComponent,
    PortfolioChildrenComponent,
    PortfolioEventComponent,
    PortfolioNewbornComponent,
    PortfolioWeddingComponent,
    NewbornComponent,
    SeniorsComponent,
    CertificateComponent,
    Post1Component,
    Post2Component,
    Post3Component,
    Post4Component,
    Post5Component,
    TestComponent,
    PhotographyComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    TransferHttpCacheModule,
    NgtUniversalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
