import {
  Inter,
  Arvo,
  Poppins,
  Fira_Code,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
  variable: "--font-inter",
});

const arvo = Arvo({
  subsets: ["latin"],
  weight: [
    "400",
    "700"
  ],
  variable: "--font-arvo",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
  variable: "--font-poppins",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
  ],
  variable: "--font-fira-code",
});

export {
  inter,
  arvo,
  poppins,
  firaCode
};
