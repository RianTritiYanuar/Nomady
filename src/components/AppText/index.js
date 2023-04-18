import {Text} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/Colors';

const AppText = ({
  bold,
  center,
  children,
  color,
  ellipsizeMode,
  large,
  left,
  medium,
  numberOfLines,
  right,
  small,
  style,
  xlarge,
  xsmall,
  xxlarge,
  xxxlarge,
}) => {
  /**
   * ---------------------------------------------------- *
   * @styles {AppText}
   * @summary return font size style for component AppText
   * ---------------------------------------------------- *
   */
  let fontSize = 16;
  if (xxxlarge) {
    fontSize = 28;
  } else if (xxlarge) {
    fontSize = 24;
  } else if (xlarge) {
    fontSize = 20;
  } else if (large) {
    fontSize = 18;
  } else if (medium) {
    fontSize = 16;
  } else if (small) {
    fontSize = 14;
  } else if (xsmall) {
    fontSize = 12;
  }

  /**
   * ---------------------------------------------------- *
   * @styles {AppText}
   * @summary return text align style for component AppText
   * ---------------------------------------------------- *
   */
  let textAlign = null;
  if (right) {
    textAlign = 'right';
  } else if (center) {
    textAlign = 'center';
  } else if (left) {
    textAlign = 'left';
  }

  /**
   * ---------------------------------------------------- *
   * @styles {AppText}
   * @summary return base style for component AppText
   * ---------------------------------------------------- *
   */
  let baseStyle = {
    color: color ?? Colors.BLACK,
    fontFamily: bold ? 'Rubik-Bold' : 'Rubik-Regular',
    fontSize: fontSize,
    textAlign: textAlign,
  };

  return (
    <Text
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}
      style={[baseStyle, style]}>
      {children}
    </Text>
  );
};

export default AppText;
