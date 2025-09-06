export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  description: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    id: "investment-opportunities",
    title: "Investment Opportunities",
    description: "Learn about our diverse investment options in Cambodia",
    items: [
      {
        id: "investment-1",
        question: "What investment opportunities does Seayeen Group offer?",
        answer:
          "Seayeen Group offers diverse investment opportunities in Cambodia, including short, medium, and long-term options. We specialize in real estate and agricultural sectors, providing joint equity investments tailored to your financial goals.",
      },
      {
        id: "investment-2",
        question: "As a foreigner, can I own land in Cambodia?",
        answer:
          "No, Article 44 of the Cambodian constitution prohibits foreign land ownership. However, we offer alternative solutions including trust structures, holding companies, and individual trustee agreements to help you invest in Cambodian real estate legally and securely.",
      },
      {
        id: "investment-3",
        question: "How does joint equity investing work?",
        answer:
          "Joint equity investing allows you to become a partner with Seayeen Group. You can invest in a single land block or our property fund. We handle all legal aspects, physical management, government compliance, and facilitate the sale of land at investor-approved prices.",
      },
      {
        id: "investment-4",
        question: "How can I start investing with Seayeen Group?",
        answer:
          "Getting started is easy! Simply book a free consultation with one of our experienced financial planners. They'll assess your investment goals, explain available opportunities, and guide you through the entire investment process.",
      },
    ],
  },
  {
    id: "services",
    title: "Services",
    description: "Comprehensive services for your business needs in Cambodia",
    items: [
      {
        id: "service-1",
        question: "What services do Seayeen Group's real estate offices offer?",
        answer:
          "Our real estate offices provide comprehensive services including legal services, GPS measuring, sales and marketing, and thorough title searches. We ensure every aspect of your real estate transaction is handled professionally and efficiently.",
      },
      {
        id: "service-2",
        question: "Can Seayeen Group assist with agricultural projects?",
        answer:
          "Yes! We have a dedicated agricultural division equipped with modern machinery, experienced staff, and extensive expertise. We often incorporate agriculture into our strategic investments, maximizing land value and returns.",
      },
      {
        id: "service-3",
        question: "What is the process for debt recovery services?",
        answer:
          "Our debt recovery process begins with a paid consultation with our debt recovery officer. You'll provide documentation related to the dispute, and receive expert evaluation, assessment of favorable resolution chances, and detailed cost information.",
      },
      {
        id: "service-4",
        question: "How does medical repatriation work?",
        answer:
          "We offer paid consultations for patient families, assess the patient's condition at the hospital, provide detailed repatriation quotations, and offer multiple options to suit your needs and budget, ensuring safe and comfortable medical transport.",
      },
      {
        id: "service-5",
        question: "How does Seayeen Group ensure governmental compliance?",
        answer:
          "With extensive experience in real estate transactions and staff experts in Cambodian land laws, we maintain close relationships with government departments and stay updated on all legislative changes to ensure full compliance.",
      },
      {
        id: "service-6",
        question: "What steps are involved in selling land?",
        answer:
          "Our land selling process includes property evaluation, market analysis, legal documentation preparation, marketing to qualified buyers, negotiation assistance, and complete transaction management from listing to closing.",
      },
    ],
  },
];

export const getAllFAQs = (): FAQItem[] => {
  return faqData.flatMap((category) => category.items);
};

export const searchFAQs = (query: string): FAQItem[] => {
  const lowerQuery = query.toLowerCase();
  return getAllFAQs().filter(
    (item) =>
      item.question.toLowerCase().includes(lowerQuery) ||
      item.answer.toLowerCase().includes(lowerQuery)
  );
};