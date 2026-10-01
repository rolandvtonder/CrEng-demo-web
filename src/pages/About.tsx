import Cta from '../components/Cta'
import Layout from '../components/Layout'
import { PARTNERS } from '../site'

export default function About() {
  return (
    <Layout
      current="about"
      eyebrow="About"
      title={
        <>
          A <em>multidisciplinary</em> engineering consultancy
        </>
      }
      lede="CrEng is an engineering consultancy based in Pretoria, specialising in useful life and condition assessments on all crane types and in crane asset management training."
    >
      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">Who we are</span>
            <h2 className="h2">Independent and data-driven</h2>
          </div>
          <div className="reveal">
            <p className="prose">
              We provide engineering expertise for all lifting assets and risk
              management. Our assessments, also known as major or 10-yearly
              inspections, give clients perspective on the risk, safety and capital
              planning of their physical assets.
            </p>
            <p className="prose">
              Assets are physically inspected and then assessed by a team of
              professionals from various industries and backgrounds. We also offer
              other value-adding services in the engineering consultancy domain.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">How we look at an asset</span>
            <h2 className="h2">Four perspectives, one report</h2>
          </div>
          <div className="grid reveal">
            {[
              ['Structural', 'The girders, end carriages and supporting steelwork.'],
              ['Mechanical', 'Hoist, bridge and travel systems, where wear shows first.'],
              ['Electrical', 'Electrical systems, limits and safety systems.'],
              ['Legal', 'What compliance requires of the asset and its records.'],
            ].map(([t, b], i) => (
              <article key={t} className="card">
                <span className="no">0{i + 1}</span>
                <h3 className="h3">{t}</h3>
                <p>{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">Specialities</span>
            <h2 className="h2">What we are known for</h2>
          </div>
          <ul className="tags reveal">
            {[
              'Pr.Eng inspections',
              'Useful life assessments',
              'Overhead cranes',
              'Bespoke solutions',
              'Legal compliance',
            ].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">Partners</span>
            <h2 className="h2">Who we work alongside</h2>
            <p className="prose" style={{ marginTop: 16 }}>
              Our training is delivered together with specialist industry partners.
            </p>
          </div>
          <ul className="tags reveal">
            {PARTNERS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <Cta title="Let us give perspective" body="Get in touch with the team in Pretoria." />
    </Layout>
  )
}
