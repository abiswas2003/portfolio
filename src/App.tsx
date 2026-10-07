import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import TransformationIntro from './components/TransformationIntro'
import {
  education,
  experience,
  profile,
  projects,
  skills,
} from './data/resume'
import './App.css'

const INTRO_KEY = 'adila-portfolio-intro-seen'

function AmbientDecor() {
  return (
    <div className="ambient" aria-hidden="true">
      <span className="ambient__moon ambient__moon--a">☾</span>
      <span className="ambient__moon ambient__moon--b">☾</span>
      <span className="ambient__moon ambient__moon--c">☾</span>
      {Array.from({ length: 8 }, (_, i) => (
        <span
          key={i}
          className="ambient__spark"
          style={{
            left: `${12 + ((i * 31) % 76)}%`,
            top: `${18 + ((i * 47) % 64)}%`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}
    </div>
  )
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          node.classList.add('is-visible')
          observer.unobserve(node)
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}

function RevealSection({
  id,
  className,
  children,
}: {
  id?: string
  className: string
  children: ReactNode
}) {
  const ref = useReveal<HTMLElement>()
  return (
    <section id={id} ref={ref} className={`reveal ${className}`}>
      {children}
    </section>
  )
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem(INTRO_KEY)
    if (seen === '1') {
      setShowIntro(false)
    }
    setReady(true)
  }, [])

  const finishIntro = useCallback(() => {
    sessionStorage.setItem(INTRO_KEY, '1')
    setShowIntro(false)
  }, [])

  if (!ready) return null

  return (
    <>
      {showIntro && <TransformationIntro onComplete={finishIntro} />}

      <div className={`site ${showIntro ? 'site--hidden' : 'site--visible'}`}>
        <AmbientDecor />

        <header className="nav">
          <a className="nav__brand" href="#top">
            <span className="nav__moon" aria-hidden="true">
              ☾
            </span>
            Adila Biswas
          </a>
          <nav className="nav__links" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main id="top">
          <RevealSection className="hero panel">
            <p className="hero__eyebrow">In the name of the moon…</p>
            <h1 className="hero__name">Adila Biswas</h1>
            <p className="hero__tagline">{profile.tagline}</p>
            <p className="hero__lead">
              Georgia State CS grad building analytics systems, supply-chain insights, and fullstack tools
              that make real operations clearer.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#contact">
                Get in touch
              </a>
              <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </RevealSection>

          <RevealSection id="about" className="section panel">
            <div className="section__head">
              <h2>About</h2>
              <p>A little about me — education included.</p>
            </div>
            <div className="about-grid">
              <p className="about-copy">{profile.about}</p>
              <article className="edu-panel">
                <h3>{education.school}</h3>
                <p className="edu-panel__meta">
                  {education.degree} · GPA {education.gpa} · {education.graduation}
                </p>
                <p className="edu-panel__loc">{education.location}</p>
                <ul className="chip-list">
                  {education.courses.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </article>
            </div>
          </RevealSection>

          <RevealSection id="experience" className="section panel">
            <div className="section__head">
              <h2>Experience</h2>
              <p>Roles where analysis, systems, and teamwork meet.</p>
            </div>
            <ol className="timeline">
              {experience.map((job) => (
                <li key={`${job.company}-${job.role}`} className="timeline__item">
                  <div className="timeline__dot" aria-hidden="true" />
                  <div className="timeline__body">
                    <div className="timeline__top">
                      <h3>{job.role}</h3>
                      <span className="timeline__dates">{job.dates}</span>
                    </div>
                    <p className="timeline__org">
                      {job.company} · {job.location}
                    </p>
                    <ul>
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </RevealSection>

          <RevealSection id="projects" className="section panel">
            <div className="section__head">
              <h2>Projects</h2>
              <p>Selected work across analytics, ML, security, and civic tech.</p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article key={project.title} className="project">
                  <h3>{project.title}</h3>
                  <ul>
                    {project.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </RevealSection>

          <RevealSection id="skills" className="section panel">
            <div className="section__head">
              <h2>Skills & Interests</h2>
              <p>Tools, languages, and the things that keep me curious.</p>
            </div>
            <div className="skills-grid">
              <div>
                <h3>Technology</h3>
                <ul className="chip-list">
                  {skills.technology.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Languages</h3>
                <ul className="chip-list">
                  {skills.languages.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Certificates</h3>
                <ul className="plain-list">
                  {skills.certificates.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Awards</h3>
                <ul className="plain-list">
                  {skills.awards.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Affiliations</h3>
                <ul className="plain-list">
                  {skills.affiliations.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Interests</h3>
                <ul className="chip-list">
                  {skills.interests.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealSection>

          <RevealSection id="contact" className="section panel section--contact">
            <div className="section__head">
              <h2>Contact</h2>
              <p>Say hello — I’d love to connect.</p>
            </div>
            <div className="contact-block">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <div className="contact-links">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </RevealSection>
        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Adila Biswas</p>
        </footer>
      </div>
    </>
  )
}
