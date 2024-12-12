import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";
import "@/styles/locomotive-scroll.css";

import { DM_Sans } from "next/font/google";

import CustomCursor from '../components/CustomCursor'; // Path to your CustomCursor component
import '../styles/globals.css'; // Ensure your styles are imported


const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div lang={"en"} className={dmSans.className}>
      <CustomCursor />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
