import React from 'react';
import {Image} from 'react-native';
import Container from '../../../components/Container';
import AppText from '../../../components/AppText';
import {Colors} from '../../../utils/Colors';

const ProfileDetail = () => {
  return (
    <Container row horizontalCenter paddingTop={20} paddingBottom={40}>
      <Image
        source={require('../../../assets/images/profile-pic.jpg')}
        style={{
          borderRadius: 50,
          height: 80,
          width: 80,
        }}
      />
      <Container flex marginLeft={20}>
        <AppText large bold style={{marginBottom: 5}}>
          John Connor
        </AppText>
        <AppText color={Colors.GREY_DARK} style={{marginBottom: 5}}>
          schwein@email.com
        </AppText>
        <AppText color={Colors.ORANGE} style={{marginBottom: 5}}>
          14 Loyalty Points
        </AppText>
      </Container>
    </Container>
  );
};

export default ProfileDetail;
