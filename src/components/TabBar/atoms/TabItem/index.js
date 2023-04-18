import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../../utils/Colors';

const TabItem = ({index, isFocused, label, options, onPress, onLongPress}) => {
  const Icon = () => {
    const iconColor = isFocused ? Colors.RED : Colors.GREY_LIGHT;
    if (label === 'Home') {
      return <MaterialIcon name="home" size={30} color={iconColor} />;
    } else if (label === 'Discover') {
      return <MaterialIcon name="explore" size={30} color={iconColor} />;
    } else if (label === 'Tickets') {
      return <MaterialIcon name="article" size={30} color={iconColor} />;
    } else if (label === 'Profile') {
      return <MaterialIcon name="account-box" size={30} color={iconColor} />;
    }
    return <MaterialIcon name="circle" size={30} color={iconColor} />;
  };

  return (
    <TouchableOpacity
      key={index}
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
});
