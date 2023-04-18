import React from 'react';
import {FlatList} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Container from '../../../components/Container';
import AppText from '../../../components/AppText';
import {Colors} from '../../../utils/Colors';

const Menus = () => {
  const menus = [
    {
      id: 1,
      menu: 'Edit Profile',
      icon: 'account',
    },
    {
      id: 2,
      menu: 'Payment Methods',
      icon: 'credit-card',
    },
    {
      id: 3,
      menu: 'Settings',
      icon: 'cog',
    },
    {
      id: 4,
      menu: 'Frequently Asked Questions',
      icon: 'help-circle',
    },
    {
      id: 5,
      menu: 'Change Phone Number',
      icon: 'cellphone-cog',
    },
    {
      id: 6,
      menu: 'Logout',
      icon: 'logout',
    },
  ];

  /**
   * ---------------------------------------------------- *
   * @function onPress
   * @summary on press menu item
   * ---------------------------------------------------- *
   */
  const onPress = () => {};

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={menus}
        renderItem={({item}) => (
          <Container
            row
            horizontalCenter
            activeOpacity={0.2}
            paddingVertical={15}
            onPress={onPress}>
            <MaterialIcon
              name={item.icon}
              size={28}
              color={item.menu === 'Logout' ? Colors.RED : Colors.GREY_DARK}
              style={{marginRight: 20}}
            />
            <AppText color={item.menu === 'Logout' ? Colors.RED : Colors.BLACK}>
              {item.menu}
            </AppText>
          </Container>
        )}
      />
    </Container>
  );
};

export default Menus;
