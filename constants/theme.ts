import {createTheme} from '@shopify/restyle';

const colors = {
  light: {
    primary: '#4A670B',
    onPrimary: '#FFFFFF',
    primaryContainer: '#CAEF86',
    onPrimaryContainer: '#131F00',
    secondary: '#596248',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#DDE6C6',
    onSecondaryContainer: '#171E0A',
    tertiary: '#396661',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#BCECE5',
    onTertiaryContainer: '#00201D',
    error: '#BA1A1A',
    errorContainer: '#FFDAD6',
    onError: '#FFFFFF',
    onErrorContainer: '#410002',
    background: '#FEFCF4',
    onBackground: '#1B1C17',
    surface: '#FEFCF4',
    onSurface: '#1B1C17',
    surfaceVariant: '#E2E4D4',
    onSurfaceVariant: '#45483D',
    outline: '#75786B',
    inverseOnSurface: '#F2F1E9',
    inverseSurface: '#30312C',
    inversePrimary: '#AFD36E',
    shadow: '#000000',
    surfaceTint: '#4A670B',
    outlineVariant: '#C5C8B9',
    scrim: '#000000',
  },
  dark: {
    primary: '#AFD36E',
    onPrimary: '#243600',
    primaryContainer: '#364E00',
    onPrimaryContainer: '#CAEF86',
    secondary: '#C1CAAB',
    onSecondary: '#2B331D',
    secondaryContainer: '#424A32',
    onSecondaryContainer: '#DDE6C6',
    tertiary: '#A0D0C9',
    onTertiary: '#013733',
    tertiaryContainer: '#1F4E49',
    onTertiaryContainer: '#BCECE5',
    error: '#FFB4AB',
    errorContainer: '#93000A',
    onError: '#690005',
    onErrorContainer: '#FFDAD6',
    background: '#1B1C17',
    onBackground: '#E4E3DB',
    surface: '#1B1C17',
    onSurface: '#E4E3DB',
    surfaceVariant: '#45483D',
    onSurfaceVariant: '#C5C8B9',
    outline: '#8F9284',
    inverseOnSurface: '#1B1C17',
    inverseSurface: '#E4E3DB',
    inversePrimary: '#4A670B',
    shadow: '#000000',
    surfaceTint: '#AFD36E',
    outlineVariant: '#45483D',
    scrim: '#000000',
  },
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

const typography = {
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'System',
    fontWeight: '400',
  },
  heading: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: 'System',
    fontWeight: '600',
  },
};

const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
};

const theme = createTheme({
  colors: colors.light,
  spacing,
  typography,
  borderRadius,
});

export const darkTheme: Theme = {
  ...theme,
  colors: colors.dark,
};

export type Theme = typeof theme;

export default theme;
