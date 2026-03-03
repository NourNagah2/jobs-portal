import { JobFilters, Role } from "@/types/portal";

export type TabKey =
  | "job-listings"
  | "my-applications"
  | "profile"
  | "manage-jobs"
  | "applicants"
  | "team"
  | "feedback";

export type PortalTab = {
  key: TabKey;
  labelKey: string;
  helperKey: string;
};

export const employeeTabs: PortalTab[] = [
  {
    key: "job-listings",
    labelKey: "portal.tabs.jobListings.label",
    helperKey: "portal.tabs.jobListings.helper",
  },
  {
    key: "my-applications",
    labelKey: "portal.tabs.myApplications.label",
    helperKey: "portal.tabs.myApplications.helper",
  },
  {
    key: "profile",
    labelKey: "portal.tabs.profile.label",
    helperKey: "portal.tabs.profile.helper",
  },
];

export const managerTabs: PortalTab[] = [
  {
    key: "job-listings",
    labelKey: "portal.tabs.jobListings.label",
    helperKey: "portal.tabs.jobListings.helper",
  },
  {
    key: "manage-jobs",
    labelKey: "portal.tabs.manageJobs.label",
    helperKey: "portal.tabs.manageJobs.helper",
  },
  {
    key: "applicants",
    labelKey: "portal.tabs.applicants.label",
    helperKey: "portal.tabs.applicants.helper",
  },
  {
    key: "team",
    labelKey: "portal.tabs.team.label",
    helperKey: "portal.tabs.team.helper",
  },
  {
    key: "feedback",
    labelKey: "portal.tabs.feedback.label",
    helperKey: "portal.tabs.feedback.helper",
  },
  {
    key: "profile",
    labelKey: "portal.tabs.profile.label",
    helperKey: "portal.tabs.profile.helper",
  },
];

export const tabsByRole: Record<Role, PortalTab[]> = {
  employee: employeeTabs,
  manager: managerTabs,
};

export const emptyJobFilters: JobFilters = {
  keyword: "",
  companies: [],
  role: "",
  experienceYears: "",
  salaryRange: "",
  employmentType: "",
  workModel: "",
  timezone: "",
  location: "",
  squadId: "",
  postedSinceDays: "",
};
