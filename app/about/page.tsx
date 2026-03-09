import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | TopStreaming",
  description:
    "Learn about TopStreaming — Melbourne's digital marketing agency with 150+ years of combined experience.",
};

const team = [
  {
    name: "Wendy Yu",
    role: "Managing Director",
    bio: "With deep expertise in digital strategy and business development, Wendy leads TopStreaming's vision to help brands achieve remarkable growth in the Australian and Asian markets.",
    initials: "WY",
  },
  {
    name: "David Dai",
    role: "Senior Partner",
    bio: "David brings extensive experience in marketing analytics and client partnerships, ensuring every campaign is backed by data and delivers measurable outcomes.",
    initials: "DD",
  },
  {
    name: "Ivan Luo",
    role: "Creative Director",
    bio: "Ivan's creative vision drives TopStreaming's visual identity and content production. He leads a team of designers and videographers to produce world-class brand content.",
    initials: "IL",
  },
];

const stats = [
  { value: "150+", label: "Years Combined Experience" },
  { value: "1000+", label: "Projects Completed" },
  { value: "230+", label: "Conferences Attended" },
  { value: "320+", label: "Master Certifications" },
];

const values = [
  {
    icon: "🎯",
    title: "Results-Driven",
    desc: "Every strategy we build is tied to measurable outcomes — traffic, leads, conversions, and revenue.",
  },
  {
    icon: "🌏",
    title: "Multicultural Edge",
    desc: "Our bilingual team bridges Australian and Asian markets, giving your brand access to audiences others can't reach.",
  },
  {
    icon: "🤝",
    title: "True Partnership",
    desc: "We work as an extension of your team, deeply invested in your brand's long-term success.",
  },
  {
    icon: "💡",
    title: "Creative Innovation",
    desc: "We constantly explore emerging platforms and formats to keep your brand ahead of the curve.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            About Us
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            We&apos;re the team behind
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              your digital growth
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            TopStreaming is a Melbourne-based digital marketing agency founded on
            a simple belief: every business deserves to stand out. We combine
            creativity, data, and cultural insight to deliver campaigns that
            truly connect.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-[#0d0d14]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-amber-400">{s.value}</div>
              <div className="text-gray-500 text-sm mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="text-4xl font-bold mb-6">
              Built for the modern
              <br />
              digital landscape
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                TopStreaming was founded in Melbourne with a clear mission: to
                help businesses navigate the fast-changing digital world and
                emerge stronger. What started as a small creative team has grown
                into a full-service agency with offices in Melbourne CBD and
                Surrey Hills.
              </p>
              <p>
                Our multicultural team brings together Australian marketing
                expertise with deep knowledge of Chinese digital platforms like
                RED (小红书), WeChat, and Douyin. This unique combination allows
                us to connect brands with audiences that traditional agencies
                simply cannot reach.
              </p>
              <p>
                Today, we partner with businesses across industries — from
                hospitality and retail to technology and professional services —
                delivering integrated campaigns that drive real, measurable
                growth.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Melbourne CBD", detail: "Level 7, 180 Flinders St" },
              { title: "Surrey Hills", detail: "L1/256 Canterbury Road" },
              { title: "Founded", detail: "Serving Australia & beyond" },
              { title: "Languages", detail: "English & Mandarin" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#12121a] border border-white/5 rounded-2xl p-6"
              >
                <p className="text-amber-400 text-sm font-medium">{item.title}</p>
                <p className="text-gray-400 text-sm mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#0d0d14]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Values
            </p>
            <h2 className="text-4xl font-bold">What drives us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#0a0a0f] border border-white/5 rounded-2xl p-6 hover:border-amber-500/30 transition-all"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Team
            </p>
            <h2 className="text-4xl font-bold">Meet the leadership</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#12121a] border border-white/5 rounded-2xl p-8 hover:border-amber-500/20 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-xl mb-5">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-amber-400 text-sm font-medium mt-1 mb-4">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to work with us?</h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s build something great together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
