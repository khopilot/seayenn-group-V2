import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Linkedin, 
  Youtube,
  MessageCircle 
} from "lucide-react";
import { footerSections, contactInfo, socialLinks } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Logo textColor="text-white" size="md" className="mb-6" />
              
              <p className="text-sm mb-4 font-barlow">
                Pioneering investment opportunities in real estate, agriculture, and beyond.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center text-sm font-barlow">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0 text-brand-primary" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center text-sm font-barlow">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-brand-primary" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center text-sm font-barlow">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0 text-brand-primary" />
                  <span>{contactInfo.email}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 mt-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon === "Facebook" ? Facebook : 
                              social.icon === "Linkedin" ? Linkedin : Youtube;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-8 h-8 bg-seayeen-800 rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors"
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
                <a
                  href="https://wa.me/85523123456"
                  className="w-8 h-8 bg-seayeen-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-karnchang font-bold uppercase mb-4">{footerSections.company.title}</h3>
              <ul className="space-y-2">
                {footerSections.company.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-barlow hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-white font-karnchang font-bold uppercase mb-4">{footerSections.services.title}</h3>
              <ul className="space-y-2">
                {footerSections.services.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-barlow hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-karnchang font-bold uppercase mb-4">Stay Updated</h3>
              <p className="text-sm font-barlow mb-4">
                Subscribe to our newsletter for investment insights and opportunities.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 bg-seayeen-800 border border-seayeen-700 rounded-lg text-sm font-barlow focus:outline-none focus:border-brand-primary transition-colors"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-brand-primary hover:bg-seayeen-600 text-white rounded-lg text-sm font-medium font-barlow transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-seayeen-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm font-barlow text-brand-light">
              © 2024 Seayeen Group. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm font-barlow hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm font-barlow hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}