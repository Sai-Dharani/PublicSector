import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';

import { FacetModule } from '../facet/facet.module';
import { FacetListComponent } from './facet-list.component';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    IconModule,
    FacetModule,
  ],
  declarations: [FacetListComponent],
  exports: [FacetListComponent],
})
export class FacetListModule {}
