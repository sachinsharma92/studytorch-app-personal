import React from 'react'
import * as ImagePicker from 'react-native-image-picker';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/userActions';
import ButtonPrimary from '../../common/buttonPrimary';
import Title from '../../components/Typography/Title';
import SubText from '../../components/Typography/SubText';
import InputPrimary from '../../common/inputPrimary';
import ImageUpload from '../../common/imageUpload';
import { StyleConstants } from '../../styles/style-constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Svg Images Here


interface ProfileScreenProps {
  navigation: any
}

/* toggle includeExtra */
const includeExtra = true;

export default function ProfileScreen({ navigation }: ProfileScreenProps) {
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(login(987654321, '2932'));
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.mainContainer}>
        <View style={[styles.head, { marginBottom: 30, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }]}>
          <View>
            <Title style={styles.title1}>Account</Title>
            <SubText style={styles.subtext}>My Profile</SubText>
          </View>

          <TouchableOpacity style={styles.deleteBtn}>
            <Icon name="delete-empty-outline" size={18} color={StyleConstants.COLOR_SECONDARY}/>
            <SubText style={{color: StyleConstants.COLOR_SECONDARY}}>Delete Account</SubText>
          </TouchableOpacity>
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

          </View>
        </ScrollView>

        <ButtonPrimary buttonStyle={{ marginTop: 10, marginHorizontal: 20 }} label="Save Changes" />

      </View>
    </SafeAreaView>
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
    flexDirection:'row',
    alignItems:'center'
  }
})


interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}

const actions: Action[] = [
  {
    title: 'Take Image',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
  {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
  {
    title: 'Take Video',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'video',
      includeExtra,
    },
  },
  {
    title: 'Select Video',
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'video',
      includeExtra,
    },
  },
  {
    title: `Select Image or Video\n(mixed)`,
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'mixed',
      includeExtra,
    },
  },
];