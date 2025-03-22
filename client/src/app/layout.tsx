import "./globals.css";
import { ReactNode } from 'react';
import { Toaster } from "react-hot-toast";

export default function App({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
      <main className="bg-gray-900 min-h-[85vh]">
        {children}
      </main>
      <Toaster />
      </body>
    </html>
  );
}
