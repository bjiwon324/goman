import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Black_Han_Sans } from "next/font/google";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const blackHanSans = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-black-han-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${blackHanSans.variable} ${pretendard.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
