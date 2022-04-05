import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { OccEndpointsService } from "@spartacus/core";

@Injectable()
export class occBillsService {
  //reponse page size/or nomber of values to return per call
  pageSize: number = 10;
  //to sort reponse data, value can be byDueDate or byDueDateAndStatus 
  sort: string = 'byDueDateAndStatus';
  //to filter the reponse data, values can be ALL,PAID and UNPAID (status of the bill)
  status: string = 'all';
  constructor(
    private httpclient: HttpClient,
    protected occEndpoints: OccEndpointsService
  ) { }

  setStatus(value: string) {
    this.status = value;
  }
  setSort(value: string) {
    this.sort = value;
  }
  setpageSize(value: number) {
    this.pageSize = value;
  }

  getBills(current: number): Observable<any> {
    const fetchBills =
      "/users/current/ceaBills?&fields=DEFAULT&pageSize=" + this.pageSize
      + "&currentPage=" + current
      + "&sort=" + this.sort
      + "&status=" + this.status;
    return this.httpclient.get(this.occEndpoints.getBaseUrl() + fetchBills);
  }
}


