import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetailsService } from 'src/app/components/services/productDetails.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-service-apply-online',
  templateUrl: './service-apply-online.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceApplyOnlineComponent implements OnInit {

  constructor(private ProductDetailsService: ProductDetailsService, private route: Router, protected cdr: ChangeDetectorRef,) { }
  PDP: any;

  ngOnInit() {
    let currentUrl = this.route.url;
    // console.log(currentUrl)
    console.log('Inside')
    // this.route.navigateByUrl(currentUrl)
    this.ProductDetailsService.getProductDetails().subscribe(
      response => {
        this.PDP = response;
        this.cdr.detectChanges();
    
      }
    );
    
  }


}
