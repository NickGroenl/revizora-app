"use client";

import "../styles/index.css";

import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>
      

      <body className={`bg-[#BDC3C7]`}>
        <Providers>
          {children}
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
