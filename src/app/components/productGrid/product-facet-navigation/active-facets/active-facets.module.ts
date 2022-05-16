import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule } from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';


import { ActiveFacetsComponent } from './active-facets.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    I18nModule,
    IconModule,

  ],
  declarations: [ActiveFacetsComponent],
  exports: [ActiveFacetsComponent],
})
export class ActiveFacetsModule {}
