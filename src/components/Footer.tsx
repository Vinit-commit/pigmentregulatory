import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-accent-dark via-accent to-accent-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-dark mb-2">
            Ready to Ensure Your Pigments Are Fully Compliant?
          </h3>
          <p className="text-primary-dark/80 mb-6">
            Get a free 30-minute Regulatory Health Check from a 35-year industry expert.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-light text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-7 h-8 flex-shrink-0">
                <svg viewBox="0 0 40 44" fill="none" className="w-7 h-8">
                  <defs>
                    <linearGradient id="footerShield" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#44337a" />
                    </linearGradient>
                  </defs>
                  <path d="M20 2L36 10V24C36 33 29 39 20 42C11 39 4 33 4 24V10L20 2Z" fill="url(#footerShield)" />
                  <path d="M20 6L32 12.5V24C32 31 27 35.5 20 38C13 35.5 8 31 8 24V12.5L20 6Z" stroke="#d69e2e" strokeWidth="0.8" fill="none" opacity="0.5" />
                  <text x="20" y="25" textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">PR</text>
                </svg>
              </div>
              <span className="text-lg font-bold">
                Pigment<span className="text-accent">Regulatory</span>
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Expert pigment regulatory consulting backed by 35 years of global industry experience.
            </p>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">About Us</h4>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              Founded by Hemant M. Thombare with 35+ years in the Global Chemical Industries, PigmentRegulatory provides expert compliance consulting for pigment manufacturers worldwide.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                1,00,000+ SDS Documents Created
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                500+ Pigment Grades Handled
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                15+ Countries Served
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/services" className="hover:text-white transition-colors duration-200">Compliance Packages</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors duration-200">Compliance Statement Preparation</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors duration-200">Annual Retainers</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Industries</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/industries" className="hover:text-white transition-colors duration-200">Paints & Coatings</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors duration-200">Plastics & Packaging</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors duration-200">Textiles</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
                <a href="tel:+917887686974" className="hover:text-white transition-colors duration-200">+91 7887686974</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                <a href="https://wa.me/917887686974" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">WhatsApp</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                <span>[your-email@domain.com]</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} PigmentRegulatory. Founded by Hemant M. Thombare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
