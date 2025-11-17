export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-black/10 bg-white p-10 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Let’s build something great</h2>
          <p className="mt-3 text-gray-600">Tell me about your idea and I’ll come back with a clear plan, timeline, and cost.</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="mailto:hello@vickhy.design" className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800">Email me</a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold ring-1 ring-black/10 hover:bg-gray-50">WhatsApp</a>
          </div>
          <p className="mt-4 text-xs text-gray-500">Typical turnaround: 1–2 weeks for landing pages, 2–4 weeks for stores.</p>
        </div>
      </div>
    </section>
  )
}
