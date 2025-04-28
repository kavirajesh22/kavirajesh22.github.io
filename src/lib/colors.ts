import defaultTheme from 'windicss/defaultTheme';

export const colors: Record<string, Record<number, string>> = {
  ...defaultTheme.colors,
  gray: {
    50: '#f9fafb',
    100: '#f0f1f0',
    200: '#d9dad9',
    300: '#bfbfbe',
    400: '#a5a5a4',
    500: '#8b8b8a',
    600: '#727271',
    700: '#595958',
    800: '#40403f',
    900: '#282827',
  },
  primary: {
    50: '#edf4ee',    // very light sage green
    100: '#d7e8dc',
    200: '#c1dccb',
    300: '#abcfba',
    400: '#96c3a9',
    500: '#80b798',    // medium sage
    600: '#6aa387',
    700: '#548f76',
    800: '#3f7b65',
    900: '#2a6754',    // deep sage
  },
  pink: {
    50: '#fff0f5',     // very light soft pink
    100: '#ffe0eb',
    200: '#ffc1d7',
    300: '#ffa3c3',
    400: '#ff85af',
    500: '#ff669b',    // medium pink
    600: '#e0558a',
    700: '#c04479',
    800: '#a03368',
    900: '#802257',    // deeper pink
  }
};
