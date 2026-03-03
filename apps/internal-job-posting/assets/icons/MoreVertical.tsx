import type { SVGProps } from 'react';

export type MoreVerticalIconProps = SVGProps<SVGSVGElement>;

const MoreVertical = (props: MoreVerticalIconProps) => {
    return (
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="10" cy="4.8" r="1.3" fill="currentColor" />
            <circle cx="10" cy="10" r="1.3" fill="currentColor" />
            <circle cx="10" cy="15.2" r="1.3" fill="currentColor" />
        </svg>
    );
};

export default MoreVertical;
