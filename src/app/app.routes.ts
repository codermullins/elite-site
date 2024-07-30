import { AboutComponent } from './website/about/about.component'
import { CategoryComponent } from './admin/category/category.component'
import { ContactComponent } from './website/contact/contact.component'
import { EventsComponent } from './website/events/events.component'
import { JoinComponent } from './website/join/join.component'
import { LandingPageComponent } from './website/landing-page/landing-page.component'
import { LayoutComponent } from './admin/layout/layout.component'
import { LoginComponent } from './admin/login/login.component'
import { ProductsComponent } from './shop/products/products.component'
import { Routes } from '@angular/router'

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
        path: 'shop/products',
        component: ProductsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
]
