import { StrictMode, type JSX } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Insights from './pages/Insights'
import Services from './pages/Services'
import Training from './pages/Training'
import type { PageId } from './site'

// each HTML entry names its page on <body data-page="...">
const ROUTES: Record<PageId, () => JSX.Element> = {
  home: Home,
  services: Services,
  training: Training,
  about: About,
  insights: Insights,
  contact: Contact,
}

const Page = ROUTES[document.body.dataset.page as PageId] ?? Home

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
