import React from 'react';
import VirtualizedView from '../../components/VirtualizedView';
import Titling from '../../components/Titling';
import ProfileDetail from './ProfileDetail';
import Menus from './Menus';

const Profile = () => {
  return (
    <VirtualizedView containerStyle={{paddingHorizontal: 20}}>
      <Titling
        title="Profile"
        titleSize="large"
        subtitle="Here's your cool profile!"
        style={{paddingBottom: 15}}
      />
      <ProfileDetail />
      <Menus />
    </VirtualizedView>
  );
};

export default Profile;
