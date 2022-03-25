import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { CmsEnhancedBannerComponent } from './CmsEnhancedBannerModel';

@Component({
  selector: 'app-psenhanced-custom-banner',
  templateUrl: './psenhanced-custom-banner.component.html',
  styleUrls: ['./psenhanced-custom-banner.component.scss']
})
export class PSEnhancedCustomBannerComponent implements OnInit {
  
  constructor(private component:CmsComponentData<CmsEnhancedBannerComponent>) { 
  }
  data$ : Observable<CmsEnhancedBannerComponent> = this.component.data$
  
  ngOnInit(): void {
  }

}
