import { Routes } from '@angular/router';

import { CardsComponent } from './card/card.component';

export const ComponentsRoutes: Routes = [
    {
      path: 'cards',
      component: CardsComponent,
      data: {
        title: 'Card',
        urls: [{title: 'Dashboard', url: '/dashboard'},
        {title: 'ngComponent'}, {title: 'Card'}]
      }
    }
  ];
