import type { ECountryApi, ECountrySeo, ELanguage } from '_core/constants/locale';
import type React from 'react';

export type TLocaleAPI = `${ELanguage}-${ECountryApi}`;
export type TLocaleSEO = `${ECountrySeo}-${ELanguage}`;

export type TLocaleConfig = {
    lang: ELanguage;
    apiCountry: ECountryApi;
    seoCountry: ECountrySeo;
    seoLocale: TLocaleSEO;
    apiLocale: TLocaleAPI;
    isRtl: boolean;
};

// Helper types for Next.js route params with proper TLocaleSEO inference
export type TSeoLocaleParams = {
    seoLocale: TLocaleSEO;
};

export type TSeoLocalePageProps = {
    params: Promise<TSeoLocaleParams>;
};

export type TSeoLocaleLayoutProps = {
    params: Promise<TSeoLocaleParams>;
    children: React.ReactNode;
};
