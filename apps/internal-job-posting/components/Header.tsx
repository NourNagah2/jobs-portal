import type { TLocaleSEO } from '_core/types/locale';
import { useTranslationServer } from '@/lib';

import styles from './Header.module.scss';

type TProps = {
    seoLocale: TLocaleSEO;
};

const Header = async ({ seoLocale }: TProps) => {
    const { t } = await useTranslationServer(seoLocale);

    return <header className={styles.container}>{t('_header_title')}</header>;
};

export default Header;
