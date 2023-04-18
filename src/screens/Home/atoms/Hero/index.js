import {ImageBackground, Dimensions} from 'react-native';
import React from 'react';
import AppText from '../../../../components/AppText';
import Container from '../../../../components/Container';
import {Colors} from '../../../../utils/Colors';

const Hero = () => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <Container marginTop={10}>
      <ImageBackground
        source={require('../../../../assets/images/camp.jpg')}
        style={{
          height: 520,
          width: windowWidth,
        }}>
        <Container
          flex
          verticalCenter
          width={'100%'}
          backgroundColor={'rgba(0, 0, 0, 0.5)'}
          paddingLeft={20}
          paddingRight={70}>
          <Container marginBottom={10}>
            <AppText xxlarge color={Colors.WHITE}>
              Your
            </AppText>
            <AppText xxlarge color={Colors.ORANGE}>
              #TravelExperience
            </AppText>
            <AppText xxlarge color={Colors.WHITE}>
              is{' '}
              <AppText bold xxlarge color={Colors.WHITE}>
                our priority
              </AppText>
            </AppText>
          </Container>
          <AppText small color={Colors.WHITE} style={{lineHeight: 20}}>
            Discover more destination and places, then get your backpack ready!
          </AppText>
        </Container>
      </ImageBackground>
    </Container>
  );
};

export default Hero;
