import {
  JobApplication,
  JobPosting,
  ManagerFeedback,
  Squad,
  UserProfile,
} from "@/types/portal";

const daysAgo = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString();
};

export const mockUsers: UserProfile[] = [
  {
    id: "u-manager-salma",
    name: "Salma Nasser",
    role: "manager",
    title: "Engineering Manager",
    squadId: "sq-marketplace",
    description:
      "Leads the Marketplace squad with a focus on internal mobility and tooling quality.",
    contributions: [
      "Launched squad-level hiring scorecard",
      "Mentors engineers on architecture and execution",
      "Coordinates cross-functional roadmap planning",
    ],
  },
  {
    id: "u-employee-adam",
    name: "Adam Farouk",
    role: "employee",
    title: "Frontend Engineer II",
    squadId: "sq-marketplace",
    managerId: "u-manager-salma",
    description:
      "Builds employee-facing product experiences and owns accessibility improvements.",
    contributions: [
      "Reduced dashboard render time by 34%",
      "Created reusable form engine for internal tools",
      "Led mobile responsiveness enhancements",
    ],
  },
];

export const mockSquads: Squad[] = [
  {
    id: "sq-marketplace",
    name: "Marketplace Experience",
    description:
      "Owns employee and partner-facing experiences across jobs, workflow, and dashboards.",
    upcomingWork: [
      "Q2 redesign rollout for internal candidate journey",
      "Add role-based analytics dashboard",
      "Improve performance budgets for low-spec tablets",
    ],
  },
  {
    id: "sq-supply",
    name: "Supply Operations",
    description:
      "Optimizes supply-side onboarding, compliance, and internal operational workflows.",
    upcomingWork: [
      "Centralize operations workflow rules",
      "Launch new SLA alerting panel",
      "Pilot data quality validation toolchain",
    ],
  },
];

export const mockJobs: JobPosting[] = [
  {
    id: "job-fe-1",
    title: "Senior Frontend Engineer",
    company: "Linear",
    role: "Frontend Engineering",
    experienceYears: 4,
    salaryRange: "$100k-$140k",
    employmentType: "Full-time",
    workModel: "remote",
    timezone: "GMT+4",
    location: "Dubai",
    squadId: "sq-marketplace",
    postedAt: daysAgo(3),
    status: "open",
    description:
      "Build highly interactive internal products with performance-focused React architecture.",
    questions: [
      "Which internal product experience would you improve first and why?",
      "Describe a frontend architecture decision you made that scaled well.",
      "How do you validate accessibility in dynamic interfaces?",
    ],
    hiringManagerId: "u-manager-salma",
  },
  {
    id: "job-pm-1",
    title: "Product Manager, Internal Platforms",
    company: "Stripe",
    role: "Product Management",
    experienceYears: 5,
    salaryRange: "$120k-$160k",
    employmentType: "Full-time",
    workModel: "hybrid",
    timezone: "GMT+3",
    location: "Riyadh",
    squadId: "sq-marketplace",
    postedAt: daysAgo(12),
    status: "open",
    description:
      "Own discovery and delivery for internal mobility and workforce productivity products.",
    questions: [
      "How do you prioritize platform investments across teams?",
      "Share one product metric you improved significantly and how.",
    ],
    hiringManagerId: "u-manager-salma",
  },
  {
    id: "job-ops-1",
    title: "Operations Specialist",
    company: "Intercom",
    role: "Operations",
    experienceYears: 2,
    salaryRange: "$45k-$65k",
    employmentType: "Contract",
    workModel: "onsite",
    timezone: "GMT+2",
    location: "Cairo",
    squadId: "sq-supply",
    postedAt: daysAgo(28),
    status: "closed",
    description:
      "Drive process quality across internal operations with strong ownership and communication.",
    questions: [
      "How do you identify bottlenecks in operational workflows?",
      "What is your approach to stakeholder alignment during process changes?",
    ],
    hiringManagerId: "u-manager-salma",
  },
  {
    id: "job-data-1",
    title: "Data Analyst",
    company: "Webflow",
    role: "Data",
    experienceYears: 3,
    salaryRange: "$80k-$110k",
    employmentType: "Full-time",
    workModel: "remote",
    timezone: "GMT+2",
    location: "Amman",
    squadId: "sq-supply",
    postedAt: daysAgo(7),
    status: "open",
    description:
      "Create actionable workforce insights and improve decision-making with trusted data.",
    questions: [
      "Which dashboards would you create for hiring managers first?",
      "Explain your approach for ensuring dashboard data quality.",
    ],
    hiringManagerId: "u-manager-salma",
  },
];

export const mockApplications: JobApplication[] = [
  {
    id: "app-draft-adam-pm",
    jobId: "job-pm-1",
    applicantId: "u-employee-adam",
    status: "draft",
    answers: {
      "How do you prioritize platform investments across teams?":
        "I score initiatives using impact, confidence, and implementation complexity.",
      "Share one product metric you improved significantly and how.":
        "I improved activation by reducing setup friction in onboarding.",
    },
    coverLetter:
      "I am interested in transitioning into product because I already lead roadmap discussions in my current role.",
    createdAt: daysAgo(2),
    updatedAt: daysAgo(1),
  },
  {
    id: "app-submitted-adam-fe",
    jobId: "job-fe-1",
    applicantId: "u-employee-adam",
    status: "submitted",
    answers: {
      "Which internal product experience would you improve first and why?":
        "I would redesign the candidate application flow to reduce completion friction.",
      "Describe a frontend architecture decision you made that scaled well.":
        "I introduced domain-based module boundaries with typed contracts.",
      "How do you validate accessibility in dynamic interfaces?":
        "Automated checks plus manual keyboard and screen-reader validation.",
    },
    coverLetter:
      "I am motivated to contribute at a broader level and mentor junior engineers.",
    createdAt: daysAgo(5),
    updatedAt: daysAgo(4),
  },
];

export const mockFeedback: ManagerFeedback[] = [
  {
    id: "fb-adam-1",
    employeeId: "u-employee-adam",
    managerId: "u-manager-salma",
    rating: 4,
    strengths: "Strong ownership, quality mindset, and thoughtful collaboration.",
    growthAreas:
      "Increase influence in cross-team planning and sharpen technical storytelling.",
    summary:
      "Adam continues to deliver high-impact frontend outcomes and is ready for broader scope.",
    createdAt: daysAgo(6),
  },
];
