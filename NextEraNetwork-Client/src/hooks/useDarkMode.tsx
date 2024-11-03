// hooks/useDarkMode.ts
'use client';
import { useEffect, useState } from 'react';

const useDarkMode = (): [boolean, () => void] => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    if (isDarkMode) {
      bodyClass.add(className);
    } else {
      bodyClass.remove(className);
    }

    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
