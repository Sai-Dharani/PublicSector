import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, ConfigModule, provideDefaultConfig } from '@spartacus/core';
import { NavigationUIComponent } from '../navigation/navigation-ui.component';
import { NavigationModule } from '../navigation/navigation.module';
import { FooterNavigationComponent } from './footer-navigation.component';

@NgModule({
  declarations: [FooterNavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        PSFooterComponent: {
          component: FooterNavigationComponent,
        },
      },
    }),
  ],
  entryComponents: [FooterNavigationComponent],
})
export class FooterNavigationModule {}
