import Button from '@/components/ui/Button';
import type { TJobPost } from '@/mocks';
import styles from './JobBoardSection.module.scss';
import JobPostCard from './JobPostCard';
import SearchBar from './SearchBar';

type TProps = {
    jobs: TJobPost[];
};

const quickFilters = ['Most recent', 'Remote', 'Engineering', 'Product'];

const JobBoardSection = ({ jobs }: TProps) => {
    return (
        <section className={styles.container}>
            <header className={styles.heading}>
                <p className={styles.eyebrow}>Internal opportunities</p>
                <h1 className={styles.title}>Find your next role inside the company</h1>
                <p className={styles.subtitle}>
                    Explore open roles across teams. This is a visual scaffold using mock data so we can continue
                    building features.
                </p>
            </header>

            <SearchBar />

            <div className={styles.filters}>
                {/* TODO: Wire quick filters to actual query params and backend filtering. */}
                {quickFilters.map((filter, index) => (
                    <Button key={filter} type="button" size="sm" variant={index === 0 ? 'secondary' : 'ghost'}>
                        {filter}
                    </Button>
                ))}
            </div>

            <div className={styles.grid}>
                {/* TODO: Replace mock entries with server fetched/paginated job data. */}
                {jobs.map((job) => (
                    <JobPostCard key={job.id} job={job} />
                ))}
            </div>
        </section>
    );
};

export default JobBoardSection;
