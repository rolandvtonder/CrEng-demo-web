import Cta from '../components/Cta'
import Layout from '../components/Layout'
import { SERVICES } from '../site'

export default function Services() {
  return (
    <Layout
      current="services"
      eyebrow="Services"
      title={
        <>
          Useful life &amp; <em>condition</em> assessments
        </>
      }
      lede="CrEng specialises in crane and hoist useful life assessments, giving clients perspective on the risk, safety and capital planning of their physical assets."
    >
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">What we offer</span>
            <h2 className="h2">One team, across the whole asset</h2>
          </div>
          <div className="grid reveal">
            {SERVICES.map((s) => (
              <article key={s.no} className="card">
                <span className="no">{s.no}</span>
                <h3 className="h3">{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">How an assessment runs</span>
            <h2 className="h2">
              From the crane to a <em>decision</em>
            </h2>
            <p className="prose" style={{ marginTop: 16 }}>
              Assessments culminate in detailed engineering reports and analytics.
              They give insight into the condition of the asset and into the
              broader systems and processes you use to operate and maintain it.
            </p>
          </div>
          <ol className="steps reveal">
            <li>
              <div>
                <h3 className="h3">Physical inspection</h3>
                <p>
                  Each asset is inspected from a structural, mechanical, electrical
                  and legal perspective.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3 className="h3">Assessment</h3>
                <p>
                  Findings are assessed by a team of professionals from various
                  industries and backgrounds.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3 className="h3">Report and analytics</h3>
                <p>
                  Condition becomes clear, quantified risk data that supports real
                  asset management decisions.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3 className="h3">Gap closure</h3>
                <p>
                  We facilitate the corrective actions and processes that follow,
                  through to completion.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Also available</span>
            <h2 className="h2">Supporting services</h2>
          </div>
          <ul className="tags reveal">
            {[
              'Project management',
              'Behavioural change',
              'Scopes of work and procedures',
              'Repair procedures',
              'Overhead cranes',
              'Bespoke solutions',
            ].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <Cta
        title="Planning a major inspection?"
        body="Talk to us about the cranes and hoists you need assessed."
      />
    </Layout>
  )
}
