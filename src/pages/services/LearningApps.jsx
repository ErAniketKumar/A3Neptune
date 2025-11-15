import { GraduationCap } from "lucide-react";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

const LearningApps = () => {
  const content = {
    sections: [
      {
        title: "Smart, Interactive Education Platforms",
        paragraphs: [
          "A3Neptune creates powerful learning management systems and educational apps designed specifically for educators, tutors, and educational institutions. Our platforms make teaching engaging, management effortless, and learning outcomes measurable.",
          "We build tools that help educators focus on what they do best—teaching—while our technology handles the rest.",
        ],
      },
      {
        title: "Core Learning Features",
        paragraphs: ["Comprehensive features for modern education:"],
        list: [
          "Course creation and content management",
          "Video lecture hosting and streaming",
          "Interactive quizzes and assessments",
          "Assignments with file uploads and submissions",
          "Automated grading and feedback systems",
          "Progress tracking and analytics",
          "Student performance dashboards",
          "Attendance management (online and offline)",
          "Discussion forums and Q&A sections",
          "Live classes with video conferencing",
          "Document library and resource sharing",
          "Certificate generation upon completion",
        ],
      },
      {
        title: "For Teachers & Educators",
        paragraphs: ["Empowering tools for educators:"],
        list: [
          "Easy course builder with drag-and-drop interface",
          "Quiz and test creation with question banks",
          "Automatic grading for MCQs and assignments",
          "Student progress monitoring and reports",
          "Attendance tracking and management",
          "Grade book and performance analytics",
          "Announcement and notification system",
          "Parent communication portal",
          "Lesson planning and scheduling",
          "Resource library organization",
          "Personalized feedback tools",
        ],
      },
      {
        title: "Student Experience",
        paragraphs: ["Engaging learning experience for students:"],
        list: [
          "Personalized learning dashboards",
          "Course enrollment and browsing",
          "Video lectures with playback controls",
          "Interactive quizzes with instant feedback",
          "Assignment submission portal",
          "Progress tracking and achievements",
          "Discussion boards for peer learning",
          "Mobile app for learning on-the-go",
          "Bookmarks and notes feature",
          "Doubt resolution system",
          "Gamification with badges and leaderboards",
        ],
      },
      {
        title: "Analytics & Reporting",
        paragraphs: ["Data-driven insights for better outcomes:"],
        list: [
          "Student performance analytics",
          "Course completion rates",
          "Assessment score trends",
          "Engagement metrics (video watch time, quiz attempts)",
          "Attendance reports",
          "Class-wise comparison reports",
          "Individual student progress tracking",
          "Export reports in PDF/Excel",
          "Custom report generation",
          "Real-time dashboards",
        ],
      },
      {
        title: "Payment & Monetization",
        paragraphs: ["Built-in payment systems for course monetization:"],
        list: [
          "One-time course payments",
          "Subscription-based access",
          "Free trial periods",
          "Coupon and discount codes",
          "Bundle and package deals",
          "Installment payment options",
          "Payment gateway integration (Stripe, Razorpay)",
          "Revenue analytics and reporting",
          "Automated invoice generation",
          "Refund management",
        ],
      },
      {
        title: "Institutional Features",
        paragraphs: ["For schools, colleges, and coaching institutes:"],
        list: [
          "Multi-user role management (admin, teacher, student, parent)",
          "Batch and class management",
          "Timetable and schedule creation",
          "Exam management system",
          "Result publication and report cards",
          "Fee management and payment tracking",
          "Library management integration",
          "Event and announcement system",
          "Parent-teacher communication",
          "Staff management",
        ],
      },
      {
        title: "Personalized Learning",
        paragraphs: ["AI-powered features for adaptive learning:"],
        list: [
          "Personalized course recommendations",
          "Adaptive difficulty based on performance",
          "Learning path customization",
          "Smart content suggestions",
          "Automated doubt detection",
          "Weak area identification and remedial content",
          "Learning style adaptation",
        ],
      },
    ],
    whyChooseUs: [
      "50+ educational platforms built for schools and educators",
      "Intuitive interfaces loved by teachers and students",
      "Scalable architecture supporting 10,000+ concurrent users",
      "Mobile apps included for iOS and Android",
      "White-label solutions with your branding",
      "FERPA and data privacy compliance",
      "Dedicated training and onboarding support",
      "Affordable pricing with flexible payment options",
    ],
  };

  return (
    <ServiceDetailLayout
      title="Learning Apps for Educators"
      subtitle="Smart, interactive education platforms."
      icon={GraduationCap}
      content={content}
    />
  );
};

export default LearningApps;
