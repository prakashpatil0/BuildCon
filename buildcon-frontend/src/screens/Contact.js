const offices = [
  {
    title: 'Corporate Office',
    address: 'Tech Park One, Tower E, 191 Yerwada, Pune - 411 006, India',
    phone: '+91 20 6647 3200',
    email: 'sales@buildcon.com',
  },
  {
    title: 'Mumbai Office',
    address: 'Express Towers, 20th Floor, Nariman Point, Mumbai - 400 021, India',
    phone: '+91 22 6686 3939',
    email: 'info@buildcon.com',
  },
  {
    title: 'Sales Enquiry',
    address: 'Dedicated advisory desk · Global investors & NRIs',
    phone: '+91 8970 007700',
    email: 'sales@buildcon.com',
  },
];

const emailLinks = [
  { label: 'Sales Enquiry', value: 'sales@buildcon.com' },
  { label: 'Job Opportunities', value: 'careers@buildcon.com' },
  { label: 'Leasing Enquiry', value: 'info@buildcon.com' },
];

const propertyOptions = [
  'Business Bay',
  'Trump Towers Pune',
  'YOO Villas',
  'BuildCon Towers',
  'Omnia Residences',
  '42 East Residences',
];

function Contact() {
  return (
    <div className="bg-slate-50">
      <section className="-mt-20 bg-[#1a1a1a] px-6 pt-28 pb-16 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <div className="relative mx-auto h-[320px] w-[260px] sm:h-[360px] sm:w-[320px]">
              <div className="absolute -left-8 top-6 h-[240px] w-[180px] rounded-2xl bg-cover bg-center shadow-2xl"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529429617124-aee711a70412?auto=format&fit=crop&w=600&q=80')" }}
              />
              <div className="absolute left-6 top-0 h-[260px] w-[200px] rounded-2xl bg-cover bg-center shadow-2xl"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80')" }}
              />
              <div className="absolute right-0 top-6 h-[280px] w-[220px] rounded-2xl bg-cover bg-center shadow-2xl"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=600&q=80')" }}
              />
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-200">Established in 2002</p>
            <h1 className="text-4xl font-semibold leading-tight text-white">
              BuildCon is India&apos;s finest luxury real estate developer and operator.
            </h1>
            <p className="text-base text-white/80">
              Renowned for its leadership and excellence in the real estate sector, BuildCon has delivered over 35
              million sq. ft. with another 43 million sq. ft. underway across multi-asset classes.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white tracking-[0.3em]"
              >
                ENQUIRE NOW
              </button>
              <button
                type="button"
                className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white/80"
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {offices.map((office) => (
              <article
                key={office.title}
                className="h-full rounded-3xl border border-slate-100 bg-slate-900/90 p-6 text-white shadow-card"
              >
                <h3 className="text-lg font-semibold">{office.title}</h3>
                <p className="mt-3 text-sm text-white/80">{office.address}</p>
                <p className="mt-5 text-sm font-semibold">{office.phone}</p>
                <p className="text-sm text-white/80">{office.email}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-700">Send an Enquiry</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Connect with our concierge desk.</h2>
              <p className="mt-4 text-sm text-slate-600">
                Share your intent and our advisors will curate site visits, investment decks, and bespoke proposals
                within 24 hours.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              {emailLinks.map((entry) => (
                <div key={entry.label} className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.25em] text-slate-400">{entry.label}</span>
                  <a href={`mailto:${entry.value}`} className="text-lg font-semibold text-slate-900">
                    {entry.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Mobile"
                  required
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
                />
              </div>
              <select
                defaultValue="default"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 focus:border-brand-400 focus:outline-none"
              >
                <option value="default" disabled>
                  Select Property
                </option>
                {propertyOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <textarea
                rows={4}
                placeholder="Tell us about your requirement"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/30 transition hover:-translate-y-0.5 md:w-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-100 p-4 shadow-card">
            <div
              className="aspect-[16/8] w-full rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

