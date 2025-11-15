import { ShoppingCart } from "lucide-react";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

const ECommerce = () => {
  const content = {
    sections: [
      {
        title: "Powerful Online Stores With Everything You Need",
        paragraphs: [
          "A3Neptune builds complete e-commerce solutions that drive sales and delight customers. From product catalogs to secure checkout, we create online stores that are fast, secure, and optimized for conversions.",
          "Whether you're launching a new store or migrating an existing one, we provide end-to-end e-commerce development using cutting-edge technologies and best practices.",
        ],
      },
      {
        title: "E-Commerce Platforms & Technologies",
        paragraphs: [
          "We work with leading platforms and frameworks to build scalable online stores:",
        ],
        list: [
          "Custom Solutions: MERN stack, Next.js Commerce, Medusa.js",
          "Shopify: Theme customization, app development, Liquid templates",
          "WooCommerce: WordPress integration, custom plugins",
          "Magento: Enterprise-level stores with advanced features",
          "Headless Commerce: API-first, decoupled architecture",
          "Payments: Stripe, Razorpay, PayPal, Square integration",
          "Shipping: ShipStation, EasyPost, carrier API integration",
        ],
      },
      {
        title: "Core E-Commerce Features",
        paragraphs: [
          "Every online store we build includes essential features for success:",
        ],
        list: [
          "Product catalog with categories, filters, and search",
          "Advanced search with autocomplete and suggestions",
          "Shopping cart with guest checkout option",
          "Wishlist and save for later functionality",
          "User accounts with order history",
          "Multiple payment gateways and currencies",
          "Real-time shipping calculations",
          "Order tracking and status updates",
          "Email notifications (order confirmation, shipping)",
          "Inventory management with low-stock alerts",
          "Discount codes, coupons, and promotions",
          "Product reviews and ratings",
          "Related products and cross-selling",
          "Mobile-optimized checkout process",
        ],
      },
      {
        title: "Admin Dashboard & Management",
        paragraphs: ["Powerful admin panel to manage your entire store:"],
        list: [
          "Product management (add, edit, bulk operations)",
          "Order management and fulfillment",
          "Customer management and segmentation",
          "Inventory tracking and stock management",
          "Sales analytics and reporting",
          "Revenue and profit dashboards",
          "Marketing campaign management",
          "Discount and promotion creation",
          "Shipping and tax configuration",
          "User role management",
          "Abandoned cart recovery",
          "Email marketing integration",
        ],
      },
      {
        title: "Customer Experience Optimization",
        paragraphs: ["We focus on creating delightful shopping experiences:"],
        list: [
          "Fast page load times (under 2 seconds)",
          "One-page checkout for higher conversion",
          "Mobile-first responsive design",
          "Product image zoom and 360° views",
          "Size guides and product recommendations",
          "Live chat support integration",
          "AR/VR product visualization (optional)",
          "Personalized product recommendations",
          "Guest checkout option",
          "Social login (Google, Facebook)",
          "Multi-currency and multi-language support",
          "Trust badges and security seals",
        ],
      },
      {
        title: "Security & Compliance",
        paragraphs: [
          "Your store and customer data are protected with enterprise-grade security:",
        ],
        list: [
          "SSL/TLS encryption for all transactions",
          "PCI DSS compliance for payment processing",
          "GDPR and CCPA privacy compliance",
          "Secure payment gateway integration",
          "Two-factor authentication for admin",
          "Regular security audits and updates",
          "DDoS protection and WAF",
          "Data backup and disaster recovery",
          "Fraud detection and prevention",
        ],
      },
      {
        title: "Scalability & Performance",
        paragraphs: ["Built to handle growth from day one:"],
        list: [
          "Cloud hosting on AWS, Google Cloud, or Azure",
          "CDN integration for global performance",
          "Database optimization and caching",
          "Load balancing for high traffic",
          "Image optimization and lazy loading",
          "Code splitting and performance monitoring",
          "Auto-scaling during peak sales",
          "Handles millions of products and orders",
        ],
      },
      {
        title: "Marketing & SEO",
        paragraphs: [
          "Drive traffic and conversions with built-in marketing tools:",
        ],
        list: [
          "SEO-optimized product pages and URLs",
          "Rich snippets for better search visibility",
          "Email marketing integration (Mailchimp, Klaviyo)",
          "Abandoned cart email automation",
          "Social media integration and sharing",
          "Google Analytics and Facebook Pixel",
          "A/B testing for optimization",
          "Referral and affiliate programs",
          "Blog integration for content marketing",
        ],
      },
    ],
    whyChooseUs: [
      "100+ e-commerce stores built with proven conversion rates",
      "Average 40% increase in sales after migration/redesign",
      "Fast development with 4-6 week launch timeline",
      "Mobile-optimized with 60%+ mobile conversion rates",
      "Scalable architecture handling 10,000+ daily orders",
      "Complete payment gateway integration included",
      "SEO optimization for organic traffic growth",
      "Ongoing support, maintenance, and feature updates",
    ],
  };

  return (
    <ServiceDetailLayout
      title="E-Commerce Solutions"
      subtitle="Powerful online stores with everything you need."
      icon={ShoppingCart}
      content={content}
    />
  );
};

export default ECommerce;
