import { CmsBannerComponentMedia, CmsComponent, CmsResponsiveBannerComponentMedia } from "@spartacus/core";

export interface CmsEnhancedBannerComponent extends CmsComponent {
    header?: string;
    content?: string;
    container?: string;
    description?:string;
    media?: CmsBannerComponentMedia | CmsResponsiveBannerComponentMedia;
    urlLink?: string;
    external?: string | boolean;
}