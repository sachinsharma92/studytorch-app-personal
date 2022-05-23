import * as React from 'react';
import * as ImagePicker from 'react-native-image-picker';
import { StyleSheet, SafeAreaView, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import ButtonPrimary from './buttonPrimary';
import UploadIcon from "../assets/images/upload.svg";
import BottomModal from './bottomModal';
import { StyleConstants } from '../styles/style-constants';

/* toggle includeExtra */
const includeExtra = true;

export default function ImageUpload() {
  const [response, setResponse] = React.useState<any>(null);

  const [uploadOptionModalVisible, setuploadOptionModalVisible] = React.useState(false);
  const uploadOptionToggleModal = () => {
    setuploadOptionModalVisible(!uploadOptionModalVisible);
  };

  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
    setuploadOptionModalVisible(false);
  }, []);


  return (
    <View>
      <View style={{ width: 100, height: 100, alignItems: 'center' }}>
        <TouchableOpacity onPress={uploadOptionToggleModal} style={{ flex: 1 }}>
          {!response ? <View style={styles.imageStyle}>
            <Image
              style={styles.tinyLogo}
              resizeMode="cover"
              source={{
                uri: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
              }}
            />
          </View>
            :
            <>
              {response?.assets &&
                response?.assets.map(({ uri }) => (
                  <View key={uri} style={styles.imageStyle}>
                    <Image
                      resizeMode="cover"
                      resizeMethod="scale"
                      style={styles.tinyLogo}
                      source={{ uri: uri }}
                    />
                  </View>
                ))}
            </>}

          <View style={styles.editIcon}>
            <UploadIcon />
          </View>
        </TouchableOpacity>
      </View>

      {/* Edited Modal */}
      <BottomModal topTitle='Select Photo Option' isVisible={uploadOptionModalVisible} onBackdropPress={uploadOptionToggleModal}>
        <View>
          <View style={styles.buttonContainer}>
            {actions.map(({ title, type, options }) => {
              return (
                <ButtonPrimary textStyle={styles.buttonText} buttonStyle={styles.buttonOutline} key={title} onPress={() => onButtonPress(type, options)} label={title} />
              );
            })}
          </View>
        </View>
      </BottomModal>
    </View>
  );
}

const styles = StyleSheet.create({

  buttonContainer: {
    marginVertical: 8,
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 100,
    overflow: 'hidden'
  },
  tinyLogo: {
    height: '100%',
    width: '100%',
  },
  editIcon: {
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_PRIMARY,
    marginBottom: 20
  },
  buttonText: {
    color: StyleConstants.COLOR_PRIMARY,
    fontFamily: 'Sofia-Pro-Medium',
    textTransform: 'uppercase',
    fontSize: 14,
  }
});

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
    title: 'Choose from Library',
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
];