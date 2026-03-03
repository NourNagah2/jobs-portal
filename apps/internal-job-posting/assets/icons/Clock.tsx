import type { SVGProps } from 'react';

export type ClockIconProps = SVGProps<SVGSVGElement>;

const Clock = (props: ClockIconProps) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M12 7.8V12.4L14.9 14.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
};

export default Clock;
