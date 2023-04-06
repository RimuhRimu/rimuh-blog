import "@/globals.css";
import { DM_Sans } from "next/font/google";

const DMS = DM_Sans({ subsets: ["latin"], weight: "400" });
export default function App({ Component, pageProps }) {
  return (
    <div className={DMS.className}>
      <Component {...pageProps} />
    </div>
  );
}
