import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class freeApiService
{

   constructor(private httpclient: HttpClient){}

    getcomments(): Observable<any>{
      return this.httpclient.get("https://localhost:9002/occ/v2/publicsector/users/current/ceaBills?currentPage=0&fields=DEFAULT&pageSize=20"); 
    }
    }


