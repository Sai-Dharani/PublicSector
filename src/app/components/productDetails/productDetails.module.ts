import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule, RoutingConfig, UrlModule } from '@spartacus/core';
import { ServiceApplyOnlineComponent } from './component/service-apply-online/service-apply-online.component';
import { ProductDetailsService } from '../services/productDetails.service';
import { ServiceApplyByEmailComponent } from './component/service-apply-by-email/service-apply-by-email.component';
import { ServiceApplyByPhoneComponent } from './component/service-apply-by-phone/service-apply-by-phone.component';
import { ServiceKeyFactsComponent } from './component/service-key-facts/service-key-facts.component';
import { ServiceRelatedLinksComponent } from './component/service-related-links/service-related-links.component';
import { ServiceHelpDeskComponent } from './component/service-help-desk/service-help-desk.component';
import { ServiceShareThisPageComponent } from './component/service-share-this-page/service-share-this-page.component';
import { productDetailsComponent } from './productDetails.component';

export const productDetailsRoutingConfig: RoutingConfig = {

};

@NgModule({
  declarations: [productDetailsComponent, ServiceApplyOnlineComponent, ServiceApplyByEmailComponent, ServiceApplyByPhoneComponent, ServiceKeyFactsComponent, ServiceRelatedLinksComponent, ServiceHelpDeskComponent, ServiceShareThisPageComponent],
  exports: [productDetailsComponent, ServiceApplyOnlineComponent, ServiceApplyByEmailComponent, ServiceApplyByPhoneComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents:{
        PSApplyOnlineComponent:{
          component : ServiceApplyOnlineComponent
        },
        PSApplyByEmailComponent:{
          component : ServiceApplyByEmailComponent
        },
        PSApplyByPhoneComponent : {
          component : ServiceApplyByPhoneComponent
        },
        PSKeyFactsComponent : {
          component : ServiceKeyFactsComponent
        },
        PSRelatedLinksComponent : {
          component : ServiceRelatedLinksComponent
        },
        PSHelpDeskComponent : {
          component : ServiceHelpDeskComponent
        },
        PSShareThisPageComponent: {
          component : ServiceShareThisPageComponent
        }
      },
      routing: {
        routes: {
          ProductDetail: {
            paths: ['p/register-birth'],
          }
        }
      }
    })
  ],
  providers: [ProductDetailsService],
})

export class productDetailsModule { }
