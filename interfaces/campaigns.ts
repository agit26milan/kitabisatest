export interface CampaignProps {
    campaigner: string,
    campaigner_badge: string,
    campaigner_is_verified: boolean,
    campaigner_type: string,
    category_name: string,
    custom_fb_pixel: string,
    days_remaining: number,
    donation_percentage: number,
    donation_received: number,
    donation_target: number,
    expired: number,
    id: number,
    image: string,
    is_featured: number,
    is_forever_running: boolean,
    is_open_goal: boolean,
    order: number,
    parent_project_id: number,
    request_userdata: boolean,
    short_url: string,
    title: string
}

export interface DropdownProps {
    label: string,
    value: string
}

export interface ParamUrlProps {
    sort: string
}