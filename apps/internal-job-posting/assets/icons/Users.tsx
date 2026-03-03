import type { SVGProps } from 'react';

export type UsersIconProps = SVGProps<SVGSVGElement>;

const Users = (props: UsersIconProps) => {
    return (
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M7.2 9.1C8.72 9.1 9.95 7.87 9.95 6.35C9.95 4.83 8.72 3.6 7.2 3.6C5.68 3.6 4.45 4.83 4.45 6.35C4.45 7.87 5.68 9.1 7.2 9.1Z"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="M2.95 14.8C2.95 12.95 4.52 11.45 6.47 11.45H7.92C9.87 11.45 11.45 12.95 11.45 14.8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
            <path
                d="M13.85 8.5C14.83 8.35 15.58 7.51 15.58 6.5C15.58 5.5 14.83 4.65 13.85 4.5"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="M16.1 14.8C16.1 13.35 15.08 12.09 13.62 11.72"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default Users;
