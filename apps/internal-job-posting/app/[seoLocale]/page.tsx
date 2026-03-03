import type { TSeoLocaleParams } from '_core/types/locale';
import JobBoardSection from '@/components/job-board/JobBoardSection';

type TProps = {
    params: Promise<{
        seoLocale: string;
    }>;
};

const HomePage = async (props: TProps) => {
    const params = (await props.params) as TSeoLocaleParams;

    const { seoLocale } = params;

    return <JobBoardSection seoLocale={seoLocale} />;
};

export default HomePage;
