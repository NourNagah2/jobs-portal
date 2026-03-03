import type { SVGProps } from 'react';

export type MoreVerticalIconProps = SVGProps<SVGSVGElement>;

const MoreVertical = (props: MoreVerticalIconProps) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M8.00001 8.66667C8.3682 8.66667 8.66668 8.36819 8.66668 8C8.66668 7.63181 8.3682 7.33333 8.00001 7.33333C7.63182 7.33333 7.33334 7.63181 7.33334 8C7.33334 8.36819 7.63182 8.66667 8.00001 8.66667Z"
                stroke="#6A7181"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.00001 4C8.3682 4 8.66668 3.70152 8.66668 3.33333C8.66668 2.96514 8.3682 2.66667 8.00001 2.66667C7.63182 2.66667 7.33334 2.96514 7.33334 3.33333C7.33334 3.70152 7.63182 4 8.00001 4Z"
                stroke="#6A7181"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.00001 13.3333C8.3682 13.3333 8.66668 13.0349 8.66668 12.6667C8.66668 12.2985 8.3682 12 8.00001 12C7.63182 12 7.33334 12.2985 7.33334 12.6667C7.33334 13.0349 7.63182 13.3333 8.00001 13.3333Z"
                stroke="#6A7181"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default MoreVertical;
