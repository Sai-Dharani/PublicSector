import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { PSCustomFeaturedLinksComponent } from './pscustom-featured-links.component';



@NgModule({
  declarations: [PSCustomFeaturedLinksComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        PSFeaturedLinksComponent: {
          component: PSCustomFeaturedLinksComponent,
        },
      },
    } as CmsConfig),
  ]
})
export class PSCustomFeaturedLinksModule { }
