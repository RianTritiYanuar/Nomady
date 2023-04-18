import React, {useState} from 'react';
import {FlatList} from 'react-native';
import AppText from '../../../../components/AppText';
import Container from '../../../../components/Container';
import {Colors} from '../../../../utils/Colors';

const CategorySlider = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const categories = [
    {id: 1, category: 'Trending'},
    {id: 2, category: 'New Destination'},
    {id: 3, category: 'Recommended'},
    {id: 4, category: 'Budget Friendly'},
    {id: 5, category: 'Most Visited'},
  ];

  /**
   * ---------------------------------------------------- *
   * @function onPress
   * @summary on press category item
   * ---------------------------------------------------- *
   */
  const onPress = categoryId => {
    setActiveCategory(categoryId);
  };

  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={categories}
      ItemSeparatorComponent={() => <Container width={10} height={'100%'} />}
      contentContainerStyle={{paddingVertical: 10}}
      renderItem={({item}) => {
        let backgroundColor = Colors.WHITE;
        let textColor = Colors.BLACK;
        if (item.id === activeCategory) {
          backgroundColor = Colors.ORANGE;
          textColor = Colors.WHITE;
        }
        return (
          <Container
            activeOpacity={0.7}
            padding={10}
            borderRadius={10}
            borderWidth={0.3}
            borderColor={Colors.GREY_LINE_STROKE}
            backgroundColor={backgroundColor}
            style={{alignSelf: 'flex-start'}}
            onPress={() => onPress(item.id)}>
            <AppText small color={textColor}>
              {item.category}
            </AppText>
          </Container>
        );
      }}
    />
  );
};

export default CategorySlider;
