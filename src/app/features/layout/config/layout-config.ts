import { LayoutConfig } from "@spartacus/storefront";

export const publicsectorLayoutConfig: LayoutConfig = {
    layoutSlots: {
        header: {
            lg: {
                slots: [
                'SiteLogo',
                'SearchBox',
                'SiteLogin',
                'NavigationBar',
                //'HeaderLinks',
                'TopHeaderSlot',
                'BottomHeaderSlot',              
                'PlaceholderContentSlot',
                'HomepageNavLink',
                ],
            },
            slots: ['SiteLogo', 'SearchBox','TopHeaderSlot','NavigationBar','BottomHeaderSlot']
        },
        LandingPage2Template: {
            slots: [
                'Section1',
                'Section2A',
                'Section2B',
                'Section2C',
                'Section2D'
            ]
        },
        footer: {
            slots: ['Footer']
          },
    }
};