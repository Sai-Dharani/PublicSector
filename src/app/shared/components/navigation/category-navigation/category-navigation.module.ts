import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import { NavigationModule } from '@spartacus/storefront';
import { CategoryNavigationComponent } from './category-navigation.component';

@NgModule({
  declarations: [CategoryNavigationComponent],
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
  entryComponents: [CategoryNavigationComponent],
})
export class CategoryNavigationModule {}
