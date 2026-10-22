import { motion, useReducedMotion } from 'motion/react'
import { NavLink, Route, Routes, useLocation } from 'react-router'
import {
  achievements,
  certifications,
  contact,
  education,
  experience,
  navigation,
  programmingExperience,
  programmingProfiles,
  profile,
  projects,
  resume,
  skills,
  socialLinks,
} from './data/content'

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function Header() {
  const location = useLocation()
  return (
    <header className="site-header">
      <NavLink className="wordmark" to="/" aria-label="Pranit Harish Rai, home">
        <span className="wordmark-mark">PR</span>
        <span className="wordmark-name">Pranit Harish Rai</span>
      </NavLink>
      <nav className="main-nav" aria-label="Main navigation">
        {navigation.map(({ label, path }) => (
          <NavLink key={path} to={path} end={path === '/'} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            {label}
          </NavLink>
        ))}
      </nav>
      <span className="header-index" aria-label="Current page">{String(navigation.findIndex(({ path }) => path === location.pathname) + 1).padStart(2, '0')} <i>/</i> 06</span>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <nav className="footer-links" aria-label="Social profiles">
        {socialLinks.map((link) => link.status === 'confirmed' ? (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}<Arrow diagonal /></a>
        ) : <span className="placeholder-link" key={link.label}>{link.label}<sup>URL pending</sup></span>)}
      </nav>
      <span className="footer-note">Designed with care <span aria-hidden="true">·</span> Built for the web</span>
    </footer>
  )
}

function PageFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.main
      id="main-content"
      tabIndex={-1}
      className={`page-frame ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.35, ease: 'easeOut' }}
    >{children}</motion.main>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>
}

function Home() {
  const featuredExperience = experience[0]
  const featuredProject = projects[0]

  return (
    <PageFrame className="home-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <Eyebrow>Software engineer <span className="eyebrow-dot">/</span> Northwestern University</Eyebrow>
          <h1 id="hero-title">Backend engineering<br />for the <span>details.</span></h1>
          <p className="hero-description">I’m <strong>{profile.name}</strong>, a software engineer with experience at Fidelity Investments and an MS Computer Science student at Northwestern University. My work spans backend engineering, AWS, Java/Spring Boot, and Python-based data automation.</p>
          <div className="hero-actions">
            <NavLink className="button button-primary" to="/experience">View experience <Arrow /></NavLink>
            <NavLink className="button button-text" to="/projects">Explore projects <Arrow diagonal /></NavLink>
            {resume.available
              ? <a className="button button-outline" href={resume.path} download>Download resume <Arrow diagonal /></a>
              : <NavLink className="button button-outline" to="/resume">Resume <span className="button-status">PDF pending</span> <Arrow diagonal /></NavLink>}
          </div>
          <div className="hero-meta"><span className="meta-dot" /> COMPETITIVE PROGRAMMING <span className="eyebrow-dot">/</span> PROBLEM SOLVING</div>
        </div>
        <div className="hero-visual" aria-label="Abstract technical line illustration" role="img">
          <div className="visual-grid" />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="visual-cross cross-one">+</div><div className="visual-cross cross-two">+</div>
          <div className="visual-center"><span className="center-ring" /><span className="center-core" /></div>
          <span className="visual-label visual-label-top">SYSTEMS / THINKING</span>
          <span className="visual-label visual-label-bottom">FIG. 01 <i>—</i> IN PROGRESS</span>
          <span className="visual-axis axis-x" /><span className="visual-axis axis-y" />
        </div>
        <div className="hero-rail"><span>01</span><i /><span>06</span></div>
      </section>

      <section className="home-work" aria-labelledby="work-title">
        <div className="home-section-heading">
          <div><Eyebrow>Experience / Selected work</Eyebrow><h2 id="work-title">Engineering, <span>in practice.</span></h2></div>
          <p>Professional experience and personal projects, with details kept grounded in what’s verified.</p>
        </div>
        <div className="home-feature-grid">
          <article className="home-feature-card experience-feature">
            <div className="feature-topline"><span>01 <i>/</i> EXPERIENCE</span><span className="feature-status">CONFIRMED</span></div>
            <h3>{featuredExperience.company}</h3>
            <p className="feature-role">{featuredExperience.title}</p>
            <p className="feature-description">{featuredExperience.summary}</p>
            <ul className="technology-list" aria-label="Technologies and areas">
              {featuredExperience.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <NavLink className="feature-link" to="/experience">Explore experience <Arrow diagonal /></NavLink>
          </article>
          <article className="home-feature-card project-feature">
            <div className="feature-topline"><span>02 <i>/</i> PROJECTS</span><span className="feature-status">SELECTED WORK</span></div>
            {featuredProject ? <>
              <h3>{featuredProject.name}</h3>
              <p className="feature-description">{featuredProject.summary}</p>
            </> : <>
              <div className="project-mark" aria-hidden="true"><span>{'{ }'}</span><i /></div>
              <h3>Selected projects</h3>
              <p className="feature-description">Verified project details haven’t been added yet.</p>
            </>}
            <NavLink className="feature-link" to="/projects">Explore projects <Arrow diagonal /></NavLink>
          </article>
        </div>
      </section>
      <section className="home-more" aria-label="More portfolio sections">
        <span className="home-more-label">ALSO IN THIS PORTFOLIO</span>
        {navigation.slice(3, 5).map(({ label, path }) => <NavLink key={path} to={path}>{label}<Arrow diagonal /></NavLink>)}
        {!resume.available && <span className="home-more-note">Resume PDF unavailable</span>}
      </section>
    </PageFrame>
  )
}

function ProjectVisual({ type }: { type: 'traceability' | 'wildfire' | 'governance' }) {
  return (
    <div className={`project-visual project-visual-${type}`} aria-hidden="true">
      {type === 'traceability' && <>
        <span className="visual-caption">TRACEABILITY <i>/</i> CONCEPT</span>
        <div className="trace-line"><span className="trace-node">01</span><i /><span className="trace-node trace-node-active">02</span><i /><span className="trace-node">03</span></div>
        <div className="trace-labels"><span>ORIGIN</span><span>RECORD</span><span>DESTINATION</span></div>
        <span className="trace-orbit trace-orbit-a" /><span className="trace-orbit trace-orbit-b" />
      </>}
      {type === 'wildfire' && <>
        <span className="visual-caption">SENSING <i>/</i> PREDICTION</span>
        <div className="fire-radar"><span className="radar-ring radar-ring-a" /><span className="radar-ring radar-ring-b" /><span className="radar-ring radar-ring-c" /><i className="radar-sweep" /><b className="radar-point radar-point-a" /><b className="radar-point radar-point-b" /><b className="radar-point radar-point-c" /></div>
        <span className="radar-label">REAL-TIME RISK MODEL</span>
      </>}
      {type === 'governance' && <>
        <span className="visual-caption">DATA WORKFLOW <i>/</i> COLLABORATIVE</span>
        <div className="workflow-stack"><span><i /> PYTHON <b>STREAMLIT</b></span><span><i /> TICKET FLOW <b>JIRA</b></span><span><i /> DATA SOURCE <b>SNOWFLAKE</b></span></div>
      </>}
    </div>
  )
}

function ProjectsPage() {
  return (
    <PageFrame className="collection-page projects-page">
      <div className="page-heading">
        <Eyebrow>Projects <span className="eyebrow-dot">/</span> Selected work</Eyebrow>
        <h1>Ideas into<br /><span className="heading-muted">working systems.</span></h1>
        <p>Prototypes, applied machine learning, and collaborative data workflows. Each summary stays within the verified project details.</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className={`project-card${index === 0 ? ' project-card-featured' : ''}`} key={project.name}>
            <ProjectVisual type={project.visual} />
            <div className="project-card-content">
              <div className="project-card-meta">
                <span>{String(index + 1).padStart(2, '0')} <i>/</i> {project.classification === 'professional experience' ? 'PROFESSIONAL EXPERIENCE' : 'PROJECT'}</span>
                {project.recognition && <span className="recognition-tag">{project.recognition}</span>}
              </div>
              <h2>{project.name}</h2>
              <p className="project-summary">{project.summary}</p>
              <dl className="project-details">
                <div><dt>Problem</dt><dd>{project.problem}</dd></div>
                <div><dt>{project.classification === 'professional experience' ? 'Team approach' : 'Approach'}</dt><dd>{project.approach}</dd></div>
                {project.contribution && <div><dt>My contribution</dt><dd>{project.contribution}</dd></div>}
                {project.teamWork && <div className="team-context"><dt>Context</dt><dd>{project.teamWork}</dd></div>}
              </dl>
              <div className="project-card-bottom">
                <div className="project-tags" aria-label="Technologies and focus areas">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  {project.focus?.map((focus) => <span className="focus-tag" key={focus}>{focus}</span>)}
                </div>
                {project.links && project.links.length > 0 && <div className="project-links">{project.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}<Arrow diagonal /></a>)}</div>}
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="project-links-note">Repository and demo links will appear here when verified URLs are available.</p>
    </PageFrame>
  )
}

function CompetitiveProgrammingPage() {
  return (
    <PageFrame className="collection-page competitive-page">
      <div className="page-heading">
        <Eyebrow>Competitive programming <span className="eyebrow-dot">/</span> Problem solving</Eyebrow>
        <h1>Practice under<br /><span className="heading-muted">constraints.</span></h1>
        <p>Contest programming has been a consistent way to sharpen algorithmic thinking, work through unfamiliar problems, and learn with a community.</p>
      </div>
      <section className="contest-context" aria-label="Competitive programming participation">
        <div><span className="context-overline">CROSS-PLATFORM PARTICIPATION</span><strong>{programmingExperience.contestCount}</strong><span>{programmingExperience.contestScope}</span></div>
        <div className="context-divider" aria-hidden="true" />
        <div><span className="context-overline">LEARNING PRACTICE</span><strong>Post-contest discussions</strong><span>Participated in weekly discussions</span></div>
      </section>
      <div className="platform-grid">
        {programmingProfiles.map((platform, index) => (
          <article className="platform-card" key={platform.label}>
            <div className="platform-card-top"><span className="platform-index">0{index + 1} <i>/</i> PLATFORM</span><span className="platform-mark" aria-hidden="true">{platform.label.slice(0, 2).toUpperCase()}</span></div>
            <h2>{platform.label}</h2>
            <div className="platform-designation"><span>RESUME-LISTED DESIGNATION</span><strong>{platform.designation}</strong></div>
            <div className="platform-rating"><span>{platform.maximumLabel}</span><strong>{platform.historicalMaximum.toLocaleString('en-US')}</strong></div>
            {platform.profileUrl
              ? <a className="platform-link" href={platform.profileUrl} target="_blank" rel="noreferrer">Visit profile <Arrow diagonal /></a>
              : <span className="platform-link unavailable">Profile URL not configured</span>}
          </article>
        ))}
      </div>
      <p className="rating-note">Designations and ratings are resume-listed achievements. Ratings shown are historical maximums, not current ratings.</p>
    </PageFrame>
  )
}

function AchievementsPage() {
  const allAchievements = getAllAchievements()
  const categories = [
    { name: 'Competition', title: 'Competition & contests' },
    { name: 'Recognition', title: 'Recognition' },
    { name: 'Academic', title: 'Academic distinctions' },
    { name: 'Research', title: 'Research presentations' },
  ]

  return (
    <PageFrame className="collection-page achievements-page">
      <div className="page-heading">
        <Eyebrow>Achievements <span className="eyebrow-dot">/</span> Selected milestones</Eyebrow>
        <h1>Milestones in<br /><span className="heading-muted">competition &amp; research.</span></h1>
        <p>A selection of competition results, academic recognition, and research presentations documented from my resume.</p>
      </div>
      <div className="achievement-groups">
        {categories.map((category) => {
          const entries = allAchievements.filter((achievement) => achievement.category === category.name)
          if (entries.length === 0) return null
          return <section className={`achievement-group achievement-group-${category.name.toLowerCase()}`} key={category.name} aria-labelledby={`achievement-${category.name}`}>
            <div className="achievement-group-heading"><Eyebrow>{category.name}</Eyebrow><h2 id={`achievement-${category.name}`}>{category.title}</h2></div>
            <div className="achievement-grid">
              {entries.map((achievement, index) => <article className="achievement-card" key={`${achievement.title}-${index}`}>
                <div className="achievement-card-meta"><span>{String(index + 1).padStart(2, '0')}</span>{achievement.period && <span>{achievement.period}</span>}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </article>)}
            </div>
          </section>
        })}
      </div>
    </PageFrame>
  )
}

function getAllAchievements() {
  const projectRecognitions = projects
    .filter((project) => project.recognition)
    .map((project) => ({
      category: 'Competition' as const,
      title: project.name,
      description: project.recognition as string,
      period: undefined,
    }))
  return [...achievements, ...projectRecognitions]
}

function ExperiencePage() {
  return (
    <PageFrame className="collection-page experience-page">
      <div className="page-heading">
        <Eyebrow>Experience <span className="eyebrow-dot">/</span> Engineering</Eyebrow>
        <h1>Building systems<br /><span className="heading-muted">with purpose.</span></h1>
        <p>Professional experience at Fidelity Investments across backend engineering, service quality, and data pipelines.</p>
      </div>
      <ol className="experience-timeline" aria-label="Professional experience">
        {experience.map((role, index) => (
          <li className="timeline-item" key={`${role.title}-${role.dateRange}`}>
            <article className="timeline-card" aria-label={`${role.title} at ${role.company}, ${role.dateRange}`}>
              <div className="timeline-index" aria-hidden="true">0{index + 1}</div>
              <div className="timeline-body">
                <div className="timeline-meta"><span>{role.company}</span><span className="eyebrow-dot">/</span><span>{role.dateRange}</span></div>
                <h2>{role.title}</h2>
                {role.previousTitle && <div className="role-transition">
                  <span className="transition-label">PREVIOUS TITLE</span>
                  <strong>{role.previousTitle.title}</strong>
                  <span>{role.previousTitle.dateRange}</span>
                </div>}
                <p className="timeline-summary">{role.summary}</p>
                <ul className="contribution-list">
                  {role.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
                </ul>
                <ul className="timeline-tags" aria-label="Technologies">
                  {role.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
      <div className="experience-education"><span className="education-mark" aria-hidden="true">N</span><p>Currently pursuing an MS in Computer Science at <strong>Northwestern University</strong>.</p></div>
    </PageFrame>
  )
}

function ResumeSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return <section className="resume-section" id={id} aria-labelledby={`${id}-title`}><div className="resume-section-heading"><h2 id={`${id}-title`}>{title}</h2><span /></div>{children}</section>
}

function ResumePage() {
  const resumeAchievements = getAllAchievements()
  return (
    <PageFrame className="resume-page">
      <div className="resume-document">
        <header className="resume-header">
          <div className="resume-identity">
            <Eyebrow>Software engineer <span className="eyebrow-dot">/</span> Resume</Eyebrow>
            <h1>{profile.name}</h1>
            <p>Software Engineer <span aria-hidden="true">·</span> M.S. Computer Science student</p>
          </div>
          <div className="resume-actions" aria-label="Resume actions">
            <button className="button button-outline print-action" type="button" onClick={() => window.print()}>Print / Save as PDF <span aria-hidden="true">⌘P</span></button>
            {resume.available && <a className="button button-primary download-action" href={resume.path} download>Download Resume PDF <Arrow /></a>}
            {!resume.available && <p className="resume-file-note">To add the PDF, place the approved file at <code>public/resume.pdf</code>.</p>}
          </div>
        </header>
        <address className="resume-contact" aria-label="Professional contact information">
          <a href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.linkedIn} target="_blank" rel="noreferrer">LinkedIn profile <Arrow diagonal /></a>
        </address>

        <ResumeSection id="summary" title="Professional summary">
          <p className="resume-summary">Software engineer with experience building Java and Spring Boot backend services for cloud governance, improving service quality through testing and static analysis, and developing Python-based AWS and Snowflake ETL pipelines for governance analytics. Additional experience includes secure AWS authentication and AI-assisted Jenkins pipeline summarization.</p>
        </ResumeSection>

        <ResumeSection id="education" title="Education">
          <div className="resume-education-list">{education.map((record) => <article className="resume-education-item" key={record.institution}>
            <div><h3>{record.institution}</h3><p>{record.degree}{record.detail ? ` · ${record.detail}` : ''}</p></div>
            <div className="resume-education-meta"><span>{record.location}</span><span>{record.period}</span></div>
          </article>)}</div>
        </ResumeSection>

        <ResumeSection id="experience" title="Professional experience">
          <div className="resume-experience-list">{experience.map((role) => <article className="resume-experience-item" key={`${role.title}-${role.dateRange}`}>
            <div className="resume-experience-heading"><div><h3>{role.title}</h3><p>{role.company}{role.previousTitle ? ` · Previously ${role.previousTitle.title} (${role.previousTitle.dateRange})` : ''}</p></div><span>{role.dateRange}</span></div>
            <ul>{role.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
          </article>)}</div>
        </ResumeSection>

        <ResumeSection id="skills" title="Technical skills">
          <dl className="resume-skills">{skills.map((group) => <div key={group.category}><dt>{group.category}</dt><dd>{group.skills.join(' · ')}</dd></div>)}</dl>
        </ResumeSection>

        <ResumeSection id="projects" title="Selected projects">
          <div className="resume-project-list">{projects.map((project) => <article className="resume-project-item" key={project.name}>
            <div className="resume-project-heading"><h3>{project.name}</h3><span>{project.classification === 'professional experience' ? 'Professional experience · collaborative' : 'Project'}</span></div>
            <p>{project.summary} {project.approach}</p>
            {project.contribution && <p><strong>Contribution:</strong> {project.contribution}</p>}
            {project.recognition && <p className="resume-recognition">{project.recognition}</p>}
            <div className="resume-project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          </article>)}</div>
        </ResumeSection>

        <ResumeSection id="problem-solving" title="Competitive programming & achievements">
          <div className="resume-programming-list">{programmingProfiles.map((platform) => <div key={platform.label}><strong>{platform.label}</strong><span>{platform.designation}</span><span>{platform.maximumLabel}: {platform.historicalMaximum.toLocaleString('en-US')}</span></div>)}</div>
          <p className="resume-programming-context">{programmingExperience.contestCount} {programmingExperience.contestScope.toLowerCase()}. {programmingExperience.postContestDiscussions}</p>
          <ul className="resume-achievement-list">{resumeAchievements.map((achievement, index) => <li key={`${achievement.title}-${index}`}>
            <span className="resume-achievement-category">{achievement.category}</span><span><strong>{achievement.title}</strong>{achievement.period && <small>{achievement.period}</small>}<span className="resume-achievement-description">{achievement.description}</span></span>
          </li>)}</ul>
          <p className="resume-rating-disclaimer">Competitive programming ratings shown are historical maximums, not current ratings.</p>
        </ResumeSection>

        {certifications.length > 0 && <ResumeSection id="certifications" title="Certifications">
          <ul className="resume-certifications">{certifications.map((certification) => <li key={certification}>{certification}</li>)}</ul>
        </ResumeSection>}
      </div>
    </PageFrame>
  )
}

function NotFound() {
  return <PageFrame className="collection-page"><div className="page-heading"><Eyebrow>404 <span className="eyebrow-dot">/</span> Not found</Eyebrow><h1>This page isn’t here.</h1><NavLink className="button button-primary" to="/">Return home <Arrow /></NavLink></div></PageFrame>
}

export default function App() {
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><Header /><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/experience" element={<ExperiencePage />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/competitive-programming" element={<CompetitiveProgrammingPage />} />
    <Route path="/achievements" element={<AchievementsPage />} />
    <Route path="/resume" element={<ResumePage />} />
    <Route path="*" element={<NotFound />} />
  </Routes><Footer /></div>
}
