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
  { path: 'wedding',            component: WeddingComponent},
  { path: 'event',              component: EventComponent},
  { path: 'maternity',          component: MaternityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
