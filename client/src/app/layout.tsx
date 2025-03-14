import "./globals.css";
import { ReactNode } from 'react';

export const metadata = {
  title: 'Template',
  description: "Welcome to Beqa Tvildiani's personal Template",
};

interface AppProps {
  children: ReactNode;
}

export default function App({ children }: AppProps) {
  return (
    <html lang="en">
      <body>

      <main className="bg-gray-900 min-h-[85vh]">
        {children}
      </main>

      <footer className="bg-gray-800 p-4 absolute b-0 w-full">
        <div className="container mx-auto text-center">
          <p>&copy; chxikvia.tech | Design by <a href="https://github.com/BEQSONA-cmd" className="text-blue-400">BEQSONA-cmd</a></p>
        </div>
      </footer>

      </body>
    </html>
  );
}
