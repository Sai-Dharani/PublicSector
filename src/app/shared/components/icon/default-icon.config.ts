import { DirectionMode } from './direction';
import { IconConfig } from './icon.model';

export const defaultIconConfig: IconConfig = {
  icon: {
    flipDirection: {
      CARET_RIGHT: DirectionMode.RTL,
      CARET_LEFT: DirectionMode.RTL,
    },
  },
};
