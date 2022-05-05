import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OccProductAdapter, OccProductReferencesAdapter, OccProductReferencesListNormalizer, OccProductReviewsAdapter, OccProductSearchAdapter, ProductAdapter, ProductImageNormalizer, ProductNameNormalizer, ProductReferencesAdapter, ProductReviewsAdapter, ProductSearchAdapter, PRODUCT_NORMALIZER, PRODUCT_REFERENCES_NORMALIZER, PRODUCT_SEARCH_PAGE_NORMALIZER, provideDefaultConfig } from '@spartacus/core';

import { OccProductSearchPageNormalizer } from './converters/occ-product-search-page-normalizer';
import { defaultOccProductConfig } from './default-occ-product-config';



@NgModule({
  imports: [CommonModule],
  providers: [
    provideDefaultConfig(defaultOccProductConfig),
    {
      provide: ProductAdapter,
      useClass: OccProductAdapter,
    },
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: ProductImageNormalizer,
      multi: true,
    },
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: ProductNameNormalizer,
      multi: true,
    },
    {
      provide: ProductReferencesAdapter,
      useClass: OccProductReferencesAdapter,
    },
    {
      provide: PRODUCT_REFERENCES_NORMALIZER,
      useExisting: OccProductReferencesListNormalizer,
      multi: true,
    },
    {
      provide: ProductSearchAdapter,
      useClass: OccProductSearchAdapter,
    },
    {
      provide: PRODUCT_SEARCH_PAGE_NORMALIZER,
      useExisting: OccProductSearchPageNormalizer,
      multi: true,
    },
    {
      provide: ProductReviewsAdapter,
      useClass: OccProductReviewsAdapter,
    },
  ],
})
export class ProductOccModule {}
