import { useState, useCallback } from 'react';

interface ThemeState {
  headerHeight: number;
  background: string;
}

const DEFAULT_THEME: ThemeState = {
  headerHeight: 100, 
  background: 'var(--color-primary)'
};

export const useThemeController = (): [
    theme: ThemeState, 
    updateTheme: (newTheme: Partial<ThemeState>) => void
] => {  
  const [theme, setTheme] = useState<ThemeState>(DEFAULT_THEME);

  const updateTheme = useCallback((newTheme: Partial<ThemeState>) => {
    // change theme to whatever extent is necessary
    // everything else is default
    setTheme((theme: ThemeState) => {
      console.log(theme);
      return { ...theme, ...newTheme };
    });
  }, []);

  return [
    theme,
    updateTheme,
  ];
};
