import { type ECountrySeo, ELanguage } from '_core/constants/locale';
import type { TLocaleSEO } from '_core/types/locale';

export const splitSeoLocale = (seoLocale: TLocaleSEO) => {
    return seoLocale.split('-') as [ECountrySeo, ELanguage];
};

export const buildSeoLocale = (seoCountry: ECountrySeo, language: ELanguage): TLocaleSEO => {
    return `${seoCountry}-${language}` as TLocaleSEO;
};

export const getAlternateLanguage = (language: ELanguage): ELanguage => {
    return language === ELanguage.English ? ELanguage.Arabic : ELanguage.English;
};
