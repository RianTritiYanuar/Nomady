import {ImageBackground, FlatList, Dimensions} from 'react-native';
import React from 'react';
import AppText from '../../../../components/AppText';
import Container from '../../../../components/Container';
import Titling from '../../../../components/Titling';
import {Colors} from '../../../../utils/Colors';

const PromoSlider = () => {
  const windowWidth = Dimensions.get('window').width;
  const promos = [
    {
      id: 1,
      description: {
        regular: 'Discount up to ',
        bold: '15% For Any Airline!',
      },
      image: require('../../../../assets/images/promo-1.jpg'),
    },
    {
      id: 2,
      description: {
        regular: 'Travel with no worry ',
        bold: 'Assurance from Us',
      },
      image: require('../../../../assets/images/promo-2.jpg'),
    },
    {
      id: 3,
      description: {
        regular: 'Choose the Royal Class and ',
        bold: 'Get 20% off!',
      },
      image: require('../../../../assets/images/promo-3.jpg'),
    },
  ];

  /**
   * ---------------------------------------------------- *
   * @function onPress
   * @summary on press promo item
   * ---------------------------------------------------- *
   */
  const onPress = () => {};

  return (
    <Container>
      <Titling
        title="Promo Promo!"
        subtitle="More discount on your trip!"
        style={{paddingBottom: 15}}
      />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={promos}
        ItemSeparatorComponent={() => <Container width={20} height={'100%'} />}
        renderItem={({item}) => (
          <Container activeOpacity={0.7} onPress={onPress}>
            <ImageBackground
              imageStyle={{borderRadius: 20}}
              source={item.image}
              style={{
                height: 140,
                width: (windowWidth * 55) / 100,
              }}>
              <Container
                flex
                verticalCenter
                width={'100%'}
                backgroundColor={'rgba(0, 14, 36, 0.5)'}
                borderRadius={20}>
                <AppText
                  right
                  color={Colors.WHITE}
                  style={{marginLeft: '35%', marginRight: 15}}>
                  {item.description.regular}
                  <AppText bold color={Colors.WHITE}>
                    {item.description.bold}
                  </AppText>
                </AppText>
              </Container>
            </ImageBackground>
          </Container>
        )}
      />
    </Container>
  );
};

export default PromoSlider;
