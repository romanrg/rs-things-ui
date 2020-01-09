import { Routes } from '@angular/router';
import { ThingsListComponent, ThingAddComponent } from './components';

export const thingsRoutes: Routes = [
  {
    path: 'things',
    component: ThingsListComponent,
  },
  {
    path: 'thing-add',
    component: ThingAddComponent,
  },
];
