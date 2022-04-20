import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { PSCustomSocialMediaComponent } from './pscustom-social-media.component';



@NgModule({
  declarations: [PSCustomSocialMediaComponent],
  imports: [
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        PSSocialMediaComponent: {
          component: PSCustomSocialMediaComponent,
        },
      },
    } as CmsConfig),
  ]
})
export class PSCustomSocialMediaModule { }
