import { School } from "lucide-react";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

const CollegeWebsites = () => {
  const content = {
    sections: [
      {
        title: "Modern Websites Built for Institutions",
        paragraphs: [
          "A3Neptune specializes in creating comprehensive, feature-rich websites for colleges, schools, and educational institutions. Our websites combine professional design with powerful functionality to showcase your institution and streamline administrative processes.",
          "We understand the unique needs of educational institutions and build websites that serve students, parents, faculty, and administrators effectively.",
        ],
      },
      {
        title: "Essential Website Sections",
        paragraphs: [
          "Complete website structure for educational institutions:",
        ],
        list: [
          "Homepage with hero slider and key highlights",
          "About Us: History, vision, mission, values",
          "Admissions: Process, eligibility, application forms",
          "Academics: Departments, programs, curriculum",
          "Faculty: Staff profiles with qualifications",
          "Infrastructure: Campus facilities, labs, libraries",
          "News & Events: Latest updates and announcements",
          "Gallery: Photo and video galleries",
          "Achievements: Awards, rankings, recognition",
          "Placements: Company partners, placement records",
          "Alumni: Alumni network and success stories",
          "Contact: Multiple contact forms and location maps",
        ],
      },
      {
        title: "Advanced Features",
        paragraphs: ["Powerful features tailored for institutions:"],
        list: [
          "Online admission portal with application tracking",
          "Student login portal for results and notices",
          "Faculty portal for attendance and grade entry",
          "Event management and calendar",
          "Notice board and announcements",
          "Downloadable forms and documents",
          "Fee payment gateway integration",
          "Library catalog and book search",
          "Scholarship information and applications",
          "Hostel management system",
          "Transportation and bus tracking",
          "Parent portal for student progress",
        ],
      },
      {
        title: "Content Management",
        paragraphs: ["Easy-to-use admin panel for content updates:"],
        list: [
          "Intuitive dashboard for non-technical staff",
          "Add/edit pages, news, and events",
          "Image and document uploads",
          "Gallery management",
          "Faculty profile management",
          "Student result publication",
          "Notice and circular posting",
          "Multi-user role-based access",
          "Content scheduling and drafts",
          "SEO-friendly content editor",
        ],
      },
      {
        title: "Student & Parent Portal",
        paragraphs: ["Dedicated portals for enhanced engagement:"],
        list: [
          "Student dashboard with personal information",
          "Exam results and report cards",
          "Attendance records",
          "Assignment and homework tracking",
          "Fee payment history",
          "Timetable and class schedule",
          "Library book issue status",
          "Leave application system",
          "Parent communication portal",
          "Progress reports and analytics",
        ],
      },
      {
        title: "Placement & Career Portal",
        paragraphs: ["Showcase placement success and facilitate recruitment:"],
        list: [
          "Placement statistics and graphs",
          "Company partners and recruiters",
          "Student placement records",
          "Top recruiters showcase",
          "Job posting for campus recruitment",
          "Resume building tools for students",
          "Company registration portal",
          "Interview scheduling system",
          "Placement drive calendar",
        ],
      },
      {
        title: "Design & User Experience",
        paragraphs: [
          "Professional design that reflects your institution's prestige:",
        ],
        list: [
          "Modern, clean design with institutional branding",
          "Mobile-first responsive layout",
          "Fast loading times for better user experience",
          "Accessibility compliance (WCAG standards)",
          "Multi-language support (English, Hindi, regional)",
          "Easy navigation with mega menus",
          "Search functionality across the website",
          "Interactive campus virtual tour",
        ],
      },
      {
        title: "Security & Compliance",
        paragraphs: ["Enterprise-grade security for institutional data:"],
        list: [
          "SSL encryption for all pages",
          "Secure student and faculty portals",
          "Data privacy compliance (FERPA, GDPR)",
          "Role-based access control",
          "Regular security updates",
          "Backup and disaster recovery",
          "DDoS protection",
          "Secure payment processing",
        ],
      },
    ],
    whyChooseUs: [
      "100+ educational institution websites delivered",
      "Experience with schools, colleges, and universities",
      "Complete solutions including student/faculty portals",
      "Easy-to-use CMS for non-technical staff",
      "Mobile-responsive design for all devices",
      "SEO optimization for better visibility",
      "Ongoing maintenance and support",
      "Affordable pricing with payment plans",
    ],
  };

  return (
    <ServiceDetailLayout
      title="College & School Websites"
      subtitle="Modern websites built for institutions."
      icon={School}
      content={content}
    />
  );
};

export default CollegeWebsites;
