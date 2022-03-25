import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OccEndpointsService, BaseSiteService } from '@spartacus/core';
import { flatMap } from 'rxjs/operators';

// Service to call OCC endpoints
@Injectable({
    providedIn: 'root'
})
export class ResourceService {
    constructor(private http: HttpClient, protected occEndpoints: OccEndpointsService, protected baseSiteService: BaseSiteService) {}

    getAuthConfig() {
        return this.baseSiteService.getActive().pipe(flatMap(() =>{
            // once baseSite exists, we can use getBaseUrl
            return this.http.get<AuthOccResponse>(`${this.occEndpoints.getBaseUrl()}/config/auth`);
        }));
    }

}

export interface AuthOccResponse {
    clientId: string;
    clientSecret: string;
    baseUrl: string;
}