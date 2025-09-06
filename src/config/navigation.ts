export interface NavigationItem {
  name: string;
  href: string;
}

export const mainNavigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Our Leadership", href: "/leadership" },
  { name: "Investments", href: "/investments" },
  { name: "Agriculture", href: "/agriculture" },
  { name: "Dispute Resolution", href: "/dispute-resolution" },
  { name: "Medical Repatriation", href: "/medical-repatriation" },
  { name: "FAQ", href: "/faq" },
];

// Footer specific sections
export const footerSections = {
  company: {
    title: "Company",
    links: [
      { name: "Our Leadership", href: "/leadership" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  services: {
    title: "Services",
    links: [
      { name: "Investments", href: "/investments" },
      { name: "Agriculture", href: "/agriculture" },
      { name: "Dispute Resolution", href: "/dispute-resolution" },
      { name: "Medical Repatriation", href: "/medical-repatriation" },
    ],
  },
};

// Contact information
export const contactInfo = {
  address: "Phnom Penh, Cambodia",
  phone: "+855 23 123 456",
  email: "info@seayeengroup.com",
};

// Social media links
export const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/seayeengroup", icon: "Facebook" },
  { name: "LinkedIn", href: "https://linkedin.com/company/seayeengroup", icon: "Linkedin" },
  { name: "YouTube", href: "https://youtube.com/@seayeengroup", icon: "Youtube" },
];