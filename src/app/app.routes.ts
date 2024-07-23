import { Routes } from '@angular/router'
import { LoginComponent } from './admin/login/login.component'
import { LayoutComponent } from './admin/layout/layout.component'
import { LandingPageComponent } from './website/landing-page/landing-page.component'
import { ProductsComponent } from './admin/products/products.component'
import { AboutComponent } from './website/about/about.component'
import { JoinComponent } from './website/join/join.component'
import { EventsComponent } from './website/events/events.component'
import { CategoryComponent } from './admin/category/category.component'
import { ContactComponent } from './website/contact/contact.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'landing-page',
        component: LandingPageComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'join',
        component: JoinComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'shop/category-products',
        component: CategoryComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
]
