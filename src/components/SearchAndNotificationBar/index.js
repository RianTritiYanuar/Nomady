import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import React, {useRef} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../utils/Colors';

const SearchAndNotificationBar = () => {
  const ref = useRef();

  const onPress = () => ref.current.focus();

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.searchBarContainer}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.searchBar}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcon
                name="search"
                size={22}
                color={Colors.GREY_LIGHT}
                style={{marginRight: 5}}
              />
              <TextInput
                ref={ref}
                placeholder="Search destination here .."
                style={{maxWidth: '85%'}}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.notificationContainer}>
        <TouchableOpacity activeOpacity={0.5}>
          <MaterialIcon
            name="notifications"
            size={30}
            color={Colors.GREY}
            style={{marginRight: 5}}
          />
          <View style={styles.notificationRedCircle}>
            <MaterialIcon name="circle" size={10} color={Colors.RED} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchAndNotificationBar;

const styles = StyleSheet.create({
  searchBarContainer: {flex: 5, marginRight: 10},
  searchBar: {
    paddingHorizontal: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.GREY_LINE_STROKE,
  },
  notificationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationRedCircle: {position: 'absolute', right: 10, top: 2},
});
