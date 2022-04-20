import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { RegisterServicesComponent } from './ServiceModel';

@Component({
  selector: 'app-service-help-desk',
  templateUrl: './service-help-desk.component.html',
  styleUrls: ['./service-help-desk.component.scss']
})
export class ServiceHelpDeskComponent implements OnInit {
  constructor(private component:CmsComponentData<RegisterServicesComponent>) { }

  data$ : Observable<RegisterServicesComponent> = this.component.data$
  ngOnInit(){

  }


}
