import { ArrowUpRight, Briefcase, Clock, LocationPin } from '@/assets';
import Button from '@/components/ui/Button';
import type { TJobPost, TJobPostStatus } from '@/mocks';
import { cn } from '@/utils';

import styles from './JobPostCard.module.scss';

type TProps = {
    job: TJobPost;
};

const statusLabelMap: Record<TJobPostStatus, string> = {
    applied: 'Applied',
    review: 'In review',
    accepted: 'Accepted',
    rejected: 'Rejected',
    closed: 'Closed',
};

const statusClassMap: Record<TJobPostStatus, string> = {
    applied: styles.statusApplied,
    review: styles.statusReview,
    accepted: styles.statusAccepted,
    rejected: styles.statusRejected,
    closed: styles.statusClosed,
};

const JobPostCard = ({ job }: TProps) => {
    return (
        <article className={styles.card}>
            <div className={styles.cardHeader}>
                <span className={styles.company}>{job.company}</span>
                <span className={cn(styles.status, statusClassMap[job.status])}>{statusLabelMap[job.status]}</span>
            </div>

            <h3 className={styles.title}>{job.title}</h3>

            <div className={styles.metaList}>
                <span className={styles.metaItem}>
                    <LocationPin width={16} height={16} aria-hidden />
                    {job.location}
                </span>
                <span className={styles.metaItem}>
                    <Briefcase width={16} height={16} aria-hidden />
                    {job.employmentType}
                </span>
                <span className={styles.metaItem}>
                    <Clock width={16} height={16} aria-hidden />
                    {job.experienceLevel}
                </span>
            </div>

            <p className={styles.description}>{job.description}</p>

            <ul className={styles.tagList}>
                {job.tags.map((tag) => (
                    <li key={`${job.id}-${tag}`} className={styles.tag}>
                        {tag}
                    </li>
                ))}
            </ul>

            <div className={styles.cardFooter}>
                <div className={styles.metaStack}>
                    <span>Posted {job.postedAt}</span>
                    <strong>{job.salaryRange}</strong>
                </div>
                {/* TODO: Link this CTA to real job details and application flow. */}
                <Button type="button" size="sm" variant="secondary">
                    View details
                    <ArrowUpRight width={14} height={14} aria-hidden />
                </Button>
            </div>
        </article>
    );
};

export default JobPostCard;
