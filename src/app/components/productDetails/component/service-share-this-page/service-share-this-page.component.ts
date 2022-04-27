import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { RegisterServicesComponent } from '../service-help-desk/ServiceModel';

@Component({
  selector: 'app-service-share-this-page',
  templateUrl: './service-share-this-page.component.html',
  styleUrls: ['./service-share-this-page.component.scss']
})
export class ServiceShareThisPageComponent implements OnInit {
  
  //constructor(private component:CmsComponentData<RegisterServicesComponent>) { }

 // data$ : Observable<RegisterServicesComponent> = this.component.data$


  ngOnInit(): void {
  }

}
