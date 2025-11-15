import { Code2 } from "lucide-react";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

const FullStackDevelopment = () => {
  const content = {
    sections: [
      {
        title: "Building Modern, Scalable Web Applications",
        paragraphs: [
          "At A3Neptune, we specialize in creating robust, high-performance full-stack web applications that power modern businesses. Our expertise spans the entire technology stack, from beautiful, responsive front-ends to secure, scalable back-end architectures.",
          "We leverage cutting-edge technologies including the MERN stack (MongoDB, Express.js, React, Node.js), Next.js for server-side rendering and static generation, and modern cloud services to deliver applications that are fast, secure, and built to scale with your business.",
        ],
      },
      {
        title: "Our Technology Stack",
        paragraphs: [
          "We work with industry-leading technologies to ensure your application is built on a solid foundation:",
        ],
        list: [
          "Frontend: React, Next.js, Vue.js, TypeScript, Tailwind CSS",
          "Backend: Node.js, Express, NestJS, Python (Django/Flask)",
          "Databases: MongoDB, PostgreSQL, MySQL, Redis",
          "Cloud & DevOps: AWS, Google Cloud, Azure, Docker, Kubernetes",
          "API Development: RESTful APIs, GraphQL, WebSockets",
          "Authentication: JWT, OAuth 2.0, Auth0, Firebase Auth",
        ],
      },
      {
        title: "Key Features We Build",
        paragraphs: [
          "Every full-stack application we create is designed with scalability, security, and user experience in mind:",
        ],
        list: [
          "Responsive, mobile-first user interfaces with modern design",
          "Real-time features using Socket.io and WebSockets",
          "Secure authentication and authorization systems",
          "Custom admin dashboards with analytics and reporting",
          "Third-party API integrations (payments, email, SMS, social media)",
          "Database optimization and caching strategies",
          "SEO optimization and performance tuning",
          "Automated testing and CI/CD pipelines",
          "Progressive Web App (PWA) capabilities",
          "Multi-language and internationalization support",
        ],
      },
      {
        title: "Use Cases & Industries",
        paragraphs: [
          "Our full-stack development services cater to a wide range of businesses and use cases:",
        ],
        list: [
          "SaaS Platforms: Build subscription-based software products",
          "Startups: MVP development to validate your business idea",
          "Enterprise Applications: Complex business management systems",
          "Social Platforms: Community-driven applications with user interactions",
          "Booking Systems: Reservation and appointment management",
          "Content Management: Custom CMS solutions tailored to your needs",
          "Financial Applications: Secure fintech and payment solutions",
          "Healthcare: HIPAA-compliant medical applications",
        ],
      },
      {
        title: "Our Development Workflow",
        paragraphs: [
          "We follow an agile, iterative approach to ensure quality and timely delivery:",
        ],
        list: [
          "1. Discovery & Planning: Understanding your requirements and goals",
          "2. Architecture Design: Creating scalable system architecture",
          "3. UI/UX Design: Wireframing and prototyping the user experience",
          "4. Development: Building features in 2-week sprints",
          "5. Testing: Comprehensive QA and automated testing",
          "6. Deployment: Launching to production with monitoring",
          "7. Maintenance: Ongoing support and feature updates",
        ],
      },
      {
        title: "Performance & Scalability",
        paragraphs: [
          "We build applications that perform exceptionally and scale effortlessly. Our optimization techniques include code splitting, lazy loading, database indexing, caching strategies, CDN integration, and load balancing to ensure your application handles growth seamlessly.",
          "We also implement monitoring and logging solutions to track performance metrics, identify bottlenecks, and proactively address issues before they impact your users.",
        ],
      },
    ],
    whyChooseUs: [
      "Experienced team with 50+ successful full-stack projects delivered",
      "Modern tech stack using latest stable versions and best practices",
      "Agile development with regular updates and transparent communication",
      "Clean, maintainable code with comprehensive documentation",
      "Built-in security best practices and data protection",
      "Scalable architecture designed to grow with your business",
      "Post-launch support and maintenance included",
      "Competitive pricing with flexible engagement models",
    ],
  };

  return (
    <ServiceDetailLayout
      title="Full-Stack Website Development"
      subtitle="Scalable. Secure. Lightning-Fast."
      icon={Code2}
      content={content}
    />
  );
};

export default FullStackDevelopment;
