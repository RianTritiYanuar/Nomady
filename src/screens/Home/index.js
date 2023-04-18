import React from 'react';
import SearchAndNotificationBar from '../../components/SearchAndNotificationBar';
import Container from '../../components/Container';
import VirtualizedView from '../../components/VirtualizedView';
import Titling from '../../components/Titling';
import CategoryMenu from './atoms/CategoryMenu';
import PromoSlider from './atoms/PromoSlider';
import DestinationsSection from './atoms/DestinationsSection';
import Hero from './atoms/Hero';

const Home = () => {
  return (
    <VirtualizedView containerStyle={{paddingTop: 20}}>
      <Container paddingHorizontal={20}>
        <SearchAndNotificationBar />
        <Titling
          title="Hi, John Connor!"
          titleSize="large"
          subtitle="Wanna go somewhere?"
          style={{paddingBottom: 15}}
        />
        <CategoryMenu />
        <PromoSlider />
        <DestinationsSection />
      </Container>
      <Hero />
    </VirtualizedView>
  );
};

export default Home;
