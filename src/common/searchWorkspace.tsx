import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";
import Title from '../components/Typography/Title';
import SubText from '../components/Typography/SubText';
import { StyleConstants } from '../styles/style-constants';
import InputPrimary from './inputPrimary';
import EmptyState from './emptyState';
import { Divider } from 'react-native-paper';

interface SearchWorkspaceProps {
  children?: any;
  isVisible?: any,
  onBackdropPress?: any,
  topTitle?: string,
}

const searchList = [
  1, 2, 3, 4
]

export default function SearchWorkspaceModal({ children, isVisible, onBackdropPress, topTitle }: SearchWorkspaceProps) {
  return (
    <Modal isVisible={isVisible} style={{ margin: 10, justifyContent: 'center' }} onBackdropPress={onBackdropPress}>
      <View style={{ backgroundColor: 'white', minHeight: 150, borderTopLeftRadius: 10, borderRadius: 10, padding: 20 }}>
        {topTitle && <SubText style={{ fontSize: 18, fontFamily: 'Sofia-Pro-Medium', marginBottom: 20, color: StyleConstants.COLOR_TEXT }}>{topTitle}</SubText>}
        <View style={[styles.searchInput, { flexDirection: 'row', }]}>
          <InputPrimary style={styles.searchInput} placeholder="Search WorkSpace" inputStyle={styles.inputCustom} />
          <Icon name="magnify" style={{ position: 'absolute', right: 10, top: 10 }} size={20} color={StyleConstants.COLOR_GRAY_B0} />
        </View>

        <EmptyState subtext='No Data exists with search input' />

        <View style={styles.searchList}>
          <View style={{marginBottom: 10}}>
            <Title level={3} style={styles.dividerTitle}>Collections</Title>
            <Divider style={styles.dividerStyle} />
          </View>
          {searchList.map(() => (
            <TouchableOpacity style={styles.listItem}>
              <Icon name="folder-outline" size={24} color="#777777" />
              <SubText style={{ marginLeft: 10, fontFamily: 'Sofia-Pro-Medium', }}>Test Sachin</SubText>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
}



const styles = StyleSheet.create({
  searchInput: {
    minWidth: '100%',
  },
  inputCustom: {
    height: 40,
    borderRadius: 50,
    backgroundColor: '#FAFAFB'
  },
  searchList: {
    paddingTop: 30
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  dividerTitle: {
    backgroundColor: 'white',
    zIndex: 1,
    width: 100,
    paddingHorizontal: 5,
    left: 10,
    textAlign: 'center',
    color: StyleConstants.COLOR_TEXT_LIGHT
  },
  dividerStyle: {
    position: 'absolute',
    backgroundColor: StyleConstants.COLOR_GRAY_B0,
    width: '100%',
    top: 13,
  }
});