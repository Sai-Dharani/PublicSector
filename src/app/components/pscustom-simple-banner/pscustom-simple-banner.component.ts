import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { CmsSimpleBannerComponent } from './CmsSimpleBannerModel';

@Component({
  selector: 'app-pscustom-simple-banner',
  templateUrl: './pscustom-simple-banner.component.html',
})
export class PSCustomSimpleBannerComponent implements OnInit {

  constructor(private component:CmsComponentData<CmsSimpleBannerComponent>) { }

  data$ : Observable<CmsSimpleBannerComponent> = this.component.data$

  ngOnInit(): void {
  }

}
