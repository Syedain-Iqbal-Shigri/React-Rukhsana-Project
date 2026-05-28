import { FaMapMarkedAlt, FaCar, FaHotel, FaHiking, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ICON_MAP = {
  tours: FaMapMarkedAlt,
  car:   FaCar,
  hotel: FaHotel,
  trek:  FaHiking,
}

export default function ServiceCard({ service, reverse = false }) {
  const Icon = ICON_MAP[service.icon] ?? FaMapMarkedAlt

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
      <div className={`rounded-2xl overflow-hidden shadow-xl ${reverse ? 'lg:order-2' : ''}`}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-72 md:h-96 object-cover"
          loading="lazy"
        />
      </div>

      <div className={reverse ? 'lg:order-1' : ''}>
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-5">
          <Icon className="text-2xl" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{service.title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
        <ul className="grid grid-cols-2 gap-2 mb-8">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
              <FaCheck className="text-accent flex-shrink-0 text-xs" />
              {feature}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-full font-semibold text-sm transition-colors duration-300"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  )
}
