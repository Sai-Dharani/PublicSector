import { CmsBannerComponentMedia, CmsComponent, CmsResponsiveBannerComponentMedia } from "@spartacus/core";

export interface CmsCustomBannerComponent extends CmsComponent {
    headline?: string;
    container?: string;
    media?: CmsBannerComponentMedia | CmsResponsiveBannerComponentMedia;
    urlLink?: string;
}