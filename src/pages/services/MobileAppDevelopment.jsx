import { Smartphone } from "lucide-react";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

const MobileAppDevelopment = () => {
  const content = {
    sections: [
      {
        title: "Powerful Native & Cross-Platform Mobile Experiences",
        paragraphs: [
          "A3Neptune delivers exceptional mobile applications for iOS and Android that users love. Whether you need a native app for maximum performance or a cross-platform solution for faster deployment, we have the expertise to bring your mobile vision to life.",
          "Our mobile apps combine beautiful UI/UX design with robust functionality, delivering seamless experiences that engage users and drive business results.",
        ],
      },
      {
        title: "Mobile Development Technologies",
        paragraphs: [
          "We use cutting-edge frameworks and tools to build high-quality mobile applications:",
        ],
        list: [
          "Cross-Platform: React Native, Flutter, Expo",
          "Native iOS: Swift, SwiftUI, UIKit",
          "Native Android: Kotlin, Jetpack Compose",
          "Backend: Node.js, Firebase, AWS Amplify, Supabase",
          "State Management: Redux, MobX, Riverpod, Provider",
          "Databases: SQLite, Realm, Firebase Firestore",
          "Testing: Jest, Detox, XCTest, Espresso",
        ],
      },
      {
        title: "Key Features We Develop",
        paragraphs: [
          "Every mobile app we create is packed with features that delight users:",
        ],
        list: [
          "Beautiful, intuitive UI/UX following platform guidelines",
          "Offline-first architecture for reliable functionality",
          "Push notifications for user engagement",
          "In-app purchases and subscription management",
          "Payment gateway integration (Stripe, Razorpay, PayPal)",
          "Social media authentication and sharing",
          "Real-time chat and messaging features",
          "Location-based services and maps integration",
          "Camera, gallery, and media handling",
          "Biometric authentication (Face ID, Touch ID, fingerprint)",
          "Deep linking and app-to-app navigation",
          "Analytics and crash reporting (Firebase, Sentry)",
        ],
      },
      {
        title: "Performance Optimization",
        paragraphs: [
          "We obsess over app performance to ensure smooth, responsive experiences:",
        ],
        list: [
          "Optimized rendering and minimal re-renders",
          "Image compression and lazy loading",
          "Efficient memory management",
          "Background task optimization",
          "Network request caching and optimization",
          "Code splitting and bundle size reduction",
          "Battery consumption optimization",
          "Smooth animations at 60 FPS",
        ],
      },
      {
        title: "App Types We Build",
        paragraphs: [
          "We specialize in various types of mobile applications across industries:",
        ],
        list: [
          "E-Commerce Apps: Shopping, payments, order tracking",
          "Social Networking: User profiles, feeds, messaging, stories",
          "On-Demand Services: Uber-like apps for various services",
          "Food Delivery: Restaurant ordering and delivery tracking",
          "Fitness & Health: Workout tracking, nutrition, wellness",
          "Education: Learning platforms, quiz apps, online courses",
          "Finance: Banking, investing, budgeting, cryptocurrency",
          "Entertainment: Streaming, gaming, content platforms",
          "Productivity: Task management, note-taking, calendars",
          "Travel & Booking: Hotels, flights, car rentals",
        ],
      },
      {
        title: "Startup MVP Development",
        paragraphs: [
          "For startups, we offer rapid MVP (Minimum Viable Product) development to help you validate your idea and secure funding. We focus on core features, fast time-to-market, cost-effective development, and scalable architecture for future growth.",
          "Our MVP approach includes user research, feature prioritization, iterative development, user feedback integration, and a clear roadmap for scaling.",
        ],
      },
      {
        title: "App Store Publishing & Support",
        paragraphs: ["We handle the complete app publishing process:"],
        list: [
          "App Store Optimization (ASO) for better visibility",
          "Compelling app descriptions and screenshots",
          "App Store and Play Store submission",
          "Compliance with platform guidelines",
          "Beta testing with TestFlight and Google Play Beta",
          "Post-launch monitoring and updates",
          "Version management and release planning",
          "User review management and response",
        ],
      },
    ],
    whyChooseUs: [
      "50+ mobile apps launched on App Store and Play Store",
      "Cross-platform expertise reducing development cost by 40%",
      "Focus on performance with apps running at 60 FPS",
      "Beautiful UI/UX that users love and rate 4.5+ stars",
      "Complete app lifecycle management from idea to maintenance",
      "Agile development with weekly builds for feedback",
      "App Store publishing assistance included",
      "Post-launch support and continuous improvement",
    ],
  };

  return (
    <ServiceDetailLayout
      title="Mobile App Development"
      subtitle="Powerful native & cross-platform mobile experiences."
      icon={Smartphone}
      content={content}
    />
  );
};

export default MobileAppDevelopment;
