import type { Metadata } from "next";
import { DM_Sans} from "next/font/google";
import "./globals.css";

const dmSans=DM_Sans({
  subsets:["latin"],
});

export const metadata: Metadata = {
  title: "SalampuriaVendors",
  description: "Multi E-commerce Vendors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
