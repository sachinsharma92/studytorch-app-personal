import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Colors, Typography} from '../../styles';

const HeaderPrimary = props => {
  const [isNotifyModalVisible, setNotifyModalVisible] = useState(false);
  const toggleNotifyModal = () => {
    setNotifyModalVisible(!isNotifyModalVisible);
  };

  return (
    <View style={styles.containerStyle}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={props.onPress}>
          {/* <Image
            source={require('../../assets/icons/bar.png')}
            style={{height: 30, width: 30}}
            resizeMode={'cover'}
          /> */}
          <Text>Helloooo</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={toggleNotifyModal} style={{marginRight: 20}}>
          <Icon name="bell" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="search" size={22} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderPrimary;

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectActive: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  selectStyle: {
    width: 70,
    borderWidth: 1,
    borderColor: Colors.GRAY_BORDER,
    marginRight: '2%',
    borderRadius: 4,
    marginTop: 5,
  },
  inputStyle: {
    borderRadius: 6,
    flexGrow: 1,
    backgroundColor: Colors.WHITE,
    height: 45,
  },
  selectInput: {
    height: 45,
  },
  title: {
    fontSize: 18,
    ...Typography.FONT_BLACK,
    marginLeft: 20,
    opacity: 0.7,
  },
});
