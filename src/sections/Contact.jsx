import { motion } from "framer-motion";
import { Send, Mail, Github, Briefcase, Linkedin } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { siteConfig } from "../config/site";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle subtitle="Let's discuss your project and bring your vision to life">
          Get In Touch
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white text-lg mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white text-lg mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-white text-lg mb-2"
                >
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-black border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="full-stack">Full-Stack Development</option>
                  <option value="ai">AI Integration</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white text-lg mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-6 py-4 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full group">
                Send Message
                <Send
                  className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-black/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <motion.a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <div className="text-lg">{siteConfig.email}</div>
                  </div>
                </motion.a>

                <motion.a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                    <Github className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">GitHub</div>
                    <div className="text-lg">View Our Repositories</div>
                  </div>
                </motion.a>

                <motion.a
                  href={siteConfig.social.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Upwork</div>
                    <div className="text-lg">Hire Us on Upwork</div>
                  </div>
                </motion.a>

                <motion.a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                    <Linkedin className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">LinkedIn</div>
                    <div className="text-lg">Connect With Us</div>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="bg-linear-to-br from-yellow-400/10 to-transparent border border-yellow-400/20 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h4>
              <p className="text-gray-300 leading-relaxed">
                We're excited to hear about your project! Whether you need a
                full-stack application, AI integration, or a stunning website,
                we're here to help bring your vision to life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
