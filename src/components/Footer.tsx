import { CONTACT, PAGES } from '../site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h2>CrEng</h2>
            <p>
              Independent and data-driven engineering expertise for all lifting
              assets and risk management.
            </p>
          </div>
          <div>
            <h2>Pages</h2>
            <ul>
              {PAGES.map((p) => (
                <li key={p.id}>
                  <a href={p.href}>{p.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li>
                <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
              </li>
              {CONTACT.email && (
                <li>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </li>
              )}
              <li>
                <a href={CONTACT.mapHref}>{CONTACT.address.join(', ')}</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Follow</h2>
            <ul>
              <li>
                <a href={CONTACT.linkedin}>LinkedIn</a>
              </li>
              <li>
                <a href={CONTACT.youtube}>YouTube</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-base">© {new Date().getFullYear()} CrEng. Pretoria, South Africa.</p>
      </div>
    </footer>
  )
}
