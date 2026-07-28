export const metadata = {
  title: "Privacy Policy | Noble Medic Wheels",
  description:
    "How Noble Medic Wheels collects, uses, and protects information submitted through our website and ride request forms.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="page-wrapper">
      <section className="page-hero">
        <div className="container narrow">
          <h1>Privacy Policy</h1>
          <p>Last updated: July 27, 2026</p>
        </div>
      </section>

      <section className="container narrow">
        <div className="content-block">
          <h2>Information We Collect</h2>
          <p>
            When you submit a ride request, contact form, or review on this
            website, we collect the information you provide directly —
            typically your name, phone number, email address, pickup and
            destination addresses, ride type, appointment date/time, and any
            notes you include. We do not collect payment or insurance
            information through this website.
          </p>
        </div>

        <div className="content-block">
          <h2>How We Use Your Information</h2>
          <p>
            We use the information you submit solely to schedule and provide
            non-emergency cabulance and medical transportation services,
            respond to your inquiry, and coordinate your ride. We do not sell,
            rent, or share your personal information with third parties for
            marketing purposes.
          </p>
        </div>

        <div className="content-block">
          <h2>Analytics &amp; Cookies</h2>
          <p>
            We may use Google Analytics to understand how visitors use this
            website (e.g. which pages are viewed). Google Analytics uses
            cookies and collects anonymized usage data; it does not receive
            the information you submit in our forms. You can opt out of
            Google Analytics tracking using your browser settings or a
            browser extension such as Google's Analytics Opt-out Add-on.
          </p>
        </div>

        <div className="content-block">
          <h2>How We Store &amp; Protect Your Information</h2>
          <p>
            Ride requests and reviews submitted through this site are sent
            directly to our office by email. We take reasonable measures to
            protect the information you share with us, but no method of
            transmission over the internet is completely secure.
          </p>
        </div>

        <div className="content-block">
          <h2>Your Rights</h2>
          <p>
            You may contact us at any time to ask what information we have
            about you, to request corrections, or to request deletion of
            information you've submitted through this website.
          </p>
        </div>

        <div className="content-block">
          <h2>Children's Privacy</h2>
          <p>
            This website is intended for adults arranging transportation for
            themselves or a family member. We do not knowingly collect
            information from children.
          </p>
        </div>

        <div className="content-block">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Changes will be
            posted on this page with an updated effective date.
          </p>
        </div>

        <div className="contact-card">
          <h3>Questions About This Policy?</h3>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:12533749087">253-374-9087</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@noblemedicwheels.com">
              info@noblemedicwheels.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
