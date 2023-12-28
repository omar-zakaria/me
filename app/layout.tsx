'use client';
import React, { useContext } from 'react';
import './assets/globals.css';
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}} >
      <html lang="en" className={isDarkMode ? 'dark' : ''}>
        <head />
        <body className='bg-gray-200 dark:bg-gray-800 dark:text-gray-200'>
          <React.StrictMode>
            {children}
          </React.StrictMode>
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
