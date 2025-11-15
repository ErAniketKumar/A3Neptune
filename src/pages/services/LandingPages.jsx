import { Rocket } from "lucide-react";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

const LandingPages = () => {
  const content = {
    sections: [
      {
        title: "High-Converting, Goal-Oriented Landing Pages",
        paragraphs: [
          "A3Neptune creates laser-focused landing pages designed for one purpose: conversion. Whether you're launching a product, running ads, generating leads, or promoting an event, our landing pages are optimized to turn visitors into customers.",
          "We combine persuasive copywriting, strategic design, and conversion psychology to create landing pages that deliver measurable results.",
        ],
      },
      {
        title: "Landing Page Types We Build",
        paragraphs: ["Specialized landing pages for every marketing goal:"],
        list: [
          "Lead Generation: Capture emails and contact information",
          "Product Launch: Build excitement for new products",
          "Event Registration: Drive sign-ups for webinars and events",
          "App Download: Promote mobile app installations",
          "E-Book/Resource Download: Content marketing funnels",
          "Service Promotion: Showcase specific services",
          "Sales Pages: Long-form pages for high-ticket offers",
          "Coming Soon: Build pre-launch buzz and waitlists",
          "Thank You Pages: Post-conversion engagement",
          "Squeeze Pages: Simple, focused opt-in pages",
        ],
      },
      {
        title: "Conversion Optimization",
        paragraphs: ["Every element is optimized for maximum conversions:"],
        list: [
          "Compelling headlines that grab attention",
          "Benefit-focused copy that resonates",
          "Clear, prominent call-to-action buttons",
          "Social proof (testimonials, reviews, logos)",
          "Trust badges and security seals",
          "Urgency and scarcity elements",
          "Above-the-fold conversion points",
          "Mobile-optimized for all devices",
          "Fast loading (under 2 seconds)",
          "Minimal distractions and focused messaging",
          "Strategic color psychology",
          "Friction-reducing form design",
        ],
      },
      {
        title: "Copy writing & Messaging",
        paragraphs: ["Persuasive copy that converts visitors:"],
        list: [
          "Attention-grabbing headlines and subheadlines",
          "Benefit-driven features and USPs",
          "Emotional triggers and storytelling",
          "Objection-handling copy",
          "Clear value proposition",
          "Action-oriented CTAs",
          "Scannable content with bullets",
          "Compelling social proof copy",
          "FAQ sections addressing concerns",
          "Power words and psychological triggers",
        ],
      },
      {
        title: "Design Psychology",
        paragraphs: ["Strategic design that guides users to convert:"],
        list: [
          "Visual hierarchy directing attention to CTAs",
          "Contrasting colors for call-to-action buttons",
          "White space for focus and clarity",
          "Directional cues (arrows, images looking at CTA)",
          "Above-the-fold optimization",
          "Progressive disclosure for complex offers",
          "Video backgrounds for engagement",
          "Animated elements for attention",
          "Trust symbols strategically placed",
          "Responsive design for all devices",
        ],
      },
      {
        title: "A/B Testing & Optimization",
        paragraphs: ["Continuous improvement for better results:"],
        list: [
          "A/B testing setup for headlines, CTAs, images",
          "Heatmap analysis to understand user behavior",
          "Conversion tracking and analytics",
          "Form optimization and field testing",
          "Button color and placement testing",
          "Copy variation testing",
          "Exit-intent popups for recovery",
          "Monthly optimization reports",
          "Data-driven recommendations",
        ],
      },
      {
        title: "Technical Features",
        paragraphs: ["Built with performance and tracking in mind:"],
        list: [
          "Lightning-fast page speed (90+ PageSpeed score)",
          "Mobile-first responsive design",
          "SEO optimization for organic traffic",
          "Google Analytics and Facebook Pixel integration",
          "Lead capture form integration",
          "Email marketing tool integration (Mailchimp, ConvertKit)",
          "CRM integration (HubSpot, Salesforce)",
          "Thank you page and confirmation emails",
          "Retargeting pixel installation",
          "Custom domain and hosting setup",
        ],
      },
      {
        title: "Industry-Specific Solutions",
        paragraphs: ["Tailored landing pages for various industries:"],
        list: [
          "SaaS: Free trial and demo request pages",
          "E-Commerce: Product launch and sale pages",
          "Real Estate: Property listing and inquiry pages",
          "Education: Course enrollment and webinar registration",
          "Healthcare: Appointment booking and consultation pages",
          "Finance: Lead generation for advisors and services",
          "Coaching: Program enrollment and discovery call pages",
          "Events: Conference and workshop registration",
        ],
      },
    ],
    whyChooseUs: [
      "Average 35% conversion rate improvement",
      "200+ high-converting landing pages delivered",
      "Fast 5-7 day turnaround time",
      "Conversion-focused design, not just aesthetics",
      "A/B testing included for optimization",
      "Copywriting assistance available",
      "Mobile-first with 100% responsive design",
      "Ongoing optimization and support",
    ],
  };

  return (
    <ServiceDetailLayout
      title="Landing Pages for Businesses"
      subtitle="High-converting, goal-oriented landing pages."
      icon={Rocket}
      content={content}
    />
  );
};

export default LandingPages;
