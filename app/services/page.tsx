import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | TopStreaming",
  description:
    "Digital marketing, KOL marketing, video production, content strategy and more — TopStreaming delivers end-to-end digital solutions.",
};

const services = [
  {
    number: "01",
    title: "Digital Marketing",
    desc: "We build and execute comprehensive digital marketing strategies that cover SEO, SEM, social media advertising, email marketing, and analytics. Every channel is optimised to drive qualified traffic and convert visitors into loyal customers.",
    features: ["SEO & SEM", "Social Media Ads", "Email Campaigns", "Analytics & Reporting"],
  },
  {
    number: "02",
    title: "KOL Marketing",
    desc: "Harness the power of Key Opinion Leaders on RED (小红书), Instagram, TikTok, and beyond. We identify, vet, and manage influencer partnerships that authentically represent your brand to targeted audiences — with data to back every decision.",
    features: ["RED (小红书) KOLs", "Instagram Influencers", "Campaign Management", "ROI Tracking"],
  },
  {
    number: "03",
    title: "Branding Video Production",
    desc: "From concept to final cut, our creative team produces high-quality brand films, product videos, social content, and event highlights. We tell your story in a way that resonates and endures.",
    features: ["Brand Films", "Product Videos", "Social Content", "Event Highlights"],
  },
  {
    number: "04",
    title: "Content Marketing",
    desc: "We develop strategic content that positions your brand as an authority in your industry. Blog posts, case studies, whitepapers, and social copy — all crafted with purpose and optimised for search and engagement.",
    features: ["Blog & Articles", "Social Copywriting", "Case Studies", "Content Strategy"],
  },
  {
    number: "05",
    title: "Business Consulting",
    desc: "Our consultants bring cross-industry experience to help you navigate growth challenges, enter new markets, and build sustainable competitive advantages — with a particular focus on bridging Australian and Asian business landscapes.",
    features: ["Market Entry", "Growth Strategy", "Brand Positioning", "Market Research"],
  },
  {
    number: "06",
    title: "PR & Event Planning",
    desc: "From intimate product launches to large-scale outdoor events, we handle every detail. Our PR team secures meaningful media coverage and our event specialists create memorable brand experiences that leave lasting impressions.",
    features: ["Event Planning", "Media Relations", "Press Releases", "Brand Activations"],
  },
  {
    number: "07",
    title: "Social Content Creation",
    desc: "We produce professional media assets — photography, short-form video, graphic design, and copywriting — purpose-built for social platforms. Everything is platform-native, thumb-stopping, and on-brand.",
    features: ["Photography", "Short-form Video", "Graphic Design", "Copywriting"],
  },
  {
    number: "08",
    title: "Multichannel Media Buying",
    desc: "We plan and purchase advertising across RED, Instagram, Facebook, Google, and programmatic networks. Our media buyers optimise spend in real-time to maximise reach, frequency, and return on ad spend.",
    features: ["Paid Social", "Google Ads", "Programmatic", "Budget Optimisation"],
  },
  {
    number: "09",
    title: "Website Design",
    desc: "We design and build modern, fast, and conversion-focused websites that reflect your brand identity and serve your business goals. From landing pages to full e-commerce platforms — built to perform.",
    features: ["UI/UX Design", "Web Development", "E-commerce", "Performance Optimisation"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Full-spectrum digital
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              solutions
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            We offer nine core service areas, each designed to work independently
            or together as an integrated growth engine for your brand.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {services.map((s, i) => (
            <div
              key={s.number}
              className={`rounded-2xl border border-white/5 p-8 md:p-10 hover:border-amber-500/20 transition-all duration-300 ${
                i % 2 === 0 ? "bg-[#12121a]" : "bg-[#0f0f1a]"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-16 flex-shrink-0">
                  <span className="text-5xl font-bold text-amber-400/30">
                    {s.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {s.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-medium rounded-full border border-amber-500/20"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-amber-500/10 to-amber-900/10 border border-amber-500/20 rounded-3xl px-8 py-16">
          <h2 className="text-4xl font-bold mb-4">
            Not sure where to start?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let&apos;s talk. We&apos;ll map out the right strategy for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition-all"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
