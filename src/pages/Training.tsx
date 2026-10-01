import Cta from '../components/Cta'
import Layout from '../components/Layout'
import Video from '../components/Video'
import { PARTNERS, VIDEOS } from '../site'

export default function Training() {
  return (
    <Layout
      current="training"
      eyebrow="Training"
      title={
        <>
          Training that <em>translates</em> to the field
        </>
      }
      lede="Training related to all aspects of crane asset management, built around hands-on exposure rather than slides alone."
    >
      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">Masterclass</span>
            <h2 className="h2">Overhead Crane &amp; Lifting Masterclass</h2>
            <p className="prose" style={{ marginTop: 16 }}>
              A two-day course delivered with specialist industry partners. Using
              our mobile training trailer, delegates physically engage with the
              equipment: asking questions, testing concepts and building real
              confidence through exposure.
            </p>
            <p className="prose">
              More than 30 technicians left a recent masterclass with practical
              knowledge they could take straight back to their jobs.
            </p>
          </div>
          <ol className="steps reveal">
            <li>
              <div>
                <h3 className="h3">Day one</h3>
                <p>Core principles, theory and real-world challenges.</p>
              </div>
            </li>
            <li>
              <div>
                <h3 className="h3">Day two</h3>
                <p>Hands-on, practical training and testing.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Our approach</span>
            <h2 className="h2">Mobile, practical, collaborative</h2>
          </div>
          <div className="grid reveal">
            <article className="card">
              <span className="no">01</span>
              <h3 className="h3">Mobile</h3>
              <p>The training trailer brings the equipment to your site.</p>
            </article>
            <article className="card">
              <span className="no">02</span>
              <h3 className="h3">Practical</h3>
              <p>Delegates handle real equipment and are tested on it.</p>
            </article>
            <article className="card">
              <span className="no">03</span>
              <h3 className="h3">Partner-driven</h3>
              <p>
                Specialist partners bring in-depth knowledge from several
                perspectives, reflecting real operational complexity.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">See it</span>
            <h2 className="h2">Training on film</h2>
          </div>
          <div className="grid reveal">
            {VIDEOS.slice(0, 2).map((v) => (
              <Video key={v.id} {...v} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Delivered with</span>
            <h2 className="h2">Our training partners</h2>
          </div>
          <ul className="tags reveal">
            {PARTNERS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <Cta
        title="Bring the training to your site"
        body="Ask us about lifting and crane training for your team."
      />
    </Layout>
  )
}
