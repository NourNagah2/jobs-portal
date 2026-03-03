import type { ReadonlyURLSearchParams } from 'next/navigation';

export const isExternalLink = (url = ''): boolean => {
    const sanitizedUrl = url && typeof url === 'string' && url.trim().toLowerCase();
    return ['http', 'www', 'mailto:', 'tel:'].reduce<boolean>(
        (itDoes, thisThing): boolean =>
            itDoes || (sanitizedUrl && typeof sanitizedUrl === 'string' ? sanitizedUrl.startsWith(thisThing) : false),
        false,
    );
};

type TOptions = { global?: boolean };
export const removeStartingSlash = (href = '', options?: TOptions): string => {
    if (!href) return '';

    if (options?.global) {
        return href?.replace(/^\/+/g, '');
    }
    if (href?.startsWith('/')) {
        return href?.slice(1);
    }
    return href;
};
export const removeTrailingSlash = (href = '', options?: TOptions): string => {
    if (!href) return '';

    if (options?.global) {
        return href?.replace(/^\/+/g, '');
    }
    if (href?.endsWith('/')) {
        return href?.slice(0, -1);
    }
    return href;
};

export const slashifyUrl = (url: string): string => {
    let cleanedUrl = url.trim();

    // if there are query params
    let queryParamStr = '';
    if (cleanedUrl.includes('?')) {
        [cleanedUrl, queryParamStr] = cleanedUrl.split('?');
    }

    cleanedUrl = removeTrailingSlash(cleanedUrl);
    cleanedUrl = queryParamStr ? `${cleanedUrl}/?${queryParamStr}` : `${cleanedUrl}/`;
    return cleanedUrl;
};

/**
 * Use this utility to remove any malicious XSS content in a URL
 * (Credits - https://github.com/braintree/sanitize-url)
 *
 * @param url string
 * @returns sanitized URL without XSS
 */
export function sanitizeUrl(url?: string): string | null {
    const invalidProtocolRegex = /^(\W*)(javascript|data|vbscript)/im;
    const htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
    const htmlCtrlEntityRegex = /&(newline|tab);/gi;

    const ctrlCharactersRegex = new RegExp('[\\x00-\\x1F\\x7F-\\x9F\\u2000-\\u200D\\uFEFF]', 'gi');
    const urlSchemeRegex = /^.+(:|&colon;)/gim;
    const relativeFirstCharacters = new Set(['.', '/']);

    function isRelativeUrlWithoutProtocol(urlStr: string): boolean {
        return relativeFirstCharacters.has(urlStr[0]);
    }

    // adapted from https://stackoverflow.com/a/29824550/2601552
    function decodeHtmlCharacters(str: string) {
        return str.replaceAll(htmlEntitiesRegex, (_match, dec) => String.fromCodePoint(dec));
    }

    const sanitizedUrl = decodeHtmlCharacters(url || '')
        .replaceAll(htmlCtrlEntityRegex, '')
        .replaceAll(ctrlCharactersRegex, '')
        .trim();

    if (!sanitizedUrl) {
        return null;
    }

    if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {
        return sanitizedUrl;
    }

    const urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);

    if (!urlSchemeParseResults) {
        return sanitizedUrl;
    }

    const urlScheme = urlSchemeParseResults[0];

    if (invalidProtocolRegex.test(urlScheme)) {
        return null;
    }

    return sanitizedUrl;
}

export const atcLink = (url: string) => /^addToCart:\/\//.test(url);

type TGetUpdatedUrlWithSearchParams = {
    pathname: string;
    searchParams: ReadonlyURLSearchParams;
    newParams: Record<string, string>;
};

export const getUpdatedUrlWithSearchParams = ({
    pathname,
    searchParams,
    newParams,
}: TGetUpdatedUrlWithSearchParams) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(newParams).forEach(([key, value]) => {
        params.set(key, value);
    });
    return `${pathname}?${params.toString()}`;
};

export const getUrlObjectFromString = (urlStr: string = '') => {
    const tempHost = 'https://www.noon.com';

    if (urlStr && typeof urlStr === 'string' && urlStr.trim().startsWith('http')) {
        try {
            // already has a host
            return new URL(urlStr);
        } catch (error) {
            console.error('Cannot form valid URL', error, { urlStr });
        }
    }

    return new URL(urlStr, tempHost);
};

export const getUrlStringFromObject = (urlObj?: URL) => {
    if (!urlObj) {
        return '/';
    }

    let pathname = urlObj.pathname;

    if (pathname !== '/' && !pathname.endsWith('/')) {
        pathname = `${pathname}/`;
    }

    return `${pathname}${urlObj.search}`;
};

export type TUrlQueryParam = [string, string];

export const getUrlQueryParams = (search = ''): TUrlQueryParam[] => {
    const isValid = !!search && search.length > 1;

    if (!isValid) return [];

    // ignore the '?' in the beginning and everything before it
    const [, ...actualSearchStringArr] = search.split('?');
    const actualSearchString = actualSearchStringArr.join('?');

    // use the URLSearchParams [https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams]
    // util to get the correct search params
    const params = new URLSearchParams(actualSearchString);

    let paramsArr: TUrlQueryParam[] = [];

    params.forEach((value, key) => {
        if (key && value) {
            paramsArr.push([key, value]);
        }
    });

    // sort keys for better structure
    paramsArr = paramsArr.sort(([keyA], [keyB]) => {
        if (keyA > keyB) return 1;
        if (keyA < keyB) return -1;
        return 0;
    });

    return paramsArr;
};
