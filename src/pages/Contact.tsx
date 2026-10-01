import Layout from '../components/Layout'
import { CONTACT } from '../site'

export default function Contact() {
  return (
    <Layout
      current="contact"
      eyebrow="Contact"
      title={
        <>
          Let us give <em>perspective</em>
        </>
      }
      lede="Call us, or visit the office in Lynnwood Ridge, Pretoria."
    >
      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">Get in touch</span>
            <h2 className="h2">Talk to an engineer</h2>
            <p className="prose" style={{ marginTop: 16 }}>
              Tell us which cranes and hoists you operate and what you need to
              know about them. We will take it from there.
            </p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <a className="btn btn-primary" href={CONTACT.phoneHref}>
                Call {CONTACT.phoneDisplay}
              </a>
              {CONTACT.email && (
                <a className="btn btn-ghost" href={`mailto:${CONTACT.email}`}>
                  Email us
                </a>
              )}
            </div>
          </div>

          <ul className="contact-list reveal">
            <li>
              <span className="k">Phone</span>
              <a className="v" href={CONTACT.phoneHref}>
                {CONTACT.phoneDisplay}
              </a>
            </li>
            {CONTACT.email && (
              <li>
                <span className="k">Email</span>
                <a className="v" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              </li>
            )}
            <li>
              <span className="k">Address</span>
              <address className="v" style={{ fontStyle: 'normal' }}>
                {CONTACT.address.map((line) => (
                  <span key={line} style={{ display: 'block' }}>
                    {line}
                  </span>
                ))}
              </address>
              <a href={CONTACT.mapHref}>Open in Google Maps</a>
            </li>
            <li>
              <span className="k">Online</span>
              <a className="v" href={CONTACT.linkedin}>
                LinkedIn
              </a>
              <a className="v" href={CONTACT.youtube}>
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
