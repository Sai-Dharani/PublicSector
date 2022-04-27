import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { publicsectorLayoutConfig } from "./features/layout/config/layout-config";
import { SpartacusModule } from './spartacus/spartacus.module';
import { provideConfig } from "@spartacus/core";
import { CustomRoutingModule } from "./routing/custom-routing/custom-routing.module";
import { PSEnhancedCustomBannerModule } from "./components/psenhanced-custom-banner/psenhanced-custom-banner.module";
import { CommonModule } from "@angular/common";
import { FooterNavigationModule } from "./shared/components/navigation/footer-navigation/footer-navigation.module";
import { NavigationModule } from "./shared/components/navigation/navigation/navigation.module";
import { PSCustomSocialMediaModule } from "./components/pscustom-social-media/pscustom-social-media.module";
import { PSCustomFeaturedLinksModule } from "./components/pscustom-featured-links/pscustom-featured-links.module";
import { CategoryNavigationModule } from "./shared/components/navigation/category-navigation/category-navigation.module";
import { NgxPaginationModule } from "ngx-pagination";
import { PSCustomSimpleBannerModule } from "./components/pscustom-simple-banner/pscustom-simple-banner.module";
import { PSCustomBannerModule } from "./components/pscustom-banner/pscustom-banner.module";
import { CeaBillsRoutingModule } from "./components/occBills/cea-bills.module";
import { PSCustomHeadingComponent } from "./components/pscustom-heading/pscustom-heading.component";
import { LogosComponent } from "./components/logos/logos.component";
import { productDetailsModule } from "./components/productDetails/productDetails.module";

@NgModule({
  declarations: [
    AppComponent,
    PSCustomHeadingComponent,
    LogosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CeaBillsRoutingModule,
    CustomRoutingModule,
    PSEnhancedCustomBannerModule,
    FooterNavigationModule,
    NavigationModule,
    CategoryNavigationModule,
    PSCustomSocialMediaModule,
    PSCustomFeaturedLinksModule,
    PSCustomSimpleBannerModule,
    PSCustomBannerModule,
    productDetailsModule
  ],
  providers: [provideConfig(publicsectorLayoutConfig)],
  bootstrap: [AppComponent]
})
export class AppModule { }
