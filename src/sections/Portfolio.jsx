import { motion } from "framer-motion";
import { ExternalLink, Filter } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { siteConfig } from "../config/site";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Sample portfolio items
  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      category: "E-commerce",
      image: "https://placehold.co/600x400/000000/FFD600?text=E-Commerce",
    },
    {
      title: "AI Dashboard",
      category: "AI Projects",
      image: "https://placehold.co/600x400/000000/FFD600?text=AI+Dashboard",
    },
    {
      title: "Learning Management System",
      category: "Full-Stack Apps",
      image: "https://placehold.co/600x400/000000/FFD600?text=LMS",
    },
    {
      title: "Mobile Fitness App",
      category: "Mobile Apps",
      image: "https://placehold.co/600x400/000000/FFD600?text=Fitness+App",
    },
    {
      title: "Corporate Website",
      category: "Websites",
      image: "https://placehold.co/600x400/000000/FFD600?text=Corporate",
    },
    {
      title: "UI Kit Design",
      category: "UI/UX Screens",
      image: "https://placehold.co/600x400/000000/FFD600?text=UI+Kit",
    },
  ];

  const categories = ["All", ...siteConfig.portfolioCategories];
  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle subtitle="Showcasing our finest work and creative solutions">
          Our Portfolio
        </SectionTitle>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Filter className="text-gray-400" size={20} />
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-yellow-400 text-black"
                  : "bg-zinc-900 text-gray-300 hover:bg-zinc-800"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden p-0"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <div className="text-yellow-400 text-sm mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-yellow-400">
                      View Project
                      <ExternalLink className="ml-2" size={16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-yellow-400 text-sm mb-2">
                  {item.category}
                </div>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
