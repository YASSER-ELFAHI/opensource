import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Open Source Days V14.0",
  description: "Open Source & Cloud in The Age of AI - Building tomorrow's ecosystem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden`}>
        {children}
      </body>
      
    </html>
  );
}
