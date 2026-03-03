export type CareerRole = "employee" | "manager" | "talent_acquisition";

export type CareerJobStatus = "open" | "closed";

export type CareerApplicationStatus = "applied" | "in_review" | "accepted" | "rejected";

export type CareerView = "job-listings" | "job-detail" | "applied-jobs" | "my-profile";

export interface CareerUser {
  id: string;
  name: string;
  title: string;
  squad: string;
  yearsOfExperience: number;
  bio: string;
  avatarUrl: string;
  role: CareerRole;
  contributions: string[];
  skills: string[];
  managerId?: string;
}

export interface CareerJob {
  id: string;
  title: string;
  squad: string;
  yearsRequired: number;
  description: string;
  postedAt: string;
  status: CareerJobStatus;
  postedById: string;
  jobRole: string;
  responsibilities: string[];
  requirements: string[];
  teamMembers?: CareerJobTeamMember[];
}

export interface CareerJobTeamMember {
  name: string;
  discipline: string;
  level: string;
}

export interface CareerApplication {
  id: string;
  jobId: string;
  applicantId: string;
  status: CareerApplicationStatus;
  appliedAt: string;
  answers?: CareerApplicationAnswers;
}

export interface CareerApplicationAnswers {
  previousTransfer: "yes" | "no";
  currentSquad: string;
  interestedSquad: string;
  reason: string;
  cvFileName?: string;
}

export interface CareerFeedback {
  id: string;
  authorId: string;
  authorName: string;
  authorTitle: string;
  targetUserId: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  date: string;
}

export interface CareerFilters {
  squads: string[];
  roles: string[];
  experienceRanges: string[];
}

export interface ExperienceRange {
  label: string;
  min: number;
  max: number;
}

export interface CareerNavTab {
  id: CareerView;
  labelKey: string;
}

export type CareerNotificationType = "new_application" | "status_changed";

export interface CareerNotification {
  id: string;
  userId: string;
  type: CareerNotificationType;
  message: string;
  relatedJobId?: string;
  relatedApplicantId?: string;
  read: boolean;
  createdAt: string;
}

export interface CareerFeatureFlags {
  userId: string;
  manager: boolean;
  employee: boolean;
  talentAcquisition: boolean;
  canManageJobs: boolean;
  canPostJobs: boolean;
  canReviewCandidates: boolean;
  canApplyToJobs: boolean;
  canViewAppliedJobs: boolean;
  canViewProfile: boolean;
}
