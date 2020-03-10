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

type eventHandler = (node?: any) => void
 
export interface NotificationProps { 
    template?:  TemplateProps;
    animation?: AnimationProps;
    timing?:    number;
    delay?:    number;
    placement?: "top-left"|"top-right"|"bottom-left"|"bottom-right";
    children?:   (show: any) => JSX.Element;
    onEnter?: eventHandler; 
    onEntering?: eventHandler; 
    onEntered?: eventHandler; 
    onExit?: eventHandler; 
    onExiting?: eventHandler; 
    onExited?: eventHandler; 
}

export const Notification: React.FunctionComponent<NotificationProps>

export type RenderParam = (notify: typeof Notification) => void

export const Render: RenderParam