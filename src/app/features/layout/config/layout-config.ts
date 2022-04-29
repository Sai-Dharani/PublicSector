import { LayoutConfig } from "@spartacus/storefront";

export const publicsectorLayoutConfig: LayoutConfig = {
    layoutSlots: {
        header: {
            lg: {
                slots: [
                'PreHeader',
                'SiteLogo',
                'SearchBox',
                'SiteLogin',
                'NavigationBar',
                'TopHeaderSlot',
                'BottomHeaderSlot',              
                'PlaceholderContentSlot',
                'HomepageNavLink',
                ],
            },
            slots: ['PreHeader','SiteLogo', 'SearchBox']
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
        ServiceRequestDetailsPageTemplate :{
            slots:[
                'LeftSection',
                'RightSection'
            ]
        },
        ProductGridPageTemplate: {
            slots: ['ProductLeftRefinements', 'ProductGridSlot'],
          },
        footer: {
            slots: ['Footer']
          },
    }
};