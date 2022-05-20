import React, { useState } from "react";
import { StyleSheet, StyleProp, ViewStyle, View, Dimensions, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonPrimary from "../../../common/buttonPrimary";
import { StyleConstants } from "../../../styles/style-constants";
import Title from "../../Typography/Title";
import BarchartView from "./barchartView";
import PiechartView from "./piechartView";

const windowHeight = Dimensions.get('window').height;

interface ChartViewProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>,
  taskTitle?: string,
  subProject?: string,
  workspace?: string,
}

const chartType = ["All", "Group 1", "Group 2", "Group 3"]

export default function ChartView({ style, taskTitle, subProject, workspace }: ChartViewProps) {
  const [chartModalVisible, setChartModalVisible] = useState(false);
  const chartToggleModal = () => {
    setChartModalVisible(!chartModalVisible);
  };

  const [selection, setSelection] = useState(1);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ alignItems: 'flex-start', paddingHorizontal: 20, paddingTop: 30 }}>
        <TouchableOpacity style={styles.buttonOutline} onPress={chartToggleModal}>
          <Title style={{ marginRight: 10, color: StyleConstants.COLOR_PRIMARY }}><Title style={{ fontFamily: 'Inter-Medium' }}>Bar Chart:</Title> Parameter Name</Title>
          <Icon name="chevron-down" color={StyleConstants.COLOR_PRIMARY} size={20} />
        </TouchableOpacity>
      </View>


      {selection === 1 ?
        <BarchartView />
        :
        <PiechartView />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  titleModal: {
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    lineHeight: 32,
  },
  addView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
  },
  buttonSection: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 20,
    marginHorizontal: -20,
    paddingHorizontal: 20
  },
  buttonOutline: {
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    backgroundColor: 'white',
    borderRadius: 6,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  outlineText: {
    color: StyleConstants.COLOR_TEXT
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: "center",
    borderRadius: 8,
    overflow: 'hidden',
  },
  btn: {
    backgroundColor: '#F8F9FA',
    height: 40,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal: 32,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily:'Inter-Medium'
  },
  selectInputStyle: {
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderColor: StyleConstants.COLOR_BORDER,
    flex: 1,
    height: 40,
  },
  dropdown2BtnStyle: {
    // width: '80%',
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 8,
    flex: 1,
  },
  dropdown2BtnTxtStyle: {
    textAlign: 'center',
    fontSize: 14,
  },
});
