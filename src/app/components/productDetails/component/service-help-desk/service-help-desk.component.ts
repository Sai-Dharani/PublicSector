import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { RegisterServicesComponent } from '../../productDetails.Model';

@Component({
  selector: 'app-service-help-desk',
  templateUrl: './service-help-desk.component.html',
})
export class ServiceHelpDeskComponent implements OnInit {
  constructor(private component: CmsComponentData<RegisterServicesComponent>) { }

  data$: Observable<RegisterServicesComponent> = this.component.data$

  ngOnInit() {
  }
}