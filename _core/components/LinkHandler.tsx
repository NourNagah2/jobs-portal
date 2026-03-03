/**
 * LinkHandler component
 * imports NextLink from next/link to render the link
 * handles the click and hover events (any other events can be added)
 */

'use client';

import type { TLocaleSEO } from '_core/types/locale';
import { isExternalLink } from '_core/utils/url';
import NextLink, { type LinkProps } from 'next/link';
import type React from 'react';
import { useCallback } from 'react';

type TProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    Omit<LinkProps, 'href'> & {
        href: string;
        suppressRedirect?: boolean;
        external?: boolean;
        children: React.ReactNode;
        seoLocale: TLocaleSEO;
    };

export type TLinkHandlerProps = TProps;

const LinkHandler = ({ children, onClick, href, suppressRedirect, external, ...restProps }: TProps) => {
    const handleOnClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            // trigger onclick events
            onClick?.(e);

            // suppress redirection
            if (suppressRedirect) {
                e.preventDefault();
                // also stop event bubbling
                e.stopPropagation();
            }
        },
        [onClick, href, suppressRedirect],
    );

    // for external links that open in a new tab
    if (external || (href && isExternalLink(href))) {
        return (
            <NextLink
                {...restProps}
                onClick={handleOnClick}
                target="_blank"
                rel="nofollow noreferrer noopener"
                href={href}
                prefetch={false}
            >
                {children}
            </NextLink>
        );
    }

    return (
        <NextLink {...restProps} onClick={handleOnClick} href={href} prefetch={false}>
            {children}
        </NextLink>
    );
};

export default LinkHandler;
