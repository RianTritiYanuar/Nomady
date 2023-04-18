import {FlatList} from 'react-native';
import React from 'react';

const VirtualizedView = ({children, containerStyle}) => {
  return (
    <FlatList
      data={[]}
      contentContainerStyle={containerStyle}
      keyExtractor={() => 'dummy'}
      renderItem={null}
      ListHeaderComponent={() => <React.Fragment>{children}</React.Fragment>}
    />
  );
};

export default VirtualizedView;
