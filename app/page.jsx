import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import FleetSection from "../components/FleetSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";

export const metadata = {
  title:
    "Noble Medic Wheels — Non-Emergency Cabulance & NEMT in Seattle, Tacoma & King/Pierce County, WA",
  description:
    "Noble Medic Wheels provides safe, reliable non-emergency cabulance and medical transportation across King & Pierce County. ADA-compliant wheelchair rides, dialysis transport, hospital discharges, and more.",
  openGraph: {
    title: "Noble Medic Wheels — Non-Emergency Cabulance & Medical Transportation",
    description:
      "ADA-compliant non-emergency cabulance and NEMT serving Seattle, Tacoma, Renton, Kent, and all of King & Pierce County.",
    url: "https://www.noblemedicwheels.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-light">
        <div className="container">
          <ServicesSection />
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <FleetSection />
        </div>
      </section>

      <section className="section-white">
        <div className="container">
          <TestimonialsSection />
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <ContactSection />
        </div>
      </section>
    </>
  );
}
