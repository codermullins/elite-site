import { AboutComponent } from './website/about/about.component'
import { CartComponent } from './admin/cart/cart.component'
import { ContactComponent } from './website/contact/contact.component'
import { CustomersComponent } from './admin/customers/customers.component';
import { EventsComponent } from './website/events/events.component'
import { JoinComponent } from './website/join/join.component'
import { LandingPageComponent } from './website/landing-page/landing-page.component'
import { LayoutComponent } from './admin/layout/layout.component'
import { LoginComponent } from './admin/login/login.component'
import { OrdersComponent } from './admin/orders/orders.component'
import { ProductDetailsComponent } from './shop/product-details/product-details.component'
import { ProductsComponent } from './shop/products/products.component'
import { Routes } from '@angular/router'
import { AthletesComponent } from './admin/athletes/athletes.component';
import { AthleteDetailComponent } from './admin/athlete-detail/athlete-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full',
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
      {
        path: 'shop/product-details/:id',
        component: ProductDetailsComponent
      },

      {
        path: 'customers',
        component: CustomersComponent
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'athletes',
        component: AthletesComponent
      },
      {
        path: 'athlete-detail/:id',
        component: AthleteDetailComponent
      }

    ],
  },
]
