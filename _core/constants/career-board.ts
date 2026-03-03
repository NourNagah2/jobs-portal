import type {
  CareerApplicationStatus,
  CareerFilters,
  CareerNavTab,
  CareerRole,
  ExperienceRange,
} from "../types/career-board";

export const CAREER_NAV_TABS: CareerNavTab[] = [
  { id: "job-listings", labelKey: "careerBoard.nav.jobListings" },
  { id: "applied-jobs", labelKey: "careerBoard.nav.appliedJobs" },
  { id: "my-profile", labelKey: "careerBoard.nav.myProfile" },
];

export const EMPTY_CAREER_FILTERS: CareerFilters = {
  squads: [],
  roles: [],
  experienceRanges: [],
};

export const CAREER_EXPERIENCE_RANGES: ExperienceRange[] = [
  { label: "0-2 years", min: 0, max: 2 },
  { label: "3-5 years", min: 3, max: 5 },
  { label: "6-9 years", min: 6, max: 9 },
  { label: "10+ years", min: 10, max: 99 },
];

export const CAREER_ROLE_LABEL_KEYS: Record<CareerRole, string> = {
  employee: "careerBoard.roles.employee",
  manager: "careerBoard.roles.manager",
  talent_acquisition: "careerBoard.roles.talentAcquisition",
};

export const CAREER_APPLICATION_STATUS_KEYS: Record<
  CareerApplicationStatus,
  string
> = {
  applied: "careerBoard.applicationStatus.applied",
  in_review: "careerBoard.applicationStatus.inReview",
  accepted: "careerBoard.applicationStatus.accepted",
  rejected: "careerBoard.applicationStatus.rejected",
};

export const HIRING_ROLES = new Set<CareerRole>(["manager", "talent_acquisition"]);
