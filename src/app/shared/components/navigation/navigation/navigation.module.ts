import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, ConfigModule, I18nModule, provideDefaultConfig } from '@spartacus/core';
import { NavigationUIComponent } from './navigation-ui.component';

import { NavigationComponent } from './navigation.component';

// import { IconModule } from '../../misc/icon/icon.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    I18nModule,

  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        NavigationComponent: {
          component: NavigationComponent,
        },
      },
    }),
  ],
  declarations: [NavigationComponent, NavigationUIComponent],
  exports: [NavigationComponent, NavigationUIComponent],
})
export class NavigationModule {}
