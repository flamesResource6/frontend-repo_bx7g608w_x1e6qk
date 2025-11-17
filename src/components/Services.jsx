import { Brush, Rocket, ShoppingBag, MousePointerClick } from 'lucide-react'

const services = [
  {
    icon: Brush,
    title: 'WordPress Design',
    desc: 'Clean, responsive, and brand-aligned websites built on WordPress.'
  },
  {
    icon: MousePointerClick,
    title: 'Landing Pages',
    desc: 'High-converting, fast, and SEO-friendly landing pages.'
  },
  {
    icon: ShoppingBag,
    title: 'WooCommerce Stores',
    desc: 'Robust product catalogs, checkout flows, and payment integrations.'
  },
  {
    icon: Rocket,
    title: 'Performance & SEO',
    desc: 'Speed optimization, best practices, and on-page SEO setup.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Services</h2>
          <p className="mt-3 text-gray-600">Everything you need to launch a modern, conversion-focused website.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
