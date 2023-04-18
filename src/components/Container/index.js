import {View, TouchableOpacity} from 'react-native';
import React from 'react';

const Container = ({
  activeOpacity = 0.2,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  children,
  flex,
  height,
  horizontalCenter,
  horizontalLeft,
  horizontalRight,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  onPress,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingHorizontal,
  paddingTop,
  paddingVertical,
  row,
  spaceBetween,
  style,
  verticalBottom,
  verticalCenter,
  verticaltop,
  width,
}) => {
  /**
   * ---------------------------------------------------- *
   * @styles {Container}
   * @summary return justify content style for component Container
   * ---------------------------------------------------- *
   */
  let justifyContent = null;
  if (spaceBetween) {
    justifyContent = 'space-between';
  } else if (verticalCenter) {
    justifyContent = 'center';
  } else if (verticalBottom) {
    justifyContent = 'flex-end';
  } else if (verticaltop) {
    justifyContent = 'flex-start';
  }

  /**
   * ---------------------------------------------------- *
   * @styles {Container}
   * @summary return align items style for component Container
   * ---------------------------------------------------- *
   */
  let alignItems = null;
  if (horizontalCenter) {
    alignItems = 'center';
  } else if (horizontalLeft) {
    alignItems = 'flex-start';
  } else if (horizontalRight) {
    alignItems = 'flex-end';
  }

  /**
   * ---------------------------------------------------- *
   * @styles {Container}
   * @summary return flex number for component Container
   * ---------------------------------------------------- *
   */
  let flexNumber = null;
  if (typeof flex === 'number') {
    flexNumber = flex;
  } else if (typeof flex === 'boolean') {
    flexNumber = 1;
  }

  /**
   * ---------------------------------------------------- *
   * @styles {Container}
   * @summary return base style for component Container
   * ---------------------------------------------------- *
   */
  let baseStyle = {
    alignItems: alignItems,
    borderColor: borderColor ?? null,
    borderRadius: borderRadius ?? null,
    borderWidth: borderWidth ?? null,
    backgroundColor: backgroundColor ?? null,
    flex: flexNumber,
    flexDirection: row ? 'row' : null,
    height: height ?? null,
    justifyContent: justifyContent,
    margin: margin ?? null,
    marginBottom: marginBottom ?? null,
    marginLeft: marginLeft ?? null,
    marginRight: marginRight ?? null,
    marginTop: marginTop ?? null,
    padding: padding ?? null,
    paddingBottom: paddingBottom ?? null,
    paddingHorizontal: paddingHorizontal ?? null,
    paddingLeft: paddingLeft ?? null,
    paddingRight: paddingRight ?? null,
    paddingTop: paddingTop ?? null,
    paddingVertical: paddingVertical ?? null,
    width: width ?? null,
  };

  if (onPress) {
    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={onPress}
        style={[baseStyle, style]}>
        {children}
      </TouchableOpacity>
    );
  }
  return <View style={[baseStyle, style]}>{children}</View>;
};

export default Container;
