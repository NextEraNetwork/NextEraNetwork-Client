import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "../../src/context/AuthProvider"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NextEraNetwork",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
            {children}
          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  );
}


// 'use client'
// import { Provider } from 'react-redux';
// import { store } from '@/reducer/store';
// import "./globals.css";
// import { AuthProvider } from '@/context/AuthProvider';

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <Provider store={store}>
//         <AuthProvider>
//           <body>{children}</body>
//         </AuthProvider>
//       </Provider>
//     </html>

//   );
// }