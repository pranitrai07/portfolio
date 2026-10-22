export type Placeholder<T> = {
  status: 'confirmed' | 'placeholder'
  value: T
  note?: string
}

export type SocialLink = {
  label: string
  href: string
  status: 'placeholder' | 'confirmed'
}

export type ProgrammingProfile = {
  label: 'Codeforces' | 'LeetCode' | 'CodeChef'
  designation: string
  historicalMaximum: number
  maximumLabel: 'Historical maximum rating' | 'Historical maximum contest rating'
  profileUrl?: string
}

export const profile = {
  name: 'Pranit Harish Rai',
  role: 'Software Engineer',
  education: 'MS Computer Science student at Northwestern University',
  location: { status: 'placeholder', value: 'Location to be added' } satisfies Placeholder<string>,
  introduction: {
    status: 'placeholder',
    value: 'A concise introduction will go here once approved.',
    note: 'Replace with a verified personal summary.',
  } satisfies Placeholder<string>,
  focus: {
    status: 'placeholder',
    value: 'Areas of focus to be added',
  } satisfies Placeholder<string>,
}

export const contact = {
  phone: '(773) 410-9941',
  email: 'pranitrai07@gmail.com',
  linkedIn: 'https://linkedin.com/in/pranit-rai',
}

export type EducationRecord = {
  institution: string
  location: string
  degree: string
  period: string
  detail?: string
}

export const education: EducationRecord[] = [
  {
    institution: 'Northwestern University',
    location: 'Evanston, IL',
    degree: 'M.S. Computer Science',
    period: 'Sep 2026 – Dec 2027',
  },
  {
    institution: 'Vellore Institute of Technology',
    location: 'Chennai, India',
    degree: 'B.Tech Computer Science',
    period: 'Sep 2021 – Aug 2025',
    detail: 'Specialization in Cyber Physical Systems · CGPA: 9.19/10',
  },
]

export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Competitive programming', path: '/competitive-programming' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Resume', path: '/resume' },
] as const

export const programmingProfiles: ProgrammingProfile[] = [
  { label: 'Codeforces', designation: 'Expert', historicalMaximum: 1705, maximumLabel: 'Historical maximum rating' },
  { label: 'LeetCode', designation: 'Knight', historicalMaximum: 2074, maximumLabel: 'Historical maximum contest rating' },
  { label: 'CodeChef', designation: '4-star', historicalMaximum: 1985, maximumLabel: 'Historical maximum rating' },
]

export const programmingExperience = {
  contestCount: 'More than 100 contests',
  contestScope: 'Across competitive programming platforms',
  postContestDiscussions: 'Participated in weekly post-contest discussions.',
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: '#', status: 'placeholder' },
  { label: 'LinkedIn', href: contact.linkedIn, status: 'confirmed' },
  ...programmingProfiles.map(({ label, profileUrl }) => ({
    label,
    href: profileUrl ?? '#',
    status: profileUrl ? 'confirmed' as const : 'placeholder' as const,
  })),
]

export const resume = {
  path: '/resume.pdf',
  available: true,
  note: 'Download the source resume PDF.',
}

export type PortfolioEntry = {
  title: string
  description: Placeholder<string>
  organization?: Placeholder<string>
  period?: Placeholder<string>
  technologies?: Placeholder<string[]>
}

export type ExperienceRecord = {
  company: string
  title: string
  dateRange: string
  summary: string
  contributions: string[]
  technologies: string[]
  previousTitle?: {
    title: string
    dateRange: string
  }
}

export const experience: ExperienceRecord[] = [
  {
    company: 'Fidelity Investments',
    title: 'Associate Software Engineer',
    dateRange: 'August 2025 – August 2026',
    summary: 'Backend development for cloud governance and engineering platforms.',
    previousTitle: {
      title: 'Executive Graduate Trainee',
      dateRange: 'August – October 2025',
    },
    contributions: [
      'Developed Java and Spring Boot backend services for a cloud governance platform.',
      'Built capabilities for AWS resource discovery, dependency analysis, cost optimization, and approval-driven infrastructure decommissioning.',
      'Implemented secure cross-account AWS authentication for an engineering platform.',
      'Developed an AI-assisted service for summarizing Jenkins pipelines.',
    ],
    technologies: ['Java', 'Spring Boot', 'AWS', 'Jenkins', 'AI-assisted services'],
  },
  {
    company: 'Fidelity Investments',
    title: 'Software Engineer Intern',
    dateRange: 'January 2025 – June 2025',
    summary: 'Service quality improvements across Java and Spring Boot applications.',
    contributions: [
      'Improved service quality through unit testing and SonarQube remediation.',
      'Worked on REST APIs and AWS Lambda services.',
    ],
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'AWS Lambda', 'SonarQube'],
  },
  {
    company: 'Fidelity Investments',
    title: 'Software Engineer Summer Intern',
    dateRange: 'June 2024 – July 2024',
    summary: 'Python and AWS/Snowflake ETL pipelines for governance analytics.',
    contributions: [
      'Built ETL pipelines to process unstructured customer concerns and Jira ticket data for governance analytics.',
    ],
    technologies: ['Python', 'AWS', 'Snowflake', 'ETL'],
  },
]

export type ProjectLink = {
  label: 'GitHub' | 'Live demo'
  href: string
}

export type ProjectRecord = {
  name: string
  classification: 'project' | 'professional experience'
  summary: string
  problem: string
  approach: string
  contribution?: string
  teamWork?: string
  recognition?: string
  technologies: string[]
  focus?: string[]
  visual: 'traceability' | 'wildfire' | 'governance'
  links?: ProjectLink[]
}

export const projects: ProjectRecord[] = [
  {
    name: 'PharmaShield',
    classification: 'project',
    summary: 'A prototype focused on pharmaceutical supply-chain traceability.',
    problem: 'Drug traceability across the pharmaceutical supply chain.',
    approach: 'Prototyped a supply-chain platform centered on blockchain-based drug traceability.',
    contribution: 'Backend development using Selenium.',
    recognition: 'Second place · House of Developers hackathon',
    technologies: ['Selenium'],
    focus: ['Blockchain-based traceability'],
    visual: 'traceability',
  },
  {
    name: 'Forest Fire Detection',
    classification: 'project',
    summary: 'An IoT-based system for real-time wildfire risk prediction.',
    problem: 'Predicting fire risk from real-time visual input in an IoT setting.',
    approach: 'Combined Arduino, OpenCV, Python, and Random Forest models for real-time fire-risk prediction.',
    technologies: ['Arduino', 'OpenCV', 'Python', 'Random Forest'],
    visual: 'wildfire',
  },
  {
    name: 'Governance data automation',
    classification: 'professional experience',
    summary: 'A collaborative Streamlit application for governance data workflows.',
    problem: 'Support Jira ticket management and data extraction for governance workflows.',
    approach: 'The team built a Python and Streamlit application using AWS and Snowflake to support ticket management and automated data extraction.',
    teamWork: 'Collaborative team project; the application and workflow reflect the team’s work.',
    contribution: 'Contributed Python-based ETL and data automation for governance analytics.',
    technologies: ['Python', 'Streamlit', 'AWS', 'Snowflake', 'Jira'],
    visual: 'governance',
  },
]

export type AchievementRecord = {
  category: 'Competition' | 'Recognition' | 'Academic' | 'Research'
  title: string
  description: string
  period?: string
}

export const achievements: AchievementRecord[] = [
  {
    category: 'Competition',
    title: 'Meta Hacker Cup 2024',
    description: 'Qualified for Round 2; ranked 1,339th globally in Round 2.',
    period: '2024',
  },
  {
    category: 'Competition',
    title: 'ICPC Asia Preliminary Contest',
    description: 'Participated in the 2023 and 2024 contests.',
    period: '2023 · 2024',
  },
  {
    category: 'Recognition',
    title: 'Elite Top Coder',
    description: 'Elite Top Coder designation at Vellore Institute of Technology.',
  },
  {
    category: 'Academic',
    title: 'Meritorious academic awards',
    description: 'Ranks 2/580 and 6/580, as listed on my resume.',
  },
  {
    category: 'Research',
    title: 'An Integrated Artificial Intelligence Enabled Approach for Thwarting Malpractice in an Online Examination Proctoring System',
    description: 'Presented at ICBAI 2023 and ORSI 2023, IISc Bangalore.',
    period: '2023',
  },
]

export type SkillGroup = {
  category: string
  skills: string[]
}

export const skills: SkillGroup[] = [
  { category: 'Languages', skills: ['Java', 'Python', 'C++', 'JavaScript', 'Kotlin'] },
  { category: 'Backend', skills: ['Spring Boot', 'REST APIs'] },
  { category: 'Machine Learning', skills: ['PyTorch', 'OpenCV', 'Scikit-Learn'] },
  { category: 'Cloud & DevOps', skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'] },
  { category: 'Databases', skills: ['SQL', 'DynamoDB', 'Aurora', 'Snowflake'] },
  { category: 'Tools', skills: ['Git', 'Bruno', 'SonarQube'] },
]

export const certifications = [
  'AWS Certified Cloud Practitioner · Amazon Web Services',
  'Application Development on Oracle Cloud · Oracle University',
  'E-Business · IIT Madras / NPTEL (SWAYAM)',
]
