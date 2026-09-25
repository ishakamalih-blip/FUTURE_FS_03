import { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "The Quiet Residence",
    location: "Vapi, Gujarat",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "02",
    title: "Urban Calm",
    location: "Surat, Gujarat",
    category: "Apartment",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "03",
    title: "Natural Living",
    location: "Ahmedabad, Gujarat",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=85",
  },
];

const services = [
  ["01", "Interior Design", "Personalized spaces shaped around how you live."],
  ["02", "Space Planning", "Intelligent layouts that balance beauty and function."],
  ["03", "3D Visualization", "Realistic visual concepts before execution begins."],
  ["04", "Turnkey Execution", "Complete project coordination from concept to completion."],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">

      {/* NAVIGATION */}
      <header className="nav">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-symbol">N</span>

          <span>
            <strong>NOVA</strong>
            <small>INTERIORS</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a href="#contact" className="nav-contact">
          Start a project <ArrowUpRight size={16} />
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* HERO */}
      <section id="home" className="editorial-hero">

        <div className="hero-meta">
          <span>VAPI • GUJARAT</span>
          <span>EST. 2026</span>
        </div>

        <div className="hero-title">
          <p>INTERIOR ARCHITECTURE / DESIGN STUDIO</p>

          <h1>
            NOVA
            <br />
            <i>INTERIORS</i>
          </h1>
        </div>

        <div className="hero-photo">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90"
            alt="Luxury interior"
          />

          <div className="hero-photo-label">
            <span>01</span>
            <span>THE QUIET RESIDENCE</span>
            <span>VIEW WORK ↗</span>
          </div>
        </div>

        <div className="hero-bottom">
          <p>
            We create considered interiors where architecture,
            material and everyday life come together.
          </p>

          <a href="#projects">
            SCROLL TO EXPLORE
            <span>↓</span>
          </a>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="editorial-section about-editorial">

        <div className="section-index">
          01 / ABOUT
        </div>

        <div className="statement">

          <div>
            <p className="small-heading">
              OUR APPROACH
            </p>

            <h2>
              WE DESIGN SPACES
              <br />
              THAT BECOME
              <br />
              <i>PART OF YOUR STORY.</i>
            </h2>
          </div>

          <div className="statement-copy">

            <p>
              Nova Interiors is an independent interior design studio
              focused on creating refined, functional and deeply personal
              spaces.
            </p>

            <p>
              We believe the best interiors are not simply beautiful.
              They feel natural, purposeful and connected to the people
              who live in them.
            </p>

            <a href="#contact" className="line-link">
              DISCOVER OUR APPROACH
              <ArrowUpRight size={16} />
            </a>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects-editorial">

        <div className="projects-heading">

          <div>
            <span className="section-index">
              02 / SELECTED WORK
            </span>

            <h2>
              Spaces with
              <br />
              <i>character.</i>
            </h2>
          </div>

          <p>
            A selection of residential interiors designed with
            restraint, warmth and intention.
          </p>

        </div>

        <div className="project-list">

          {projects.map((project) => (
            <article
              className="editorial-project"
              key={project.number}
            >

              <div className="project-image-large">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-overlay">
                  <span>{project.number}</span>
                  <ArrowUpRight size={25} />
                </div>

              </div>

              <div className="project-details">

                <div className="project-number">
                  {project.number}
                </div>

                <div>
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>
                </div>

                <div className="project-location">
                  {project.location}
                </div>

                <div className="project-arrow">
                  VIEW PROJECT
                  <ArrowUpRight size={16} />
                </div>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* FEATURED PROJECT */}
      <section className="featured-project">

        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=90"
          alt="Featured interior project"
        />

        <div className="featured-overlay">

          <div>
            <span>FEATURED PROJECT / 04</span>

            <h2>
              A PLACE
              <br />
              TO <i>BELONG.</i>
            </h2>
          </div>

          <a href="#contact">
            EXPLORE PROJECT
            <ArrowUpRight size={18} />
          </a>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="editorial-section services-editorial"
      >

        <div className="section-index">
          03 / SERVICES
        </div>

        <div className="services-heading">

          <h2>
            FROM IDEA
            <br />
            <i>TO REALITY.</i>
          </h2>

          <p>
            Every project is different. Our process adapts to your
            space, lifestyle and vision.
          </p>

        </div>

        <div className="services-list">

          {services.map(([number, title, description]) => (
            <div
              className="editorial-service"
              key={number}
            >

              <span>{number}</span>

              <h3>{title}</h3>

              <p>{description}</p>

              <ArrowUpRight size={20} />

            </div>
          ))}

        </div>

      </section>

      {/* PROCESS */}
      <section className="process-editorial">

        <div className="section-index">
          04 / PROCESS
        </div>

        <div className="process-layout">

          <div>
            <h2>
              SIMPLE PROCESS.
              <br />
              <i>THOUGHTFUL RESULTS.</i>
            </h2>
          </div>

          <div className="process-list">

            <div>
              <span>01</span>

              <h3>
                DISCOVER
              </h3>

              <p>
                Understanding your lifestyle, requirements,
                preferences and vision.
              </p>
            </div>

            <div>
              <span>02</span>

              <h3>
                DESIGN
              </h3>

              <p>
                Developing layouts, materials, concepts and
                visualizations for your space.
              </p>
            </div>

            <div>
              <span>03</span>

              <h3>
                DELIVER
              </h3>

              <p>
                Bringing the approved design to life with careful
                execution and attention to detail.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="contact-editorial"
      >

        <div className="contact-top">
          <span>05 / CONTACT</span>

          <span>
            LET'S CREATE SOMETHING MEANINGFUL
          </span>
        </div>

        <div className="contact-main">

          <p>
            HAVE A SPACE
          </p>

          <h2>
            IN <i>MIND?</i>
          </h2>

          {/* WORKING EMAIL BUTTON */}
          <a
            href="mailto:hello@novainteriors.com?subject=Interior%20Design%20Project%20Inquiry&body=Hello%20Nova%20Interiors,%0A%0AI%20would%20like%20to%20discuss%20an%20interior%20design%20project.%0A%0AThank%20you."
            className="contact-cta"
          >
            START A CONVERSATION
            <ArrowUpRight size={19} />
          </a>

        </div>

        <div className="contact-info">

          <div>
            <Mail size={17} />
            <span>
              hello@novainteriors.com
            </span>
          </div>

          <div>
            <Phone size={17} />
            <span>
              +91 98765 43210
            </span>
          </div>

          <div>
            <MapPin size={17} />
            <span>
              Vapi, Gujarat, India
            </span>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="editorial-footer">

        <div className="brand">

          <span className="brand-symbol">
            N
          </span>

          <span>
            <strong>NOVA</strong>
            <small>INTERIORS</small>
          </span>

        </div>

        <p>
          © 2026 NOVA INTERIORS
        </p>

        <a href="#home">
          BACK TO TOP ↑
        </a>

      </footer>

    </div>
  );
}

export default App;