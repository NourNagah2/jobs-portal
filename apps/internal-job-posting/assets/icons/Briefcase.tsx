import type { SVGProps } from 'react';

export type BriefcaseIconProps = SVGProps<SVGSVGElement>;

const Briefcase = (props: BriefcaseIconProps) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="3" y="7" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
            <path
                d="M9 7V5.8C9 4.81 9.81 4 10.8 4H13.2C14.19 4 15 4.81 15 5.8V7"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path d="M3 12H21" stroke="currentColor" strokeWidth="1.6" />
        </svg>
    );
};

export default Briefcase;
