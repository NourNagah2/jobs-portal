import type { SVGProps } from 'react';

export type LocationPinIconProps = SVGProps<SVGSVGElement>;

const LocationPin = (props: LocationPinIconProps) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M12 21C12 21 5 14.8 5 9.8C5 5.85 8.13 3 12 3C15.87 3 19 5.85 19 9.8C19 14.8 12 21 12 21Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <circle cx="12" cy="9.8" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        </svg>
    );
};

export default LocationPin;
