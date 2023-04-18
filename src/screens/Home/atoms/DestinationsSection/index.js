import {ImageBackground, FlatList, Dimensions} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import React from 'react';
import AppText from '../../../../components/AppText';
import Container from '../../../../components/Container';
import Titling from '../../../../components/Titling';
import {Colors} from '../../../../utils/Colors';

const DestinationsSection = () => {
  const windowWidth = Dimensions.get('window').width;
  const destinations = [
    {
      id: 1,
      name: 'Mount Bromo',
      location: 'East Java, Indonesia',
      image: require('../../../../assets/images/destination-1.jpg'),
    },
    {
      id: 2,
      name: 'Bali',
      location: 'Bali, Indonesia',
      image: require('../../../../assets/images/destination-2.jpg'),
    },
    {
      id: 3,
      name: 'Raja Ampat',
      location: 'West Papua, Indonesia',
      image: require('../../../../assets/images/destination-3.jpg'),
    },
    {
      id: 4,
      name: 'Kepulauan Seribu',
      location: 'Jakarta, Indonesia',
      image: require('../../../../assets/images/destination-4.jpg'),
    },
  ];

  /**
   * ---------------------------------------------------- *
   * @function onPress
   * @summary on press destination item
   * ---------------------------------------------------- *
   */
  const onPress = () => {};

  return (
    <Container>
      <Titling
        title="Top Destination This Week"
        subtitle="Choosen destination by users for 7 days!"
        style={{paddingBottom: 15}}
      />
      <MasonryList
        bounces={false}
        numColumns={2}
        data={destinations}
        style={{flex: 1}}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          const alignSelfImage = item.id % 2 == 1 ? 'flex-start' : 'flex-end';
          const heightImage = item.id == 1 || item.id == 4 ? 220 : 260;
          return (
            <Container
              activeOpacity={0.7}
              marginBottom={15}
              width={'100%'}
              onPress={onPress}>
              <ImageBackground
                imageStyle={{borderRadius: 20}}
                source={item.image}
                style={{
                  height: heightImage,
                  width: windowWidth * 0.43,
                  alignSelf: alignSelfImage,
                }}>
                <Container
                  flex
                  verticalBottom
                  width={'100%'}
                  backgroundColor={'rgba(0, 14, 36, 0.3)'}
                  padding={'8%'}
                  borderRadius={20}>
                  <AppText bold color={Colors.WHITE} style={{marginBottom: 5}}>
                    {item.name}
                  </AppText>
                  <AppText xsmall color={Colors.WHITE}>
                    {item.location}
                  </AppText>
                </Container>
              </ImageBackground>
            </Container>
          );
        }}
      />
      <Container
        horizontalCenter
        activeOpacity={0.5}
        paddingVertical={15}
        onPress={onPress}>
        <AppText bold color={Colors.ORANGE}>
          See More Destination
        </AppText>
      </Container>
    </Container>
  );
};

export default DestinationsSection;
