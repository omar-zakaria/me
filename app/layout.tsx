'use client';
import React from 'react';
import './assets/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <head />
      <body className='dark:bg-gray-800 dark:text-gray-200'>
        <React.StrictMode>
          {children}
        </React.StrictMode>
      </body>
    </html>
  );
}
