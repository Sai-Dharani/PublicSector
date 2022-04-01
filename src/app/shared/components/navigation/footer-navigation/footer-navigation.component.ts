import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsNavigationComponent } from '@spartacus/core';
import { CmsComponentData, NavigationNode } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavigationService } from '../navigation/navigation.service';



@Component({
  selector: 'cx-footer-navigation',
  templateUrl: './footer-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterNavigationComponent {
  node$: Observable<NavigationNode> = this.service.getNavigationNode(
    this.componentData.data$);
  

  styleClass$: Observable<any> = this.componentData.data$.pipe(
    map((d) => d?.styleClass)
  );

  constructor(
    protected componentData: CmsComponentData<CmsNavigationComponent>,
    protected service: NavigationService
  ) {
  }
}
