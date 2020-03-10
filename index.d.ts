import React from 'react'

declare module 'myt-react-notify'
 
export interface AnimationProps {
    enter: string;
    exit: string;
}

export interface TemplateProps {
    title?: string;
    message?: string;
    variant?: "success"|"primary"|"danger"|"warning";
    dismissible?: boolean;
}
 
export interface NotificationProps { 
    template?:  TemplateProps;
    animation?: AnimationProps;
    timing?:    number;
    delay?:    number;
    placement?: "top-left"|"top-right"|"bottom-left"|"bottom-right";
    children?:   (show: any) => JSX.Element; 
}

export const Notification: React.FunctionComponent<NotificationProps>

export type RenderParam = (notify: typeof Notification) => void

export const Render: RenderParam