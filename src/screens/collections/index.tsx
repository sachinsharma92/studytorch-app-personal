import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CallectionCard from '../../components/collections/callectionCard'
import BarchartView from '../../components/home/chart/barchartView'
import PiechartView from '../../components/home/chart/piechartView'
import SubText from '../../components/Typography/SubText'
import Title from '../../components/Typography/Title'


const infoCardList = [
	{
		title: 'Maths',
		subtext: '20 Notes, 2 quizes'
	},
	{
		title: 'Maths',
		subtext: '20 Notes, 2 quizes'
	},
	{
		title: 'Maths',
		subtext: '20 Notes, 2 quizes'
	},
	{
		title: 'Maths',
		subtext: '20 Notes, 2 quizes'
	},
	{
		title: 'Maths',
		subtext: '20 Notes, 2 quizes'
	},
	{
		title: 'Maths',
		subtext: '20 Notes, 2 quizes'
	},
]
export default function CollectionsScreen() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<View style={styles.container}>
					<Title style={styles.title1}>My Collections</Title>
					<View style={styles.cardSection}>
						{infoCardList.map((item) => (
							<CallectionCard title={item.title} subText={item.subtext} />
						))}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	title1: {
		fontSize: 20,
		marginBottom: 10
	},
	title2: {
		fontSize: 20,
		marginBottom: 5
	},
	container: {
		paddingHorizontal: 20,
		backgroundColor: 'white',
		flex: 1,
		paddingBottom: 100
	},
	cardSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	pieCircleChart: {
		marginVertical: 30
	},
	barChart: {

	}
})
