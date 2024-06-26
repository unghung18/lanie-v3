import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import ReduxProvider from "@/redux/provider";
import Modal from "@/components/Modal";

import { ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <ReduxProvider>
        <body className={inter.className}>
          {children}
          <div></div>
          <Modal />
          <ToastContainer
            position="top-right"
            autoClose={1500}
            limit={5}
            transition={Slide}
          />
        </body>
      </ReduxProvider>
    </html>
  );
}
