import Link from "next/link";

const services = [
  "Digital Marketing",
  "KOL Marketing",
  "Video Production",
  "Content Marketing",
  "Business Consulting",
  "PR & Event Planning",
];

export default function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/topstreaming-website/images/logo/logo.png"
              alt="TopStreaming"
              className="h-9 w-auto mb-4"
            />
            <p className="text-gray-500 text-sm leading-relaxed mt-4">
              We create digital miracles. A Melbourne-based agency helping
              businesses grow through innovative digital marketing.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Our Services", "/services"],
                ["Portfolio", "/portfolio"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-500 hover:text-amber-400 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-gray-500 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-4 text-sm text-gray-500">
              <div>
                <p className="text-gray-400 font-medium">Melbourne</p>
                <p>Level 7, 180 Flinders St</p>
                <p>Melbourne VIC 3000</p>
                <p className="mt-1">
                  <a
                    href="tel:0435216351"
                    className="hover:text-amber-400 transition-colors"
                  >
                    0435 216 351
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-400 font-medium">Surrey Hills</p>
                <p>L1/256 Canterbury Road</p>
                <p>Surrey Hills VIC 3127</p>
                <p className="mt-1">
                  <a
                    href="tel:0404911013"
                    className="hover:text-amber-400 transition-colors"
                  >
                    0404 911 013
                  </a>
                </p>
              </div>
              <a
                href="mailto:info@topstreaming.com.au"
                className="block hover:text-amber-400 transition-colors"
              >
                info@topstreaming.com.au
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} TopStreaming. All rights reserved.</p>
          <p>Melbourne, Victoria, Australia</p>
        </div>
      </div>
    </footer>
  );
}
