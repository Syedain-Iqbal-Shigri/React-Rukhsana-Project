import { Link } from 'react-router-dom'
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa'

const HERO_BG =
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80'

const STATS = [
  { value: '500+',  label: 'Happy Travelers' },
  { value: '50+',   label: 'Tour Packages' },
  { value: '10+',   label: 'Years Experience' },
  { value: '100%',  label: 'Satisfaction Rate' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-primary-dark bg-cover bg-center"
      style={{ backgroundImage: `url('${HERO_BG}')` }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/92 via-primary/75 to-primary-dark/55" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <span className="inline-block text-accent font-semibold text-xs uppercase tracking-widest mb-5 border border-accent/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
            Welcome to Skardu, Pakistan
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Discover the{' '}
            <span className="text-accent">Hidden Paradise</span>
            {' '}of Skardu
          </h1>

          {/* Sub-heading */}
          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-xl">
            Experience breathtaking landscapes, majestic mountains, crystal-clear
            lakes, and the rich Balti culture with expert-guided tour packages
            tailored for every traveler.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-accent/30 hover:shadow-xl hover:scale-105"
            >
              Explore Packages
              <FaArrowRight />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300"
            >
              <FaPhoneAlt className="text-accent" />
              Contact Us
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl py-5 px-4 border border-white/20 hover:border-accent/40 transition-colors duration-300"
            >
              <p className="text-3xl font-extrabold text-accent mb-1">{value}</p>
              <p className="text-xs text-white/70 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* White wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,72 L1440,72 L1440,28 C1200,72 960,0 720,28 C480,56 240,0 0,28 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
