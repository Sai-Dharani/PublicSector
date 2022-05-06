import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { RetrieveDraftComponent } from './retrieveDraftModel';

@Component({
  selector: 'app-product-retrieve-a-draft',
  templateUrl: './product-retrieve-a-draft.component.html'
})
export class ProductRetrieveADraftComponent implements OnInit {

  constructor(private component: CmsComponentData<RetrieveDraftComponent>) { }

  data$: Observable<RetrieveDraftComponent> = this.component.data$

  ngOnInit(): void {
  }

}
