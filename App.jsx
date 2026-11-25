\
import { useState } from 'react';

const services = [
  { number: '01', icon: '⌘', title: 'Website Development', text: 'Responsive, fast and modern websites that help your business make a strong first impression.' },
  { number: '02', icon: '◈', title: 'Frontend Development', text: 'Clean, accessible interfaces built to feel intuitive on desktop, tablet and mobile.' },
  { number: '03', icon: '⟡', title: 'Full-Stack Solutions', text: 'Connected web experiences with practical backend and database foundations.' },
  { number: '04', icon: '▣', title: 'Business Websites', text: 'Professional digital spaces for services, products, portfolios and growing teams.' },
];

const projects = [
  { tag: 'WEB DESIGN', title: 'Business Website', desc: 'A polished online presence for a growing business.', number: '01' },
  { tag: 'WEB APPLICATION', title: 'Student Management', desc: 'A simple concept for organizing student information and workflows.', number: '02' },
  { tag: 'E-COMMERCE', title: 'Online Store', desc: 'A modern storefront concept with clear product discovery.', number: '03' },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement"><span className="status-dot" /> DIGITAL IDEAS. PRACTICAL SOLUTIONS.</div>
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="E Technology and Solutions home">
          <img src="/logo.png" alt="E Technology & Solutions logo" />
          <span><strong>E TECHNOLOGY</strong><small>& SOLUTIONS</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? '✕' : '☰'}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map(item =>
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <Arrow /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span /> YOUR IDEAS, BUILT FOR WHAT'S NEXT</div>
            <h1>We turn ideas<br />into <em>digital impact.</em></h1>
            <p className="hero-lead">Thoughtful websites and technology solutions that help people and businesses move forward.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">Explore our services <Arrow /></a>
              <a className="text-link" href="#projects">View our work <span>→</span></a>
            </div>
            <div className="hero-note"><span className="note-line" /> Creative thinking. Clear solutions. Better digital experiences.</div>
          </div>
          <div className="hero-art" aria-label="Abstract green digital technology artwork">
            <div className="art-grid" />
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="glow-core"><span>E</span></div>
            <div className="art-label label-top">DESIGN <b>×</b> DEVELOPMENT</div>
            <div className="art-label label-bottom"><i /> BUILDING WHAT'S NEXT</div>
            <div className="floating-card card-a"><span className="mini-icon">✳</span><div><b>Ideas</b><small>Start here</small></div></div>
            <div className="floating-card card-b"><span className="mini-bars">▂ ▅ ▇</span><div><b>Solutions</b><small>Made to grow</small></div></div>
          </div>
          <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="section-kicker">01 / ABOUT US</div>
          <div className="intro-content">
            <h2>Technology should make<br />things <em>simpler.</em></h2>
            <div className="intro-text">
              <p className="large-copy">At E Technology & Solutions, we believe every good idea deserves a thoughtful digital experience.</p>
              <p>We are building a technology brand focused on useful, user-friendly web experiences. From a first business website to a custom web application, our approach starts with understanding the problem and creating a clear solution.</p>
              <a className="underlined-link" href="#contact">Tell us what you're planning <Arrow /></a>
            </div>
          </div>
          <div className="values-row">
            <div><span>01</span><b>Curiosity first</b><small>We ask, explore and understand.</small></div>
            <div><span>02</span><b>People-focused</b><small>We keep the experience simple.</small></div>
            <div><span>03</span><b>Always improving</b><small>We learn and build with purpose.</small></div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-wrap">
            <div className="section-top">
              <div><div className="section-kicker">02 / WHAT WE DO</div><h2>Solutions for your<br /><em>next step.</em></h2></div>
              <p>Practical digital services to help turn your goals into something people can use.</p>
            </div>
            <div className="service-grid">
              {services.map(s => <article className="service-card" key={s.number}>
                <div className="service-card-top"><span>{s.number}</span><b>{s.icon}</b></div>
                <h3>{s.title}</h3><p>{s.text}</p><a href="#contact" aria-label={`Ask about ${s.title}`}>Discuss a project <Arrow /></a>
              </article>)}
            </div>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-top">
            <div><div className="section-kicker">03 / SELECTED WORK</div><h2>Ideas in<br /><em>progress.</em></h2></div>
            <p>Here are example project concepts for the portfolio. Replace these cards with your completed client or personal projects as you build them.</p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => <article className={`project-card project-${i+1}`} key={p.number}>
              <div className="project-visual"><div className="mock-window"><div className="mock-dots"><i/><i/><i/></div><div className="mock-content"><span>{p.tag}</span><b>{i === 0 ? 'Make your<br/>business stand out.' : i === 1 ? 'Organize.<br/>Learn. Grow.' : 'Good things<br/>are in store.'}</b><div className="mock-button" /></div></div><span className="project-number">{p.number}</span></div>
              <div className="project-info"><div><span>{p.tag}</span><h3>{p.title}</h3><p>{p.desc}</p></div><a href="#contact" aria-label={`Ask about ${p.title}`}><Arrow /></a></div>
            </article>)}
          </div>
        </section>

        <section className="tech-band">
          <div className="section-wrap tech-inner">
            <div><div className="section-kicker">04 / OUR TOOLKIT</div><h2>Built with the<br /><em>right tools.</em></h2></div>
            <div className="tech-list"><span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>React</span><span>Node.js</span><span>MySQL</span></div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-copy">
            <div className="section-kicker">05 / GET IN TOUCH</div>
            <h2>Have an idea?<br /><em>Let's make it real.</em></h2>
            <p>Tell us a little about what you need. We'd love to hear about your project.</p>
            <div className="contact-direct"><span>EMAIL</span><a href="mailto:hello@etechnologysolutions.com">hello@etechnologysolutions.com <Arrow /></a><small>Replace this sample email with your official business email before publishing.</small></div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Your name<input required name="name" placeholder="Enter your name" /></label>
            <label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label>
            <label>What are you looking for?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Website development</option><option>Web application</option><option>Business website</option><option>Something else</option></select></label>
            <label>Tell us about your project<textarea required name="message" rows="4" placeholder="A few details about your idea..." /></label>
            <button className="button button-primary" type="submit">Send enquiry <Arrow /></button>
            {sent && <p className="form-message" role="status">Thanks! This demo form is ready for a backend or form service connection before going live.</p>}
            <p className="form-hint">Demo form: connect a form service or backend to receive enquiries.</p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-main">
          <a className="brand footer-brand" href="#home"><img src="/logo.png" alt="" /><span><strong>E TECHNOLOGY</strong><small>& SOLUTIONS</small></span></a>
          <p>Innovating ideas.<br /><em>Creating solutions.</em></p>
          <a className="back-top" href="#home">BACK TO TOP ↑</a>
        </div>
        <div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} E Technology & Solutions</span><span>Built with purpose.</span></div>
      </footer>
    </div>
  );
}
