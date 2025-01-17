import { defineStyle } from 'Ocean/Style-System/defineStyle';

// ============= status ==================
export const statusStyle = (colorSchema: string) => {
  return defineStyle({
    bg: `${colorSchema}.100`,
  });
};
