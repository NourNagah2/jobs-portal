'use client';

import type { TLocaleSEO } from '_core/types/locale';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { Trans } from 'react-i18next';
import { buildSeoLocale, getAlternateLanguage, splitSeoLocale } from '@/helpers';
import { useTranslationClient } from '@/lib';

import styles from './Footer.module.scss';

type TProps = {
    seoLocale: TLocaleSEO;
};

const Footer = ({ seoLocale }: TProps) => {
    const pathname = usePathname();

    const i18n = useTranslationClient(seoLocale);

    const [currentSeoCountry, currentLang] = useMemo(() => splitSeoLocale(seoLocale), [seoLocale]);

    const newLang = useMemo(() => getAlternateLanguage(currentLang), [currentLang]);

    const handleSwitchLanguage = useCallback(() => {
        i18n.changeLanguage(newLang);
    }, [i18n, newLang]);

    const newUrl = useMemo(() => {
        const newSeoLocale = buildSeoLocale(currentSeoCountry, newLang);
        const pathnameWithoutSeoLocale = pathname.replace(`/${seoLocale}`, '');
        return `/${newSeoLocale}${pathnameWithoutSeoLocale || '/'}`;
    }, [currentSeoCountry, newLang, pathname, seoLocale]);

    const LanguageText = <b className={styles.lang}>{newLang}</b>;

    return (
        <footer className={styles.container}>
            <Link className={styles.langSwitch} href={newUrl} onClick={handleSwitchLanguage}>
                <Trans
                    t={i18n.t}
                    i18nKey="_footer_language-switcher"
                    values={{ lang: newLang }}
                    components={{ span: <span />, text: LanguageText }}
                />
            </Link>
            <span className={styles.copy}>&copy; {new Date().getFullYear()} noon.com</span>
        </footer>
    );
};

export default Footer;
