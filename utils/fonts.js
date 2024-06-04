import {
  Poppins as Sans,
  Arvo as Serif,
  Fira_Code as Mono
} from "next/font/google";

const sans = Sans({
  subsets: ["latin"],
  weight: [
    "100", "200", "300", "400",
    "500", "600", "700",
    "800", "900"
  ],
  variable: "--font-sans",
});

const serif = Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

const mono = Mono({
  subsets: ["latin"],
  weight: [
    "300", "400", "500",
    "600", "700"
  ],
  variable: "--font-mono",
});

export { sans, serif, mono };
