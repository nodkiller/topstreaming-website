import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const projects: Record<
  string,
  {
    title: string;
    category: string;
    tags: string[];
    image: string | null;
    overview: string;
    challenge: string;
    solution: string;
    results: string[];
  }
> = {
  t32: {
    title: "T32",
    category: "Marketing · Video Production",
    tags: ["Marketing", "Video Production", "Brand Strategy"],
    image: "/topstreaming-website/images/portfolio/portfolio-1.png",
    overview:
      "T32 is a leading dental and healthcare brand in Australia. TopStreaming partnered with T32 to develop a comprehensive brand campaign that combined high-quality video production with a multi-channel digital marketing strategy.",
    challenge:
      "T32 needed to elevate its brand presence in a competitive healthcare market and connect more meaningfully with both existing and prospective patients across digital platforms.",
    solution:
      "We produced a series of professional brand films showcasing T32's expertise and patient care philosophy. These were paired with a targeted digital marketing campaign across Google, Instagram, and RED, using audience segmentation to reach Chinese-Australian and English-speaking demographics.",
    results: [
      "3x increase in social media engagement within 3 months",
      "Significant uplift in new patient enquiries via digital channels",
      "Brand film received over 100K organic views across platforms",
      "Expanded brand awareness in both English and Mandarin-speaking communities",
    ],
  },
  "mirror-planet": {
    title: "Mirror Planet PFP DAO",
    category: "Video Production",
    tags: ["Video Production", "Web3", "Creative Direction"],
    image: "/topstreaming-website/images/portfolio/portfolio-2.png",
    overview:
      "Mirror Planet PFP DAO is an innovative Web3 project merging digital art with community ownership. TopStreaming was commissioned to create compelling video content that would communicate the project's vision to both crypto-native audiences and mainstream consumers.",
    challenge:
      "Web3 and NFT concepts are technically complex and often alienating to general audiences. Mirror Planet needed video content that made the project feel accessible, exciting, and visually premium.",
    solution:
      "Our creative team developed a visually striking video series that blended animated sequences with narrative storytelling. We focused on the human side of the community — the artists, collectors, and builders — rather than the technical mechanics.",
    results: [
      "Launch video exceeded 50K views across Twitter and YouTube",
      "Community Discord membership grew by 40% in the week following the video release",
      "Content was featured in several Web3 publications and newsletters",
      "Helped position Mirror Planet as one of the more premium PFP projects in the Australian Web3 scene",
    ],
  },
  tickshop: {
    title: "TickShop",
    category: "Business Consulting · Marketing",
    tags: ["Business Consulting", "Marketing", "SEO", "E-commerce"],
    image: "/topstreaming-website/images/portfolio/portfolio-3.png",
    overview:
      "TickShop is an Australian e-commerce platform specialising in event ticketing and experiences. TopStreaming provided strategic business consulting alongside a targeted digital marketing campaign to drive growth in a competitive market.",
    challenge:
      "TickShop was struggling to differentiate itself in a crowded ticketing market and needed both strategic clarity and marketing execution to scale its user base and transaction volume.",
    solution:
      "We started with a thorough competitive analysis and brand positioning workshop, then built an SEO and content strategy to capture organic traffic. Paid social campaigns on Instagram and Facebook targeted event-goers in Melbourne and Sydney, while an email marketing funnel was set up to nurture and retain customers.",
    results: [
      "Organic search traffic increased by 180% within 6 months",
      "Cost-per-acquisition on paid social reduced by 35%",
      "Email subscriber list grew from 2,000 to 15,000",
      "Overall platform revenue grew significantly quarter-on-quarter",
    ],
  },
  boundless: {
    title: "Boundless",
    category: "Marketing · Web Development",
    tags: ["Marketing", "Web Development", "Brand Identity"],
    image: "/topstreaming-website/images/portfolio/portfolio-4.png",
    overview:
      "Boundless is a lifestyle and wellness brand operating in Australia. TopStreaming delivered an end-to-end digital solution including a full website redesign and an ongoing digital marketing retainer.",
    challenge:
      "Boundless had a strong product but a weak online presence. Their existing website was outdated, slow, and not converting visitors into customers. They needed a complete digital overhaul.",
    solution:
      "We redesigned and rebuilt the Boundless website from the ground up — focused on conversion, mobile performance, and brand storytelling. Simultaneously, we launched a content marketing and social media strategy to build organic reach, complemented by Google and Meta advertising.",
    results: [
      "New website achieved a 95+ Lighthouse performance score",
      "Conversion rate improved by 60% in the first 90 days",
      "Social following grew from under 1,000 to over 8,000 in 4 months",
      "Brand was featured in two Australian wellness publications",
    ],
  },
  "holiday-xp": {
    title: "Holiday XP",
    category: "KOL Marketing · Marketing",
    tags: ["KOL Marketing", "RED", "Instagram", "Tourism"],
    image: null,
    overview:
      "Holiday XP is a unique experiences and travel operator offering curated adventures across Australia and the Asia-Pacific. TopStreaming ran a multi-platform KOL marketing campaign to drive awareness and direct bookings.",
    challenge:
      "Holiday XP wanted to reach Chinese-Australian travellers and tourists — a demographic that relies heavily on RED (小红书) and Chinese social platforms for travel inspiration and recommendations.",
    solution:
      "We identified and partnered with 15 micro and mid-tier KOLs across RED and Instagram whose audiences matched Holiday XP's target demographic. Each KOL produced authentic, experience-led content — showing real trips and real reactions. We coordinated the content calendar to align with key travel booking periods.",
    results: [
      "RED campaign generated 500K+ impressions over 6 weeks",
      "Direct booking enquiries increased by 220% during the campaign period",
      "Several posts went organically viral within Chinese-Australian communities on RED",
      "Holiday XP gained 3,000+ new followers across RED and Instagram",
    ],
  },
  "top-trend": {
    title: "Top Trend",
    category: "Marketing",
    tags: ["Marketing", "Social Media", "Content Strategy"],
    image: null,
    overview:
      "Top Trend is a fashion and lifestyle brand targeting young Australian consumers. TopStreaming developed and executed a comprehensive digital marketing strategy to position Top Trend as a recognised voice in Australian street fashion.",
    challenge:
      "Top Trend was a new entrant in a highly competitive market with limited brand recognition. They needed to build credibility, grow an audience, and drive sales — all simultaneously.",
    solution:
      "We built a content-first strategy centred around trend-driven social content, collaborations with emerging local fashion influencers, and a paid media strategy on Instagram and TikTok. A monthly editorial content calendar ensured consistent, quality output across all channels.",
    results: [
      "Instagram following grew from 500 to 25,000+ in 6 months",
      "Average engagement rate maintained above 4% — well above industry average",
      "Featured in Australian fashion blogs and online magazines",
      "E-commerce conversion rate from social traffic exceeded 3.5%",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return {};
  return {
    title: `${project.title} | Portfolio | TopStreaming`,
    description: project.overview.slice(0, 160),
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-amber-400 text-sm transition-colors mb-8"
          >
            ← Back to Portfolio
          </Link>
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {project.category}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-amber-500/10 text-amber-400 text-sm font-medium rounded-full border border-amber-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hero image */}
      {project.image && (
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl overflow-hidden border border-white/5 aspect-video bg-[#12121a] relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-bold text-amber-400 mb-4">
              Project Overview
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.overview}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Challenge */}
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-400 leading-relaxed">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">Our Solution</h2>
              <p className="text-gray-400 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Results</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.results.map((result, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-[#12121a] border border-white/5 rounded-xl p-5 hover:border-amber-500/20 transition-all"
                >
                  <span className="text-amber-400 text-xl mt-0.5">✓</span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want results like these?
          </h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s talk about what we can do for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition-all"
            >
              Start a Project
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-3 border border-white/20 text-white rounded-full hover:border-amber-500/30 transition-all"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
