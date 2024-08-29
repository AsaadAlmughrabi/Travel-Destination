'use client';
import "./globals.css";



export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className="dark:bg-gray-900">
        
            <main className="dark:bg-gray-900">{children}</main>
           
      </body>
    </html>
  );
}