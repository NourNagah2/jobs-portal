import coreConfig from '_core/config';
import type { TLocaleSEO } from '_core/types/locale';
import Link from 'next/link';
import { splitSeoLocale } from '@/helpers';
import { cn } from '@/utils';

import styles from './LanguageSwitcher.module.scss';

type TProps = {
    seoLocale: TLocaleSEO;
};

const LanguageSwitcher = async ({ seoLocale }: TProps) => {
    const [currentRegion, currentLang] = splitSeoLocale(seoLocale);

    return (
        <div className={styles.container}>
            <div className={styles.switcher}>
                {coreConfig.languages.map((language) => (
                    <Link
                        key={`lang-${language}`}
                        className={cn(styles.language, { [styles.active]: currentLang === language })}
                        href={`/${currentRegion}-${language}`}
                    >
                        {language}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LanguageSwitcher;
