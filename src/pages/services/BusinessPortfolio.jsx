import { Briefcase } from "lucide-react";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

const BusinessPortfolio = () => {
  const content = {
    sections: [
      {
        title: "Beautiful, Premium Portfolios That Convert",
        paragraphs: [
          "Your portfolio is your digital storefront, and first impressions matter. A3Neptune creates stunning, premium portfolio websites that showcase your work, build credibility, and convert visitors into clients.",
          "We combine award-winning design with strategic storytelling to create portfolios that don't just look beautiful—they drive results.",
        ],
      },
      {
        title: "Who We Build Portfolios For",
        paragraphs: [
          "Our portfolio websites cater to professionals and businesses across industries:",
        ],
        list: [
          "Freelancers & Consultants: Showcase expertise and attract clients",
          "Creative Agencies: Display portfolio with stunning visuals",
          "Photographers & Videographers: Gallery-focused websites",
          "Designers & Artists: Visual portfolios with animations",
          "Developers & Programmers: Project showcases with GitHub integration",
          "Architects & Interior Designers: Before/after galleries",
          "Influencers & Content Creators: Personal branding websites",
          "Coaches & Speakers: Build authority and credibility",
          "Small Businesses: Professional online presence",
        ],
      },
      {
        title: "Design & User Experience",
        paragraphs: ["We create portfolios that captivate and convert:"],
        list: [
          "Modern, award-winning UI with attention to detail",
          "Smooth animations and micro-interactions",
          "Mobile-first responsive design",
          "Fast loading times and performance optimization",
          "Intuitive navigation and user flow",
          "Accessibility compliance (WCAG standards)",
          "Cross-browser compatibility",
          "Dark/light mode options",
        ],
      },
      {
        title: "Essential Portfolio Sections",
        paragraphs: [
          "Every portfolio includes strategically designed sections:",
        ],
        list: [
          "Hero Section: Compelling introduction with strong value proposition",
          "About Me/Us: Personal story and professional background",
          "Services/Offerings: What you do and how you help clients",
          "Portfolio/Work Gallery: Showcase best projects with case studies",
          "Testimonials & Reviews: Social proof from satisfied clients",
          "Achievements & Recognition: Awards, certifications, press features",
          "Blog/Insights: Thought leadership and SEO content",
          "Contact & CTA: Multiple conversion points throughout",
          "Social Proof: Client logos, media mentions, statistics",
        ],
      },
      {
        title: "Branding & Identity",
        paragraphs: [
          "We ensure your portfolio reflects your unique brand identity:",
        ],
        list: [
          "Custom color schemes aligned with your brand",
          "Typography selection for personality and readability",
          "Logo design and brand guidelines (optional)",
          "Consistent visual language across all pages",
          "Professional photography guidance",
          "Copy writing and content strategy",
          "Brand storytelling that resonates",
        ],
      },
      {
        title: "SEO & Marketing Optimization",
        paragraphs: ["Your portfolio is optimized to be found and convert:"],
        list: [
          "SEO-optimized content and meta tags",
          "Schema markup for rich search results",
          "Fast page speed for better rankings",
          "Conversion-focused CTAs and forms",
          "Email marketing integration",
          "Analytics tracking (Google Analytics, Hotjar)",
          "Social media integration and sharing",
          "Lead capture forms and automation",
        ],
      },
      {
        title: "Advanced Features",
        paragraphs: ["We can add powerful features to enhance your portfolio:"],
        list: [
          "Client testimonial management system",
          "Blog with CMS (Contentful, Sanity, WordPress)",
          "Project filtering and categories",
          "Before/after image sliders",
          "Video backgrounds and showreels",
          "Interactive project galleries",
          "Booking and scheduling integration",
          "Payment and invoice systems",
          "Multi-language support",
          "Password-protected portfolio sections",
        ],
      },
    ],
    whyChooseUs: [
      "Award-winning designs that stand out from competitors",
      "Strategic approach focused on conversion, not just aesthetics",
      "Custom designs tailored to your unique brand",
      "SEO optimization to attract organic traffic",
      "Fast turnaround with 2-3 week delivery",
      "Mobile-first approach with 100% responsive design",
      "Ongoing support and easy content updates",
      "Affordable pricing with payment plans available",
    ],
  };

  return (
    <ServiceDetailLayout
      title="Business Portfolio Websites"
      subtitle="Beautiful, premium portfolios that convert."
      icon={Briefcase}
      content={content}
    />
  );
};

export default BusinessPortfolio;
