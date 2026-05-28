import { FaCheck, FaWhatsapp, FaPhone } from 'react-icons/fa'
import SectionTitle from '../Components/ui/SectionTitle'

const FLEET = [
  {
    name: 'Toyota Land Cruiser',
    type: '4×4 SUV',
    seats: '5-7 seats',
    suitable: 'Mountain roads, off-road',
    price: 'PKR 12,000/day',
    image: 'https://picsum.photos/seed/landcruiser/800/500',
  },
  {
    name: 'Toyota Hilux Vigo',
    type: 'Pickup Truck',
    seats: '4-5 seats',
    suitable: 'Rough terrain, cargo',
    price: 'PKR 9,500/day',
    image: 'https://picsum.photos/seed/hilux/800/500',
  },
  {
    name: 'Suzuki Jimny',
    type: 'Compact 4×4',
    seats: '4 seats',
    suitable: 'Narrow mountain paths',
    price: 'PKR 7,000/day',
    image: 'https://picsum.photos/seed/jimny/800/500',
  },
  {
    name: 'Coaster Bus',
    type: 'Group Transport',
    seats: '25-30 seats',
    suitable: 'Group tours, city transfers',
    price: 'PKR 18,000/day',
    image: 'https://picsum.photos/seed/coaster/800/500',
  },
]

const INCLUDES = [
  'Experienced local driver',
  'Fuel included (standard routes)',
  'Insurance coverage',
  '24/7 roadside assistance',
  'Airport pickup & drop',
  'Clean, maintained vehicles',
]

export default function RentACar() {
  return (
    <>
      {/* Banner */}
      <section
        className="relative h-64 md:h-80 bg-primary-dark bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://picsum.photos/seed/rentcar-hero/1920/600')",
        }}
      >
        <div className="absolute inset-0 bg-primary-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Rent a Car</h1>
          <p className="text-white/70 text-sm">
            Home &nbsp;/&nbsp; <span className="text-accent">Rent a Car</span>
          </p>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Our Fleet"
            title="Vehicles for Every Skardu Terrain"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {FLEET.map((car) => (
              <div
                key={car.name}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-primary text-lg mb-1">{car.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{car.type} &bull; {car.seats}</p>
                  <p className="text-xs text-gray-400 mb-4">Best for: {car.suitable}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-accent text-sm">{car.price}</span>
                    <button className="bg-accent hover:bg-accent-dark text-white text-xs px-4 py-2 rounded-full transition-colors">
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Includes */}
          <div className="bg-soft rounded-3xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-2 block">
                What's Included
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Every Rental Comes With
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheck className="text-accent flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-white text-center">
              <p className="text-white/70 text-sm mb-2">Need a custom quote?</p>
              <h4 className="text-2xl font-bold mb-6">Contact Us Directly</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+923335557890"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold py-3 px-6 rounded-full text-sm hover:bg-gray-100 transition-colors"
                >
                  <FaPhone /> Call Now
                </a>
                <a
                  href="https://wa.me/923335557890"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full text-sm transition-colors"
                >
                  <FaWhatsapp className="text-base" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
