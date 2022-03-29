import { CmsComponent } from "@spartacus/core";

export interface CmsFeaturedLinksComponent extends CmsComponent {
    name?:string;
    links?:string;
    urlText?:string;
    urlTextLink?:string;
}