export default function SectionTitle({ subtitle, title, center = true, light = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-2 block">
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-16 bg-accent rounded-full ${center ? 'mx-auto' : ''}`}
      />
    </div>
  )
}
