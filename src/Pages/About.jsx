import { FaCheck, FaUsers, FaMountain, FaHandshake } from 'react-icons/fa'
import SectionTitle from '../components/ui/SectionTitle'
import WhyChooseUs from '../components/sections/WhyChooseUs'

const MILESTONES = [
  { icon: FaMountain, value: '500+', label: 'Happy Travelers' },
  { icon: FaUsers,    value: '50+',  label: 'Tour Packages' },
  { icon: FaCheck,    value: '10+',  label: 'Years Experience' },
  { icon: FaHandshake,value: '100%', label: 'Client Satisfaction' },
]

export default function About() {
  return (
    <>
      {/* Page hero banner */}
      <section
        className="relative h-64 md:h-80 bg-primary-dark bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-primary-dark/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">About Us</h1>
          <p className="text-white/70 text-sm">
            Home &nbsp;/&nbsp; <span className="text-accent">About Us</span>
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://picsum.photos/seed/skarduabout/900/600"
              alt="About Ilyass Kardu Travels"
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-2 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 leading-tight">
              Passionate About Sharing the Beauty of Skardu
            </h2>
            <div className="h-1 w-16 bg-accent rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Ilyass Kardu Travels &amp; Tours was founded with a single mission: to share the
              breathtaking beauty of Skardu and Gilgit-Baltistan with travelers from around the
              world. With over a decade of experience, we have become one of the most trusted tour
              operators in the region.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team of certified local guides, professional drivers, and hospitality experts
              ensure that every journey is safe, comfortable, and filled with unforgettable memories.
              From the turquoise waters of Shangrila to the wild expanses of Deosai, we know every
              corner of this magical land.
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {[
                'Licensed Tour Operator',
                'Certified Trekking Guides',
                'Insured Travel Services',
                'Customizable Packages',
                'Group & Private Tours',
                '24/7 On-Trip Support',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <FaCheck className="text-accent flex-shrink-0 text-xs" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {MILESTONES.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-accent mb-3">
                <Icon className="text-2xl" />
              </div>
              <p className="text-4xl font-extrabold text-white mb-1">{value}</p>
              <p className="text-white/70 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reuse Why Choose Us */}
      <WhyChooseUs />
    </>
  )
}
