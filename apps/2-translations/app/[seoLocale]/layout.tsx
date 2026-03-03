import { dir } from 'i18next';
import type React from 'react';

import '_core/styles/theme.scss';
import type { ELanguage } from '_core/constants/locale';
import type { TSeoLocaleParams } from '_core/types/locale';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Main from '@/components/Main';

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
            <body>
                <Header seoLocale={seoLocale} />
                <Main>{children}</Main>
                <Footer seoLocale={seoLocale} />
            </body>
        </html>
    );
};

export default RootLayout;
