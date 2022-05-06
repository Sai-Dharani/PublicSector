import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  FeaturesConfigModule,
  I18nModule,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import { AddToCartModule, defaultViewConfig, IconModule, ItemCounterModule, ListNavigationModule, MediaModule, OutletModule, SpinnerModule, StarRatingModule, ViewConfig } from '@spartacus/storefront';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ProductListComponent } from './container/product-list.component';
import { ProductScrollComponent } from './container/product-scroll/product-scroll.component';
import { ProductGridItemComponent } from './product-grid-item/product-grid-item.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductRetrieveADraftComponent } from './product-retrieve-a-draft/product-retrieve-a-draft.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MediaModule,
    AddToCartModule,
    ItemCounterModule,
    ListNavigationModule,
    UrlModule,
    I18nModule,
    StarRatingModule,
    IconModule,
    SpinnerModule,
    InfiniteScrollModule,
    FeaturesConfigModule,
    OutletModule,
  ],
  providers: [
    provideDefaultConfig(<ViewConfig>defaultViewConfig),
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        CMSProductListComponent: {
          component: ProductListComponent,
        },
        PSProductGridComponent: {
          component: ProductListComponent,
        },
        SearchResultsListComponent: {
          component: ProductListComponent,
        },
        PSRetrieveADraftComponent: {
          component: ProductRetrieveADraftComponent
        }
      },
    }),
  ],
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    ProductGridItemComponent,
    ProductViewComponent,
    ProductScrollComponent,
    ProductRetrieveADraftComponent,
  ],
  exports: [
    ProductListComponent,
    ProductListItemComponent,
    ProductGridItemComponent,
    ProductViewComponent,
    ProductScrollComponent,
  ],
})
export class ProductListModule {}
