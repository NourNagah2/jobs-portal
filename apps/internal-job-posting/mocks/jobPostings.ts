export type TJobPost = {
    id: string;
    companyKey: string;
    roleKey: string;
    titleKey: string;
    descriptionKey: string;
    postedAtKey: string;
    yearsOfExperience: number;
    applicantsCount: number;
    actionLabelKey: string;
    actionVariant: 'outline' | 'primary';
    companyTone: 'blue' | 'green' | 'orange' | 'pink' | 'purple' | 'yellow';
    listingState: 'closed' | 'draft' | 'open';
};

export const mockJobPosts: TJobPost[] = [
    {
        id: 'job-senior-backend-engineer',
        companyKey: 'jobBoard.cards.seniorBackendEngineer.company',
        roleKey: 'jobBoard.roles.engineering',
        titleKey: 'jobBoard.cards.seniorBackendEngineer.title',
        descriptionKey: 'jobBoard.cards.seniorBackendEngineer.description',
        postedAtKey: 'jobBoard.cards.seniorBackendEngineer.postedAt',
        yearsOfExperience: 5,
        applicantsCount: 2,
        actionLabelKey: 'jobBoard.buttons.viewCandidates',
        actionVariant: 'outline',
        companyTone: 'blue',
        listingState: 'open',
    },
    {
        id: 'job-product-manager-food',
        companyKey: 'jobBoard.cards.productManagerFood.company',
        roleKey: 'jobBoard.roles.product',
        titleKey: 'jobBoard.cards.productManagerFood.title',
        descriptionKey: 'jobBoard.cards.productManagerFood.description',
        postedAtKey: 'jobBoard.cards.productManagerFood.postedAt',
        yearsOfExperience: 4,
        applicantsCount: 0,
        actionLabelKey: 'jobBoard.buttons.applyNow',
        actionVariant: 'primary',
        companyTone: 'orange',
        listingState: 'open',
    },
    {
        id: 'job-frontend-engineer',
        companyKey: 'jobBoard.cards.frontendEngineer.company',
        roleKey: 'jobBoard.roles.engineering',
        titleKey: 'jobBoard.cards.frontendEngineer.title',
        descriptionKey: 'jobBoard.cards.frontendEngineer.description',
        postedAtKey: 'jobBoard.cards.frontendEngineer.postedAt',
        yearsOfExperience: 3,
        applicantsCount: 1,
        actionLabelKey: 'jobBoard.buttons.viewCandidates',
        actionVariant: 'outline',
        companyTone: 'pink',
        listingState: 'open',
    },
    {
        id: 'job-data-scientist',
        companyKey: 'jobBoard.cards.dataScientist.company',
        roleKey: 'jobBoard.roles.data',
        titleKey: 'jobBoard.cards.dataScientist.title',
        descriptionKey: 'jobBoard.cards.dataScientist.description',
        postedAtKey: 'jobBoard.cards.dataScientist.postedAt',
        yearsOfExperience: 3,
        applicantsCount: 1,
        actionLabelKey: 'jobBoard.buttons.viewCandidates',
        actionVariant: 'outline',
        companyTone: 'purple',
        listingState: 'open',
    },
    {
        id: 'job-logistics-operations-manager',
        companyKey: 'jobBoard.cards.logisticsOperationsManager.company',
        roleKey: 'jobBoard.roles.operations',
        titleKey: 'jobBoard.cards.logisticsOperationsManager.title',
        descriptionKey: 'jobBoard.cards.logisticsOperationsManager.description',
        postedAtKey: 'jobBoard.cards.logisticsOperationsManager.postedAt',
        yearsOfExperience: 6,
        applicantsCount: 0,
        actionLabelKey: 'jobBoard.buttons.viewCandidates',
        actionVariant: 'outline',
        companyTone: 'green',
        listingState: 'open',
    },
    {
        id: 'job-ux-designer',
        companyKey: 'jobBoard.cards.uxDesigner.company',
        roleKey: 'jobBoard.roles.design',
        titleKey: 'jobBoard.cards.uxDesigner.title',
        descriptionKey: 'jobBoard.cards.uxDesigner.description',
        postedAtKey: 'jobBoard.cards.uxDesigner.postedAt',
        yearsOfExperience: 4,
        applicantsCount: 0,
        actionLabelKey: 'jobBoard.buttons.viewCandidates',
        actionVariant: 'outline',
        companyTone: 'yellow',
        listingState: 'open',
    },
    {
        id: 'job-mobile-engineer-ios',
        companyKey: 'jobBoard.cards.mobileEngineerIos.company',
        roleKey: 'jobBoard.roles.engineering',
        titleKey: 'jobBoard.cards.mobileEngineerIos.title',
        descriptionKey: 'jobBoard.cards.mobileEngineerIos.description',
        postedAtKey: 'jobBoard.cards.mobileEngineerIos.postedAt',
        yearsOfExperience: 4,
        applicantsCount: 3,
        actionLabelKey: 'jobBoard.buttons.viewCandidates',
        actionVariant: 'outline',
        companyTone: 'blue',
        listingState: 'draft',
    },
];
