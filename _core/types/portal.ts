export type Role = "employee" | "manager";

export type JobStatus = "open" | "closed";

export type ApplicationStatus = "draft" | "submitted";

export interface Squad {
  id: string;
  name: string;
  description: string;
  upcomingWork: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  role: Role;
  title: string;
  squadId: string;
  managerId?: string;
  description: string;
  contributions: string[];
}

export interface JobPosting {
  id: string;
  title: string;
  company: string;
  role: string;
  experienceYears: number;
  salaryRange: string;
  employmentType: string;
  workModel: "remote" | "hybrid" | "onsite";
  timezone: string;
  location: string;
  squadId: string;
  postedAt: string;
  status: JobStatus;
  description: string;
  questions: string[];
  hiringManagerId: string;
}

export interface JobApplication {
  id: string;
  jobId: string;
  applicantId: string;
  status: ApplicationStatus;
  answers: Record<string, string>;
  coverLetter: string;
  updatedAt: string;
  createdAt: string;
}

export interface ManagerFeedback {
  id: string;
  employeeId: string;
  managerId: string;
  rating: 1 | 2 | 3 | 4 | 5;
  strengths: string;
  growthAreas: string;
  summary: string;
  createdAt: string;
}

export interface JobFilters {
  keyword: string;
  companies: string[];
  role: string;
  experienceYears: string;
  salaryRange: string;
  employmentType: string;
  workModel: string;
  timezone: string;
  location: string;
  squadId: string;
  postedSinceDays: string;
}

export interface PortalSnapshot {
  users: UserProfile[];
  squads: Squad[];
  jobs: JobPosting[];
  applications: JobApplication[];
  feedback: ManagerFeedback[];
  activeUserId: string;
}
