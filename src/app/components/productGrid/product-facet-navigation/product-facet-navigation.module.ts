import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';

import { ActiveFacetsModule } from './active-facets/active-facets.module';
import { FacetModule } from './facet';
import { FacetListModule } from './facet-list/facet-list.module';
import { ProductFacetNavigationComponent } from './product-facet-navigation.component';
@NgModule({
  imports: [
    CommonModule,
    FacetListModule,
    ActiveFacetsModule,
    IconModule,
    I18nModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        PSProductRefinementComponent: {
          component: ProductFacetNavigationComponent,
        },
      },
    }),
  ],
  declarations: [ProductFacetNavigationComponent],
  exports: [ProductFacetNavigationComponent],
})
export class ProductFacetNavigationModule {}
