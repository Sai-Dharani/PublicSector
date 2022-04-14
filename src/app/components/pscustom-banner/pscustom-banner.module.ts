import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { PSCustomBannerComponent } from './pscustom-banner.component';
import { MediaModule } from '@spartacus/storefront';


@NgModule({
  declarations: [PSCustomBannerComponent],
  imports: [
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        PSBannerComponent: {
          component: PSCustomBannerComponent,
        },
      },
    } as CmsConfig),
  ]
})
export class PSCustomBannerModule { }
