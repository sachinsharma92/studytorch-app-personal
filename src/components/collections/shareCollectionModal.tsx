import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import Title from '../Typography/Title';
import { StyleConstants } from '../../styles/style-constants';
import SubText from '../Typography/SubText';
import ButtonPrimary from '../../common/buttonPrimary';
import InputPrimary from '../../common/inputPrimary';
import DropdownPrimary from '../../common/dropdownPrimary';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomModal from '../../common/bottomModal';
import { RadioButton } from 'react-native-paper';

interface ShareCollectionProps {
  children?: any;
  isVisible?: any,
  onBackdropPress?: any,
}

const collectionItems = ["Can View", "Can Edit"]

const memberListData = [1, 2,]

export default function ShareCollectionModal({ isVisible, onBackdropPress }: ShareCollectionProps) {
  const [isShareSettingModal, setModalJoined] = React.useState(false);
  const toggleShareSettingModal = () => {
    setModalJoined(!isShareSettingModal);
  };

  const [shareValue, setShareValue] = React.useState('first');
  const [actionValue, setActionValue] = React.useState('first');

  return (
    <>
      <Modal isVisible={isVisible} style={{ margin: 10, justifyContent: 'center' }} onBackdropPress={onBackdropPress}>
        <View style={{ backgroundColor: 'white', minHeight: 150, borderRadius: 10, padding: 20, paddingBottom: 0, overflow: 'hidden', }}>
          <TouchableOpacity onPress={toggleShareSettingModal} style={styles.closeButton}><Icon name="cog" size={20}></Icon></TouchableOpacity>

          <Title level={2}>Share Collection</Title>
          <View style={{ marginTop: 30, borderBottomWidth: 1, borderBottomColor: StyleConstants.COLOR_BORDER, paddingBottom: 20 }}>
            <View style={{ flexDirection: 'row', backgroundColor: '#EDF2F6', alignItems: 'center', marginRight: 10, borderRadius: 10 }}>
              <InputPrimary
                placeholder="share via entering email"
                inputStyle={{ backgroundColor: 'transparent', borderWidth: 0, width: 190, }}
              />
              <DropdownPrimary dropdownStyle={{ borderWidth: 0 }} defaultButtonText={<SubText style={{ opacity: 0.7 }}>Select</SubText>} data={collectionItems} />
            </View>
          </View>

          <View style={styles.membersList}>
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

          <View style={styles.buttonSection}>
            <ButtonPrimary buttonStyle={{ backgroundColor: 'transparent' }} textStyle={{ color: StyleConstants.COLOR_TEXT }} label="Cancel" />
            <ButtonPrimary buttonStyle={{ minHeight: 30, }} label="Done" />
          </View>
        </View>
      </Modal>

      <BottomModal isVisible={isShareSettingModal} onBackdropPress={toggleShareSettingModal}>
        <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: StyleConstants.COLOR_BORDER, marginBottom: 20, paddingBottom: 20, marginHorizontal: -20, paddingHorizontal: 20 }}>
          <TouchableOpacity style={{ marginRight: 5 }}>
            <Icon size={22} name="arrow-left" />
          </TouchableOpacity>
          <Title level={2}>Share Settings</Title>
        </View>

        <View>
          <Title style={styles.buttonTitle}>Share Sub-folders</Title>
          <RadioButton.Group onValueChange={shareValue => setShareValue(shareValue)} value={shareValue}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.radioItem}>
                <RadioButton value="first" color={StyleConstants.COLOR_PRIMARY} />
                <SubText>Yes</SubText>
              </View>
              <View style={styles.radioItem}>
                <RadioButton value="second" color={StyleConstants.COLOR_PRIMARY}  />
                <SubText>No</SubText>
              </View>
            </View>
          </RadioButton.Group>
        </View>

        <View style={{ marginTop: 20 }}>
          <Title style={styles.buttonTitle}>Action</Title>
          <RadioButton.Group onValueChange={actionValue => setActionValue(actionValue)} value={actionValue}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.radioItem}>
                <RadioButton value="first" color={StyleConstants.COLOR_PRIMARY}  />
                <SubText>Can Edit</SubText>
              </View>
              <View style={styles.radioItem}>
                <RadioButton value="second" color={StyleConstants.COLOR_PRIMARY}  />
                <SubText>Can View</SubText>
              </View>
            </View>
          </RadioButton.Group>
        </View>
      </BottomModal>
    </>
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
    justifyContent: 'flex-end',
    backgroundColor: StyleConstants.COLOR_GRAY_EA,
    paddingVertical: 10,
    marginHorizontal: -20,
    paddingHorizontal: 20,
    marginTop: 20
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 25,
    zIndex: 1
  },
  membersList: {
    paddingVertical: 20
  },
  button: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_GRAY_EA,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    // justifyContent:'center'
  },
  buttonTitle: {
    marginLeft: 10,
    fontSize: 16,
    color: StyleConstants.COLOR_TEXT_LIGHT
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
