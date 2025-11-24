const pillars = [
  {
    title: 'Office Parks',
    developed: '22.77M sq. ft. delivered',
    pipeline: '32.1M sq. ft. underway',
    description:
      'Future-ready campuses that blend workplace wellness with scalable infrastructure.',
  },
  {
    title: 'Hospitality',
    developed: '2,177 keys delivered',
    pipeline: '247 keys under development',
    description: 'Iconic hospitality partnerships including Ritz-Carlton, JW Marriott, and Trump Hotels.',
  },
  {
    title: 'Data Centres',
    developed: '1M sq. ft. delivered',
    pipeline: '6.9M sq. ft. under development',
    description: 'Hyperscale-ready facilities with resilient power, cooling, and network fabrics.',
  },
  {
    title: 'Residential',
    developed: '11.21M sq. ft. delivered',
    pipeline: '4.07M sq. ft. under development',
    description: 'Luxury residences such as Trump Towers Pune, YOO Villas, and BuildCon Towers.',
  },
];

function About() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-20">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-700">About BuildCon</p>
        <h1 className="text-3xl font-semibold text-slate-900">Vertically integrated expertise</h1>
        <p className="text-base text-slate-600">
          BuildCon mirrors BuildCon’s multi-decade portfolio with full-stack capabilities across development,
          operations, and asset enhancement.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {pillars.map((item) => (
          <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
            <header className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
                Premium Grade
              </span>
            </header>
            <p className="mt-4 text-sm text-slate-600">{item.description}</p>
            <ul className="mt-4 list-disc pl-4 text-sm text-slate-500">
              <li>{item.developed}</li>
              <li>{item.pipeline}</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;

