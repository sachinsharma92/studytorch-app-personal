import React from "react";
import { StyleSheet, View } from "react-native";
import PieChart from 'react-native-pie-chart';
import { StyleConstants } from "../../../styles/style-constants";
import Title from "../../Typography/Title";

const widthAndHeight = 180
const series = [400, 300,]
const chartData = [
  {
    title: 'Unsuccessful',
    bgColor: '#e1fcef',
    number: '1'
  },
  {
    title: 'Successful',
    bgColor: '#66cb9f',
    number: '150'
  },
]

const sliceColor = ['#e1fcef', '#66cb9f']

export default function PiechartView() {

  return (
    <View>
      <View style={styles.chartSec}>
        <View style={{ width: '100%', minHeight: 50, padding: 20, flexWrap: 'wrap' }}>
          <View style={{marginBottom: 20 }}>
            <Title level={3}>80%</Title>
            <Title>Quizes Success Rate</Title>
          </View>

          <View style={{ width: '100%', flexDirection:'row', justifyContent:'space-between'}}>
          {chartData.map((item) => (
            <View style={{ marginVertical: 10, marginRight: 10 }}>
              <View style={{ flexDirection: 'row', alignItems:'center' }}>
                <View style={[styles.colorDot, { backgroundColor: item.bgColor }]} />
                <Title level={3}>{item.number} </Title>
              </View>
              <Title>{item.title} </Title>
            </View>
          ))}
          </View>
        </View>
        <View style={{ padding: 30, alignItems:'center', justifyContent:'center' }}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.65}
          />
					<Title style={styles.scoreValue} level={2}>40%</Title>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 10
  },
  chartSec: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_BORDER,
    borderRadius: 5,
    overflow: 'hidden',
  },
  colorDot: {
    width: 16,
    height: 16,
    borderRadius: 50,
    backgroundColor: 'red',
    overflow: 'hidden',
    marginRight: 8
  },
  scoreValue: {
		position:'absolute',
		top: 105,
	}
});
