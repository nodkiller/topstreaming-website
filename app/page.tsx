import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "📊",
    title: "Digital Marketing",
    desc: "Comprehensive online marketing solutions that drive measurable results across all digital channels.",
  },
  {
    icon: "🌟",
    title: "KOL Marketing",
    desc: "Data-driven influencer collaborations on Red, Instagram and other platforms to amplify your brand.",
  },
  {
    icon: "🎬",
    title: "Video Production",
    desc: "Professional branding videos and creative content that tells your story with cinematic quality.",
  },
  {
    icon: "✍️",
    title: "Content Marketing",
    desc: "Strategic content creation and distribution that builds authority and engages your audience.",
  },
  {
    icon: "💼",
    title: "Business Consulting",
    desc: "Tailored consulting services aligned with your business goals and market opportunities.",
  },
  {
    icon: "🎉",
    title: "PR & Event Planning",
    desc: "From intimate brand activations to large-scale outdoor events — we make it unforgettable.",
  },
];

const stats = [
  { value: "150+", label: "Years Combined Experience" },
  { value: "1000+", label: "Projects Worldwide" },
  { value: "230+", label: "Conferences Attended" },
  { value: "320+", label: "Master Certifications" },
];

const testimonials = [
  {
    quote:
      "TopStreaming's SEO expertise transformed our online presence. We saw a significant increase in organic traffic within weeks.",
    author: "Tickshop",
    role: "E-commerce Partner",
  },
  {
    quote:
      "Their marketing strategies are truly data-driven. The team understood our brand voice and delivered beyond expectations.",
    author: "Top Trend",
    role: "Marketing Client",
  },
  {
    quote:
      "Outstanding service quality from start to finish. The TopStreaming team is professional, creative, and results-focused.",
    author: "Foodiefox",
    role: "Brand Partner",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Melbourne&apos;s Premier Digital Marketing Agency
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.05]">
            We Create
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Digital Miracles
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            TopStreaming helps Australian businesses become unique through
            innovative digital marketing, KOL partnerships, and creative
            storytelling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-4 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-all duration-300 hover:scale-105 text-base"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:border-amber-500/50 hover:bg-white/5 transition-all duration-300 text-base"
            >
              Get in Touch
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-400">
                  {s.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </section>

      {/* Services */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            From strategy to execution — we deliver full-spectrum digital
            solutions tailored to your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[#12121a] border border-white/5 rounded-2xl p-7 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block px-8 py-3 border border-amber-500/50 text-amber-400 font-medium rounded-full hover:bg-amber-500/10 transition-all"
          >
            View All Services →
          </Link>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 px-6 bg-[#0d0d14]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Why TopStreaming
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Digital expertise that
              <br />
              <span className="text-amber-400">moves the needle</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We combine creative vision with data-driven strategy to deliver
              results that matter. Our multicultural team understands both
              Australian and Asian markets — giving your brand a unique
              competitive edge.
            </p>
            <ul className="space-y-3 text-gray-400">
              {[
                "Bilingual team — English & Mandarin",
                "Deep expertise in Chinese social platforms (RED/小红书)",
                "End-to-end service from strategy to production",
                "Proven track record across 1,000+ projects",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-block mt-8 px-8 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-all"
            >
              About Us
            </Link>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl p-1">
              <Image
                src="/images/brands.png"
                alt="Brands we work with"
                width={600}
                height={400}
                className="rounded-3xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              What our clients say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-[#12121a] border border-white/5 rounded-2xl p-7"
              >
                <div className="text-amber-400 text-3xl mb-4">&ldquo;</div>
                <p className="text-gray-300 leading-relaxed text-sm mb-6">
                  {t.quote}
                </p>
                <div className="border-t border-white/5 pt-4">
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-amber-500/10 to-amber-900/10 border border-amber-500/20 rounded-3xl px-8 py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to grow your brand?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let&apos;s create something remarkable together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition-all duration-300 hover:scale-105 text-base"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
