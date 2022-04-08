import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import { NavigationModule } from '@spartacus/storefront';
import { LogosComponent } from 'src/app/components/logos/logos.component';

import { CategoryNavigationComponent } from './category-navigation.component';

@NgModule({
  declarations: [CategoryNavigationComponent, LogosComponent],
  imports: [CommonModule, NavigationModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        CategoryNavigationComponent: {
          component: CategoryNavigationComponent,
          data: {
            resetMenuOnClose: true,
          },
        },
      },
    }),
  ],

  exports: [CategoryNavigationComponent],
  entryComponents: [CategoryNavigationComponent, LogosComponent],
})
export class CategoryNavigationModule {}
