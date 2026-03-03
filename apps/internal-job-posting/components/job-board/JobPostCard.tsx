import { Briefcase, Clock, MoreVertical, Users } from '@/assets';
import Button from '@/components/ui/Button';
import type { TJobPost } from '@/mocks';
import { cn } from '@/utils';

import styles from './JobPostCard.module.scss';

type TProps = {
    job: TJobPost;
    company: string;
    role: string;
    title: string;
    description: string;
    postedAt: string;
    experienceLabel: string;
    applicantsLabel: string;
    actionLabel: string;
    moreActionsLabel: string;
};

const companyToneClassMap: Record<TJobPost['companyTone'], string> = {
    blue: styles.toneBlue,
    orange: styles.toneOrange,
    pink: styles.tonePink,
    purple: styles.tonePurple,
    green: styles.toneGreen,
    yellow: styles.toneYellow,
};

const JobPostCard = ({
    job,
    company,
    role,
    title,
    description,
    postedAt,
    experienceLabel,
    applicantsLabel,
    actionLabel,
    moreActionsLabel,
}: TProps) => {
    const buttonVariant = job.actionVariant === 'primary' ? 'primary' : 'outline';

    return (
        <article className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.badges}>
                    <span className={cn(styles.companyBadge, companyToneClassMap[job.companyTone])}>{company}</span>
                    <span className={styles.roleBadge}>{role}</span>
                </div>
                <button className={styles.moreButton} type="button" aria-label={moreActionsLabel}>
                    <MoreVertical width={16} height={16} aria-hidden />
                </button>
            </div>

            <h3 className={styles.title}>{title}</h3>

            <div className={styles.metaList}>
                <span className={styles.metaItem}>
                    <Briefcase width={16} height={16} aria-hidden />
                    {experienceLabel}
                </span>
                <span className={styles.metaItem}>
                    <Clock width={16} height={16} aria-hidden />
                    {postedAt}
                </span>
                <span className={styles.metaItem}>
                    <Users width={16} height={16} aria-hidden />
                    {applicantsLabel}
                </span>
            </div>

            <p className={styles.description}>{description}</p>

            <div className={styles.divider} />

            <div className={styles.cardFooter}>
                {/* TODO: Link this CTA to real job details and application flow. */}
                <Button
                    type="button"
                    size="sm"
                    variant={buttonVariant}
                    leftIcon={buttonVariant === 'outline' ? <Users width={15} height={15} aria-hidden /> : undefined}
                >
                    {actionLabel}
                </Button>
            </div>
        </article>
    );
};

export default JobPostCard;
