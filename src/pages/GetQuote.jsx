import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  Clock,
  Shield,
  Zap,
  Users,
  Target,
  TrendingUp,
  Award,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { siteConfig } from "../config/site";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    additionalServices: [],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        additionalServices: checked
          ? [...prev.additionalServices, value]
          : prev.additionalServices.filter((service) => service !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote Request:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
        additionalServices: [],
      });
    }, 3000);
  };

  const projectTypes = [
    "Full-Stack Website Development",
    "AI-Integrated Solutions",
    "Mobile App Development",
    "Business Portfolio Website",
    "E-Commerce Platform",
    "Learning Management System",
    "College/School Website",
    "Landing Page",
    "Admin Dashboard",
    "API Development",
    "Cloud Deployment & DevOps",
    "UI/UX Design",
  ];

  const budgetRanges = [
    "$500 - $2,000",
    "$2,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
  ];

  const timelines = [
    "ASAP (1-2 weeks)",
    "1 Month",
    "2-3 Months",
    "3-6 Months",
    "6+ Months",
    "Flexible",
  ];

  const additionalServices = [
    "SEO Optimization",
    "Content Writing",
    "Logo Design",
    "Branding Package",
    "Social Media Integration",
    "Analytics Setup",
    "Maintenance Package",
    "Training & Documentation",
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Projects delivered on time, every time",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "100% satisfaction with revision support",
    },
    {
      icon: Zap,
      title: "Modern Technology",
      description: "Latest frameworks and best practices",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Expert developers assigned to your project",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on achieving your business objectives",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Built to grow with your business",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Submit Quote Request",
      description:
        "Fill out the form with your project details and requirements",
    },
    {
      number: "02",
      title: "Initial Consultation",
      description:
        "We'll schedule a free call to discuss your vision and goals",
    },
    {
      number: "03",
      title: "Proposal & Quote",
      description:
        "Receive a detailed proposal with timeline and pricing breakdown",
    },
    {
      number: "04",
      title: "Project Kickoff",
      description: "Once approved, we begin development with regular updates",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="container mx-auto px-6 pt-24"
      >
        <Link
          to="/#contact"
          className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
            Get Your Custom Quote
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Tell us about your project and we'll provide a detailed proposal
            with transparent pricing
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Projects Delivered", value: "150+" },
              { label: "Happy Clients", value: "120+" },
              { label: "Average Rating", value: "4.9/5" },
              { label: "Response Time", value: "< 24hrs" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
              >
                <div className="text-3xl font-bold text-yellow-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-yellow-400">A3Neptune</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-all group"
                >
                  <Icon className="w-10 h-10 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Process Steps */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-yellow-400">Simple Process</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-linear-to-r from-yellow-400 to-transparent" />
                )}

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-all">
                  <div className="text-6xl font-bold text-yellow-400/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quote Form */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Request Your <span className="text-yellow-400">Free Quote</span>
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Fill out the form below and we'll get back to you within 24 hours
              with a detailed proposal
            </p>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <CheckCircle2 className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Quote Request Submitted!
                </h3>
                <p className="text-gray-400">
                  We'll review your requirements and send you a detailed
                  proposal within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Full Name <span className="text-yellow-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address <span className="text-yellow-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Project Type <span className="text-yellow-400">*</span>
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type} className="bg-black">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Budget Range <span className="text-yellow-400">*</span>
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select your budget</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range} className="bg-black">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Timeline <span className="text-yellow-400">*</span>
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                    >
                      <option value="">When do you need this?</option>
                      {timelines.map((timeline, index) => (
                        <option
                          key={index}
                          value={timeline}
                          className="bg-black"
                        >
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Services */}
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Additional Services
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {additionalServices.map((service, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          name="additionalServices"
                          value={service}
                          checked={formData.additionalServices.includes(
                            service
                          )}
                          onChange={handleChange}
                          className="w-5 h-5 bg-white/5 border border-white/10 rounded accent-yellow-400"
                        />
                        <span className="text-sm group-hover:text-yellow-400 transition-colors">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Project Description{" "}
                    <span className="text-yellow-400">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, goals, target audience, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-yellow-400 text-black font-bold py-4 rounded-lg hover:bg-yellow-300 transition-colors"
                >
                  Submit Quote Request
                </motion.button>

                <p className="text-sm text-gray-400 text-center">
                  By submitting this form, you agree to our Privacy Policy and
                  Terms of Service
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </section>

      {/* Pricing Information */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Transparent <span className="text-yellow-400">Pricing Guide</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                category: "Simple Projects",
                range: "$500 - $2,000",
                examples: [
                  "Landing Pages",
                  "Portfolio Sites",
                  "Simple Business Sites",
                ],
                features: [
                  "5-10 Pages",
                  "Responsive Design",
                  "Basic SEO",
                  "Contact Form",
                ],
              },
              {
                category: "Medium Projects",
                range: "$2,000 - $10,000",
                examples: ["E-Commerce", "Custom Web Apps", "Admin Dashboards"],
                features: [
                  "Custom Features",
                  "Database Integration",
                  "API Development",
                  "Payment Gateway",
                ],
                highlight: true,
              },
              {
                category: "Complex Projects",
                range: "$10,000+",
                examples: [
                  "Enterprise Solutions",
                  "AI Integration",
                  "Custom Platforms",
                ],
                features: [
                  "Advanced Features",
                  "Scalable Architecture",
                  "Cloud Deployment",
                  "Ongoing Support",
                ],
              },
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm border ${
                  tier.highlight ? "border-yellow-400" : "border-white/10"
                } rounded-xl p-8 relative ${tier.highlight ? "scale-105" : ""}`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.category}</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-4">
                  {tier.range}
                </div>
                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">Examples:</p>
                  <ul className="text-sm space-y-1">
                    {tier.examples.map((example, i) => (
                      <li key={i} className="text-gray-300">
                        • {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Includes:</p>
                  <ul className="space-y-2">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-8">
            <Award className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              What's Included in Every Project?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Fully responsive design (mobile, tablet, desktop)",
                "Modern, clean code following best practices",
                "SEO optimization for better search rankings",
                "Performance optimization for fast loading",
                "Cross-browser compatibility testing",
                "Free revisions until you're 100% satisfied",
                "30 days of free post-launch support",
                "Complete source code and documentation",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-linear-to-r from-yellow-400/10 to-transparent border border-yellow-400/30 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-gray-300 mb-8">
            Not sure which service is right for you? Let's discuss your project!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={`mailto:${siteConfig.email}`}>
              <Mail className="w-5 h-5 inline-block mr-2" />
              Email Us
            </Button>
            <Button
              variant="secondary"
              href={`mailto:${siteConfig.supportEmail}`}
            >
              <Mail className="w-5 h-5 inline-block mr-2" />
              Support Email
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default GetQuote;
