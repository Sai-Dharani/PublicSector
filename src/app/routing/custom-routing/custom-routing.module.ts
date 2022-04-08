import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UrlModule, AuthGuard, CmsConfig, ConfigModule } from '@spartacus/core';
import { LogoutRedirectGuard } from './logout-redirect/logout-redirect-guard';
import { LoginRedirectGuard } from './login-redirect/login-redirect-guard';
import { BannerComponent, CmsPageGuard, FooterNavigationComponent, LinkComponent, MediaComponent, MediaModule, PageLayoutComponent } from '@spartacus/storefront';

export const staticRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard, CmsPageGuard],
    component: PageLayoutComponent,
    data: { cxRoute: 'home' },
  },
  {
    path: 'logout-redirect',
    canActivate: [LogoutRedirectGuard],
    component: LogoutRedirectGuard
  },
  {
    path: 'login-redirect',
    canActivate: [LoginRedirectGuard],
    component: LoginRedirectGuard
  }
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
        // PSFeaturedLinksComponent:{
        //   component: LinkComponent,
        // },
        // PSBannerComponent: {
        //   component: BannerComponent,
        // },
        // PSSocialMediaComponent: {
        //   component: MediaComponent,
        // },
        // PSSimpleBannerComponent:{
        //   component:BannerComponent,
        // },
        // CMSLinkComponent :{
        //   component:LinkComponent
        // },
        // CategoryNavigationComponent:{
        //   component:CategoryNavigationComponent
        // }
      },
    } as CmsConfig),
  ],
  entryComponents: [BannerComponent, LinkComponent],
  
  providers: [
    LogoutRedirectGuard,
    LoginRedirectGuard
  ],
  exports: [RouterModule]
})
export class CustomRoutingModule { }
