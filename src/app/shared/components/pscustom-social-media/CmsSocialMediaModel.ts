import { CmsBannerComponentMedia, CmsComponent, CmsResponsiveBannerComponentMedia } from "@spartacus/core";

export interface CmsSocialMediaComponent extends CmsComponent {
    name?:string;
    links?:string;
    headline?:string;
}