import { useEffect, useRef, useState } from 'react'
import {
  Activity, ArrowUpRight, Bot, ChevronDown, Cpu, Crosshair,
  MapPin, Moon, Radio, Sun, Zap,
} from 'lucide-react'
import { content, type Lang } from './i18n'

type Theme = 'dark' | 'light'

// Official marks (Simple Icons). GitHub's mark is monochrome, so it follows the text colour.
const GitHubLogo = () => (
  <svg className="contact-logo" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
)
const LinkedInLogo = () => (
  <svg className="contact-logo" viewBox="0 0 24 24" aria-hidden="true" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
)
const WhatsAppLogo = () => (
  <svg className="contact-logo" viewBox="0 0 24 24" aria-hidden="true" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
)

const nodeIcons = [Crosshair, Cpu, Bot, Zap, Radio]
const projectInfo: { number: string; title: Record<Lang, string>; link?: string }[] = [
  { number: '01', title: { fr: 'AquaWing', en: 'AquaWing' }, link: 'https://github.com/Ahmedmecatronique/AquaWing' },
  { number: '02', title: { fr: 'Flotte multi-drones', en: 'Multi-drone fleet' } },
  { number: '03', title: { fr: 'Machine d’irradiation', en: 'Irradiation machine' } },
]
// Full-colour brand logos in public/logos: Devicon originals, Simple Icons filled with
// the official brand colour, or PNGs cropped from the owner's logo folder.
// Tools without a logo keep their initial.
const toolLogos: Record<string, string> = {
  'SolidWorks (CSWA)': 'solidworks.png', 'CATIA V5': 'dassaultsystemes.svg', ANSYS: 'ansys.svg', Abaqus: 'abaqus.png',
  HyperMesh: 'altair.png', OptiStruct: 'altair.png', 'MATLAB / Simulink': 'matlab.svg',
  STM32: 'stmicroelectronics.svg', STM32CubeIDE: 'stmicroelectronics.svg', 'ARM Cortex-M': 'arm.svg', 'Raspberry Pi': 'raspberrypi.svg',
  ESP32: 'espressif.svg', Arduino: 'arduino.svg', FPGA: 'fpga.png', 'Intel Quartus': 'intel.svg',
  'Altium Designer': 'altiumdesigner.svg', KiCad: 'kicad.svg', LTspice: 'ltspice.svg',
  C: 'c.svg', 'C++': 'cplusplus.svg', Python: 'python.svg', VHDL: 'vhdl.png', JavaScript: 'javascript.svg',
  'RTOS / FreeRTOS': 'freertos.png', 'micro-ROS': 'ros.svg',
  OpenCV: 'opencv.svg', 'YOLO / PyTorch': 'pytorch.svg', 'ROS 2 (Humble)': 'ros.svg',
  'Siemens TIA Portal': 'tiaportal.png', PLCSIM: 'plcsim.png', FluidSIM: 'fluidsim.png',
  FastAPI: 'fastapi.svg', SQLite: 'sqlite.svg', JWT: 'jsonwebtokens.svg', Docker: 'docker.svg', Linux: 'linux.svg', Git: 'git.svg',
  HTML5: 'html5.svg', CSS3: 'css3.svg', 'PySide6 / Qt': 'qt.svg', OpenGL: 'opengl.svg',
  Zigbee: 'zigbee.svg', MQTT: 'mqtt.svg',
}
const navIds = ['home', 'about', 'expertise', 'projects', 'experience', 'education', 'certifications', 'contact'] as const

const SCROLL_SEQUENCE = {
  framePath: (i: number) => `/frames/frame_${String(240 - i).padStart(3, '0')}.jpg`,
  frameCount: 240,
  frameWidth: 1280,
  frameHeight: 720,
}

// Horizontal pan (in vw) and scale for the background photo: shown smaller than
// the viewport and pushed right, clear of the left text column; its exposed
// edges are faded out by the mask on .bg-sequence-canvas.
const BIAS_HOME = 26
const BIAS_LEFT = 26
const PAN_SCALE = 0.8

function readStored<T extends string>(key: string, allowed: readonly T[], fallback: T): T {
  try {
    const v = localStorage.getItem(key)
    return allowed.includes(v as T) ? (v as T) : fallback
  } catch { return fallback }
}

function store(key: string, value: string) {
  try { localStorage.setItem(key, value) } catch { /* storage unavailable (private mode) */ }
}

// Renders the photo sequence as a fixed full-viewport backdrop for the whole page:
// every section scrolls normally in front of it, while the frame shown tracks how
// far the user has scrolled through the entire document (not just one section).
function ScrollBackground({ framePath, frameCount, frameWidth, frameHeight }: {
  framePath: (i: number) => string
  frameCount: number
  frameWidth: number
  frameHeight: number
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imagesRef = useRef<(HTMLImageElement | null)[]>([])
  const targetFrame = useRef(0)
  const currentFrame = useRef(0)
  const targetBias = useRef(BIAS_HOME)
  const currentBias = useRef(BIAS_HOME)
  const raf = useRef<number | null>(null)
  const drawnRef = useRef(-1)
  const [loaded, setLoaded] = useState(0)
  const reduceMotion = useRef(false)

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const draw = (index: number) => {
    const canvas = canvasRef.current
    const img = imagesRef.current[index]
    if (!canvas || !img || !img.complete) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    if (drawnRef.current === index) return
    drawnRef.current = index
    ctx.drawImage(img, 0, 0, frameWidth, frameHeight)
  }

  useEffect(() => {
    let cancelled = false
    let count = 0
    imagesRef.current = new Array(frameCount).fill(null)
    for (let i = 0; i < frameCount; i++) {
      const img = new Image()
      img.decoding = 'async'
      img.src = framePath(i)
      img.onload = () => {
        if (cancelled) return
        count += 1
        setLoaded(count)
        if (i === 0) draw(0)
      }
      imagesRef.current[i] = img
    }
    return () => { cancelled = true }
  }, [frameCount, framePath])

  useEffect(() => {
    const computeTarget = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progress = total > 0 ? Math.max(0, Math.min(1, window.scrollY / total)) : 0
      targetFrame.current = progress * (frameCount - 1)

      const home = document.getElementById('home')
      if (home) {
        const rect = home.getBoundingClientRect()
        const influence = rect.height > 0 ? Math.max(0, Math.min(1, -rect.top / rect.height)) : 1
        targetBias.current = BIAS_HOME + (BIAS_LEFT - BIAS_HOME) * influence
      }
    }
    window.addEventListener('scroll', computeTarget, { passive: true })
    window.addEventListener('resize', computeTarget)
    computeTarget()

    const tick = () => {
      const ease = reduceMotion.current ? 1 : 0.12
      currentFrame.current += (targetFrame.current - currentFrame.current) * ease
      currentBias.current += (targetBias.current - currentBias.current) * ease
      draw(Math.round(currentFrame.current))
      if (canvasRef.current) canvasRef.current.style.transform = `translateX(${currentBias.current}vw) scale(${PAN_SCALE})`
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('scroll', computeTarget)
      window.removeEventListener('resize', computeTarget)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [frameCount])

  const progressPct = Math.round((loaded / frameCount) * 100)

  return (
    <>
      <canvas ref={canvasRef} className="bg-sequence-canvas" width={frameWidth} height={frameHeight} aria-hidden="true" style={{ transform: `translateX(${BIAS_HOME}vw) scale(${PAN_SCALE})` }} />
      <div className="bg-sequence-scrim" aria-hidden="true" />
      {progressPct < 100 && <div className="bg-sequence-loading"><div className="bg-sequence-bar" style={{ width: `${progressPct}%` }} /></div>}
    </>
  )
}

function App() {
  const [lang, setLang] = useState<Lang>(() => readStored('ag-lang', ['fr', 'en'] as const, 'fr'))
  const [theme, setTheme] = useState<Theme>(() => readStored('ag-theme', ['dark', 'light'] as const, 'dark'))
  const [openSkill, setOpenSkill] = useState(0)
  const [openGroups, setOpenGroups] = useState<number[]>([])
  const toggleGroup = (i: number) => setOpenGroups(g => g.includes(i) ? g.filter(x => x !== i) : [...g, i])
  const [activeNode, setActiveNode] = useState(1)
  const [activeSection, setActiveSection] = useState('home')
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.title
    store('ag-lang', lang)
  }, [lang, t.title])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    store('ag-theme', theme)
  }, [theme])

  useEffect(() => {
    const els = navIds.map(id => document.getElementById(id)).filter((el): el is HTMLElement => !!el)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id) })
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const node = t.system.nodes[activeNode]
  const themeLabel = theme === 'dark' ? t.ui.toLight : t.ui.toDark

  return (
    <div className="app">
      <ScrollBackground {...SCROLL_SEQUENCE} />
      <header className="topbar">
        <nav>{navIds.map(id => <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''}>{t.nav[id]}</a>)}</nav>
        <div className="topbar-actions">
          <button type="button" className="icon-toggle" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} aria-label={t.ui.switchLang} title={t.ui.switchLang}>{lang === 'fr' ? 'EN' : 'FR'}</button>
          <button type="button" className="icon-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={themeLabel} title={themeLabel}>{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}</button>
        </div>
      </header>
      <main id="top">
        <section id="home" className="intro-section section-wrap">
          <div className="intro-left reveal">
            <p className="hero-name">Ahmed Ghfiri</p>
            <h1><span className="title-box"><span className="title-a">{t.hero.titleA}</span></span><br /><span className="title-box"><span className="title-b">{t.hero.titleB}</span></span></h1>
            <div className="intro-tagline">
              <h2>{t.hero.taglineA}<br />{t.hero.taglineB}</h2>
            </div>
          </div>
        </section>
        <section id="about" className="section-wrap about-section"><div className="section-label">{t.about.label}</div><div className="about-content"><p className="display-copy">{t.about.displayPre}<span>{t.about.displayHighlight}</span><br />{t.about.displayLine2}</p><div className="about-details"><p>{t.about.p1}</p><p>{t.about.p2}</p><div className="signature">Ahmed Ghfiri <span>{t.about.signatureRole}</span></div></div></div></section>
        <section id="expertise" className="section-wrap"><div className="section-heading"><div className="section-label">{t.expertise.label}</div><h2>{t.expertise.titleA}<br /><span>{t.expertise.titleB}</span></h2></div><div className="skill-list">{t.expertise.items.map(([title, desc], i) => <button className={`skill-row ${openSkill === i ? 'is-open' : ''}`} key={i} onClick={() => setOpenSkill(openSkill === i ? -1 : i)}><span className="skill-number">{String(i + 1).padStart(2, '0')}</span><span className="skill-title">{title}</span><span className="skill-desc">{desc}</span><ChevronDown className="skill-chevron" size={18} /></button>)}</div></section>
        <section className="section-wrap system-section"><div className="section-heading split-heading"><div><div className="section-label">{t.system.label}</div><h2>{t.system.titleA}<br /><span>{t.system.titleB}</span></h2></div><p className="heading-note">{t.system.note}</p></div><div className="system-map"><div className="node-rail">{t.system.nodes.map((n, i) => { const Icon = nodeIcons[i]; return <button key={i} className={`system-node ${activeNode === i ? 'active' : ''}`} onClick={() => setActiveNode(i)}><span className="node-icon"><Icon size={18} /></span><span><small>{n.eyebrow}</small><strong>{n.title}</strong></span>{i < t.system.nodes.length - 1 && <span className="node-connector" />}</button> })}</div><div className="node-detail"><div className="detail-top"><span>{node.eyebrow}</span><Activity size={17} /></div><h3>{node.title}</h3><p>{node.detail}</p><div className="metric-list">{node.metrics.map(metric => <div key={metric}><span className="live-dot" />{metric}</div>)}</div></div></div></section>
        <section id="projects" className="section-wrap projects-section"><div className="section-heading"><div className="section-label">{t.projects.label}</div><h2>{t.projects.titleA}<br /><span>{t.projects.titleB}</span></h2></div><div className="projects-list">{projectInfo.map((info, i) => { const p = t.projects.items[i]; const title = info.title[lang]; return <article className="project-card" key={info.number}><div className="project-index">{info.number}</div><div className="project-main"><div className="project-meta">{p.meta}</div><h3>{title}</h3><h4>{p.subtitle}</h4><p>{p.description}</p><div className="tag-list">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>{info.link && <a className="project-link" href={info.link} target="_blank" rel="noreferrer" aria-label={`${t.projects.view} ${title}`}><ArrowUpRight size={20} /></a>}</article> })}</div></section>
        <section id="experience" className="section-wrap experience-section"><div className="section-label">{t.experience.label}</div><div className="timeline">{t.experience.items.map(item => <div className="timeline-row" key={item.year + item.role}><span className="tl-year">{item.year}</span><strong>{item.role}</strong><p>{item.meta.join(' · ')}</p></div>)}</div></section>
        <section id="education" className="section-wrap education-section"><div className="section-label">{t.education.label}</div><div className="education-grid"><div><h3>{t.education.formation}</h3><div className="timeline">{t.education.formationItems.map(item => <div className="timeline-row" key={item[0] + item[1]}><span className="tl-year">{item[0]}</span><strong>{item[1]}</strong><p>{item[2]}</p>{item[3] && <small>{item[3]}</small>}</div>)}</div></div><div><h3>{t.education.engagement}</h3><div className="timeline">{t.education.engagementItems.map(item => <div className="timeline-row" key={item[0] + item[1]}><span className="tl-year">{item[0]}</span><strong>{item[1]}</strong><p>{item[2]}</p>{item[3] && <small>{item[3]}</small>}</div>)}</div></div></div></section>
        <section id="certifications" className="section-wrap"><div className="section-heading"><div className="section-label">{t.certifications.label}</div><h2>{t.certifications.titleA}<br /><span>{t.certifications.titleB}</span></h2></div><div className="timeline">{t.certifications.items.map(([date, name, issuerAndType, extra]) => <div className="timeline-row" key={date + name}><span className="tl-year">{date}</span><strong>{name}</strong><p>{issuerAndType}</p>{extra && <small>{extra}</small>}</div>)}</div></section>
        <section className="section-wrap stack-section"><div className="section-heading"><div className="section-label">{t.stack.label}</div><h2>{t.stack.titleA}<br /><span>{t.stack.titleB}</span></h2></div><div className="stack-grid">{t.stack.groups.map((group, gi) => { const open = openGroups.includes(gi); return <div className={`stack-group${open ? ' is-open' : ''}`} key={gi}><button type="button" className="stack-toggle" aria-expanded={open} aria-controls={`stack-panel-${gi}`} onClick={() => toggleGroup(gi)}><span className="stack-title">{group.name}</span><span className="stack-count">{group.tools.length} {t.stack.toolsWord}</span><span className="stack-arrow" aria-hidden="true"><ChevronDown size={20} /></span></button><div className="stack-panel" id={`stack-panel-${gi}`}><div className="stack-panel-inner" inert={!open}><div className="stack-badges">{group.tools.map(tool => <span className="stack-badge" key={tool}>{toolLogos[tool] ? <span className="badge-logo"><img src={`/logos/${toolLogos[tool]}`} alt="" height={18} loading="lazy" /></span> : <span className="badge-mark" aria-hidden="true">{tool.slice(0, 1)}</span>}{tool}</span>)}</div></div></div></div> })}</div></section>
        <section id="contact" className="section-wrap contact-section"><div className="section-label">{t.contact.label}</div><div className="contact-content"><h2>{t.contact.titleA}<br /><span>{t.contact.titleB}</span></h2><p className="contact-lead">{t.contact.lead}</p><a className="contact-email" href="mailto:ahmedghfiri1@gmail.com">ahmedghfiri1@gmail.com <ArrowUpRight size={20} /></a><div className="contact-meta"><a href="https://wa.me/21650822198" target="_blank" rel="noreferrer"><WhatsAppLogo /> +216 50 822 198</a><span><MapPin size={16} /> {t.contact.location}</span><a href="https://github.com/Ahmedmecatronique" target="_blank" rel="noreferrer"><GitHubLogo /> github.com/AhmedMecatronique</a><a href="https://www.linkedin.com/in/ahmed-ghfiri-63baa0298/" target="_blank" rel="noreferrer"><LinkedInLogo /> LinkedIn</a></div><div className="contact-languages">{t.contact.languages}</div></div></section>
      </main>
      <footer><span>{t.footer.text}</span></footer>
    </div>
  )
}

export default App
