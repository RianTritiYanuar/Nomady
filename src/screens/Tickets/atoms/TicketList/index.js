import React from 'react';
import {FlatList} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Container from '../../../../components/Container';
import AppText from '../../../../components/AppText';
import {Colors} from '../../../../utils/Colors';

const TicketList = () => {
  const tickets = [
    {
      id: 1,
      transportation: {
        type: 'airplane',
        name: 'Garuda Indonesia',
      },
      departure: {
        code: 'CGK',
        city: 'Jakarta',
        date: '28 January 2022',
        time: '16:45',
      },
      arrival: {
        code: 'PDG',
        city: 'Padang',
        date: '28 January 2022',
        time: '17:25',
      },
      price: 'IDR655.000',
    },
    {
      id: 2,
      transportation: {
        type: 'airplane',
        name: 'Air Asia',
      },
      departure: {
        code: 'CGK',
        city: 'Jakarta',
        date: '5 January 2022',
        time: '13:05',
      },
      arrival: {
        code: 'MDN',
        city: 'Medan',
        date: '5 January 2022',
        time: '14:55',
      },
      price: 'IDR595.000',
    },
    {
      id: 3,
      transportation: {
        type: 'bus',
        name: 'MGI',
      },
      departure: {
        code: 'JKT',
        city: 'Jakarta',
        date: '20 September 2021',
        time: '09:15',
      },
      arrival: {
        code: 'BDG',
        city: 'Bandung',
        date: '20 September 2021',
        time: '12:35',
      },
      price: 'IDR85.000',
    },
  ];

  /**
   * ---------------------------------------------------- *
   * @function onPress
   * @summary on press ticket item
   * ---------------------------------------------------- *
   */
  const onPress = () => {};

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={tickets}
      style={{paddingBottom: 20}}
      ItemSeparatorComponent={() => <Container height={30} />}
      renderItem={({item}) => {
        let iconName = 'airplane-takeoff';
        if (item.transportation.type === 'bus') {
          iconName = 'bus-side';
        }
        return (
          <Container
            borderRadius={20}
            backgroundColor="transparent"
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
              paddingHorizontal={15}
              paddingVertical={20}
              borderRadius={20}
              backgroundColor={Colors.WHITE}
              style={{
                overflow: 'hidden',
              }}>
              <Container row paddingBottom={15}>
                <Container width={'25%'}>
                  <AppText small bold color={Colors.ORANGE}>
                    {item.departure.code}
                  </AppText>
                  <AppText small bold>
                    {item.departure.city}
                  </AppText>
                </Container>
                <Container row horizontalCenter verticalCenter width={'50%'}>
                  <AppText
                    ellipsizeMode="clip"
                    numberOfLines={1}
                    style={{width: '35%'}}>
                    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                    - - -
                  </AppText>
                  <Container horizontalCenter width={'30%'}>
                    <MaterialIcon
                      name={iconName}
                      size={24}
                      color={Colors.ORANGE}
                    />
                  </Container>
                  <AppText
                    ellipsizeMode="clip"
                    numberOfLines={1}
                    style={{width: '35%'}}>
                    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                    - - -
                  </AppText>
                </Container>
                <Container width={'25%'} horizontalRight>
                  <AppText small bold color={Colors.ORANGE}>
                    {item.arrival.code}
                  </AppText>
                  <AppText small bold right>
                    {item.arrival.city}
                  </AppText>
                </Container>
              </Container>
              <Container row paddingBottom={20}>
                <Container flex>
                  <AppText xsmall color={Colors.GREY}>
                    {item.departure.time}
                  </AppText>
                  <AppText xsmall bold>
                    {item.departure.date}
                  </AppText>
                </Container>
                <Container flex horizontalRight>
                  <AppText xsmall color={Colors.GREY}>
                    {item.arrival.time}
                  </AppText>
                  <AppText xsmall bold right>
                    {item.arrival.date}
                  </AppText>
                </Container>
              </Container>
              <AppText
                ellipsizeMode="clip"
                numberOfLines={1}
                color={Colors.GREY_LIGHT}
                style={{marginBottom: 20}}>
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                -
              </AppText>
              <Container row paddingBottom={10}>
                <AppText small color={Colors.GREY_DARK} style={{flex: 1}}>
                  {item.transportation.name}
                </AppText>
                <AppText right bold color={Colors.ORANGE} style={{flex: 1}}>
                  {item.price}
                </AppText>
              </Container>
              <Container
                flex
                activeOpacity={0.3}
                paddingTop={10}
                onPress={onPress}>
                <AppText center color={Colors.ORANGE}>
                  Check Status
                </AppText>
              </Container>
            </Container>
          </Container>
        );
      }}
    />
  );
};

export default TicketList;
