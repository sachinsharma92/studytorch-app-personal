export const NORMAL_ICON_SIZE = 24;
import {StyleSheet} from 'react-native';

export const HEADER_HEIGHT = 80;
export const TAB_HEIGHT = 80;
export const AVATAR_SIZE = 40;
export const MARGIN_HORIZONTAL = 30;
export const BORDER_RADIUS = 6;
export const BORDER_WIDTH = 2;

export const COLOR_PRIMARY = 'rgb(97, 46, 255)';
export const COLOR_ACCENT = 'rgb(239, 235, 255)';

export const COLOR_BACKGROUND = 'rgb(255, 255, 255)';
export const COLOR_SURFACE = '#313035';

export const COLOR_TEXT = 'rgb(41, 50, 89)';
export const COLOR_SUBTEXT = 'rgb(152, 155, 179)';
export const COLOR_TEXT_DISABLED = '#9a999f';
export const COLOR_TEXT_PLACEHOLDER = '#99989f';


export const COLOR_ERROR = 'rgb(255, 102, 102)';
export const COLOR_BORDER = 'rgb(231, 234, 241)';
export const COLOR_ICON = 'rgb(153, 152, 159)';
export const COLOR_SECONDARY_ICON = 'rgb(230, 234, 242)';

export function getTextStyleRegular(fonts: any, color?: any): any {
  const fontStyle = {
    fontFamily: fonts.regular.fontFamily,
    fontWeight: fonts.regular.fontWeight,
  };
  return color
    ? {
        color: color,
        ...fontStyle,
      }
    : fontStyle;
}

export const GLOBAL = StyleSheet.create({
  iconActions: {
    backgroundColor: COLOR_BACKGROUND,
    color: COLOR_SURFACE,
  },
});

export * as StyleConstants from './style-constants';
