import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { PSEnhancedCustomBannerComponent } from './psenhanced-custom-banner.component';



@NgModule({
  imports: [
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        PSEnhancedBannerComponent: {
          component: PSEnhancedCustomBannerComponent,
        },
      },
    } as CmsConfig),
  ],
  declarations: [PSEnhancedCustomBannerComponent],
  entryComponents: [PSEnhancedCustomBannerComponent],

})
export class PSEnhancedCustomBannerModule { }
