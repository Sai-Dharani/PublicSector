import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {provideDefaultConfig, RoutingConfig,CmsConfig, AuthGuard, ConfigModule, UrlModule} from '@spartacus/core';
import { CmsPageGuard } from '@spartacus/storefront';
import { freeApiService } from '../services/freeapi.service';
import { CeaBillsComponent } from './cea-bills.component';

export const defaultCEABillsRoutingConfig: RoutingConfig = {

};

@NgModule({
  declarations:[CeaBillsComponent],
  exports: [CeaBillsComponent],
  imports: [
    CommonModule,
    UrlModule,
 RouterModule.forChild([
  {
    path: 'null',
    component: CeaBillsComponent,
    canActivate: [AuthGuard, CmsPageGuard],
    data: {cxRoute : 'BillsList'}
  }
 ]),
 ConfigModule.withConfig({
   cmsComponents: {
    CeaBillsComponent : {
      component: CeaBillsComponent
    }
   },
   routing : {
     routes:{
      BillsList :{
        paths :['my-account/cea-bills']
      }
     }
   }
 })
  ],
  providers: [freeApiService],

})
export class CeaBillsRoutingModule {}