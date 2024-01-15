import { EmotionTheme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends EmotionTheme {
    // theme 컨벤션 : 페이지 별 변수 지정 사용
    login: {};
    dashboard: {};
    report: {};
    coupons: {};
    register: {};
    settlements: {};
    colors: {
      background: string;
      hover: string;

      ink100: string;
      ink200: string;
      ink300: string;
      ink400: string;
      ink500: string;
      ink600: string;

      sky100: string;
      sky200: string;
      sky300: string;
      sky400: string;
      sky500: string;

      primary: string;
      brand: string;

      pink100: string;
      pink200: string;
      pink300: string;
      pink400: string;
      pink500: string;

      blue100: string;
      blue200: string;
      blue300: string;
      blue400: string;
      blue500: string;

      white: string;
      black: string;
      error: string;
      success: string;
    };
    fontSize: {
      title1: string;
      title2: string;
      title3: string;
      large: string;
      regular: string;
      small: string;
      tiny: string;
    };
    fontWeight: {
      title: string;
      large: string;
      medium: string;
      small: string;
    };
    lineHeight: {
      title1: string;
      title2: string;
      title3: string;
      largeNone: string;
      largeTight: string;
      largeNormal: string;
      regularNone: string;
      regularTight: string;
      regularNormal: string;
      smallNone: string;
      smallTight: string;
      smallNormal: string;
      tinyNone: string;
      tinyTight: string;
      tinyNormal: string;
    };
    shadow: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
