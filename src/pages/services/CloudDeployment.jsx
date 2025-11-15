import { Cloud } from "lucide-react";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

const CloudDeployment = () => {
  const content = {
    sections: [
      {
        title: "Deployment Made Simple and Scalable",
        paragraphs: [
          "A3Neptune provides complete cloud deployment and DevOps services to take your application from development to production seamlessly. We handle infrastructure setup, deployment automation, monitoring, and scaling so you can focus on building features.",
          "Our DevOps expertise ensures your application is always available, performs optimally, and scales effortlessly with your growth.",
        ],
      },
      {
        title: "Cloud Platforms We Support",
        paragraphs: ["Deploy on leading cloud providers:"],
        list: [
          "AWS: EC2, ECS, Lambda, RDS, S3, CloudFront, Route53",
          "Vercel: Next.js optimized deployment with edge functions",
          "Netlify: Static sites and serverless functions",
          "DigitalOcean: Droplets, App Platform, Managed Databases",
          "Railway: Modern application deployment platform",
          "Google Cloud: Compute Engine, Cloud Run, App Engine",
          "Azure: App Service, Functions, Container Instances",
          "Heroku: Quick deployment for startups",
          "Cloudflare: CDN, Workers, Pages",
        ],
      },
      {
        title: "CI/CD Pipeline Setup",
        paragraphs: ["Automated deployment for faster releases:"],
        list: [
          "GitHub Actions workflow automation",
          "GitLab CI/CD pipeline configuration",
          "Jenkins setup and job configuration",
          "CircleCI integration",
          "Automated testing before deployment",
          "Code quality checks and linting",
          "Security scanning for vulnerabilities",
          "Automated database migrations",
          "Blue-green deployment strategy",
          "Rollback mechanisms for failed deployments",
          "Slack/email notifications for build status",
          "Deployment approval workflows",
        ],
      },
      {
        title: "Containerization & Orchestration",
        paragraphs: ["Modern container-based deployment:"],
        list: [
          "Docker containerization and optimization",
          "Multi-stage Docker builds for smaller images",
          "Docker Compose for local development",
          "Kubernetes cluster setup and management",
          "Helm charts for Kubernetes deployments",
          "Container registry (Docker Hub, ECR, GCR)",
          "Service mesh implementation (Istio)",
          "Container security scanning",
          "Resource limits and quotas",
          "Pod autoscaling and load balancing",
        ],
      },
      {
        title: "Infrastructure as Code",
        paragraphs: ["Version-controlled infrastructure management:"],
        list: [
          "Terraform for multi-cloud infrastructure",
          "AWS CloudFormation templates",
          "Ansible for configuration management",
          "Infrastructure versioning and rollback",
          "Environment parity (dev, staging, prod)",
          "Automated infrastructure provisioning",
          "Cost optimization through IaC",
          "Security policies as code",
          "Disaster recovery automation",
        ],
      },
      {
        title: "Load Balancing & Auto-Scaling",
        paragraphs: ["Handle traffic spikes effortlessly:"],
        list: [
          "Application load balancer setup",
          "Auto-scaling based on CPU/memory/requests",
          "Health checks and failover configuration",
          "Session persistence and sticky sessions",
          "Traffic distribution strategies",
          "Geographic load balancing",
          "Database read replicas for scaling",
          "Caching layers (Redis, Memcached)",
          "CDN integration for static assets",
          "DDoS protection and WAF setup",
        ],
      },
      {
        title: "Monitoring & Logging",
        paragraphs: ["Comprehensive observability for your application:"],
        list: [
          "Application performance monitoring (APM)",
          "Server metrics (CPU, memory, disk, network)",
          "Error tracking (Sentry, Rollbar)",
          "Log aggregation (ELK Stack, CloudWatch Logs)",
          "Uptime monitoring and alerting",
          "Custom dashboards and visualizations",
          "Real-time alerts (email, SMS, Slack)",
          "Performance bottleneck identification",
          "Database query monitoring",
          "SSL certificate expiration monitoring",
          "Cost tracking and optimization alerts",
        ],
      },
      {
        title: "Server Optimization",
        paragraphs: ["Maximum performance and cost efficiency:"],
        list: [
          "Server configuration and tuning",
          "Database optimization and indexing",
          "Caching strategy implementation",
          "Gzip compression and minification",
          "Image optimization and WebP conversion",
          "CDN caching rules",
          "Database connection pooling",
          "Query optimization and profiling",
          "Memory leak detection and fixing",
          "Cost optimization recommendations",
          "Right-sizing instances",
          "Reserved instance planning",
        ],
      },
    ],
    whyChooseUs: [
      "99.99% uptime SLA with robust infrastructure",
      "Zero-downtime deployments with rollback capability",
      "Average 50% cost reduction through optimization",
      "24/7 monitoring with instant alerts",
      "Automated backups with disaster recovery",
      "Scalable architecture handling 10x traffic spikes",
      "Complete DevOps documentation and runbooks",
      "Ongoing support and infrastructure management",
    ],
  };

  return (
    <ServiceDetailLayout
      title="Cloud Deployment & DevOps"
      subtitle="Deployment made simple and scalable."
      icon={Cloud}
      content={content}
    />
  );
};

export default CloudDeployment;
