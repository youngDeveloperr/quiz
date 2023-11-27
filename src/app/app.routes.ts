import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ListingComponent } from './listing/listing.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'listing',
    component: ListingComponent,
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
