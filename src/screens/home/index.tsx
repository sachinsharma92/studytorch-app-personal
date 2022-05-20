import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BarchartView from '../../components/home/chart/barchartView'
import PiechartView from '../../components/home/chart/piechartView'
import HomeInfoCard from '../../components/home/homeInfoCard'
import SubText from '../../components/Typography/SubText'
import Title from '../../components/Typography/Title'


const infoCardList = [
	{
		title: '80%',
		subtext: '% Score'
	},
	{
		title: '12.5 Hrs',
		subtext: 'Hours Studies'
	},
	{
		title: '45',
		subtext: 'Notes'
	},
	{
		title: '20',
		subtext: 'Study Groups'
	},
	{
		title: '2',
		subtext: 'Active Quizes'
	},
	{
		title: '5',
		subtext: 'Study Groups'
	}
]
export default function HomeScreen() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<View style={styles.container}>
					<Title style={styles.title1}>Welcome, Ayush</Title>

					<View style={styles.cardSection}>
						{infoCardList.map((item) => (
							<HomeInfoCard title={item.title} subText={item.subtext} />
						))}
					</View>

					<View style={styles.pieCircleChart}>
						<PiechartView />
					</View>

					<View style={styles.barChart}>
						<Title style={styles.title1}>Study Pattern</Title>
						<BarchartView />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	title1: {
		fontSize: 20,
		marginBottom: 20
	},
	container: {
		paddingHorizontal: 20, paddingTop: 40, backgroundColor: 'white', flex: 1,
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
