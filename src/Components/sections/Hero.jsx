import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaPhoneAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useBooking } from '../../context/BookingContext'

const SLIDES = [
  {
    id: 1,
    bg: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    badge: 'Welcome to Skardu, Pakistan',
    before: 'Discover the',
    accent: 'Hidden Paradise',
    after: 'of Skardu',
    subtitle:
      'Experience breathtaking landscapes, majestic mountains, crystal-clear lakes, and the rich Balti culture with expert-guided tour packages.',
  },
  {
    id: 2,
    bg: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    badge: 'Adventure Awaits',
    before: 'Explore the',
    accent: 'Majestic Karakoram',
    after: 'Mountains',
    subtitle:
      'Trek through legendary passes, camp beside glaciers, and witness sunrises above the clouds on our guided mountain adventures.',
  },
  {
    id: 3,
    bg: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80',
    badge: 'Tailored Tour Packages',
    before: 'Perfect Plans',
    accent: 'for Every',
    after: 'Traveler',
    subtitle:
      'Choose from carefully crafted 4 to 8-day packages, customized to your pace, budget, and bucket list. Group and private tours available.',
  },
]

const STATS = [
  { value: '500+',  label: 'Happy Travelers' },
  { value: '50+',   label: 'Tour Packages' },
  { value: '10+',   label: 'Years Experience' },
  { value: '100%',  label: 'Satisfaction Rate' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const { openModal } = useBooking()
  const timerRef = useRef(null)

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length)
    }, 5500)
  }, [])

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [startTimer])

  const goTo = (index) => {
    setCurrent(index)
    startTimer()
  }

  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length)
  const next = () => goTo((current + 1) % SLIDES.length)

  const slide = SLIDES[current]

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-primary-dark">

      {/* Slide backgrounds */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${SLIDES.length * 100}%`,
          transform: `translateX(-${(current * 100) / SLIDES.length}%)`,
        }}
      >
        {SLIDES.map((s) => (
          <div
            key={s.id}
            className="shrink-0 bg-cover bg-center"
            style={{
              width: `${100 / SLIDES.length}%`,
              backgroundImage: `url('${s.bg}')`,
            }}
          />
        ))}
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-primary-dark/92 via-primary/75 to-primary-dark/50" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            {/* Slide text — key forces fadeUp on slide change */}
            <div key={`text-${current}`} className="animate-fade-up">
              <span className="inline-block text-accent font-semibold text-xs uppercase tracking-widest mb-5 border border-accent/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
                {slide.badge}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                {slide.before}{' '}
                <span className="text-accent">{slide.accent}</span>{' '}
                {slide.after}
              </h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-xl">
                {slide.subtitle}
              </p>
            </div>

            {/* CTAs — always visible */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-accent/30 hover:shadow-xl hover:scale-105"
              >
                Book Now
                <FaArrowRight />
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300"
              >
                <FaPhoneAlt className="text-accent" />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Stats */}
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
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-13 md:h-13 rounded-full bg-white/15 backdrop-blur-sm hover:bg-white/35 text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm hover:bg-white/35 text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <FaChevronRight />
      </button>

      {/* Dot indicators */}
      <div className="relative z-20 flex items-center justify-center gap-2 pb-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-8 h-2.5 bg-accent'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* White wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
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
