/**
 * Link itself is a server component whereas LinkWrapper is a client component
 */

import LinkHandler, { type TLinkHandlerProps } from '_core/components/LinkHandler';
import { getUrlObjectFromString, getUrlStringFromObject, isExternalLink } from '_core/utils/url';

export type TLinkProps = TLinkHandlerProps;

const Link = ({ href = '', external, suppressRedirect, seoLocale, children, ...restProps }: TLinkProps) => {
    let finalUrl = href;

    if (!(external || isExternalLink(href))) {
        const finalUrlObject = getUrlObjectFromString(href);

        // Apply SEO locale only to internal links
        if (!finalUrlObject.pathname.startsWith(`/${seoLocale}`)) {
            finalUrlObject.pathname = `/${seoLocale}${finalUrlObject.pathname}`;
        }

        finalUrl = getUrlStringFromObject(finalUrlObject);
    }

    return (
        <LinkHandler
            {...restProps}
            seoLocale={seoLocale}
            href={finalUrl}
            suppressRedirect={suppressRedirect}
            external={external}
        >
            {children}
        </LinkHandler>
    );
};

export default Link;
