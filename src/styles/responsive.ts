import { css } from 'styled-components';

const breakpoints: Record<string, any> = {
  smallScreen: 1280,
  largeTablet: 1024,
  tablet: 768,
  mobile: 640,
  smallMobile: 375,
};

export const respondTo = Object.keys(breakpoints).reduce((accumulator: Record<string, object>, label: string) => {
  accumulator[label] = (literals: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: ${breakpoints[label] + 'px'}) {
      ${css(literals, ...args)};
    }
  `;

  return accumulator;
}, {});
