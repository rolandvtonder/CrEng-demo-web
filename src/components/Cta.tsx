import { CONTACT } from '../site'

export default function Cta({ title, body }: { title: string; body: string }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="cta reveal">
          <h2 className="h2" style={{ marginTop: 0 }}>
            {title}
          </h2>
          <p className="prose">{body}</p>
          <div className="btn-row">
            <a className="btn btn-primary" href={CONTACT.phoneHref}>
              Call {CONTACT.phoneDisplay}
            </a>
            {CONTACT.email && (
              <a className="btn btn-ghost" href={`mailto:${CONTACT.email}`}>
                Email us
              </a>
            )}
            <a className="btn btn-ghost" href="contact.html">
              Contact details
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
