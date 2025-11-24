const features = [
  {
    title: 'EON Free Zone wins global workplace award',
    summary:
      'USGBC recognises EON Free Zone as a benchmark for energy savings, wellness, and digital operations.',
    linkLabel: 'Read release',
  },
  {
    title: 'BuildCon Privilege launches concierge desk',
    summary: 'Members-only resident services expand to hospitality tie-ups and curated lifestyle benefits.',
    linkLabel: 'Explore program',
  },
  {
    title: 'Data centre corridor announcement',
    summary:
      'BuildCon to co-develop 1M sq. ft. with hyperscale partners, reinforcing Pune’s digital infrastructure.',
    linkLabel: 'View statement',
  },
];

function Media() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-20">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-700">Media & Recognition</p>
        <h1 className="text-3xl font-semibold text-slate-900">Stories, milestones, and brand partnerships.</h1>
        <p className="text-base text-slate-600">
          Thought leadership across ESG, technology, and placemaking keeps BuildCon in the spotlight.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => (
          <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{item.summary}</p>
            <button type="button" className="mt-4 text-sm font-semibold text-brand-700 hover:text-brand-900">
              {item.linkLabel} →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Media;

