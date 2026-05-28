import OurServices from '../Components/sections/OurServices'
import TourPackages from '../Components/sections/TourPackages'

export default function Services() {
  return (
    <>
      {/* Page hero banner */}
      <section
        className="relative h-64 md:h-80 bg-primary-dark bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1530968033775-2c92736b131e?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-primary-dark/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Our Services</h1>
          <p className="text-white/70 text-sm">
            Home &nbsp;/&nbsp; <span className="text-accent">Services</span>
          </p>
        </div>
      </section>

      <OurServices />
      <TourPackages />
    </>
  )
}
