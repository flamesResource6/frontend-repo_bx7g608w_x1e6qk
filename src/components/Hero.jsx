import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-black/10">
              <span className="inline-flex h-2 w-2 rounded-full bg-blue-600" />
              5+ years crafting web experiences
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
              Hi, I’m VICKHY — I design and build modern WordPress websites
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              From high-converting landing pages to WooCommerce stores and custom, playful interfaces — I bring ideas to life with speed, style, and performance.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-gray-800">
                Start a project
              </a>
              <a href="#projects" className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-5 py-3 text-sm font-semibold ring-1 ring-black/10 hover:bg-white">
                See my work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  )
}
