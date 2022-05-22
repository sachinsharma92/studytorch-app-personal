import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StyleConstants } from '../../styles/style-constants';
import HomeInfoCard from '../home/homeInfoCard';
import ActiveQuizCard from '../quiz/activeQuizCard';
import Title from '../Typography/Title';

interface ReportComponentProps {
  dotHandler?: any,
  subText?: string,
  title?: string
  cardHandler?: () => void;
}

const infoCardList = [
  {
    title: '24',
    subtext: 'Group Members'
  },
  {
    title: '12',
    subtext: 'Total Collections'
  },
  {
    title: '10',
    subtext: 'Notes'
  },
  {
    title: '12.5 Hrs',
    subtext: 'Group Studied'
  },
]

const quizCardList = [1, 2, 3, 4,]

export default function ReportComponent({ dotHandler, subText, title, cardHandler }: ReportComponentProps) {
  return (
    <>
      {infoCardList.map((item) => (
        <HomeInfoCard
          title={item.title}
          subText={item.subtext}
          cardStyle={{ minWidth: '100%', flexDirection: 'row', }}
          imgStyle={{ marginRight: 20 }}
        />
      ))}

      <View style={{ paddingVertical: 30 }}>
        <Title level={2}>Quiz Reports</Title>
        {quizCardList.map(() => (
          <ActiveQuizCard />
        ))}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_BORDER,
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  title1: {
    fontSize: 16,
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
    backgroundColor: '#FAFAFB',
    borderRadius: 50
  },
  buttonSection: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 30
  },
  editButton: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center'
  },
  readButton: {
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginLeft: 15,
  },
  cardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
})
