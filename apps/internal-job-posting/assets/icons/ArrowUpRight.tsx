import type { SVGProps } from 'react';

export type ArrowUpRightIconProps = SVGProps<SVGSVGElement>;

const ArrowUpRight = (props: ArrowUpRightIconProps) => {
    return (
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M5.8 14.2L14.2 5.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            <path
                d="M7.1 5.8H14.2V12.9"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowUpRight;
