import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { CmsSocialMediaComponent } from './CmsSocialMediaModel';

@Component({
  selector: 'app-pscustom-social-media',
  templateUrl: './pscustom-social-media.component.html',
})
export class PSCustomSocialMediaComponent implements OnInit {

  constructor(private component:CmsComponentData<CmsSocialMediaComponent>) { }

  data$ : Observable<CmsSocialMediaComponent> = this.component.data$
  ngOnInit(): void {
  }

}
