import Modal from "./components/Modal";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CFK-NYA Resort",
  description:
    "CFK-NYA Resort a resort in Nyanga Booking in Nyanga Accomodation in Nyanga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Modal />
      </body>
    </html>
  );
}
