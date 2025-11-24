import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const heroSlides = [
  {
    tag: 'YOO Villas',
    title: 'Gated community living with global design signatures.',
    description:
      'Curated with YOO Studio to deliver expansive villas, private lawns, and concierge privileges inspired by BuildCon’s flagship residences.',
    location: 'Kharadi Annex · Pune',
    price: 'INR 20 Cr* onwards',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80',
  },
  {
    tag: 'Trump Towers Pune',
    title: 'India’s first ready-to-move Trump branded residences.',
    description:
      'Twin 23-storey glass towers overlooking the Mula-Mutha river, blending Trump-branded luxury with BuildCon craftsmanship.',
    location: 'Kalyani Nagar · Pune',
    price: 'INR 12 Cr* onwards',
    image:
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80',
  },
  {
    tag: 'yoopune',
    title: 'India’s first ready-to-move YOO branded residences.',
    description:
      'Design-forward residences curated with Philippe Starck featuring river decks, rooftop lounges, and resident-only concierge.',
    location: 'Hadapsar · Pune',
    price: 'INR 8 Cr* onwards',
    image:
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1600&q=80',
  },
  {
    tag: 'EON Free Zone',
    title: 'Landmark of innovation for global technology anchors.',
    description:
      'USGBC LEED-certified campuses with scalable data fabrics, hospitality infrastructure, and urban green lungs.',
    location: 'Kharadi · Pune',
    price: 'Grade-A leasing | Custom fit-outs',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
  },
];

const stats = [
  { value: '55+', label: 'Projects Delivered' },
  { value: '23', label: 'Years of Legacy' },
  { value: '35M+', label: 'Sq. Ft. Developed' },
  { value: '43M+', label: 'Sq. Ft. Under Development' },
];

const verticals = [
  {
    title: 'Office Parks',
    detail: 'Wellness-forward campuses with scalable infrastructure.',
  },
  {
    title: 'Hospitality',
    detail: 'Iconic partnerships with Ritz-Carlton, JW Marriott, Trump.',
  },
  {
    title: 'Data Centres',
    detail: 'Hyperscale-ready with resilient power, cooling, and fiber.',
  },
  {
    title: 'Residential',
    detail: 'Luxury towers like Trump Towers Pune and YOO Villas.',
  },
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section className="-mt-20 bg-slate-900 pt-24 text-white">
        <div className="w-full">
          <div className="relative h-[580px] w-full overflow-hidden">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.tag}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === activeSlide ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden={index !== activeSlide}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(120deg, rgba(10,11,38,0.85), rgba(8,23,71,0.55)), url(${slide.image})`,
                  }}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 p-10 sm:p-14">
                  <div className="space-y-4 max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.35em] text-brand-200">{slide.tag}</p>
                    <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">{slide.title}</h1>
                    <p className="text-base text-white/85">{slide.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-white/80">
                    <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-2">
                      {slide.location}
                    </div>
                    <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-2">{slide.price}</div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/40 transition hover:-translate-y-0.5"
                    >
                      Enquire Now
                    </Link>
                    <Link
                      to="/projects"
                      className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white"
                    >
                      View Projects
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 pb-6">
              <div className="flex items-center gap-3">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.tag}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={() => setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                  className="rounded-full border border-white/40 bg-white/10 p-3 text-base text-white transition hover:border-white"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="rounded-full border border-white/40 bg-white/10 p-3 text-base text-white transition hover:border-white"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 w-full max-w-6xl px-6 pb-16">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition hover:bg-white/10"
                >
                  <p className="text-4xl font-semibold text-white">{metric.value}</p>
                  <p className="text-sm text-white/80">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-700">Vertically Integrated Expertise</p>
          <h2 className="text-3xl font-semibold text-slate-900">Multi-asset mastery across every skyline.</h2>
          <p className="text-base text-slate-600">
            Inspired by BuildCon&apos;s multi-decade portfolio, BuildCon drives impact across five high-growth
            verticals.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {verticals.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
                  Premium Grade
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

