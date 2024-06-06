import { Poppins, Arvo, Fira_Code } from "next/font/google";

const sans = Poppins({
  subsets: ["latin"],
  weight: [
    "100", "200", "300", "400", "500",
    "600", "700", "800", "900"
  ],
  variable: "--font-sans",
});

const serif = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

const mono = Fira_Code({
  subsets: ["latin"],
  weight: [
    "300", "400", "500", "600", "700"
  ],
  variable: "--font-mono",
});

export { sans, serif, mono };
