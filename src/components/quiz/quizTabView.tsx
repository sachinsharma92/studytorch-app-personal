import * as React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { StyleConstants } from '../../styles/style-constants';
import ActiveQuizCard from './activeQuizCard';
import CompletedQuizCard from './completedQuizCard';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const infoCardList = [1, 2, 3, 4,]

const FirstRoute = () => (
  <View style={styles.cardSection}>
    {infoCardList.map(() => (
      <ActiveQuizCard />
    ))}
  </View>
);

const SecondRoute = () => (
  <View style={styles.cardSection}>
    {infoCardList.map(() => (
      <CompletedQuizCard />
    ))}
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function QuizTabView() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Active Quizes (3)' },
    { key: 'second', title: 'Completed Quizes (2)' },
  ]);

  return (
    <View style={styles.cardSection}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        swipeEnabled={false}
        initialLayout={{ width: layout.width, }}
        style={{ height: layout.height }}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicatorStyle}
            tabStyle={{ flex: 1}}
            style={{ backgroundColor:'#F7FAFC', elevation: 0,  width:'100%', borderRadius: 50, }}
            labelStyle={{ color: StyleConstants.COLOR_TEXT, fontFamily: 'Sofia-Pro-Regular', textTransform: 'none', width: '100%', flex: 1 }}
            activeColor={'white'}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardSection: {
    height: '90%',
    paddingTop: 30
  },
  indicatorStyle: {
    backgroundColor: StyleConstants.COLOR_PRIMARY,
    borderRadius: 50,
    height: '100%',
  },
})
