import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { CmsFeaturedLinksComponent } from './CmsFeaturedLinksModel';

@Component({
  selector: 'app-pscustom-featured-links',
  templateUrl: './pscustom-featured-links.component.html',
  styleUrls: ['./pscustom-featured-links.component.scss']
})
export class PSCustomFeaturedLinksComponent implements OnInit {

  constructor(private component:CmsComponentData<CmsFeaturedLinksComponent>) { }

  data$ : Observable<CmsFeaturedLinksComponent> = this.component.data$
  ngOnInit(): void {
  }

}
