import type { ELanguage } from '_core/constants/locale';
import type { TSeoLocaleParams } from '_core/types/locale';
import { dir } from 'i18next';
import type React from 'react';
import '_core/styles/global.scss';

type TProps = {
    params: Promise<{ seoLocale: string }>;
    children: React.ReactNode;
};

const RootLayout = async (props: TProps) => {
    const params = (await props.params) as TSeoLocaleParams;

    const { seoLocale } = params;

    const { children } = props;

    const [, lang] = seoLocale.split('-') as [unknown, ELanguage];

    return (
        <html lang={lang} dir={dir(lang)}>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
