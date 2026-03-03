import { ECountryApi, ECountrySeo, ELanguage } from './constants/locale';
import type { TLocaleAPI, TLocaleSEO } from './types/locale';

const regions = [ECountryApi.UAE, ECountryApi.Saudi, ECountryApi.Egypt];
const countries = [ECountrySeo.UAE, ECountrySeo.Saudi, ECountrySeo.Egypt];
const languages = [ELanguage.English, ELanguage.Arabic];

const generateLocales = () => {
    return countries.reduce((acc, country) => {
        languages.forEach((language) => {
            acc.push(`${country}-${language}` as TLocaleSEO);
        });
        return acc;
    }, [] as TLocaleSEO[]);
};

const generateApiLocales = () => {
    return regions.reduce((acc, country) => {
        languages.forEach((language) => {
            acc.push(`${language}-${country}` as TLocaleAPI);
        });
        return acc;
    }, [] as TLocaleAPI[]);
};

const coreConfig = {
    regions,
    countries,
    languages,
    locales: generateLocales(),
    localesApi: generateApiLocales(),
} as const;

export default coreConfig;
