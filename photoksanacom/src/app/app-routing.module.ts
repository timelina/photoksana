import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { NewbornComponent } from './newborn/newborn.component';
import { SeniorsComponent } from './seniors/seniors.component';
import { CertificateComponent } from './certificate/certificate.component';
import { Post1Component } from './blog/post1/post1.component';
import { Post2Component } from './blog/post2/post2.component';
import { Post3Component } from './blog/post3/post3.component';
import { Post4Component } from './blog/post4/post4.component';
import { Post5Component } from './blog/post5/post5.component';

const routes: Routes = [
  { path: '',                   component: HomeComponent},
  { path: 'home',               component: HomeComponent},
  { path: 'prices',             component: PricesComponent},
  { path: 'packages',           component: PricesComponent},
  { path: 'gallery',            component: PortfolioComponent},
  { path: 'portfolio',          component: PortfolioComponent},
  { path: 'gallery/family',     component: PortfolioComponent},
  { path: 'gallery/portrait',   component: PortfolioPortraitComponent},
  { path: 'gallery/children',   component: PortfolioChildrenComponent},
  { path: 'gallery/event',      component: PortfolioEventComponent},
  { path: 'gallery/newborn',    component: PortfolioNewbornComponent},
  { path: 'gallery/wedding',    component: PortfolioWeddingComponent},
  { path: 'blog',               component: BlogComponent},
  { path: 'contact',            component: ContactComponent},
  { path: 'about',              component: AboutComponent},
  { path: 'family',             component: FamilyComponent},
  { path: 'portrait',           component: PortraitComponent},
  { path: 'children',           component: ChildrenComponent},
  { path: 'event',              component: EventComponent},
  { path: 'newborn',            component: NewbornComponent},
  { path: 'wedding',            component: WeddingComponent},
  { path: 'maternity',          component: MaternityComponent},
  { path: 'seniors',            component: SeniorsComponent},
  { path: 'certificate',        component: CertificateComponent},
  { path: 'blog/child-photography',        component: Post1Component},
  { path: 'blog/hair-nails-makeup',        component: Post2Component},
  { path: 'blog/location',        component: Post3Component},
  { path: 'blog/outfit-for-photo',        component: Post4Component},
  { path: 'blog/preparing-newborn-photoshoot',        component: Post5Component},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
