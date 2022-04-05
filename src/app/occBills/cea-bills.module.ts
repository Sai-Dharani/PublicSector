import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutingConfig, AuthGuard, ConfigModule, UrlModule } from '@spartacus/core';
import { CmsPageGuard } from '@spartacus/storefront';
import { NgxPaginationModule } from 'ngx-pagination';
import { occBillsService } from '../services/occBills.service';
import { CeaBillsComponent } from './cea-bills.component';

export const defaultCEABillsRoutingConfig: RoutingConfig = {

};

@NgModule({
  declarations: [CeaBillsComponent],
  exports: [CeaBillsComponent],
  imports: [
    CommonModule,
    UrlModule,
    NgxPaginationModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CeaBillsComponent: {
          component: CeaBillsComponent
        }
      },
      routing: {
        routes: {
          BillsList: {
            paths: ['my-account/cea-bills'],
          }
        }
      }
    }),

  ],
  providers: [occBillsService, DatePipe],

})
export class CeaBillsRoutingModule { }