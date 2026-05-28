import { packages } from '../../data/packages'
import SectionTitle from '../ui/SectionTitle'
import PackageCard from '../ui/PackageCard'

export default function TourPackages() {
  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionTitle
          subtitle="Tour Packages"
          title="Choose Your Perfect Skardu Adventure"
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <p className="text-center text-white/50 text-xs mt-10">
          * Prices are per person and may vary based on group size and season.
          Contact us for custom packages and special group rates.
        </p>
      </div>
    </section>
  )
}
