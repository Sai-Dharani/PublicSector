import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UrlModule, AuthGuard, CmsConfig, ConfigModule } from '@spartacus/core';
import { BannerComponent, CmsPageGuard, FooterNavigationComponent, LinkComponent, MediaComponent, MediaModule, PageLayoutComponent } from '@spartacus/storefront';

export const staticRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard, CmsPageGuard],
    component: PageLayoutComponent,
    data: { cxRoute: 'home' },
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UrlModule,
    MediaModule,
    RouterModule.forChild(staticRoutes),
    ConfigModule.withConfig({
      cmsComponents: {
        PSSimpleResponsiveBannerComponent: {
          component: BannerComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [BannerComponent],
  
  providers: [],
  exports: [RouterModule]
})
export class CustomRoutingModule { }
