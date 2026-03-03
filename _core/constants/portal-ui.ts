import { JobApplication, JobPosting } from "@/types/portal";

export const JOBS_PER_PAGE = 4;

export const EMPTY_USERS = [];
export const EMPTY_SQUADS = [];
export const EMPTY_JOBS = [];
export const EMPTY_APPLICATIONS = [];
export const EMPTY_FEEDBACK = [];

export const STATUS_TO_PROGRESS: Record<JobApplication["status"], number> = {
  draft: 45,
  submitted: 100,
};

export const WORK_MODEL_LABEL: Record<JobPosting["workModel"], string> = {
  remote: "portal.common.workModel.remote",
  hybrid: "portal.common.workModel.hybrid",
  onsite: "portal.common.workModel.onsite",
};

export const SORT_OPTIONS = [
  {
    value: "recent",
    labelKey: "portal.jobListings.sort.recent",
  },
  {
    value: "experience",
    labelKey: "portal.jobListings.sort.experience",
  },
] as const;

export const POSTED_SINCE_OPTIONS = [
  { value: "7", labelKey: "portal.jobListings.postedSince.last7" },
  { value: "14", labelKey: "portal.jobListings.postedSince.last14" },
  { value: "30", labelKey: "portal.jobListings.postedSince.last30" },
] as const;

export const EMPLOYMENT_TYPE_OPTIONS = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
] as const;
