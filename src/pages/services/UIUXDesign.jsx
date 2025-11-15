import { Palette } from "lucide-react";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

const UIUXDesign = () => {
  const content = {
    sections: [
      {
        title: "Stunning, Thoughtful Designs That Drive Results",
        paragraphs: [
          "A3Neptune creates beautiful, user-centered designs that combine aesthetics with functionality. Our UI/UX design services help you build products that users love, reducing churn and increasing engagement.",
          "We follow a research-driven approach, creating designs that are not just visually stunning but strategically crafted to achieve your business goals.",
        ],
      },
      {
        title: "Our Design Process",
        paragraphs: ["Comprehensive design workflow for exceptional results:"],
        list: [
          "1. Discovery & Research: Understanding users, competitors, and goals",
          "2. User Research: Interviews, surveys, persona creation",
          "3. Information Architecture: Site maps and user flows",
          "4. Wireframing: Low-fidelity layouts and structure",
          "5. Visual Design: High-fidelity mockups and branding",
          "6. Prototyping: Interactive, clickable prototypes",
          "7. Usability Testing: User feedback and iteration",
          "8. Design Handoff: Developer-ready assets and specs",
          "9. Design System: Scalable component library",
          "10. Post-Launch: Analytics and continuous improvement",
        ],
      },
      {
        title: "UI Design Services",
        paragraphs: ["Pixel-perfect visual design that captivates:"],
        list: [
          "Modern, clean interface design",
          "Custom iconography and illustrations",
          "Typography selection and hierarchy",
          "Color palette creation and theory",
          "Visual brand identity design",
          "Responsive design for all devices",
          "Dark mode and theme variations",
          "Motion design and micro-interactions",
          "Component library creation",
          "Style guide and design documentation",
        ],
      },
      {
        title: "UX Design Services",
        paragraphs: ["User-centered design for optimal experiences:"],
        list: [
          "User research and persona development",
          "Customer journey mapping",
          "User flow and task flow diagrams",
          "Information architecture planning",
          "Wireframing and prototyping",
          "Usability testing and heuristic evaluation",
          "Conversion rate optimization",
          "Navigation and menu structure",
          "Form design and optimization",
          "Error state and edge case design",
          "Onboarding flow design",
          "Accessibility (WCAG) compliance",
        ],
      },
      {
        title: "Design Systems & Component Libraries",
        paragraphs: ["Scalable design systems for consistency:"],
        list: [
          "Component library with variants",
          "Design tokens (colors, spacing, typography)",
          "Reusable UI patterns and templates",
          "Atomic design methodology",
          "Documentation for designers and developers",
          "Versioning and governance",
          "Design-to-code workflows",
          "Storybook or similar documentation",
          "Accessibility guidelines",
          "Brand guidelines integration",
        ],
      },
      {
        title: "Tools & Technologies",
        paragraphs: ["Industry-leading design tools:"],
        list: [
          "Figma: Collaborative interface design (primary tool)",
          "Adobe XD: UI/UX design and prototyping",
          "Sketch: Mac-based design tool",
          "Adobe Illustrator: Vector graphics and icons",
          "Adobe Photoshop: Image editing and mockups",
          "Framer: Advanced prototyping and interactions",
          "Principle: Animation and micro-interactions",
          "InVision: Prototyping and collaboration",
          "Miro/FigJam: Whiteboarding and brainstorming",
          "Zeplin/Anima: Design handoff to developers",
        ],
      },
      {
        title: "Animations & Interactions",
        paragraphs: ["Delightful interactions that engage users:"],
        list: [
          "Micro-interactions for buttons and form elements",
          "Page transition animations",
          "Loading states and skeleton screens",
          "Hover and focus state animations",
          "Scroll-triggered animations",
          "Parallax effects",
          "Lottie animations integration",
          "SVG animations",
          "Gesture-based interactions",
          "Motion design guidelines",
        ],
      },
      {
        title: "Accessibility & Inclusive Design",
        paragraphs: ["Designing for everyone:"],
        list: [
          "WCAG 2.1 AA/AAA compliance",
          "Color contrast ratio compliance (4.5:1 minimum)",
          "Keyboard navigation support",
          "Screen reader optimization",
          "Alt text for images",
          "Focus indicators for interactive elements",
          "Accessible forms with labels",
          "Skip navigation links",
          "Responsive text sizing",
          "Testing with accessibility tools",
        ],
      },
      {
        title: "Color Psychology & Branding",
        paragraphs: ["Strategic use of color and brand identity:"],
        list: [
          "Brand color palette creation",
          "Color psychology for emotions",
          "Accessible color combinations",
          "Dark mode color schemes",
          "Color system documentation",
          "Logo design and variations",
          "Brand identity guidelines",
          "Typography pairing",
          "Visual hierarchy with color",
          "Cultural color considerations",
        ],
      },
    ],
    whyChooseUs: [
      "100+ UI/UX projects with proven user satisfaction",
      "Average 40% increase in user engagement",
      "Award-winning designs featured on Awwwards, Behance",
      "User research-driven, not assumption-based",
      "Fast turnaround with iterative design sprints",
      "Accessibility compliance as standard",
      "Complete design systems for scalability",
      "Figma files and source assets included",
    ],
  };

  return (
    <ServiceDetailLayout
      title="UI/UX Design"
      subtitle="Stunning, thoughtful designs that drive results."
      icon={Palette}
      content={content}
    />
  );
};

export default UIUXDesign;
