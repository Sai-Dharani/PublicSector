import { CmsComponent } from "@spartacus/core";

export interface CmsSocialMediaComponent extends CmsComponent {
    name?:string;
    links?:string;
    headline?:string;
}