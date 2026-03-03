import type { SVGProps } from 'react';

export type CheckboxProps = SVGProps<SVGSVGElement> & {
    checked?: boolean;
};

const Checkbox = ({ checked = false, ...props }: CheckboxProps) => {
    return (
        <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="checkbox icon"
            {...props}
        >
            <rect
                x="1"
                y="1"
                width="18"
                height="18"
                rx="4"
                stroke="currentColor"
                strokeWidth="1.5"
                fill={checked ? 'currentColor' : 'transparent'}
            />
            {checked ? (
                <path
                    d="M6 10.2L8.6 12.8L14 7.4"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            ) : null}
        </svg>
    );
};

export default Checkbox;
