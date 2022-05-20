import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { BarChart} from "react-native-chart-kit";
import { StyleConstants } from "../../../styles/style-constants";

import Title from "../../Typography/Title";

const windowWidth = Dimensions.get('window').width;
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43]
    }
  ]
};


export default function BarchartView() {
  return (
    <View style={{ padding: 20, }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.chartSec}>
          <BarChart
            data={data}
            width={windowWidth - 20} // from react-native
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: StyleConstants.COLOR_PRIMARY,
              backgroundGradientFrom: "white",
              backgroundGradientTo: "white",
              decimalPlaces: 1, // optional, defaults to 2dp
              color: () =>  StyleConstants.COLOR_PRIMARY,
              labelColor: (opacity = 1) => `rgba(0, 19, 37, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke:  StyleConstants.COLOR_PRIMARY
              }
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chartSec: {
    justifyContent: 'center',
    alignItems: 'center',
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
  }
});
