import LeadEvent from "../../components/LeadEvent";

export const metadata = {
  title: "Thank You | Noble Medic Wheels",
};

export default function ThankYouPage() {
  return (
    <section className="page text-center">
      <LeadEvent />
      <h1>Thank You</h1>
      <p>
        Your request has been received. Our team will contact you shortly.
      </p>
    </section>
  );
}
