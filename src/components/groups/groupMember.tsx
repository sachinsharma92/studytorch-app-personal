import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import Title from '../Typography/Title';
import { StyleConstants } from '../../styles/style-constants';
import SubText from '../Typography/SubText';
import ButtonPrimary from '../../common/buttonPrimary';
import InputPrimary from '../../common/inputPrimary';
import DropdownPrimary from '../../common/dropdownPrimary';

interface GroupMemberCardProps {
  children?: any;
  isVisible?: any,
  onBackdropPress?: any,
}

const collectionItems = ["Admin", "Member"]

const memberListData = [1, 2, 3, 4]

export default function GroupMemberCard({ isVisible, onBackdropPress }: GroupMemberCardProps) {
  return (
    <Modal isVisible={isVisible} style={{ margin: 10, justifyContent: 'center' }} onBackdropPress={onBackdropPress}>
      <View style={{ backgroundColor: 'white', minHeight: 150, borderRadius: 10, padding: 20 }}>
        {/* <TouchableOpacity onPress={closeHandler} style={styles.closeButton}><Icon name="close" size={20}></Icon></TouchableOpacity> */}

        <Title level={2}>Group Members</Title>
        <View style={{ marginTop: 30, borderBottomWidth: 1, borderBottomColor: StyleConstants.COLOR_BORDER, paddingBottom: 20 }}>
          <View style={{ flexDirection: 'row', backgroundColor: '#EDF2F6', alignItems: 'center', marginRight: 10, borderRadius: 10 }}>
            <InputPrimary
              placeholder="ayush.prshr9@gmail.com"
              inputStyle={{ backgroundColor: 'transparent', borderWidth: 0, width: 140, }}
            />
            <DropdownPrimary dropdownStyle={{ borderWidth: 0 }} defaultButtonText={<SubText style={{ opacity: 0.7 }}>Select</SubText>} data={collectionItems} />
          </View>
          <ButtonPrimary textStyle={{ fontSize: 12 }} label="Add" buttonStyle={{ position: 'absolute', top: 7, right: 20, minHeight: 35, paddingHorizontal: 10 }} />
        </View>

        <View style={styles.membersList}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <View style={{ width: '65%' }}><SubText>Members</SubText></View>
            <View style={{ width: '35%' }}><SubText>Role</SubText></View>
          </View>

          {memberListData.map(() => (
            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: StyleConstants.COLOR_BORDER, paddingBottom: 20 }}>
              <View style={{ flexDirection: 'row', width: '65%' }}>
                <View style={{ width: 40, height: 40, marginRight: 10, backgroundColor: StyleConstants.COLOR_GRAY_EA, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                  <Title>SS</Title>
                </View>
                <View>
                  <Title>Gwen Stefancy</Title>
                  <SubText>gwen.s@gmail.com</SubText>
                </View>
              </View>
              <View style={{ width: '35%', flexDirection: 'row', flex: 1, }}>
                <DropdownPrimary dropdownStyle={{ height: 40, backgroundColor: '#FAFAFB', borderWidth: 0 }} defaultButtonText={<SubText style={{ opacity: 0.7 }}>Select</SubText>} data={collectionItems} />
              </View>
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_BORDER,
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  title1: {
    fontSize: 18,
    marginBottom: 5
  },
  subtext: {
    fontSize: 14,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: StyleConstants.COLOR_BORDER,
    paddingTop: 20,
    marginHorizontal: -20,
    paddingHorizontal: 20,
    marginTop: 20
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 1
  },
  membersList: {
    paddingVertical: 20
  }
})
