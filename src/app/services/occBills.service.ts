import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { OccEndpointsService } from "@spartacus/core";


@Injectable()
export class occBillsService {

  constructor(
    private httpclient: HttpClient,
    protected occEndpoints: OccEndpointsService
  ) { }

  getcomments(): Observable<any> {
    // return this.httpclient.get("https://localhost:9002/occ/v2/publicsector/users/current/ceaBills?currentPage=0&fields=DEFAULT&pageSize=10");
    const fetchBills = "/users/current/ceaBills?currentPage=0&fields=DEFAULT&pageSize=10";
    return this.httpclient.get(this.occEndpoints.getBaseUrl() + fetchBills);
  }
}


