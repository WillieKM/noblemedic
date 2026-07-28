import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Analytics from "../components/Analytics";
import { medicalBusinessSchema } from "../lib/schema";

export const metadata = {
  metadataBase: new URL("https://www.noblemedicwheels.com"),
  title: {
    template: "%s | Noble Medic Wheels",
    default:
      "Noble Medic Wheels | Non-Emergency Cabulance & NEMT in WA",
  },
  description:
    "Safe, ADA-compliant non-emergency cabulance and medical transportation across King, Pierce & Snohomish County, WA. Wheelchair rides, dialysis transport, and hospital discharges.",
  alternates: { canonical: "/" },
  keywords: [
    "NEMT",
    "non-emergency medical transportation",
    "non-emergency cabulance",
    "cabulance service",
    "cabulance transportation",
    "wheelchair transportation",
    "wheelchair van service",
    "dialysis transportation",
    "medical transport service",
    "King County",
    "Pierce County",
    "Seattle",
    "Tacoma",
    "medical transport Washington",
  ],
  openGraph: {
    type: "website",
    siteName: "Noble Medic Wheels",
    title: "Noble Medic Wheels — Non-Emergency Cabulance & Medical Transportation",
    description:
      "Safe, ADA-compliant non-emergency cabulance and medical transport serving King & Pierce County. Wheelchair rides, dialysis transport, and hospital discharges.",
    images: [{ url: "/logo.jpg", width: 400, height: 400 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noble Medic Wheels — Non-Emergency Cabulance & NEMT in King & Pierce County",
    description:
      "Safe, ADA-compliant non-emergency cabulance and medical transportation in King & Pierce County, Washington.",
  },
};

export default function RootLayout({ children }) {
  const schema = medicalBusinessSchema();
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
