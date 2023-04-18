import React from 'react';
import {Image, FlatList} from 'react-native';
import Container from '../../../../components/Container';
import AppText from '../../../../components/AppText';
import {Colors} from '../../../../utils/Colors';

const DestinationList = () => {
  const destinations = [
    {
      id: 1,
      name: 'Raja Ampat',
      location: 'West Papua, Indonesia',
      price: 'IDR 835k',
      image: require('../../../../assets/images/destination-5.jpg'),
    },
    {
      id: 2,
      name: 'Curug Leuwi Hejo',
      location: 'West Java, Indonesia',
      price: 'IDR 225k',
      image: require('../../../../assets/images/destination-6.jpg'),
    },
    {
      id: 3,
      name: 'Mount Pancar',
      location: 'West Java, Indonesia',
      price: 'IDR 175k',
      image: require('../../../../assets/images/destination-7.jpg'),
    },
    {
      id: 4,
      name: 'Jam Gadang',
      location: 'West Sumatera, Indonesia',
      price: 'IDR 415k',
      image: require('../../../../assets/images/destination-8.jpg'),
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
    <Container paddingTop={10} paddingBottom={15}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={destinations}
        ItemSeparatorComponent={() => <Container height={20} />}
        renderItem={({item}) => (
          <Container
            activeOpacity={0.7}
            borderRadius={20}
            backgroundColor="transparent"
            onPress={onPress}
            style={{
              shadowColor: Colors.GREY_LIGHT,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.0,
              elevation: 8,
            }}>
            <Container
              padding={20}
              borderRadius={20}
              backgroundColor={Colors.WHITE}
              style={{
                overflow: 'hidden',
              }}>
              <Image
                source={item.image}
                style={{
                  width: '100%',
                  height: 200,
                  borderRadius: 20,
                  marginBottom: 20,
                }}
              />
              <Container row>
                <Container flex={2}>
                  <AppText small color={Colors.GREY} style={{marginBottom: 10}}>
                    {item.location}
                  </AppText>
                  <AppText large bold>
                    {item.name}
                  </AppText>
                </Container>
                <Container flex horizontalRight>
                  <AppText xsmall color={Colors.GREY} style={{marginBottom: 8}}>
                    Starts from
                  </AppText>
                  <AppText large bold color={Colors.ORANGE}>
                    {item.price}
                  </AppText>
                </Container>
              </Container>
            </Container>
          </Container>
        )}
      />
    </Container>
  );
};

export default DestinationList;
