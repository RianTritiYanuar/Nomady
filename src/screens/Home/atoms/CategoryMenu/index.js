import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AppText from '../../../../components/AppText';
import Container from '../../../../components/Container';
import {Colors} from '../../../../utils/Colors';

const CategoryMenu = () => {
  /**
   * ---------------------------------------------------- *
   * @function onPress
   * @summary on press category item
   * ---------------------------------------------------- *
   */
  const onPress = () => {};

  /**
   * ---------------------------------------------------- *
   * @component CategoryItem
   * @param {Object} props
   * @summary return CategoryItem component
   * ---------------------------------------------------- *
   */
  const CategoryItem = ({backgroundColor, icon, iconColor, title}) => {
    return (
      <Container horizontalCenter marginBottom={15}>
        <Container
          verticalCenter
          horizontalCenter
          activeOpacity={0.5}
          backgroundColor={backgroundColor}
          borderRadius={50}
          marginBottom={10}
          height={70}
          width={70}
          onPress={onPress}>
          <MaterialIcon name={icon} size={32} color={iconColor} />
        </Container>
        <AppText bold small>
          {title}
        </AppText>
      </Container>
    );
  };

  return (
    <Container row spaceBetween>
      <CategoryItem
        title="Plane"
        icon="flight"
        iconColor={Colors.BLUE}
        backgroundColor={Colors.BLUE_LIGHT}
      />
      <CategoryItem
        title="Train"
        icon="train"
        iconColor={Colors.ORANGE}
        backgroundColor={Colors.ORANGE_LIGHT}
      />
      <CategoryItem
        title="Bus"
        icon="directions-bus"
        iconColor={Colors.GREEN}
        backgroundColor={Colors.GREEN_LIGHT}
      />
      <CategoryItem
        title="Hotel"
        icon="hotel"
        iconColor={Colors.PURPLE}
        backgroundColor={Colors.PURPLE_LIGHT}
      />
    </Container>
  );
};

export default CategoryMenu;
