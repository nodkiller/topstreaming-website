import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | TopStreaming",
  description:
    "Explore TopStreaming's portfolio of digital marketing, video production, and brand campaigns.",
};

const projects = [
  {
    title: "T32",
    category: "Marketing · Video Production",
    desc: "A comprehensive brand campaign combining video production and digital marketing strategies to elevate T32's market presence and reach new audiences.",
    image: "/images/portfolio/portfolio-1.png",
    tags: ["Marketing", "Video Production"],
  },
  {
    title: "Mirror Planet PFP DAO",
    category: "Video Production",
    desc: "Creative video production for an innovative Web3 project, crafting compelling visual narratives that communicated complex concepts to a mainstream audience.",
    image: "/images/portfolio/portfolio-2.png",
    tags: ["Video Production", "Web3"],
  },
  {
    title: "TickShop",
    category: "Business Consulting · Marketing",
    desc: "Strategic business consulting combined with targeted digital marketing campaigns that drove significant growth in TickShop's online traffic and conversions.",
    image: "/images/portfolio/portfolio-3.png",
    tags: ["Business Consulting", "Marketing", "SEO"],
  },
  {
    title: "Boundless",
    category: "Marketing · Web Development",
    desc: "End-to-end digital marketing and web development solution that established Boundless as a recognised brand in the Australian market.",
    image: "/images/portfolio/portfolio-4.png",
    tags: ["Marketing", "Web Development"],
  },
  {
    title: "Holiday XP",
    category: "KOL Marketing · Marketing",
    desc: "A multi-platform KOL marketing campaign leveraging influencers on RED and Instagram to drive awareness and bookings for Holiday XP's unique experiences.",
    image: null,
    tags: ["KOL Marketing", "RED", "Instagram"],
  },
  {
    title: "Top Trend",
    category: "Marketing",
    desc: "Comprehensive digital marketing strategy that positioned Top Trend as a leading voice in its industry, growing social following and driving qualified leads.",
    image: null,
    tags: ["Marketing", "Social Media", "Content"],
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Projects we&apos;re
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              proud of
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            From startup brands to established businesses — here&apos;s a selection
            of campaigns and projects we&apos;ve delivered for our clients.
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#12121a] border border-white/5 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Image */}
              <div className="aspect-video bg-[#1a1a28] relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-amber-400/30">
                        {project.title[0]}
                      </div>
                      <p className="text-gray-600 text-xs mt-1">{project.title}</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-amber-400 text-xs font-medium uppercase tracking-wider mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs rounded-full bg-white/5 text-gray-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Want to be our next success story?
          </h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s talk about what we can build together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition-all"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
