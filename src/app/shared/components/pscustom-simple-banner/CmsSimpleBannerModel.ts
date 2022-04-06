import { CmsBannerComponentMedia, CmsComponent, CmsResponsiveBannerComponentMedia } from "@spartacus/core";

export interface CmsSimpleBannerComponent extends CmsComponent {
    headline?: string;
    container?: string;
    media?: CmsBannerComponentMedia | CmsResponsiveBannerComponentMedia;
    urlText?:string;
    urlTextLink?: string;
}