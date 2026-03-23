export const metadata = {
  title: "Free Regulatory Health Check — PigmentRegulatory",
  description:
    "Get a free 30-minute compliance audit for your pigment products. Expert assessment of your SDS, REACH, FDA, and FSSAI compliance by Hemant M. Thombare — 35 years of industry experience.",
  alternates: {
    canonical: "https://pigmentregulatory.com/free-audit",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FreeAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
