import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { CmsCustomBannerComponent } from './CmsCustomBannerModel';

@Component({
  selector: 'app-pscustom-banner',
  templateUrl: './pscustom-banner.component.html',
  styleUrls: ['./pscustom-banner.component.scss']
})
export class PSCustomBannerComponent implements OnInit {

  constructor(private component:CmsComponentData<CmsCustomBannerComponent>) { }

  data$ : Observable<CmsCustomBannerComponent> = this.component.data$
  
  ngOnInit(): void {
  }

}
