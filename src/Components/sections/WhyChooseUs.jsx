import { features } from '../../data/features'
import SectionTitle from '../ui/SectionTitle'
import FeatureCard from '../ui/FeatureCard'

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          subtitle="Why Choose Us"
          title="Your Trusted Travel Partner in Skardu"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
