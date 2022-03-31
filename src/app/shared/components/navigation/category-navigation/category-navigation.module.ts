import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import { NavigationModule } from '@spartacus/storefront';

import { CategoryNavigationComponent } from './category-navigation.component';

@NgModule({
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
  declarations: [CategoryNavigationComponent],
  exports: [CategoryNavigationComponent],
  entryComponents: [CategoryNavigationComponent],
})
export class CategoryNavigationModule {}
