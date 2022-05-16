import { CmsComponent } from "@spartacus/core";

export interface RetrieveDraftComponent extends CmsComponent {
    description?:string;
    title?:string;
    retrieveDraftButtonLabel?:string;
    retrieveDraftUrl?:string;
}