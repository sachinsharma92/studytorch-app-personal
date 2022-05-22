import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Title from '../../Typography/Title';
import { StyleConstants } from '../../../styles/style-constants';
import SubText from '../../Typography/SubText';
import ButtonPrimary from '../../../common/buttonPrimary';
import { ProgressBar } from 'react-native-paper';
import QuizModal from '../quizModal';
import PieChart from 'react-native-pie-chart';

const widthAndHeight = 86
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
interface ActiveQuizCardProps {
  dotHandler?: () => void,
  nameCount?: string,
  plushandler?: () => void,
  circleChartActive?: any,
  label?: string,
  avgMark?: boolean
}

export default function ActiveQuizCard({ dotHandler, nameCount, plushandler, circleChartActive, label="Take Quiz", avgMark }: ActiveQuizCardProps) {
  const [isQuizName, setQuizName] = useState(false);
  const quizNameToggleModal = () => {
    setQuizName(!isQuizName);
  };

  return (
    <>
      <TouchableOpacity onPress={quizNameToggleModal} style={[styles.cardStyle]}>
        <View style={styles.head}>
          <View>
            <Title style={styles.title1}>QUIZ NAME</Title>
            <SubText style={{ color: StyleConstants.COLOR_TEXT, fontSize: 16 }}>Collection name</SubText>
            <SubText>22nd Sep 2021</SubText>
          </View>

          {!circleChartActive ?
            <TouchableOpacity onPress={dotHandler} style={styles.greenBadge}><Title style={{ color: '#4AAE8C', fontSize: 15, lineHeight: 16 }}>In-progress</Title></TouchableOpacity>
            :
            <View style={styles.circleChart}>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                doughnut={true}
                coverRadius={0.85}
              />
              <View style={styles.attendanceStyle}>
                <Title style={{fontSize:16}}>70%</Title>
                <Title style={{fontSize: 10, opacity: 0.7}}>Attendance</Title>
              </View>
            </View>
          }

        </View>

        <View style={styles.takeQuizStyle}>
          {!avgMark ? <View style={{ flex: 1, paddingRight: 30 }}>
            <Title style={styles.parentageText}>30% Complete</Title>
            <ProgressBar progress={0.5} color={'#4AAE8C'} style={{ borderRadius: 10, marginTop: 10, height: 6 }} />
          </View>
          :
          <Title level={3} style={{fontFamily: 'Sofia-Pro-Medium',}}>Avg Marks: <Title level={3} style={{fontFamily: 'Sofia-Pro-Medium', color: 'green'}}>70%</Title></Title>
        }
          <ButtonPrimary buttonStyle={{ minHeight: 40 }} label={label} textStyle={{lineHeight: 20}} />
        </View>
      </TouchableOpacity>
      <QuizModal isVisible={isQuizName} closeHandler={quizNameToggleModal} />
    </>
  )
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
    paddingVertical: 15,
  },
  title1: {
    fontSize: 18,
    marginBottom: 5
  },
  subtext: {
    fontSize: 14,
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  dotButton: {
  },
  tinyLogo: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    zIndex: 1,
  },
  imageStack: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 30,
  },
  count: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: StyleConstants.COLOR_PRIMARY,
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    left: -30,
    zIndex: 1
  },
  curveLines: {
    position: 'absolute',
    right: 0,
    top: 0,
    opacity: 0.7
  },
  formStyle: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20
  },
  takeQuizStyle: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 15,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  greenBadge: {
    borderWidth: 1,
    borderColor: '#4AAE8C',
    backgroundColor: '#EDF7F3',
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  parentageText: {
    fontSize: 14,
    opacity: 1,
    color: '#4AAE8C'
  },
  circleChart: {

  },
  attendanceStyle: {
    position:'absolute',
    top: 25,
    right: 0,
    left: 0,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
  }
})
