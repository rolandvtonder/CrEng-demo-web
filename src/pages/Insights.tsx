import Cta from '../components/Cta'
import Layout from '../components/Layout'
import Video from '../components/Video'
import { CONTACT, VIDEOS } from '../site'

export default function Insights() {
  return (
    <Layout
      current="insights"
      eyebrow="Insights"
      title={
        <>
          Data-driven decisions, <em>for cranes</em>
        </>
      }
      lede="Most crane strategies are still reactive: not by choice, but because of limited data, time and competing priorities. This is where that shifts."
    >
      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">From our datasets</span>
            <h2 className="h2">Same equipment, very different risk</h2>
            <p className="prose" style={{ marginTop: 16 }}>
              We compared the findings from two recent clients. In both, roughly
              half of all findings related to electrical and hoist systems: the
              load path, and the most critical risk area.
            </p>
            <p className="prose">
              Client A runs its cranes hard, and showed more wear in hoist, bridge
              and travel systems. Client B has an older fleet, with more issues in
              electrical, limit and safety systems. Same equipment category,
              different approach to maintenance.
            </p>
          </div>
          <div className="reveal">
            <h3 className="h3" style={{ marginBottom: 20 }}>
              Share of findings, across both clients
            </h3>
            <div className="bars">
              <div className="bar-row">
                <div className="bar-label">
                  <span>Electrical and hoist (load path)</span>
                  <span>47–50%</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: '48.5%' }} />
                </div>
              </div>
              <div className="bar-row">
                <div className="bar-label">
                  <span>All other areas</span>
                  <span>50–53%</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill rest" style={{ width: '51.5%' }} />
                </div>
              </div>
            </div>
            <p className="muted" style={{ marginTop: 18, fontSize: 15 }}>
              Source: CrEng major inspection datasets from two recent clients.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Video</span>
            <h2 className="h2">From our channel</h2>
          </div>
          <div className="grid reveal">
            {VIDEOS.map((v) => (
              <Video key={v.id} {...v} />
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: 32 }}>
            <a className="btn btn-ghost" href={CONTACT.youtube}>
              More on YouTube
            </a>
            <a className="btn btn-ghost" href={CONTACT.linkedin}>
              Follow us on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">News</span>
            <h2 className="h2">Recently</h2>
          </div>
          <div className="grid reveal">
            <article className="card">
              <span className="no">Event</span>
              <h3 className="h3">Electra Mining Africa 2026</h3>
              <p>CrEng exhibited at Electra Mining Africa, outside hall 5.</p>
            </article>
            <article className="card">
              <span className="no">Training</span>
              <h3 className="h3">Masterclass at Transnet Bloemfontein</h3>
              <p>
                A two-day Overhead Crane &amp; Lifting Masterclass, delivered with
                Beapo, Worldwide Load Testing Specialists and Haggie Steel Wire
                Rope.
              </p>
            </article>
            <article className="card">
              <span className="no">Recognition</span>
              <h3 className="h3">Gold for training at ASCEA 2026</h3>
              <p>
                Beapo won gold for Training &amp; Talent Management at the Africa
                Supply Chain Excellence Awards for the masterclass we built
                together.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Cta
        title="What would this level of insight change?"
        body="Ask us what a useful life assessment would show about your fleet."
      />
    </Layout>
  )
}
