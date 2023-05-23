import Navbar from "@/components/Navbar";
import "./globals.css";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} font-[18px]`}>
        <div className="grid container mx-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
