import type { TLocaleSEO } from '_core/types/locale';
import { useTranslationServer } from '@/lib';
import { mockJobPosts } from '@/mocks';
import styles from './JobBoardSection.module.scss';
import JobPostCard from './JobPostCard';
import SearchBar from './SearchBar';

type TProps = {
    seoLocale: TLocaleSEO;
};

const JobBoardSection = async ({ seoLocale }: TProps) => {
    const { t } = await useTranslationServer(seoLocale);

    const visibleJobs = mockJobPosts.filter((job) => job.listingState === 'open');
    const postedCount = mockJobPosts.filter((job) => job.listingState === 'open').length;
    const closedCount = mockJobPosts.filter((job) => job.listingState === 'closed').length;

    return (
        <section className={styles.container}>
            <div className={styles.topRow}>
                <div className={styles.stats}>
                    <h1 className={styles.title}>{t('jobBoard.openPositions')}</h1>
                    <span className={styles.totalCount}>{mockJobPosts.length}</span>
                    <span className={styles.countLabel}>{t('jobBoard.postedCount', { count: postedCount })}</span>
                    <span className={styles.divider} />
                    <span className={styles.countLabel}>{t('jobBoard.closedCount', { count: closedCount })}</span>
                </div>
                <div className={styles.search}>
                    <SearchBar
                        placeholder={t('jobBoard.searchPlaceholder')}
                        postJobLabel={t('jobBoard.buttons.postJob')}
                    />
                </div>
            </div>

            <div className={styles.grid}>
                {/* TODO: Replace mock entries with server fetched/paginated job data. */}
                {visibleJobs.map((job) => (
                    <JobPostCard
                        key={job.id}
                        job={job}
                        company={t(job.companyKey)}
                        role={t(job.roleKey)}
                        title={t(job.titleKey)}
                        description={t(job.descriptionKey)}
                        postedAt={t(job.postedAtKey)}
                        experienceLabel={t('jobBoard.experienceYears', { count: job.yearsOfExperience })}
                        applicantsLabel={t(
                            job.applicantsCount === 1 ? 'jobBoard.applicantSingle' : 'jobBoard.applicantPlural',
                            { count: job.applicantsCount },
                        )}
                        actionLabel={t(job.actionLabelKey)}
                        moreActionsLabel={t('jobBoard.moreActions')}
                    />
                ))}
            </div>
        </section>
    );
};

export default JobBoardSection;
