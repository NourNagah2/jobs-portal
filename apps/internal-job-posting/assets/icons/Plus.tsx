import type { SVGProps } from 'react';

export type PlusIconProps = SVGProps<SVGSVGElement>;

const Plus = (props: PlusIconProps) => {
    return (
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M10 4.2V15.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
            <path d="M4.2 10H15.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
    );
};

export default Plus;
