import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar"
import "./globals.scss";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Rostrum",
  description: "Rostrum",
  icons: {
    icon: "/assets/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
