import { services } from '../../data/services'
import SectionTitle from '../ui/SectionTitle'
import ServiceCard from '../ui/ServiceCard'

export default function OurServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          subtitle="Our Services"
          title="Everything You Need for a Perfect Journey"
        />
        <div className="flex flex-col gap-20">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
