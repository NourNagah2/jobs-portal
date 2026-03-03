import type { TSeoLocaleParams } from '_core/types/locale';
import Counter from '@/components/Counter';
import LanguageSwitcher from '@/components/LanguageSwitcher';

type TProps = {
    params: Promise<{
        seoLocale: string;
    }>;
};

const HomePage = async (props: TProps) => {
    const params = (await props.params) as TSeoLocaleParams;

    const { seoLocale } = params;

    return (
        <>
            <LanguageSwitcher seoLocale={seoLocale} />
            <Counter seoLocale={seoLocale} />
        </>
    );
};

export default HomePage;
