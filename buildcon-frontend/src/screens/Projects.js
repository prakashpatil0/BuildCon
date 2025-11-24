const projectData = {
  completed: [
    {
      name: 'Trump Towers Pune',
      location: 'Kalyani Nagar, Pune',
      mix: '4 & 5 BHK Residences',
      details: 'India’s first ready-to-move Trump branded residences.',
    },
    {
      name: 'yoopune',
      location: 'Hadapsar, Pune',
      mix: 'YOO branded residences',
      details: 'Design-forward living curated with Philippe Starck.',
    },
  ],
  ongoing: [
    {
      name: 'BuildCon Edge',
      location: 'Bandra East, Mumbai',
      mix: '0.55M sq. ft. mixed-use',
      details: 'Transit-oriented district with office, retail, and residences.',
    },
    {
      name: 'Business Bay',
      location: 'Balewadi, Pune',
      mix: 'Grade-A office park',
      details: 'Integrated office campus with High Street retail spine.',
    },
  ],
  upcoming: [
    {
      name: 'Omnia Residences',
      location: 'Bandra West, Mumbai',
      mix: '3 & 4.5 BHK | ~65,800 sq. ft.',
      price: 'INR 20 Cr* onwards',
    },
    {
      name: '42 East Residences',
      location: 'Dubai Islands',
      mix: '3 & 4 BHK | ~180,000 sq. ft.',
      price: '4.2M AED* onwards',
    },
  ],
};

function Projects() {
  return (
    <section className="bg-brand-50 py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-700">Projects Portfolio</p>
          <h1 className="text-3xl font-semibold text-slate-900">Completed, ongoing, and upcoming landmarks.</h1>
          <p className="text-base text-slate-600">
            Premium locations from Mumbai to Dubai, blending architecture, wellness, and hospitality partnerships.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          {Object.entries(projectData).map(([status, list]) => (
            <div
              key={status}
              id={`projects-${status}`}
              className="space-y-4 rounded-3xl border border-brand-100 bg-white/90 p-6 shadow-card"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-500">{status}</p>
                  <h2 className="text-2xl font-semibold text-slate-900">
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </h2>
                </div>
                <span className="rounded-full border border-brand-200 px-3 py-1 text-xs font-medium text-brand-600">
                  {list.length} featured
                </span>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {list.map((project) => (
                  <article key={project.name} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
                    <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
                    <p className="mt-2 text-sm font-medium text-brand-700">{project.location}</p>
                    <p className="mt-1 text-sm text-slate-600">{project.mix}</p>
                    {project.details && <p className="mt-2 text-sm text-slate-500">{project.details}</p>}
                    {project.price && <p className="mt-3 text-sm font-semibold text-slate-900">{project.price}</p>}
                    <button type="button" className="mt-4 text-sm font-semibold text-brand-700 hover:text-brand-900">
                      View details →
                    </button>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

