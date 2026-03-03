import type { SVGProps } from 'react';

export type SearchIconProps = SVGProps<SVGSVGElement>;

const Search = (props: SearchIconProps) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
            <path d="M20 20L16.6 16.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
};

export default Search;
