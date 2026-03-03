import type { TLocaleSEO } from '_core/types/locale';
import Button from '@/components/ui/Button';

import styles from './Header.module.scss';

type TProps = {
    seoLocale: TLocaleSEO;
};

const Header = ({ seoLocale }: TProps) => {
    const [country, lang] = seoLocale.split('-');

    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <p className={styles.kicker}>Internal job portal</p>
                <div className={styles.meta}>
                    <h2 className={styles.title}>Career Bliss Board</h2>
                    <span className={styles.locale}>
                        {country.toUpperCase()} - {lang.toUpperCase()}
                    </span>
                </div>
            </div>
            <Button type="button" size="sm">
                Post a role
            </Button>
        </header>
    );
};

export default Header;
