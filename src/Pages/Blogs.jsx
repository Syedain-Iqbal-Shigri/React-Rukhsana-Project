import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa'
import SectionTitle from '../components/ui/SectionTitle'

const POSTS = [
  {
    id: 1,
    title: 'Top 10 Must-Visit Places in Skardu',
    excerpt:
      'Skardu is a treasure trove of natural wonders. From the serene Satpara Lake to the vast Deosai Plains, discover the ten places you simply cannot miss on your trip.',
    image: 'https://picsum.photos/seed/blog1/800/500',
    date: 'May 15, 2025',
    author: 'Ilyas Khan',
    category: 'Travel Guide',
  },
  {
    id: 2,
    title: 'A Complete Guide to Deosai National Park',
    excerpt:
      'Known as the "Land of Giants," Deosai is one of the world\'s highest plateaus. Learn the best time to visit, what to pack, and how to spot the rare Himalayan brown bear.',
    image: 'https://picsum.photos/seed/blog2/800/500',
    date: 'April 28, 2025',
    author: 'Ilyas Khan',
    category: 'Adventure',
  },
  {
    id: 3,
    title: 'Skardu in Winter: What to Expect',
    excerpt:
      'Winter transforms Skardu into a magical snow-covered wonderland. Here\'s everything you need to know about visiting Skardu between November and February.',
    image: 'https://picsum.photos/seed/blog3/800/500',
    date: 'March 10, 2025',
    author: 'Ilyas Khan',
    category: 'Seasonal Guide',
  },
  {
    id: 4,
    title: 'The Baltoro Glacier Trek: A Detailed Itinerary',
    excerpt:
      'The Baltoro Glacier trek is one of the world\'s great mountain adventures, leading to the base of K2. Read our detailed day-by-day guide for first-timers.',
    image: 'https://picsum.photos/seed/blog4/800/500',
    date: 'February 2, 2025',
    author: 'Ilyas Khan',
    category: 'Trekking',
  },
  {
    id: 5,
    title: 'Shigar Fort: History, Architecture & Visiting Tips',
    excerpt:
      'Shigar Fort, now a luxury heritage hotel, is a stunning 17th-century palace nestled in the Shigar Valley. Discover its rich history and how to plan your visit.',
    image: 'https://picsum.photos/seed/blog5/800/500',
    date: 'January 18, 2025',
    author: 'Ilyas Khan',
    category: 'History & Culture',
  },
  {
    id: 6,
    title: 'Best Photography Spots in Gilgit-Baltistan',
    excerpt:
      'Whether you\'re a professional photographer or just love great travel photos, Gilgit-Baltistan offers unmatched backdrops. Here are the spots that will blow your mind.',
    image: 'https://picsum.photos/seed/blog6/800/500',
    date: 'December 5, 2024',
    author: 'Ilyas Khan',
    category: 'Photography',
  },
]

export default function Blogs() {
  return (
    <>
      {/* Banner */}
      <section
        className="relative h-64 md:h-80 bg-primary-dark bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-primary-dark/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Our Blog</h1>
          <p className="text-white/70 text-sm">
            Home &nbsp;/&nbsp; <span className="text-accent">Blogs</span>
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 bg-soft">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Travel Insights"
            title="Stories & Guides from Skardu"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
                    {post.category}
                  </span>
                  <h2 className="font-bold text-primary text-lg leading-snug mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-accent" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUser className="text-accent" />
                        {post.author}
                      </span>
                    </div>
                    <button className="text-accent font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      Read <FaArrowRight className="text-[10px]" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
