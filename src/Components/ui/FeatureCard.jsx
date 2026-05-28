import { FaUserTie, FaTag, FaHeadset, FaShieldAlt } from 'react-icons/fa'

const ICON_MAP = {
  guide:   FaUserTie,
  price:   FaTag,
  support: FaHeadset,
  safety:  FaShieldAlt,
}

export default function FeatureCard({ icon, title, description }) {
  const Icon = ICON_MAP[icon] ?? FaShieldAlt

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group text-center border border-gray-100 hover:border-accent/20">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 mb-5">
        <Icon className="text-2xl" />
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
