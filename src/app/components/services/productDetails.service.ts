import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { OccEndpointsService } from "@spartacus/core";
import { Observable } from "rxjs";
import { NavigationEnd, Router, Routes } from "@angular/router"

@Injectable()
export class ProductDetailsService {
    public href: string = "";
    pdp: any;

    constructor(private httpclient: HttpClient, protected occEndpoints: OccEndpointsService, private route: Router) {
        this.href = this.route.url.split('/').pop()
        console.log(this.href)
    }

    getProductDetails(): Observable<any> {
        this.pdp = `/products/${this.href}?fields=FULL`;
        // this.cdr.detectChanges();
        // window.location.reload();
        return this.httpclient.get(this.occEndpoints.getBaseUrl() + this.pdp);

    }
}