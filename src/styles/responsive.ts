import { css } from 'styled-components';

// TODO find out how to change TS config to not allow so much inference
const breakpoints: object = {
  smallScreen: 1280,
  largeTablet: 1024,
  tablet: 768,
  mobile: 640,
  smallMobile: 375,
};

export const respondTo: {} = Object.keys(breakpoints).reduce(
  (accumulator: {}, label: string) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[label] + 'px'}) {
        ${css(...args)};
      }
    `;

    return accumulator;
  },
  {},
);
