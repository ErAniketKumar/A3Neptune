import { LayoutDashboard } from "lucide-react";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

const AdminDashboard = () => {
  const content = {
    sections: [
      {
        title: "Manage Everything With a Powerful Admin System",
        paragraphs: [
          "A3Neptune builds custom admin dashboards and panels that give you complete control over your application. From user management to analytics, our dashboards provide the tools you need to run your business efficiently.",
          "We create intuitive, data-rich interfaces that make complex operations simple and insights actionable.",
        ],
      },
      {
        title: "Core Dashboard Features",
        paragraphs: ["Comprehensive admin functionality:"],
        list: [
          "Real-time analytics and KPI dashboards",
          "User and role management with permissions",
          "CRUD operations for all data entities",
          "Advanced search and filtering",
          "Bulk operations and batch processing",
          "Data export (CSV, Excel, PDF)",
          "Customizable dashboard layouts",
          "Multi-user collaboration features",
          "Activity logs and audit trails",
          "Notification system (email, in-app, push)",
          "Settings and configuration management",
          "API key and integration management",
        ],
      },
      {
        title: "Data Visualization & Analytics",
        paragraphs: ["Transform data into actionable insights:"],
        list: [
          "Interactive charts (line, bar, pie, area, radar)",
          "Real-time data updates and live metrics",
          "Custom date range selection",
          "Comparative analytics (YoY, MoM, WoW)",
          "Trend analysis and forecasting",
          "Heatmaps and geographical data",
          "Conversion funnel visualization",
          "User behavior analytics",
          "Revenue and sales dashboards",
          "Custom report generation",
          "Scheduled report emails",
          "Dashboard widgets and cards",
        ],
      },
      {
        title: "User & Role Management",
        paragraphs: ["Granular control over access and permissions:"],
        list: [
          "Role-based access control (RBAC)",
          "Custom permission creation",
          "User invitation and onboarding",
          "Team and department organization",
          "Activity monitoring and logs",
          "User impersonation for support",
          "Two-factor authentication",
          "Session management",
          "Password policies enforcement",
          "Single sign-on (SSO) integration",
        ],
      },
      {
        title: "Technology Stack",
        paragraphs: ["Built with modern, scalable technologies:"],
        list: [
          "Frontend: React, Next.js, TypeScript, Tailwind CSS",
          "Charts & Visualization: Recharts, Chart.js, D3.js, ApexCharts",
          "Tables: TanStack Table, AG Grid for complex data",
          "Backend: Node.js, Python (Django/Flask), .NET",
          "Databases: PostgreSQL, MongoDB, MySQL",
          "Real-time: Socket.io, WebSockets, Server-Sent Events",
          "State Management: Redux, Zustand, React Query",
          "Authentication: JWT, OAuth 2.0, Auth0",
        ],
      },
      {
        title: "Dashboard Types We Build",
        paragraphs: ["Specialized dashboards for different needs:"],
        list: [
          "Business Intelligence: Executive dashboards with key metrics",
          "E-Commerce: Orders, inventory, sales analytics",
          "SaaS: User analytics, subscription metrics, churn",
          "CRM: Customer management, pipeline, sales tracking",
          "Marketing: Campaign performance, ROI, attribution",
          "Finance: Accounting, invoicing, expense tracking",
          "HR: Employee management, attendance, payroll",
          "Healthcare: Patient records, appointments, billing",
          "Education: Student management, courses, assessments",
          "Logistics: Fleet management, tracking, routing",
        ],
      },
      {
        title: "Third-Party Integrations",
        paragraphs: ["Connect with tools you already use:"],
        list: [
          "Payment Gateways: Stripe, PayPal, Razorpay",
          "Email Services: SendGrid, Mailchimp, AWS SES",
          "SMS: Twilio, Plivo, MSG91",
          "Cloud Storage: AWS S3, Google Cloud Storage",
          "Analytics: Google Analytics, Mixpanel, Amplitude",
          "CRM: Salesforce, HubSpot, Zoho",
          "Communication: Slack, Microsoft Teams",
          "Accounting: QuickBooks, Xero",
          "Social Media APIs",
          "Custom API integrations",
        ],
      },
      {
        title: "Security & Performance",
        paragraphs: ["Enterprise-grade security and optimization:"],
        list: [
          "Secure authentication and authorization",
          "Data encryption at rest and in transit",
          "SQL injection and XSS prevention",
          "Rate limiting and DDoS protection",
          "Regular security audits",
          "GDPR and compliance features",
          "Fast loading with code splitting",
          "Optimized database queries",
          "Caching strategies (Redis, CDN)",
          "Horizontal and vertical scaling support",
        ],
      },
    ],
    whyChooseUs: [
      "100+ custom dashboards built across industries",
      "Intuitive UX that reduces training time by 50%",
      "Real-time data with sub-second update latency",
      "Scalable architecture supporting millions of records",
      "Beautiful, modern design that users love",
      "Complete API documentation included",
      "Role-based access for security",
      "Ongoing support and feature additions",
    ],
  };

  return (
    <ServiceDetailLayout
      title="Custom Dashboard & Admin Panel"
      subtitle="Manage everything with a powerful admin system."
      icon={LayoutDashboard}
      content={content}
    />
  );
};

export default AdminDashboard;
