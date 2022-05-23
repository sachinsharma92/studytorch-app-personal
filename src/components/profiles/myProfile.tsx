import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import ButtonPrimary from '../../common/buttonPrimary';
import Title from '../../components/Typography/Title';
import SubText from '../../components/Typography/SubText';
import InputPrimary from '../../common/inputPrimary';
import ImageUpload from '../../common/imageUpload';
import { StyleConstants } from '../../styles/style-constants';

interface MyProfileCardProps {
  navigation?: any
}

export default function MyProfileCard({ navigation }: MyProfileCardProps) {

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.head, { marginBottom: 30, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
        <View>
          <Title style={styles.title1}>Account</Title>
          <SubText style={styles.subtext}>My Profile</SubText>
        </View>
      </View>

      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View style={[styles.head, { alignItems: 'center' }]}>
          <View style={{ alignItems: 'center' }}>
            <ImageUpload />
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Title style={[styles.title1,]}>Ayush Parashar</Title>
            <SubText style={styles.subtext}>ayush.prshr9@gmai.com</SubText>
          </View>
        </View>

        <View style={styles.formStyle}>
          <InputPrimary
            label="Username"
            placeholder="ayushParashar2022"
            style={{ marginTop: 30 }}
          />

          <InputPrimary
            label="Your Name"
            placeholder="Ayush Parashar"
            style={{ marginTop: 30 }}
          />

          <InputPrimary
            label="E-mail"
            placeholder="ayush.prshr9@gmail.com"
            style={{ marginTop: 30 }}
          />

          <InputPrimary
            label="Phone"
            placeholder="+91 xxxx xxx xxxx"
            style={{ marginTop: 30 }}
          />

          <ButtonPrimary buttonStyle={{ marginTop: 30, marginBottom: 30 }} label="Save Changes" />
        </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  formStyle: {
    flexGrow: 2
  },
  title1: {
    fontSize: 26,
  },
  subtext: {
    // color: 'white'
  },
  head: {
    marginBottom: 20
  },
  registerNow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  forgot: {
    alignItems: 'flex-end',
    textAlign: 'right',
    marginTop: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  deleteBtn: {
    borderWidth: 1, borderColor: StyleConstants.COLOR_SECONDARY, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center'
  }
})