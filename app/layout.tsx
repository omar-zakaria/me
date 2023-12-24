'use client';
import React from 'react';
import './assets/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <React.StrictMode>
          {children}
        </React.StrictMode>
      </body>
    </html>
  );
}
