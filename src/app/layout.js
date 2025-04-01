"use client";

import "@/app/_styles/globals.css";

export default function RootLayout({children}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
