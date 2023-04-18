import React from 'react';
import SearchAndNotificationBar from '../../components/SearchAndNotificationBar';
import VirtualizedView from '../../components/VirtualizedView';
import Titling from '../../components/Titling';
import CategorySlider from './atoms/CategorySlider';
import DestinationList from './atoms/DestinationList';

const Discover = () => {
  return (
    <VirtualizedView containerStyle={{paddingTop: 20, paddingHorizontal: 20}}>
      <SearchAndNotificationBar />
      <Titling
        title="Discover more destination"
        titleSize="large"
        subtitle="Let's pick some place and go!"
        style={{paddingBottom: 15}}
      />
      <CategorySlider />
      <DestinationList />
    </VirtualizedView>
  );
};

export default Discover;
