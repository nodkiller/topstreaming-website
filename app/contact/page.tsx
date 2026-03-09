import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | TopStreaming",
  description:
    "Get in touch with TopStreaming — Melbourne digital marketing agency. Two locations: Melbourne CBD and Surrey Hills.",
};

const offices = [
  {
    city: "Melbourne CBD",
    address: "Level 7, 180 Flinders Street",
    suburb: "Melbourne VIC 3000",
    phone: "0435 216 351",
    phoneHref: "tel:0435216351",
    hours: "Mon – Fri: 9:30am – 6:00pm",
    email: "info@topstreaming.com.au",
  },
  {
    city: "Surrey Hills",
    address: "L1/256 Canterbury Road",
    suburb: "Surrey Hills VIC 3127",
    phone: "0404 911 013",
    phoneHref: "tel:0404911013",
    hours: "Mon – Sun: 9:30am – 5:30pm",
    email: "info@topstreaming.com.au",
  },
];

const services = [
  "Digital Marketing",
  "KOL Marketing",
  "Video Production",
  "Content Marketing",
  "Business Consulting",
  "PR & Event Planning",
  "Social Content Creation",
  "Media Buying",
  "Website Design",
  "Other",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Contact Us
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let&apos;s create something
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              remarkable
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
            Have a project in mind? We&apos;d love to hear about it. Reach out via the
            form below or visit one of our two Melbourne offices.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form
              action="https://formspree.io/f/xpwpzyla"
              method="POST"
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full bg-[#12121a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full bg-[#12121a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-[#12121a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-[#12121a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                  placeholder="0400 000 000"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Service of Interest
                </label>
                <select
                  name="service"
                  className="w-full bg-[#12121a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors appearance-none"
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-[#12121a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                  placeholder="Tell us about your project or enquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-amber-500 text-black font-bold rounded-xl hover:bg-amber-400 transition-all duration-300 hover:scale-[1.01]"
              >
                Send Message
              </button>
              <p className="text-xs text-gray-600 text-center">
                We typically respond within 1 business day.
              </p>
            </form>
          </div>

          {/* Office info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Our offices</h2>

            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-[#12121a] border border-white/5 rounded-2xl p-7 hover:border-amber-500/20 transition-all"
              >
                <h3 className="text-lg font-bold text-amber-400 mb-4">
                  {office.city}
                </h3>
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400 mt-0.5">📍</span>
                    <div>
                      <p>{office.address}</p>
                      <p>{office.suburb}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400">📞</span>
                    <a
                      href={office.phoneHref}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400">✉️</span>
                    <a
                      href={`mailto:${office.email}`}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400">🕐</span>
                    <span>{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-7">
              <h3 className="text-lg font-bold mb-4">Follow us</h3>
              <p className="text-gray-500 text-sm mb-4">
                Stay up to date with our latest work and insights.
              </p>
              <div className="flex gap-4">
                {[
                  { label: "Instagram", icon: "📸" },
                  { label: "RED 小红书", icon: "🔴" },
                  { label: "LinkedIn", icon: "💼" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm text-gray-400"
                  >
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
