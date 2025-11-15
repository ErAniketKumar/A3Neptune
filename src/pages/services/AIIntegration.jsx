import { Brain } from "lucide-react";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

const AIIntegration = () => {
  const content = {
    sections: [
      {
        title: "Smart Applications Powered by Next-Gen Intelligence",
        paragraphs: [
          "A3Neptune specializes in integrating cutting-edge Artificial Intelligence, Machine Learning, and Natural Language Processing into web and mobile applications. We transform traditional applications into intelligent systems that learn, adapt, and provide personalized experiences.",
          "Our AI solutions leverage the latest advancements in large language models (LLMs), computer vision, predictive analytics, and automation to create applications that work smarter, not harder.",
        ],
      },
      {
        title: "AI Technologies We Work With",
        paragraphs: [
          "We utilize industry-leading AI frameworks and platforms to build intelligent solutions:",
        ],
        list: [
          "Large Language Models: OpenAI GPT-4, Claude, Gemini, LLaMA",
          "Machine Learning: TensorFlow, PyTorch, scikit-learn",
          "Natural Language Processing: spaCy, NLTK, Hugging Face Transformers",
          "Computer Vision: OpenCV, YOLO, MediaPipe",
          "AI Platforms: AWS AI/ML, Google AI, Azure Cognitive Services",
          "Vector Databases: Pinecone, Weaviate, Milvus for semantic search",
          "AutoML: Automated model training and optimization",
        ],
      },
      {
        title: "AI Solutions We Build",
        paragraphs: [
          "From conversational AI to predictive analytics, we create intelligent features that enhance user experience:",
        ],
        list: [
          "LLM-Powered Chatbots: Intelligent customer support and virtual assistants",
          "Recommendation Engines: Personalized content and product suggestions",
          "Sentiment Analysis: Understanding customer emotions and feedback",
          "Document Processing: Automated data extraction from invoices, receipts, contracts",
          "Facial Recognition: Secure authentication and attendance systems",
          "Predictive Analytics: Forecasting trends, sales, and user behavior",
          "AI-Powered Search: Semantic search with natural language queries",
          "Content Generation: Automated blog posts, product descriptions, summaries",
          "Image Classification: Object detection and visual recognition",
          "Speech Recognition: Voice commands and transcription services",
          "Anomaly Detection: Fraud detection and security monitoring",
          "AI Dashboards: Real-time insights and decision support systems",
        ],
      },
      {
        title: "Industries & Use Cases",
        paragraphs: [
          "Our AI integration services benefit various industries and applications:",
        ],
        list: [
          "E-Commerce: Product recommendations, visual search, chatbot support",
          "Healthcare: Medical image analysis, patient diagnosis assistance",
          "Education: Personalized learning paths, automated grading, AI tutors",
          "Finance: Credit scoring, fraud detection, investment predictions",
          "HR & Recruitment: Resume screening, candidate matching",
          "Customer Service: 24/7 AI chatbots, ticket classification, sentiment analysis",
          "Marketing: Content generation, audience targeting, campaign optimization",
          "Real Estate: Property valuation, virtual tours, chatbot agents",
        ],
      },
      {
        title: "Educational AI Tools",
        paragraphs: [
          "We build specialized AI tools for educators and students:",
        ],
        list: [
          "Intelligent Tutoring Systems with personalized feedback",
          "Automated essay grading and plagiarism detection",
          "AI-powered quiz and question generation",
          "Learning analytics and student performance prediction",
          "Language learning apps with speech recognition",
          "Virtual teaching assistants for course management",
        ],
      },
      {
        title: "Implementation & Integration",
        paragraphs: [
          "We ensure seamless AI integration into your existing systems with minimal disruption. Our approach includes model selection and training, API integration, performance optimization, scalability planning, and continuous model improvement based on real-world data.",
          "We also provide explainable AI solutions, ensuring transparency in how AI makes decisions, which is crucial for regulated industries and building user trust.",
        ],
      },
      {
        title: "Data Privacy & Ethics",
        paragraphs: [
          "We prioritize data privacy and ethical AI development. All our AI solutions comply with GDPR, CCPA, and industry-specific regulations. We implement secure data handling, user consent management, bias detection and mitigation, and transparent AI decision-making processes.",
        ],
      },
    ],
    whyChooseUs: [
      "Expertise in latest AI/ML technologies and LLM integration",
      "Custom AI models trained specifically for your use case",
      "Scalable solutions that handle millions of requests",
      "Focus on explainable and ethical AI",
      "Complete data privacy and security compliance",
      "Continuous model monitoring and improvement",
      "Cost-effective AI implementation with proven ROI",
      "Dedicated AI engineers and data scientists on your project",
    ],
  };

  return (
    <ServiceDetailLayout
      title="AI-Integrated Web & App Solutions"
      subtitle="Smart applications powered by next-gen intelligence."
      icon={Brain}
      content={content}
    />
  );
};

export default AIIntegration;
