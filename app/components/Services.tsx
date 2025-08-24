import ServiceCard from "@/app/components/ServiceCard"

const Services = ({ active }: { active: boolean }) => {
  return (
    <div className="info-grid max-w-72 @xl:max-w-2xl @3xl:max-w-5xl @xl:gap-8 @5xl:gap-12" hidden={!active}>
      <ServiceCard
        title="Website Rebuild"
        icon={{
          src: "/images/icons/setting.svg",
        }}
        info="I transform outdated websites into modern, high-performance applications with a focus on speed, security, and user experience."
        features={[
          "Migrate to a Modern Tech Stack",
          "Enhanced Security Measures",
          "Improving the Back-End System",
          "Modern UI/UX Redesign",
          "Support & Maintenance (6 Months)"
        ]}
      />
      <ServiceCard
        title={<>Full-Stack<br />Web Development</>}
        icon={{
          src: "/images/icons/dashboard.svg",
          bg: "bg-[#E9DB40]"
        }}
        bg="bg-gradient-to-bl from-[#F9DE27]/20 to-[#F2E8C3]/20"
        info="From initial concept to final deployment, I handle every aspect of your website's creation."
        features={[
          "Robust Backend & API",
          "Responsive Frontend",
          "Database Architecture",
          "Support & Maintenance (6 Months)"
        ]}
      />
      <ServiceCard
        title="Bug fixing & optimization"
        icon={{
          src: "/images/icons/bug.svg",
        }}
        info="Revitalize your existing application by eliminating bugs and boosting performance."
      />
      <ServiceCard
        title={<>Open-Source<br />Contributions</>}
        icon={{
          src: "/images/icons/group.svg",
          bg: "bg-[#BDDD74]"
        }}
        bg="bg-[#47A70B]/20"
        info="I serve as a dedicated contributor to your open-source project, providing valuable bug fixes and implementing new features to help it thrive. This service is typically offered at no cost."
      />
    </div>
  )
}

export default Services
