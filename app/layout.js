import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Topbar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
