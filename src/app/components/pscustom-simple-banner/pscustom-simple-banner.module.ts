import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PSCustomSimpleBannerComponent } from './pscustom-simple-banner.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { MediaModule } from '@spartacus/storefront';



@NgModule({
  declarations: [PSCustomSimpleBannerComponent],
  imports: [
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        PSSimpleResponsiveBannerComponent: {
          component: PSCustomSimpleBannerComponent,
        },
      },
    } as CmsConfig),
  ]
})
export class PSCustomSimpleBannerModule { }
