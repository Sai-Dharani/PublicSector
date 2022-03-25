import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsNavigationComponent } from '@spartacus/core';
import { CmsComponentData, NavigationService } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { NavigationNode } from '../navigation/navigation-node.model';


@Component({
  selector: 'cx-category-navigation',
  templateUrl: './category-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryNavigationComponent {
  node$: Observable<NavigationNode> = 
    this.componentData.data$
  

  data$: Observable<CmsNavigationComponent> = this.componentData.data$;

  constructor(
    protected componentData: CmsComponentData<CmsNavigationComponent>,
    protected service: NavigationService
  ) {}
}
