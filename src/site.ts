/** Site-wide facts. Everything a page says about CrEng comes from here. */

export type PageId = 'home' | 'services' | 'training' | 'about' | 'insights' | 'contact'

export const PAGES: { id: PageId; label: string; href: string }[] = [
  { id: 'home', label: 'Home', href: './' },
  { id: 'services', label: 'Services', href: 'services.html' },
  { id: 'training', label: 'Training', href: 'training.html' },
  { id: 'about', label: 'About', href: 'about.html' },
  { id: 'insights', label: 'Insights', href: 'insights.html' },
  { id: 'contact', label: 'Contact', href: 'contact.html' },
]

export const CONTACT = {
  address: ['22 Hibiscus St', 'Lynnwood Ridge', 'Pretoria, 0040'],
  phoneDisplay: '071 120 9833',
  phoneHref: 'tel:+27711209833',
  /** Set this to show the email buttons, e.g. 'info@example.co.za'. */
  email: '',
  mapHref:
    'https://www.google.com/maps/search/?api=1&query=22+Hibiscus+St+Lynnwood+Ridge+Pretoria+0040',
  linkedin: 'https://www.linkedin.com/company/creng-pty/',
  youtube: 'https://www.youtube.com/@CrEng-crane',
}

export const SERVICES = [
  {
    no: '01',
    title: 'Useful Life\nAssessments',
    short: 'Major, or 10-yearly, inspections on all crane types.',
    body: 'Also known as major or 10-yearly inspections. Each crane or hoist is physically inspected and assessed, giving you perspective on risk, safety and the capital planning of your physical assets.',
  },
  {
    no: '02',
    title: 'Pr.Eng\nInspections',
    short: 'Assets inspected by a team of professionals.',
    body: 'Assets are inspected from a structural, mechanical, electrical and legal perspective by professionals from various industries and backgrounds.',
  },
  {
    no: '03',
    title: 'Failure\nAnalysis',
    short: 'Understand what failed, and why.',
    body: 'Independent investigation of failures on lifting assets, with repair procedures to bring equipment back into service.',
  },
  {
    no: '04',
    title: 'Mechanical\nDesign',
    short: 'Bespoke solutions and project management.',
    body: 'Mechanical design and project management for bespoke lifting solutions and corrective work.',
  },
  {
    no: '05',
    title: 'Legal\nCompliance',
    short: 'Guidance, scopes of work and procedures.',
    body: 'Guidance in terms of legal compliance, along with scopes of work and procedures your teams can work from.',
  },
  {
    no: '06',
    title: 'Gap\nClosure',
    short: 'Corrective actions, facilitated to completion.',
    body: 'Gap closure and facilitation of corrective actions and processes, including the behavioural change needed to make them stick.',
  },
]

export const VIDEOS = [
  { id: 'GXYMPZBOOEI', title: 'Overhead Crane & Lifting Masterclass — Transnet Bloemfontein' },
  { id: 'ii5NbdaCv3w', title: 'Mobile Crane Training unit' },
  { id: 'F4R80icZx8E', title: "UJ's Rescue Centre" },
]

export const PARTNERS = ['Beapo', 'Worldwide Load Testing Specialists', 'Haggie Steel Wire Rope']
