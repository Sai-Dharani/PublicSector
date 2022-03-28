import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsNavigationComponent } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavigationNode } from './navigation-node.model';
import { NavigationService } from './navigation.service';
// import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';


@Component({
  selector: 'cx-navigation',
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  node$: Observable<NavigationNode> = this.service.createNavigation(
    this.componentData.data$
  );

  styleClass$: Observable<any> = this.componentData.data$.pipe(
    map((d) => d?.styleClass)
  );

  constructor(
    protected componentData: CmsComponentData<CmsNavigationComponent>,
    protected service: NavigationService
  ) {}
}
