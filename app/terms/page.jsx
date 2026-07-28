export const metadata = {
  title: "Terms of Service | Noble Medic Wheels",
  description:
    "Terms of use for the Noble Medic Wheels website and ride request process.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="page-wrapper">
      <section className="page-hero">
        <div className="container narrow">
          <h1>Terms of Service</h1>
          <p>Last updated: July 27, 2026</p>
        </div>
      </section>

      <section className="container narrow">
        <div className="content-block">
          <h2>Not an Emergency Service</h2>
          <p>
            Noble Medic Wheels provides non-emergency cabulance and medical
            transportation only. We are not a 911 emergency response service
            and cannot be relied on for medical emergencies. If you are
            experiencing a medical emergency, call 911 immediately.
          </p>
        </div>

        <div className="content-block">
          <h2>Requesting a Ride</h2>
          <p>
            Submitting a ride request through this website or by phone does
            not guarantee availability. We will contact you to confirm your
            ride, and reserve the right to decline or reschedule a request
            based on capacity, service area, or vehicle requirements.
          </p>
        </div>

        <div className="content-block">
          <h2>Accuracy of Information</h2>
          <p>
            You are responsible for providing accurate pickup, destination,
            appointment, and mobility information when requesting a ride.
            Delays or service issues caused by inaccurate or incomplete
            information are not our responsibility.
          </p>
        </div>

        <div className="content-block">
          <h2>Website Use</h2>
          <p>
            This website and its content are provided for informational
            purposes to help you learn about and request our services. You
            agree not to misuse this website, including submitting false
            information through our forms or attempting to interfere with
            its normal operation.
          </p>
        </div>

        <div className="content-block">
          <h2>Reviews</h2>
          <p>
            Reviews submitted through this website should reflect your own,
            honest experience. We reserve the right to decline to publish
            any review at our discretion.
          </p>
        </div>

        <div className="content-block">
          <h2>Limitation of Liability</h2>
          <p>
            This website is provided "as is" without warranties of any kind.
            To the fullest extent permitted by law, Noble Medic Wheels is not
            liable for any indirect, incidental, or consequential damages
            arising from your use of this website.
          </p>
        </div>

        <div className="content-block">
          <h2>Changes to These Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of
            this website after changes are posted constitutes acceptance of
            the updated terms.
          </p>
        </div>

        <div className="contact-card">
          <h3>Questions About These Terms?</h3>
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
