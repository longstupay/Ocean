import borders from './borders';
import colors from './colors';
import radius from './radius';
import shadows from './shadows';
import sizes from './sizes';
import { spacing } from './space';
import transition from './transition';
import typography from './typography';
import zIndex from './z-index';

export const foundations = {
  zIndex,
  radius,
  colors,
  ...typography,
  sizes,
  shadows,
  space: spacing,
  borders,
  transition,
};
