export type TJobPostStatus = 'accepted' | 'applied' | 'closed' | 'rejected' | 'review';

export type TJobPost = {
    id: string;
    title: string;
    company: string;
    location: string;
    employmentType: string;
    experienceLevel: string;
    postedAt: string;
    salaryRange: string;
    status: TJobPostStatus;
    description: string;
    tags: string[];
};

export const mockJobPosts: TJobPost[] = [
    {
        id: 'job-frontend-platform',
        title: 'Senior Frontend Engineer',
        company: 'Internal Platform Team',
        location: 'Dubai, UAE',
        employmentType: 'Full-time',
        experienceLevel: '5+ years',
        postedAt: '2 days ago',
        salaryRange: 'AED 28k - AED 35k',
        status: 'review',
        description:
            'Build and maintain shared internal UI foundations, design system primitives, and dashboard experiences used across squads.',
        tags: ['React', 'TypeScript', 'Design Systems'],
    },
    {
        id: 'job-product-analytics',
        title: 'Product Analyst',
        company: 'People Experience',
        location: 'Riyadh, KSA',
        employmentType: 'Hybrid',
        experienceLevel: '3+ years',
        postedAt: '4 days ago',
        salaryRange: 'SAR 18k - SAR 24k',
        status: 'applied',
        description:
            'Partner with product and HR stakeholders to define key metrics, monitor funnels, and surface actionable hiring insights.',
        tags: ['SQL', 'Experimentation', 'Dashboards'],
    },
    {
        id: 'job-talent-partner',
        title: 'Talent Acquisition Partner',
        company: 'Talent Team',
        location: 'Cairo, Egypt',
        employmentType: 'On-site',
        experienceLevel: '4+ years',
        postedAt: '1 week ago',
        salaryRange: 'EGP 65k - EGP 85k',
        status: 'accepted',
        description:
            'Drive end-to-end recruiting for technical roles and improve candidate experience across sourcing, screening, and onboarding.',
        tags: ['Recruitment', 'Employer Branding', 'Hiring Ops'],
    },
    {
        id: 'job-ops-manager',
        title: 'Operations Program Manager',
        company: 'Operations Excellence',
        location: 'Amman, Jordan',
        employmentType: 'Full-time',
        experienceLevel: '6+ years',
        postedAt: '10 days ago',
        salaryRange: 'USD 4.5k - USD 6k',
        status: 'closed',
        description:
            'Lead cross-functional operational programs, align stakeholders, and standardize execution playbooks for internal mobility.',
        tags: ['Program Management', 'Process Design', 'Stakeholder Management'],
    },
    {
        id: 'job-ui-designer',
        title: 'Product Designer',
        company: 'Employee Experience',
        location: 'Remote',
        employmentType: 'Contract',
        experienceLevel: '3+ years',
        postedAt: '3 days ago',
        salaryRange: 'USD 3k - USD 4k',
        status: 'rejected',
        description:
            'Design end-to-end internal portal journeys, including role discovery, profile growth, and manager review workflows.',
        tags: ['Figma', 'UX Research', 'Prototyping'],
    },
];
