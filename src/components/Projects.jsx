const projects = [
  {
    title: 'Ecommerce Glow',
    tag: 'WooCommerce',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'SaaS Launchpad',
    tag: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1759365400065-ab88a7b8e82f?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjMzODY2OTN8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '#'
  },
  {
    title: 'Creative Studio',
    tag: 'Portfolio',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Selected Work</h2>
          <p className="mt-3 text-gray-600">A few projects showing my approach to clarity, speed, and delightful interactions.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group block overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-blue-600">{p.tag}</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">{p.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
