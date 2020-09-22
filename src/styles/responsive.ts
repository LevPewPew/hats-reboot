import { css } from 'styled-components';

const breakpoints: Record<string, number> = {
  smallScreen: 1280,
  largeTablet: 1024,
  tablet: 768,
  mobile: 640,
  smallMobile: 375,
};

// disables below as my understanding is not enough to actually replace them
/* eslint-disable-next-line @typescript-eslint/ban-types */
export const respondTo = Object.keys(breakpoints).reduce((accumulator: Record<string, object>, label: string) => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  accumulator[label] = (literals: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: ${breakpoints[label] + 'px'}) {
      ${css(literals, ...args)};
    }
  `;

  return accumulator;
}, {});
