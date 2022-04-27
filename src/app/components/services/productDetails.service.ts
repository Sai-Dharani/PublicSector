import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { OccEndpointsService } from "@spartacus/core";
import { Observable } from "rxjs";

@Injectable()
export class ProductDetailsService{


constructor(private httpclient: HttpClient, protected occEndpoints: OccEndpointsService){}

getProductDetails(): Observable<any>{
    const pdp = "/products/register-birth?fields=FULL";
    return this.httpclient.get(this.occEndpoints.getBaseUrl() + pdp);
}
}