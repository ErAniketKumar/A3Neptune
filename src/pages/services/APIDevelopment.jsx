import { Plug } from "lucide-react";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

const APIDevelopment = () => {
  const content = {
    sections: [
      {
        title: "Fast, Secure, Well-Documented APIs",
        paragraphs: [
          "A3Neptune builds robust, scalable APIs that power modern applications. Whether you need RESTful APIs, GraphQL endpoints, or complex integrations, we deliver APIs that are fast, secure, and developer-friendly.",
          "Our APIs are designed for performance, reliability, and ease of use, with comprehensive documentation that makes integration seamless.",
        ],
      },
      {
        title: "API Types We Build",
        paragraphs: ["Comprehensive API development services:"],
        list: [
          "RESTful APIs: Industry-standard HTTP-based APIs",
          "GraphQL APIs: Flexible, query-based data fetching",
          "WebSocket APIs: Real-time bidirectional communication",
          "Server-Sent Events: Live data streaming",
          "Microservices Architecture: Scalable, distributed systems",
          "Serverless APIs: AWS Lambda, Google Cloud Functions",
          "gRPC: High-performance RPC framework",
          "Webhook Systems: Event-driven notifications",
        ],
      },
      {
        title: "Payment Gateway Integration",
        paragraphs: ["Seamless payment processing for your application:"],
        list: [
          "Stripe: Complete payment platform integration",
          "Razorpay: India-focused payment gateway",
          "PayPal: Global payment processing",
          "Square: Point-of-sale and online payments",
          "Braintree: Advanced payment features",
          "Subscription billing and recurring payments",
          "Refund and dispute management",
          "Payment webhooks and notifications",
          "Multi-currency support",
          "PCI DSS compliance",
        ],
      },
      {
        title: "Third-Party Integrations",
        paragraphs: ["Connect your application with essential services:"],
        list: [
          "SMS Services: Twilio, Plivo, MSG91, AWS SNS",
          "Email Services: SendGrid, Mailgun, AWS SES, Postmark",
          "Social Media: Facebook, Twitter, LinkedIn, Instagram APIs",
          "OAuth Login: Google, Facebook, GitHub, Microsoft",
          "Cloud Storage: AWS S3, Google Cloud Storage, Azure Blob",
          "Maps & Location: Google Maps, Mapbox, OpenStreetMap",
          "Analytics: Google Analytics, Mixpanel, Segment",
          "CRM Systems: Salesforce, HubSpot, Zoho",
          "Accounting: QuickBooks, Xero, FreshBooks",
          "Communication: Slack, Discord, Microsoft Teams",
        ],
      },
      {
        title: "CRM & ERP Integration",
        paragraphs: ["Enterprise system integrations:"],
        list: [
          "Salesforce CRM integration and customization",
          "HubSpot marketing and sales automation",
          "Zoho suite integration",
          "SAP ERP integration",
          "Microsoft Dynamics integration",
          "Custom CRM/ERP API development",
          "Data synchronization and migration",
          "Two-way data flow setup",
          "Real-time sync and webhooks",
          "Legacy system modernization",
        ],
      },
      {
        title: "Automation Workflows",
        paragraphs: ["Automate business processes with API integrations:"],
        list: [
          "Zapier-like workflow automation",
          "Data synchronization between systems",
          "Automated reporting and notifications",
          "Email automation and drip campaigns",
          "Lead generation and nurturing",
          "Invoice generation and sending",
          "Inventory synchronization",
          "Order fulfillment automation",
          "Customer onboarding flows",
          "Backup and data migration automation",
        ],
      },
      {
        title: "API Features & Best Practices",
        paragraphs: ["Enterprise-grade API development:"],
        list: [
          "RESTful design principles and conventions",
          "Versioning strategy for backward compatibility",
          "Comprehensive error handling and messages",
          "Rate limiting and throttling",
          "Authentication (JWT, OAuth 2.0, API keys)",
          "Request validation and sanitization",
          "CORS configuration for security",
          "Pagination for large datasets",
          "Caching for performance (Redis, CDN)",
          "Logging and monitoring (ELK, CloudWatch)",
          "Automated testing (unit, integration, E2E)",
          "CI/CD pipeline integration",
        ],
      },
      {
        title: "Documentation & Testing",
        paragraphs: ["Developer-friendly documentation and tools:"],
        list: [
          "Interactive API documentation (Swagger/OpenAPI)",
          "Postman collections for testing",
          "Code examples in multiple languages",
          "Authentication guides and tutorials",
          "Webhook documentation",
          "Error code reference",
          "Rate limit documentation",
          "Versioning and migration guides",
          "SDK generation for popular languages",
          "Sandbox environment for testing",
        ],
      },
    ],
    whyChooseUs: [
      "200+ APIs built and deployed in production",
      "Average 99.9% uptime with robust infrastructure",
      "Response times under 100ms for optimized endpoints",
      "Comprehensive documentation loved by developers",
      "Security-first approach with encryption and auth",
      "Scalable architecture handling millions of requests",
      "Regular updates and backward compatibility",
      "Dedicated support for integration issues",
    ],
  };

  return (
    <ServiceDetailLayout
      title="API Development & Integrations"
      subtitle="Fast, secure, well-documented APIs."
      icon={Plug}
      content={content}
    />
  );
};

export default APIDevelopment;
