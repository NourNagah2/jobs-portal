'use client';

import type { TLocaleSEO } from '_core/types/locale';
import { useCallback, useState } from 'react';
import { Checkbox } from '@/assets';
import { useTranslationClient } from '@/lib';

import styles from './Counter.module.scss';

type TProps = {
    seoLocale: TLocaleSEO;
};

const Counter = ({ seoLocale }: TProps) => {
    const { t } = useTranslationClient(seoLocale);

    const [count, setCount] = useState(0);
    const incrementCount = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <>
            <div className={styles.content}>{t('_switcher-content', { count })}</div>
            <button type="button" className={styles.button} onClick={incrementCount}>
                <Checkbox width={18} height={18} checked={count > 0} aria-hidden />
                {t('click-me')}
            </button>
        </>
    );
};

export default Counter;
